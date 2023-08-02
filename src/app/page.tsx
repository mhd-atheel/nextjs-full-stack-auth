"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


export default function Home() {
  const router = useRouter()


  return (
    <div className="container md:mx-auto px-4 bg-blend-lighten flex items-center justify-center h-screen flex-col">

      <button onClick={(e) => router.push("/login")} className="bg-orange-500 p-5 rounded-lg" >
        <h1 className="text-center text-white font-bold text-4xl ">HOME</h1></button>

    </div>
  );
}
