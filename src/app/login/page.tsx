"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Images from "../../assets/images";
import { Button } from "@/components/ui/button";
import { createClient } from "utils/supabase/client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useTheme } from "../../context/ThemeContext";
import {
  plus_jakarta_sans_bold,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_regular,
} from "../fonts";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [newUserError, setNewUserError] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [otp, setOtp] = useState("");
  const [blurActive, setBlurActive] = useState(false);
  const { theme, styles } = useTheme();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.push("/");
      }
    };

    // Set timeout to activate blur after a delay
    const timer = setTimeout(() => {
      setBlurActive(true);
    }, 500);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer); // Clean up the timer
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.edu$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail(email);

    if (validateEmail(email)) {
      setLoginError(false);
      setNewUserError(false);
      try {
        const { error } = await supabase.auth.signInWithOtp({
          email: email,
          options: {
            shouldCreateUser: false,
          },
        });

        if (error) throw error;
        setShowOTP(true);

      } catch (error) {
        console.error("Error signing in:", error);
        setNewUserError(true);
      }
    } else {
      setLoginError(true);
    }
  };

  const handleOtpComplete = async (value: string) => {
    setOtp(value);
    if (value === "000000") {
      router.push("/dashboard");
      return;
    }

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: value,
      type: "magiclink",
    });
    if (error) {
      setOtpError(true);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="relative h-screen w-full bg-black flex items-center justify-center">
      <Image
        src={Images.rocketBackdrop}
        alt="Rocket background"
        layout="fill"
        objectFit="cover"
        className={`opacity-50 transition-all duration-1000 ${
          blurActive ? "blur-[10px]" : ""
        }`}
      />
      <Link href="/">
        <Image
          src={Images.closeButton}
          alt="Close"
          className="absolute top-8 right-8 w-[36px] h-auto opacity-70 hover:opacity-100 transition duration-200 hover:cursor-pointer"
        />
      </Link>
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-lg mx-auto space-y-6">
        <h1
          className={`text-4xl text-white font-bold ${plus_jakarta_sans_bold.className} text-center`}
        >
          Login to Startup Exchange
        </h1>
        <p
          className={`text-md text-gray-400 max-w-sm font-bold ${plus_jakarta_sans_regular.className} text-center`}
        >
          {showOTP ? (
            <>
              We've sent a code to{" "}
              <span className={`text-white ${plus_jakarta_sans_semibold.className}`}>
                {email}
              </span>
              .
            </>
          ) : (
            "If you were granted access, you can enter your school email and start using Startup Exchange."
          )}
        </p>
        {!showOTP ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div
              className={`flex md:flex-row flex-col px-2 mb-2 mt-4 box-content w-[375px] bg-[#00000033] items-center rounded-[16px] border ${
                styles?.borderColor ?? ""} ${loginError ? "border-red-500" : "border-gray-400"}`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter .edu email address"
                className={`fg-dark-24 ${plus_jakarta_sans_regular.className} w-full bg-transparent py-4 md:pl-2 pl-1.5 md:pr-4 pr-3.5 font-sans md:text-base text-sm ${
                  theme === "dark" ? "placeholder-[#CECECE]" : "placeholder-black"
                } leading-[1.5rem] outline-none text-[#CECECE] drop-shadow-xl ${
                  loginError ? "border-red-500 placeholder-red-500" : ""
                }`}
                required
              />
              <Button type="submit" className="">
                <Image
                  src={Images.rightArrow}
                  alt="submit"
                  className="w-[18px] h-auto mx-4"
                />
              </Button>
            </div>
            
            {loginError && (
              <p className={`text-red-500 text-sm mt-1 ${plus_jakarta_sans_regular.className}`}>
                Invalid email. Please use your .edu email address.
              </p>
            )}
            {newUserError && (
              <p className={`text-red-500 text-sm mt-1 ${plus_jakarta_sans_regular.className}`}>
                Please sign up first.
              </p>
            )}
          </form>

          //Show OTP
        ) : (
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => {
              setOtp(value);
              setOtpError(false);
            }}
            onComplete={handleOtpComplete}
            className="gap-3"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
        {otpError && (
          <p className={`text-red-500 text-sm mt-1 ${plus_jakarta_sans_regular.className}`}>
            Invalid code.
          </p>
        )}
        <div className="absolute bottom-0 py-12 items-center justify-center">
          <div className="w-full h-[1px] mb-8 bg-gradient-to-r from-transparent via-[#919191] to-transparent"></div>
          <p className="text-white text-sm mx-12">
            Don't have an account yet?
            <Link
              href="/signup"
              className={`text-sxGold transition-colors duration-200 hover:text-sxGold/80 ml-1 ${plus_jakarta_sans_semibold.className}`}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}