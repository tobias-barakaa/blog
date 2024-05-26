import { Button } from "flowbite-react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
// import { navigate } from "@reach/router";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/user.slice";

const Oauth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle, 'what do you want with me');
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error, 'alldjfkdjfk');
    }
  };
  return (
    <div>
      <Button
        type="button"
        gradientDuoTone="pinkToOrange"
        onClick={handleGoogleClick}
        outline={true}
        className="w-full"
      >
        continue with Google
      </Button>
      {/* <AiFillGoogleCircle classNamew-6 r-6 h-6 mr-2 />
      continue with Google */}
    </div>
  );
};

export default Oauth;
