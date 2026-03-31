"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function SaturnityApp() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

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
    }, 40);
    return () => clearInterval(interval);
  };

  if (!isUnlocked) {
    return (
      <main className="flex flex-col items-center justify-center h-screen space-bg">
        <div className="stars" />
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="relative w-32 h-32 flex items-center justify-center rounded-full border border-white/10 backdrop-blur-sm cursor-pointer"
          onPointerDown={handlePointerDown}
          onPointerUp={() => setHoldProgress(0)}
        >
          <div className="absolute inset-0 rounded-full border-2 border-saturn-pink opacity-20" />
          <motion.div 
            className="absolute inset-0 rounded-full border-t-2 border-saturn-pink"
            style={{ rotate: holdProgress * 3.6 }}
          />
          <span className="text-white font-light tracking-[0.2em] uppercase text-xs">Unlock</span>
        </motion.div>
        <p className="mt-6 text-white/40 text-[10px] tracking-widest uppercase italic">Establishing Orbit...</p>
      </main>
    );
  }

  if (isSuccess) {
    return (
      <main className="flex flex-col items-center justify-center h-screen space-bg text-center px-6">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-extralight tracking-tighter text-saturn-pink mb-2">
          "Eternity starts now."
        </motion.h1>
        <p className="text-saturn-blue font-light">See you in our next orbit, Mimaa.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center w-full min-h-screen space-bg py-20 px-6">
      <div className="stars" />
      
      {/* Discord Card - More Realistic */}
      <section className="w-full max-w-[340px] bg-[#111214]/80 backdrop-blur-xl rounded-2xl p-5 border border-white/5 shadow-2xl mb-16">
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">Voice Connected</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-saturn-pink shadow-[0_0_15px_rgba(242,167,202,0.3)]" />
            <p className="text-sm font-medium text-white/90">lanavienrose</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-saturn-blue shadow-[0_0_15px_rgba(143,184,237,0.3)]" />
            <p className="text-sm font-medium text-white/90">peazyqn</p>
          </div>
        </div>
      </section>

      {/* Message Text */}
      <section className="w-full max-w-[340px] space-y-12 mb-20">
        <p className="text-center font-serif italic text-lg text-saturn-pink/80 leading-relaxed">
          "Your voice is the only rhythm I crave, the only high that this heart will save."
        </p>
        <div className="h-[1px] w-12 bg-white/10 mx-auto" />
        <div className="text-xs font-light leading-relaxed text-white/70 space-y-4 text-justify tracking-wide">
          <p>Hi Mimaa,</p>
          <p>I built this because I want this moment to be more than just words. I'm willing to learn any world, as long as I'm doing it for you.</p>
          <p>I don't want to just be your favorite person anymore. I want to be your man, in this life and every other universe. As long as the moon orbits Saturn, I will always love you.</p>
        </div>
      </section>

      {/* The Question */}
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-xl font-extralight tracking-[0.2em] uppercase text-white/50">Will you be my Saturn?</h2>
        <div className="flex flex-col gap-4 w-48">
          <button onClick={() => { setIsSuccess(true); confetti(); }}
            className="py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-saturn-pink hover:text-white transition-all shadow-xl">
            Yes
          </button>
          <button onClick={() => setNoCount(c => c + 1)}
            className="py-3 rounded-full border border-white/10 text-white/30 text-[10px] uppercase tracking-widest">
            {noCount === 0 ? "Not really" : "Are you sure?"}
          </button>
        </div>
      </section>
    </main>
  );
}
