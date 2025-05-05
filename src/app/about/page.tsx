"use client"; // Allows React hooks

import Image from "next/image";  
import Link from "next/link";  

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-2xl text-center mb-6">
  Hi, I&apos;m Luke Gusdorf! This is my personal website where I showcase my projects, ideas, and creativity.
</p>


     

      {/* Second GIF */}
      <Image
        src="/coolGif.gif" // Make sure this file is in `public/`
        alt="Another awesome GIF"
        width={300}
        height={200}
        className="rounded-lg shadow-lg mb-6"
      />

      {/* Back to Home Button */}
      <Link href="/">
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white text-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
