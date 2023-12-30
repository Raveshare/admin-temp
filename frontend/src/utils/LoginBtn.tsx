import { useContext } from "react";
import { AppContext } from "src/context/AppContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "src/firebase";
import { Button } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import React from "react";
import { fnCheckWhitelist } from "./fnCheckWhitelist";
const googleAuth = new GoogleAuthProvider();

const LoginBtn = () => {
  const {setUserEmail, setAuthToken, setIsWhitelisted } = useContext(AppContext);

  const fnLogin = async () => {

    const result = await signInWithPopup(auth, googleAuth);

    console.log("In LoginFn", result.user.email);
    setUserEmail(result.user.email ?? "");
    
    const resWL = await fnCheckWhitelist(result.user.email ?? "");
    localStorage.setItem("jwt", resWL?.token);
    setIsWhitelisted(resWL?.whitelisted);
    setAuthToken(resWL?.token);
  
  }


  return (
    <div className="pt-32 flex flex-row align-middle justify-center">
      <Button
        variant="light"
        size="compact-lg"
        leftSection={<IconBrandGoogle size={24} />}
        onClick={() => fnLogin()}
      >
        Login with Google
      </Button>
    </div>
  );
};

export default LoginBtn;