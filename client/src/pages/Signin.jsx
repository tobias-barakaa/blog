import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { signInFailure, signInSuccess, signInstart } from "../redux/user/user.slice";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading, error:errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })

  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      return dispatch(signInFailure('All fields are required'))
    }
    try {
      dispatch(signInstart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      })
      setFormData("")
      const data = await res.json();
      if(data.success === false) {
        dispatch(signInFailure(data.message));
        
      }
      
      if(res.ok) {
        dispatch(signInSuccess(data))
        navigate('/')
      }
      
    } catch (error) {
      dispatch(signInFailure(error.message))
    }

  }
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
         
        </p>

     </div>
     <div className="flex-1">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
       

        <div className="flex-1">
          <Label value="Your email" />
          <TextInput type="email" placeholder="email" id="email"
          onChange={handleChange}
          />
        </div>

        <div className="">
          <Label value="Your Password" />
          <TextInput type="password" placeholder="password" id="password"
          onChange={handleChange} />
        </div>
        <Button gradientDuoTone="purpleToBlue" type="submit"
        disabled={loading}>
          {loading ? (
          <>
          <Spinner size='sm' />
          <span className="pl-3">Loading...</span>
          </>
        ) : 'Sign Up'}
          Sign Up
        </Button>

      </form>
      <div className="flex gap-2 text-sm mt-5">
        <span>Dont have an account</span>
        <Link to="/sign-up" className="text-blue-500">Sign Up</Link>
      </div>
      {
        errorMessage && (
          <Alert className="text-red-500 mt-4">
            {errorMessage}
          </Alert>
        )
      
      }
     </div>
      {/* <div className=""></div> */}


    </div>
    </div>
   
  )
}

export default Signin
