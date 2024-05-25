import { Button } from "flowbite-react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";

const Oauth = () => {
    const handleGoogleClick = async() => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            console.log(resultsFromGoogle);
        } catch (error) {
            console.log(error)
        } 
    }
  return (
    <div>
      <Button type="button" gradientDuoTone='pinkToOrange'
      onClick={handleGoogleClick}
      outline={true} className="w-full">continue with Google</Button>
      {/* <AiFillGoogleCircle classNamew-6 r-6 h-6 mr-2 />
      continue with Google */}
    </div>
  )
}

export default Oauth
