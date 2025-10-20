"use client";

import { useEffect, useState } from "react";
import Character from "./character";

const API_BASE_URL = "https://thesimpsonsapi.com/api";

export default function SimpsonsPage() {
  const [index, setIndex] = useState(1);
  //   const listOfUrls = [];

  //   for (let i = 1; i <= 100; i++) {
  //     listOfUrls.push();
  //   }

  const incButtonHandler = () => {
    setIndex(prev => Math.min(prev + 1, 1182));
  }

  const decButtonHandler = () => {
    setIndex(prev => Math.max(prev - 1, 1));
  }

  return (
    <div className="flex flex-col gap-4 bg-blue-100 h-screen p-8">
      <div className="flex gap-4">
        <input
          type="number"
          min="1"
          max="1182"
          value={index}
          className="border text-5xl text-center font-bold text-amber-800 bg-amber-100 h-24 p-2 w-52"
          onChange={(e) => {
            setIndex(Number(e.target.value));
          }}
        />
        <div className="flex flex-col gap-4">
          <button className="bg-amber-700 h-10 w-10 rounded-full"
          onClick={incButtonHandler}>
            👆
          </button>
          <button className="bg-amber-700 h-10 w-10 rounded-full"
          onClick={decButtonHandler}>
            👇
          </button>
        </div>
      </div>
      <Character url={`${API_BASE_URL}/characters/${index}`}></Character>
    </div>
  );
}