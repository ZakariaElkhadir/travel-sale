"use client"

import Image from "next/image"
import { ArrowRight, Plane, MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="relative h-screen overflow-x-hidden bg-blue-50">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-1/2 h-[25rem] bg-gradient-to-br from-blue-400 to-indigo-500 z-0 rounded-bl-4xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-40 left-10 w-32 h-32 rounded-full bg-cyan-400 opacity-20 blur-xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-indigo-500 opacity-20 blur-xl"
      />

      <div className="relative z-10">
        <header className="flex flex-col md:flex-row justify-center items-center p-4">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0 md:absolute md:left-4 text-black font-bold text-2xl"
          >
            <span className="text-indigo-600">Travel</span>Sale
          </motion.h1>

          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-grow flex justify-center"
          >
            <ul className="flex p-3 bg-gradient-to-r from-indigo-600 to-blue-500 space-x-6 rounded-full shadow-lg">
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href="#" className="font-medium text-white">
                  Home
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href="#" className="font-medium text-white">
                  About
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href="#" className="font-medium text-white">
                  Booking
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href="#" className="font-medium text-white">
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        </header>

        <main className="pt-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 ml-10">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="space-y-6 flex flex-col justify-center items-start"
            >
              <motion.div variants={slideIn}>
                <h2 className="text-6xl">
                  <span className="font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                    DISCOVER
                  </span>
                  <br />
                  <span className="relative">
                    WORLDWIDE
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="absolute -bottom-2 left-0 h-1 bg-cyan-400"
                    />
                  </span>
                </h2>
              </motion.div>

              <motion.p variants={fadeIn} className="text-lg w-3/4 text-gray-700">
                Explore the world with our exclusive travel deals. Book your next adventure today!
              </motion.p>

              <motion.div variants={fadeIn} className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white p-2 px-6 rounded-full font-medium shadow-md flex items-center space-x-2"
                >
                  <span>Book Now</span>
                  <Plane size={16} className="inline-block ml-2" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white p-2 px-6 rounded-full font-medium shadow-md"
                >
                  Learn More
                </motion.button>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center space-x-4 mt-8 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={16} className="text-indigo-600 mr-1" />
                  <span>100+ Destinations</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="text-blue-500 mr-1" />
                  <span>Flexible Booking</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative z-10"
              >
                <Image src="/hero.png" alt="Travel" width={800} height={800} className="rounded-2xl shadow-xl" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-80 z-0"
              />

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-10 -right-5 w-20 h-20 bg-cyan-400 rounded-full opacity-70 z-0"
              />
            </motion.div>
          </div>
        </main>
      </div>

      {/* Improved Promotional Banner - Fixed at the bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 w-full z-50"
      >
        <div className="relative flex flex-row overflow-hidden shadow-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-400">
          {/* Left discount section */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative w-1/4 p-6 flex flex-col justify-center">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" },
                scale: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
              }}
              className="absolute -top-20 -left-20 w-48 h-48 bg-indigo-700 rounded-full opacity-70"
            />
            <div className="relative">
              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="text-black font-bold"
              >
                <span className="block text-5xl text-white">20%</span>
                <span className="block text-xl uppercase text-white">OFF</span>
              </motion.h2>
              <p className="mt-4 text-sm text-white">
                Enter Voucher Code:{" "}
                <span className="font-bold bg-white text-indigo-600 px-2 py-1 rounded">Traveler12</span>
              </p>
            </div>
          </motion.div>

          {/* Middle content sections */}
          <div className="flex-1 flex">
            {/* Asian section */}
            <motion.div
              whileHover={{
                backgroundColor: "#4338ca",
                color: "white",
              }}
              className="flex-1 bg-indigo-100 p-4 relative transition-colors duration-300"
            >
              <h3 className="text-indigo-800 font-medium mb-2">Asian</h3>
              <p className="text-sm text-gray-700 mb-4">Explore the diverse cultures and landscapes of Asia.</p>
              <motion.div whileHover={{ x: 5 }} className="flex items-center text-indigo-800 font-medium cursor-pointer">
                <span>Read More</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Europe section */}
            <motion.div
              whileHover={{
                backgroundColor: "#3b82f6",
                color: "white",
              }}
              className="flex-1 bg-blue-100 p-4 relative transition-colors duration-300"
            >
              <h3 className="text-blue-800 font-medium mb-2">Europe</h3>
              <p className="text-sm text-gray-700 mb-4">Experience the rich history and vibrant cultures of Europe.</p>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-blue-800 font-medium cursor-pointer"
              >
                <span>Read More</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Book Now section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 flex flex-col justify-between p-4 bg-gradient-to-br from-blue-50 to-indigo-100 transition-all duration-300"
            >
              <div>
                <h3 className="text-indigo-600 font-medium mb-2">BOOK NOW</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Discover the natural wonders and urban landscapes of America.
                </p>
              </div>
              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-lg"
                >
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}