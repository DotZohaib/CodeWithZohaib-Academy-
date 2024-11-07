"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { div } from "framer-motion/client";
import Boxes from '../components/Boxes'
import Card from "@/components/Card";
import Chatbot from "../components/Chatbot";

export default function HomePage() {
  const handleBuyNow = () => {
    toast.success("Open My PortFolio Please wait...");
  };

  const handleAddToCart = () => {
    toast.success("Welcome to the Basic Course!");
  };

  useEffect(() => {
    const typed = new Typed("#element", {
     strings: [
          "Full Stack Dev",
          "HTML ",
          "CSS ",
          "JavaScript",
          "TypeScript",
          "Tailwind CSS ",
          "React.js",
          "Next.js",
          "Angular.js ",
          "Node.js ",
          "Express.js",
          "Mongoose ",
          "MongoDB",
          "Python - Django, Flask",
          "Vite.js ",
          "Ethical Hacking ",
          "Java",
          "Machine Learning ",
          "Deep Learning ",
          "EJS",
          "C++ ",
          "C ",
          "PHP ",
          "API",
        ],
        
        
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      
    <div className=" ">
      <Head>
        <title>CodeWithZOHAIB</title>
        <meta
          name="description"
          content="Learn web development and other software skills with Zohaib."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      {/* Hero Section */}
      {/* <div className="flex items-center justify-end md:p-7 p-2">
        <div>
          <ModeToggle />
        </div>
      </div> */}
      <main className=" flex items-center justify-center">
        <div className="container md:w-[80vw] w-[100vw]  mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left space-y-4"
            >
              {/* <h1 className="text-5xl font-extrabold text-black animate-pulse">
                Hy, I’m <span className="text-pink-700">Zohaib</span>
              </h1> */}
              <p className="text-3xl font-semibold ">
                Welcome to{" "}
                <span className="text-pink-700 ">CodeWithZOHAIB</span>
              </p>
              <p>
              Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Zohaib is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
              </p>
              <h4 className="md:text-3xl text-2xl text-green-700 -ml-5 md:ml-0 -mr-5 md:mr-0 mt-4">
                Learn:{" "}
                <span className="font-bold text-pink-700" id="element"></span>
                <span className="typed-cursor typed-cursor--blink">|</span>
              </h4>
              <div className="flex space-x-4">
                <Link
                  href="https://dot-zohaib-code.vercel.app/"
                  onClick={handleBuyNow}
                  className="relative inline-block px-3 py-1 md:px-8 md:py-3 font-semibold bg-pink-700 text-white rounded-lg"
                >
                  <span className="absolute top-0  left-0 w-full h-full bg-white opacity-10 rounded-lg"></span>
                  <span className="relative  z-10">My PortFolio</span>
                </Link>
                  <Link
                  href="/Html"
                  onClick={handleAddToCart}
                  className="relative inline-block px-3 py-1 md:px-8 md:py-3 font-semibold text-pink-700 border-pink-700 border bg-white rounded-lg"
                >
                  <span className="absolute  top-0 left-0 w-full h-full bg-white opacity-10 rounded-lg"></span>
                  <span className="relative  z-10">Get Started</span>
                </Link>
              </div>
            </motion.div>
            <div className="logo ml-0 md:ml-6 mb-8 md:mb-0 ">
              <Image
                src="/Facehfjdh.png"
                alt="Logo"
                width={600}
                height={400}
                className="rounded "
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    <Boxes/>
    <Card/>
    <Chatbot/>
    </div>
  );
}
