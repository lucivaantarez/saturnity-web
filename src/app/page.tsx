"use client";

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function SaturnityApp() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fungsi untuk layar pembuka (Hold to Unlock)
  const handlePointerDown = () => {
    const interval = setInterval(() => {
      setHoldProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUnlocked(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  };

  const handlePointerUp = () => {
    if (holdProgress < 100) setHoldProgress(0);
  };

  // Fungsi tombol "NO" yang menyebalkan
  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const getNoButtonText = () => {
    if (noCount === 0) return "not really";
    if (noCount === 1) return "are u sure babe?";
    if (noCount === 2) return "Turbulence detected! click the pink planet!";
    return "Mayday! Mayday! Critical error! Gravity error! (just click yes pls)";
  };

  // Fungsi saat Mimaa klik "YES"
  const handleYesClick = () => {
    setIsSuccess(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f2a7ca", "#8fb8ed"],
    });
  };

  // Jika belum dibuka, tampilkan Gateway
  if (!isUnlocked) {
    return (
      <main className="flex flex-col items-center justify-center h-[100dvh] relative overflow-hidden bg-space-gradient px-4 text-center">
        <h1 className="text-saturn-blue text-sm tracking-widest mb-12 animate-pulse">
          Establishing connection to Saturnity...
        </h1>
        
        <div 
          className="relative w-40 h-40 flex items-center justify-center rounded-full border border-saturn-pink/30 cursor-pointer"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Cincin Saturnus yang menyelaraskan */}
          <motion.div 
            className="absolute inset-0 rounded-full border-t-2 border-saturn-pink"
            style={{ rotate: holdProgress * 3.6 }}
          />
          <span className="text-saturn-pink font-bold">Hold</span>
        </div>

        <p className="mt-8 text-saturn-blue/70 text-xs">
          [ Press and hold to align our orbit ]
        </p>
        <p className="mt-2 text-saturn-pink text-sm font-mono">
          {holdProgress}%
        </p>
      </main>
    );
  }

  // Jika sukses (Mimaa klik YES)
  if (isSuccess) {
    return (
      <main className="flex flex-col items-center justify-center h-[100dvh] bg-space-gradient text-center px-6">
        <motion.h1 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-saturn-pink mb-4"
        >
          HAHAHHAHAHA I KNOW U WILL SAY YES!!!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-saturn-blue"
        >
          HI GIRLFRIEND AIJSHXHDHHAHSJSJAJSHS
        </motion.p>
      </main>
    );
  }

  // Konten Utama Website
  return (
    <main className="flex flex-col items-center w-full min-h-[100dvh] bg-space-gradient pb-32">
      
      {/* SECTION: GENESIS (DISCORD) */}
      <section className="w-full max-w-md mt-20 px-6 mb-24">
        <div className="bg-[#1e1f22] rounded-xl p-4 shadow-2xl border border-white/5">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm font-medium">Voice Connected</span>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Avatar lanavienrose (Kamu - Pink) */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-saturn-pink ring-2 ring-green-500" />
              <div>
                <p className="text-saturn-pink font-semibold">lanavienrose</p>
                <p className="text-xs text-gray-400">In Voice Channel</p>
              </div>
            </div>

            {/* Avatar peazyqn (Dia - Biru) */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-saturn-blue ring-2 ring-green-500" />
              <div>
                <p className="text-saturn-blue font-semibold">peazyqn</p>
                <p className="text-xs text-gray-400">In Voice Channel</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-saturn-blue/80 mt-6 italic">
          "you can say that now i got addicted to your voice cuz u were cute, warm, calm like uhhhh i'm gonna make u mine forever HAHAHHAHA"
        </p>
      </section>

      {/* SECTION: THE MONOLOGUE (PUISI & SURAT) */}
      <section className="w-full max-w-md px-6 mb-32 flex flex-col gap-12">
        {/* Poem */}
        <div className="text-center space-y-4 font-serif italic text-lg text-saturn-pink/90">
          <p>In a symphony of infinite melodies,</p>
          <p>Your voice is the only rhythm I crave.</p>
          <p>A drug that exists in no other universe,</p>
          <p>The only high that this heart will save.</p>
        </div>

        {/* Letter */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-saturn-blue/20 text-white/90 text-sm leading-relaxed space-y-4">
          <p className="text-saturn-blue font-bold text-lg">Hi, Hola Mimaa,</p>
          <p>
            I could have kept it simple, but I didn't—you know I like to go the extra mile to make this moment special. I want this to be memorable, to create something you’d never forget. I built this to show you—I’m willing to learn anything and explore any new world, as long as I’m doing it for you. XD
          </p>
          <p>
            Since those mornings on Discord, thanks to Saken and I accidentally met you, I still can't imagine and believe how far we've become. I don't want to just be your favourite person, not anymore. I want more—I want you to be mine. I want to be your man in anything and everything, not just in this life but every other life in every possible universe. As long as the moon orbits Saturn, I will always love you, to the moon and to saturn in eternity, Saturnity.
          </p>
        </div>
      </section>

      {/* SECTION: EXECUTION (THE QUESTION) */}
      <section className="w-full max-w-md px-6 flex flex-col items-center justify-center relative min-h-[40vh]">
        <h2 className="text-2xl font-bold text-saturn-blue mb-12 text-center">
          so ... will u be my saturn?
        </h2>

        <div className="flex flex-col gap-6 w-full items-center relative">
          <button 
            onClick={handleYesClick}
            className="w-48 py-4 rounded-full bg-saturn-pink text-white font-bold shadow-[0_0_30px_rgba(242,167,202,0.5)] transform hover:scale-105 transition-all z-10"
          >
            yes
          </button>

          {noCount < 3 && (
            <motion.button 
              onClick={handleNoClick}
              animate={noCount > 0 ? { 
                x: [0, -10, 10, -10, 10, 0],
                y: noCount === 2 ? 50 : 0
              } : {}}
              transition={{ duration: 0.4 }}
              className="w-48 py-4 rounded-full bg-saturn-blue/20 border border-saturn-blue text-saturn-blue text-sm font-medium"
            >
              {getNoButtonText()}
            </motion.button>
          )}

          {noCount >= 3 && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-red-400 absolute bottom-[-40px]"
            >
              {getNoButtonText()}
            </motion.p>
          )}
        </div>
      </section>

    </main>
  );
}
