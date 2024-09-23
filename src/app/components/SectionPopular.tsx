"use client"

import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";

export const SectionPopular = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
            alt: "Mountain landscape",
            name: "Mountains"
        },
        // {
        //     src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
        //     alt: "Forest path",
        //     name: "Forests"
        // },
        // {
        //     src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
        //     alt: "Beach sunset",
        //     name: "Beaches"
        // },
        // {
        //     src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=400&fit=crop",
        //     alt: "City skyline",
        //     name: "Cities"
        // }
    ]
    return (
        <section className="relative">
            <div
                className="min-h-screen bg-cover bg-center bg-fixed group"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-photo/angkor-wat-cambodia_1122-2593.jpg?t=st=1726903920~exp=1726907520~hmac=a65fd499352df595af094f7bb0525af2f3c96de60fcc3f56620be4e26090c370&w=1380')",
                }}
            >
                <div className="inset-0 min-h-screen blur-none bg-black bg-opacity-80 relative">
                    <div className="container mx-auto px-4 py-24 h-screen flex items-center">
                        <div className="flex justify-between items-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                // className="lg:w-1/2 grid grid-cols-2 gap-4"
                            >
                                {images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative overflow-hidden rounded-lg shadow-lg"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-auto"
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-center p-4 z-20"
                                            initial={{ opacity: 0.7 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            <p className="text-white text-xl font-semibold">{img.name}</p>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-white"
                            >
                                <div className="w-12 h-12 mb-6">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                        <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
                                    </svg>
                                </div>
                                <h1 className="text-4xl font-bold mb-4">Discover Your Next Adventure with Our Popular Trips</h1>
                                <p className="text-xl mb-6">
                                    Explore our curated selection of exciting trips and book your dream adventure today.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}