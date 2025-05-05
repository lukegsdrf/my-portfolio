"use client"; // Enables React hooks

import { useRef, useState } from "react";
import Link from "next/link";

export default function DrawPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [size, setSize] = useState(5);
  const [prompt, setPrompt] = useState("Click 'Random Prompt' for a drawing idea!");

  const prompts = [
    "Draw a bug",
    "Sketch your favorite food",
    "Write your name backwards",
    "Draw a self-portrait",
    "Draw a fish",
    "Draw a perfect cirlce",
    "Draw your favorite movie character",
    "Draw your favorite emoji",
  ];

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  const startDrawing = () => setIsDrawing(true);
  const stopDrawing = () => {
    setIsDrawing(false);
    canvasRef.current?.getContext("2d")?.beginPath();
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Draw Something!</h1>

      {/* Drawing Prompt */}
      <div className="text-center mb-4 bg-gray-800 p-4 rounded-lg shadow-lg w-2/3">
        <p className="text-lg font-semibold">{prompt}</p>
        <button
          onClick={generatePrompt}
          className="mt-2 px-4 py-2 bg-purple-500 hover:bg-purple-700 rounded-lg text-white text-lg"
        >
          Random Prompt
        </button>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-4">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 border rounded-lg"
        />
        <input
          type="range"
          min="1"
          max="20"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-32"
        />
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
        >
          Clear Canvas
        </button>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="border-2 border-white rounded-lg shadow-lg"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onMouseMove={draw}
      />

      {/* Return Home Button */}
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-green-500 hover:bg-green-700 rounded-lg text-white text-lg">
          Return Home
        </button>
      </Link>
    </div>
  );
}
