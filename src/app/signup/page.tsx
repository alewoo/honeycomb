"use client";

import Image from 'next/image';
import Link from 'next/link';
import Images from '../../assets/images';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter } from 'next/navigation';
import { createClient } from 'utils/supabase/client'

import {
  plus_jakarta_sans_bold,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_regular
} from '../fonts';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [databaseError, setDatabaseError] = useState(false);
  const { theme, styles } = useTheme();
  const [blurActive, setBlurActive] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurActive(true);
    }, 500);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.edu$/;
    return regex.test(email);
  };

  const handleEmailSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const email = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(email);
    if (regex.test(email)) {
      if (validateEmail(email)) {
        setSignupError(false);
        setShowPasswordField(true);
      } else {
        setSignupError(true);
        setShowPasswordField(false);
      }
    } else {
      setShowPasswordField(false);
      setSignupError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Insert the user into the users table in the auth schema
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) throw error;
      setDatabaseError(false);
      // If successful, send and show OTP
      try {
        const { error } = await supabase.auth.signInWithOtp({
          email: email,
          options: {
            shouldCreateUser: false,
          },
        });

        if (error) throw error;

        setShowOTP(true);
        setOtpError(false);
      } catch (error) {
        console.error('Error sending OTP:', error);
        setOtpError(true);
      }
    } catch (error) {
      console.error('Error inserting user:', error);
      setDatabaseError(true);
    }
  }

  const handleOtpComplete = async (value: string) => {
    setOtp(value);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: value,
        type: 'magiclink', // Specify the OTP type, could be 'email' or 'magiclink'
      });

      if (error && value !== '000000') throw error;

      // If successful, redirect to dashboard
      router.push('/dashboard');

    } catch (error) {
      console.error('Error validating user:', error);
      setOtpError(true);
    }
  };

  return (
    <div className="relative h-screen w-full bg-black flex items-center justify-center">
      <Image
        src={Images.rocketBackdrop}
        alt="Rocket background"
        layout="fill"
        objectFit="cover"
        className={`opacity-50 transition-all duration-1000 ${blurActive ? 'blur-[10px]' : ''}`}
      />
      <Link href="/">
        <Image src={Images.closeButton} alt="Close" className="absolute top-8 right-8 w-[36px] h-auto opacity-70 hover:opacity-100 transition duration-200 hover:cursor-pointer" />
      </Link>
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-lg mx-auto space-y-6">
        <h1 className={`text-4xl text-white font-bold ${plus_jakarta_sans_bold.className} text-center`}>Create new account</h1>
        <p className={`text-md text-gray-400 max-w-sm font-bold ${plus_jakarta_sans_regular.className} text-center`}>
          {showOTP 
            ? (
              <>
                We've sent a code to{' '}
                <span className={`text-white ${plus_jakarta_sans_semibold.className}`}>
                  {email}
                </span>
                .
              </>
            )
            : "Please use your school email (.edu) to create your Startup Exchange account."}
        </p>
        {!showOTP ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div
              className={`flex md:flex-row flex-col px-2 mb-2 mt-4 box-content w-[375px] bg-[#00000033] items-center rounded-[16px] border ${styles.borderColor} ${signupError ? "border-red-500" : "border-gray-400"}`}
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailSubmit}
                placeholder="Enter .edu email address"
                className={`fg-dark-24 ${plus_jakarta_sans_regular.className} w-full bg-transparent py-4 md:pl-2 pl-1.5 md:pr-4 pr-3.5 font-sans md:text-base text-sm ${theme === 'dark' ? 'placeholder-[#CECECE]' : 'placeholder-black'} leading-[1.5rem] outline-none text-[#CECECE] drop-shadow-xl ${signupError ? "border-red-500 placeholder-red-500" : ""}`}
                required
              />

            </div>
            {showPasswordField && (
              <div
                className={`flex md:flex-row flex-col px-2 mb-2 mt-4 box-content w-[375px] bg-[#00000033] items-center rounded-[16px] border ${styles.borderColor} ${signupError ? "border-red-500" : "border-gray-400"}`}
              >
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`fg-dark-24 ${plus_jakarta_sans_regular.className} w-full bg-transparent py-4 md:pl-2 pl-1.5 md:pr-4 pr-3.5 font-sans md:text-base text-sm ${theme === 'dark' ? 'placeholder-[#CECECE]' : 'placeholder-black'} leading-[1.5rem] outline-none text-[#CECECE] drop-shadow-xl ${signupError ? "border-red-500 placeholder-red-500" : ""}`}
                  required
                />
                <Button type="submit" className=''>
                  <Image src={Images.rightArrow} alt="submit" className="w-[18px] h-auto mx-4" />
                </Button>
              </div>
            )}

            {signupError && (
              <p className={`text-red-500 text-sm mt-1 ${plus_jakarta_sans_regular.className}`}>
                Invalid email. Please use your .edu email address.
              </p>
            )}
          </form>
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
            Invalid code. Please use 000000 for testing.
          </p>
        )}
        {databaseError && (
          <p className={`text-red-500 text-sm mt-1 ${plus_jakarta_sans_regular.className}`}>
            Error creating account. Please try again.
          </p>
        )}
        <div className='absolute bottom-0 py-12 items-center justify-center'>
          <div className="w-full h-[1px] mb-8 bg-gradient-to-r from-transparent via-[#919191] to-transparent"></div>
          <p className='text-white text-sm mx-12'>
            Already have an account?
            <Link href="/login" className={`text-sxGold transition-colors duration-200 hover:text-sxGold/80 ml-1 ${plus_jakarta_sans_semibold.className}`}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}