"use client"; // Allows React hooks

import Image from "next/image";
import Link from "next/link"; // Import Link component for navigation

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-900 text-white">
      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4 flex gap-4">
        <Link href="/about">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white text-lg">
            About Me
          </button>
        </Link>

        <Link href="/draw">
          <button className="px-4 py-2 bg-green-500 hover:bg-green-700 rounded-lg text-white text-lg">
            Draw Something!
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Hi, my name is Luke Gusdorf</h1>

      {/* GIF */}
      <Image
        src="/myGif.gif"
        alt="A cool GIF"
        width={300}
        height={200}
        className="rounded-lg shadow-lg mb-6"
      />
    </div>
  );
}
