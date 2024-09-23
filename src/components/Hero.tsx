import { Button } from "@nextui-org/react"
import { useState } from "react";

export const Hero = () => {
    const [scrollY] = useState(0);
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80')",
                    filter: "blur(8px)",
                    transform: `translateY(${scrollY * 0.5}px)`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/70 to-emerald-900/70 z-10"></div>
            <main className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Discover Your Next Adventure with Us
                </h1>
                <p className="text-xl mb-8">
                    Explore breathtaking destinations and book your dream trip today.
                </p>
                <div className="space-x-4">
                    <Button color="primary" size="lg" variant="solid" radius="full" className="transition-all w-24 font-semibold bg-white text-green-800">Join</Button>
                    <Button color="secondary" size="lg" variant="bordered" radius="full" className="transition-all w-40 font-semibold">Learn More</Button>
                </div>
            </main>
        </section>
    )
}