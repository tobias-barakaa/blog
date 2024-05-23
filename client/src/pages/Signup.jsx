import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
      <div className="">
      <Link to="/" className="
        
         font-bold
         dard:text-white
         text-4xl 
         ">
        
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white">Tobiland</span>
            Blog
        </Link>
        <p className="text-sm mt-5">
          This is a demo project, you can sign up with your email and password or 
          with google
        </p>

     </div>
     <div className="flex-1">
      <form className="flex flex-col gap-4">
        <div className="">
          <Label value="Your username" />
          <TextInput type="text" placeholder="username" id="username" />
        </div>

        <div className="flex-1">
          <Label value="Your email" />
          <TextInput type="text" placeholder="email" id="email" />
        </div>

        <div className="">
          <Label value="Your Password" />
          <TextInput type="text" placeholder="password" id="password" />
        </div>
        <Button gradientDuoTone="purpleToBlue" type="submit" pill>
          Sign Up
        </Button>

      </form>
      <div className="flex gap-2 text-sm mt-5">
        <span>Have an account?</span>
        <Link to="/sign-in" className="text-blue-500">Sign In</Link>
      </div>
     </div>
      {/* <div className=""></div> */}


    </div>
    </div>
   
  )
}

export default Signup
