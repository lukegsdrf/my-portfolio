"use client"; // Allows React hooks

import Image from "next/image";
import Link from "next/link"; // Import Link component for navigation

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-900 text-white">
      {/* Navigation Button to About Page */}
      <Link href="/about">
        <button className="absolute top-4 left-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white text-lg">
          About Me
        </button>
      </Link>

      <h1 className="text-4xl font-bold mb-4">Hi, my name is Luke Gusdorf</h1>

      {/* GIF */}
      <Image
        src="/myGif.gif"
        alt="A cool GIF"
        width={300}
        height={200}
        className="rounded-lg shadow-lg mb-6"
      />

      {/* Simple Click Game */}
      <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Click the button to increase your score!</h2>
        <p className="text-2xl font-bold">0</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 transition rounded-lg text-lg font-medium"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}
