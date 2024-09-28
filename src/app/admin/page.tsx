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

import {
    plus_jakarta_sans_bold,
    plus_jakarta_sans_semibold,
    plus_jakarta_sans_regular
  } from '../fonts';
  
export default function LoginPage() {
  
  const router = useRouter();

  return (
    <>
    </>
  );
}