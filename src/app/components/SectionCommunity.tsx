"use client"

import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { Footer } from "@/components/Footer";

export const SectionCommunity = () => {
    return (
        <section className="relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747328.jpg?t=st=1726932305~exp=1726935905~hmac=d3c9a3d86692a4c50d750a1b7554a7dac80352dd2f9528c0aa60f672e16d727b&w=1380')",
                    filter: "blur(8px)",
                    transform: "scale(1.1)"
                }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="container min-h-full mx-auto px-4 py-24 flex items-center justify-center text-center relative z-10">
                <article>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white"
                    >
                        <div className="flex justify-center">
                            <div className="w-24 h-24 mb-6">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold mb-0">Join our travel community today!</h1>
                        <p className="text-xl mb-6">
                            Discover amazing adventures, create content, and book your next trip.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <motion.div
                            className="relative overflow-hidden space-x-4"
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            {/* <Button color="primary" size="lg" variant="solid" radius="full" className="transition-all w-28 font-semibold bg-white text-green-800">Sign Up</Button> */}
                            <Button color="secondary" size="lg" variant="bordered" radius="full" className="transition-all w-40 font-semibold">Sign Up</Button>
                        </motion.div>
                    </motion.div>
                </article>
            </div>
            <Footer/>
        </section>
    )
}