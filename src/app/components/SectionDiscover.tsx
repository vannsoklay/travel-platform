"use client"

import { motion } from "framer-motion";
import { Avatar, Button, Image } from "@nextui-org/react";

export const SectionDiscover = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
            alt: "Mountain landscape",
            name: "Mountains"
        },
        {
            src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
            alt: "Forest path",
            name: "Forests"
        },
        {
            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
            alt: "Beach sunset",
            name: "Beaches"
        },
        {
            src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=400&fit=crop",
            alt: "City skyline",
            name: "Cities"
        }
    ]

    const discovers = [
        {
            "title": "Create Engaging Content",
            "desc": "Share your travel experiences through stunning videos and images, inspiring others to explore the world."
        },
        {
            "title": "Book Unforgettable Trips",
            "desc": "Discover and book incredible adventures, from thrilling hikes to relaxing beach getaways."
        },
        {
            "title": "Connect with Traveller",
            "desc": "Join like-minded travelers, share tips, and find inspiration for your next journey."
        }
    ]
    return (
        <section className="relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-photo/green-plane-ecofriendly-environment_23-2151582609.jpg?t=st=1726902420~exp=1726906020~hmac=fb1c2e301e8489aa039532efeb4ec861883c63cfbc38150aac32a13fb2a60fed&w=1380')",
                    filter: "blur(8px)",
                    transform: "scale(1.1)"
                }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="container min-h-screen mx-auto px-4 py-24 flex items-center justify-center text-center relative z-10">
                <div className="space-y-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white w-1/3"
                    >
                        <h1 className="text-4xl font-bold mb-0 text-left">Unlock Your Travel Adventures with Our Platform</h1>
                        {/* <p className="text-xl mb-6">
                            Create captivating content, book exciting trips, and connect with travel communities all in one place. Join our platform and embark on a journey like no other.
                        </p> */}
                    </motion.div>
                    <article className="grid grid-cols-3 gap-8">
                        {discovers.map((item, idx: number) =>
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-white text-left"
                            >
                                <div className="flex justify-start">
                                    <div className="w-24 h-24 mb-4">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                            <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                                <p className="text-xl">
                                    {item.desc}
                                </p>
                            </motion.div>
                        )}</article>
                </div>

            </div>
        </section>
    )
}