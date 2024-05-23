import { Footer as FlowbiteFooter } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs';


const Footer = () => {
    return (
        <FlowbiteFooter container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between 
                sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                    <Link to="/" className="self-center
         whitespace-nowrap text-sm sm:text-xl
         font-semibold
         dard:text-white hover:text-gray-300">
        
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white">Tobiland</span>
        </Link> 
                    </div> 
                    <div className='grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 
                    sm:gap-6'>
                        <div className=''>
                        <FlowbiteFooter.Title title='About' />
                        <FlowbiteFooter.LinkGroup col>
                            <FlowbiteFooter.Link
                            href="https://www.100jsprojects.com"
                            target="_blank"
                            rel='noopener noreferrer'
                            >
                               100 Js projects
                            </FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>

                        <FlowbiteFooter.Title title='About' />
                        <FlowbiteFooter.LinkGroup col>
                            <FlowbiteFooter.Link
                            href="/about"
                            target="_blank"
                            rel='noopener noreferrer'
                            >
                               Tobiland Blog
                            </FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>

                        </div>


                        <div className=''>
                        <FlowbiteFooter.Title title='Follow us' />
                        <FlowbiteFooter.LinkGroup col>
                            <FlowbiteFooter.Link
                            href="https://www.github.com/tobias-barakaa"
                            target="_blank"
                            rel='noopener noreferrer'
                            >
                               Github
                            </FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>

                        <FlowbiteFooter.Title title='About' />
                        <FlowbiteFooter.LinkGroup col>
                            <FlowbiteFooter.Link
                            href="#"
                            target="_blank"
                            rel='noopener noreferrer'
                            >
                               Discord
                            </FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>

                        </div>


                        <div className=''>
                        <FlowbiteFooter.Title title='Legal' />
                        <FlowbiteFooter.LinkGroup col>
                            <FlowbiteFooter.Link
                            href="#"
                            >
                               Privacy Policy
                            </FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>

                        <FlowbiteFooter.Title title='About' />
                        <FlowbiteFooter.LinkGroup col>
                            <FlowbiteFooter.Link
                            href="#"
                            
                            >
                                Terms &amp; conditions
                               
                            </FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>

                        </div>

                        

                        
                    </div>

                </div>
                <FlowbiteFooter.Divider className='my-5' />
                <div className='
                w-full sm:flex-col sm:items-center sm:gap-6
                '>
                    <FlowbiteFooter.Copyright
                    href='#' by='Tobiland' year={new Date().getFullYear()} />
                
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <FlowbiteFooter.Icon href='#' icon={BsFacebook} />
                    <FlowbiteFooter.Icon href='#' icon={BsInstagram} />
                    <FlowbiteFooter.Icon href='#' icon={BsTwitter} />
                    <FlowbiteFooter.Icon href='https://github.com/tobias-barakaa' icon={BsGithub} />
                    <FlowbiteFooter.Icon href='#' icon={BsDribbble} />

                </div>
                </div>
                
            </div>
        </FlowbiteFooter>
    )
}

export default Footer
