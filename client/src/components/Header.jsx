import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state => state.user);
    console.log(currentUser);
  return ( 
    <div>
      <Navbar className="border-b-2">
        <Link to="/" className="self-center
         whitespace-nowrap text-sm sm:text-xl
         font-semibold
         dard:text-white hover:text-gray-300">
        
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white">Tobiland</span>
        </Link>
        <form>
            <TextInput 
            type='text'
            placeholder="search"
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            />
        </form>
        <Button className="w-12 h-10 lg:hidden" color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            {currentUser ? (
                <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                    />
                    
                }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">@{currentUser?.username}</span>
                        <span className="block text-sm
                        font-medium truncate
                        ">@{currentUser?.email}</span>
                        <Link to="/dashboard?tab-profile">
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign Out</Dropdown.Item>

                        
                    </Dropdown.Header>

                </Dropdown>
            ) : (
                <Link to="sign-in">
                    <Button gradientDuoTone='purpleToBlue' outline pill>
                        Sign In
                    </Button>
                </Link>
            )}
       
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'}>
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/dashboard'} as={'div'}>
                <Link to='/projects'>
                    Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
        

      </Navbar>
    </div>
  )
}

export default Header
