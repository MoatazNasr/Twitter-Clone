import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import googleLogo from "public/icons8-google.svg";
import appleLogo from "public/icons8-apple-logo-30.svg";
import twitterLogo from "public/icons8-twitter-48.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TextField } from "@mui/material";
function SigninModal() {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="left-0 top-0 h-full w-full z-[1] absolute bg-white bg-opacity-[0.2] grid place-content-center">
      <div className="w-[43vw] h-[85vh] bg-white rounded-[1rem] relative">
        <div className="flex flex-col items-center text-black">
          <div className=" mb-4">
            <button className="absolute left-4 top-4">
              <XMarkIcon width={21} />
            </button>
            <Image src={twitterLogo} width={45} alt = ""/>
          </div>
          <div className="flex flex-col gap-[1.5rem] text-[0.9rem]">
            <h1 className="text-[2rem] font-bold">Sign in to Twitter</h1>
            <button onClick={() => signIn("google")} className="auth-buttons">
              <Image
                src={googleLogo}
                className=" rounded-full"
                width={22}
                height={22}
                alt = ""
              />
              <span className="ml-2 font-semibold">Sign in with Google</span>
            </button>
            <button onClick={() => signIn("apple")} className="auth-buttons">
              <Image
                src={appleLogo}
                className=" rounded-full "
                width={22}
                height={22}
                alt = ""
              />
              <span className="ml-2 font-semibold">Sign in with Apple</span>
            </button>
            <div className="text-[1.095rem] .or">or</div>
            <TextField label="Phone, email, or username" variant="outlined" />
            <button className="bg-black text-white text-center rounded-[2rem] py-[0.5rem]">
              Next{" "}
            </button>
            <button className="auth-buttons block">Forgot Password? </button>
            <div>
              <span className="text-[#536471]">Dont have an account? </span>
              <button className="text-[#1D9BF0]">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninModal;
