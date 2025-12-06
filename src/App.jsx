import React from "react";
import Navbar from "./components/Navbar";
import SwapModal from "./components/SwapModal";
import { motion } from "framer-motion";
import { Rocket, Zap, Users, Lock, Check } from "lucide-react";

const TapeText = ({ children, rotate, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{ opacity: 1, scale: 1, rotate: rotate }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: delay,
    }}
    whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
    className={`absolute bg-gray-100 border-2 border-black px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] font-marker text-xl md:text-2xl z-10 ${className}`}
  >
    {children}
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/50 rotate-90 blur-[1px]"></div>
    <div className="absolute -top-1 -right-2 w-6 h-3 bg-yellow-200/50 rotate-45 border border-white/40"></div>
  </motion.div>
);

const SectionTitle = ({ children, className }) => (
  <h2
    className={`font-comic text-5xl md:text-7xl mb-12 text-center drop-shadow-[3px_3px_0px_black] stroke-black ${className}`}
    style={{ WebkitTextStroke: "2px black" }}
  >
    {children}
  </h2>
);

const Phase = ({ title, items, delay, rotate }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.02, rotate: 0 }}
    className={`bg-white border-4 border-black p-6 md:p-8 rounded-3xl shadow-[8px_8px_0px_black] transform ${rotate} mb-8 last:mb-0 w-full md:w-[80%] mx-auto hover:z-10 relative`}
  >
    <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-red rounded-full border-4 border-black flex items-center justify-center text-white font-bold text-xl shadow-[2px_2px_0px_black]">
      <Check
        size={24}
        strokeWidth={4}
      />
    </div>
    <h3 className="font-comic text-3xl md:text-4xl mb-4 text-left border-b-2 border-dashed border-gray-300 pb-2">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="font-marker text-xl md:text-2xl flex items-start gap-2 text-gray-800"
        >
          <span className="mt-1.5 w-3 h-3 bg-black rounded-full shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

function App() {
  return (
    <div className="font-body text-gray-900 bg-brand-yellow overflow-x-hidden">
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-[url('/bg-room.png')] md:bg-[url('/bg-room-v2.png')] bg-center bg-no-repeat z-0 bg-[length:auto_70%] md:bg-contain md:bg-[center_bottom]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent h-32"></div>
        </div>

        <Navbar />

        <div className="relative z-10 container mx-auto px-4 flex-grow flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center pt-10 md:pt-20 pb-10">
          <div className="hidden md:flex md:col-span-3 flex-col justify-center items-start space-y-12 h-full pl-10">
            <TapeText
              rotate="-12deg"
              delay={0.5}
              className="bg-blue-100 shadow-lg text-2xl border-4 border-black bottom-1/2"
            >
              Maybe dog.
            </TapeText>
            <TapeText
              rotate="5deg"
              delay={0.8}
              className="bg-green-100 shadow-lg text-2xl border-4 border-black left-8 bottom-1/3"
            >
              Maybe cat.
            </TapeText>
            <TapeText
              rotate="-5deg"
              delay={1.1}
              className="bg-purple-100 shadow-lg text-xl border-4 border-black bottom-1/4"
            >
              Maybe trend.
            </TapeText>
          </div>

          <div className="md:col-span-2 flex flex-col justify-start md:justify-center items-center min-h-[50vh] md:min-h-0">
            <div className="md:hidden flex flex-wrap justify-center gap-4 mb-8 mt-4">
              <div className="bg-white border-2 border-black px-4 py-1 rotate-[-3deg] font-marker shadow-[2px_2px_0px_black]">
                Maybe dog.
              </div>
              <div className="bg-white border-2 border-black px-4 py-1 rotate-[2deg] font-marker shadow-[2px_2px_0px_black]">
                Maybe cat.
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center items-center md:items-end mt-auto md:mt-0 md:h-full">
            <div className="relative z-20 w-full max-w-sm md:mr-10">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <SwapModal />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative bg-white border-t-4 border-black py-20 px-4 overflow-hidden"
      >
        <div className="absolute top-20 right-[-50px] w-40 h-40 bg-brand-blue rounded-full border-4 border-black z-0"></div>
        <div className="absolute bottom-20 left-[-50px] w-40 h-40 bg-brand-red rounded-full border-4 border-black z-0"></div>

        <div className="container mx-auto relative z-10 max-w-5xl">
          <SectionTitle className="text-brand-blue">THE LORE</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-brand-orange border-4 border-black p-2 rounded-3xl transform -rotate-2 shadow-[8px_8px_0px_black]">
                <div className="bg-white border-2 border-black rounded-2xl h-64 md:h-80 flex items-center justify-center overflow-hidden">
                  <img
                    src="/pfp.png"
                    alt="pfp"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-marker text-xl md:text-2xl leading-relaxed text-gray-800 space-y-6"
            >
              <p>
                Born from a glitch in the Solana matrix,{" "}
                <span className="bg-brand-yellow px-1 border border-black transform inline-block rotate-1 shadow-[2px_2px_0px_black]">
                  NotDog
                </span>{" "}
                is legally indistinct.
              </p>
              <p>
                Is he a dog? A cat? A very hairy person in a suit? The devs
                don't know. The chart doesn't care. The only thing that matters
                is that he's here, and he's hungry for gains.
              </p>
              <p>
                He spends his days chilling on his couch, contemplating the
                volatility of existence (and eating pizza). Join the confusion.
                Buy the dip. Be the NotDog.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="tokenomics"
        className="relative bg-brand-green py-20 px-4 border-y-4 border-black"
      >
        <div className="container mx-auto max-w-6xl">
          <SectionTitle className="text-white">TOKENOMICS</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-black bg-white shadow-[12px_12px_0px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(#FF6B6B 0% 50%, #4fc3f7 50% 80%, #FFD93D 80% 100%)",
                  }}
                ></div>
                <div className="absolute inset-4 bg-white rounded-full border-4 border-black flex items-center justify-center flex-col">
                  <span className="font-comic text-4xl md:text-6xl text-black">
                    1B
                  </span>
                  <span className="font-marker text-xl text-gray-500">
                    SUPPLY
                  </span>
                </div>
              </div>
              <div className="flex gap-4 mt-8 flex-wrap justify-center">
                <div className="flex items-center gap-2 font-bold font-comic">
                  <div className="w-4 h-4 bg-brand-red border border-black"></div>{" "}
                  50% Public
                </div>
                <div className="flex items-center gap-2 font-bold font-comic">
                  <div className="w-4 h-4 bg-brand-blue border border-black"></div>{" "}
                  30% LP
                </div>
                <div className="flex items-center gap-2 font-bold font-comic">
                  <div className="w-4 h-4 bg-brand-yellow border border-black"></div>{" "}
                  20% Team
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap size={32} />,
                  title: "TAX",
                  val: "0/0",
                  color: "bg-brand-yellow",
                  rotate: "rotate-2",
                },
                {
                  icon: <Lock size={32} />,
                  title: "LP",
                  val: "BURNED",
                  color: "bg-brand-red",
                  rotate: "-rotate-1",
                },
                {
                  icon: <Users size={32} />,
                  title: "TEAM",
                  val: "BASED",
                  color: "bg-purple-300",
                  rotate: "rotate-1",
                },
                {
                  icon: <Rocket size={32} />,
                  title: "MINT",
                  val: "REVOKED",
                  color: "bg-brand-blue",
                  text: "text-white",
                  rotate: "-rotate-2",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className={`${item.color} ${item.rotate} border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_black]`}
                >
                  <div
                    className={`flex justify-between items-start mb-2 ${
                      item.text || "text-black"
                    }`}
                  >
                    <h3 className="font-comic text-2xl">{item.title}</h3>
                    {item.icon}
                  </div>
                  <p
                    className={`font-marker text-4xl drop-shadow-sm ${
                      item.text || "text-black"
                    }`}
                  >
                    {item.val}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <div
              onClick={() =>
                navigator.clipboard.writeText(
                  "7FAk2QmBn9sX3TtR4pLkDUMMYx82qNe5rwPzQjH1aG9"
                )
              }
              className="bg-white text-black font-mono text-xs md:text-xl p-4 md:p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] break-all relative group cursor-pointer active:scale-95 transition-transform"
            >
              <span className="opacity-50 select-none mr-2">CA:</span>
              7FAk...DUMMYx
              <div className="absolute -top-3 -right-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rotate-12 border-2 border-black hidden group-hover:block">
                COPY ME!
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="roadmap"
        className="relative bg-brand-yellow py-20 px-4"
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <SectionTitle className="text-brand-purple">ROADMAP</SectionTitle>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black/20 -translate-x-1/2 border-l-4 border-dotted border-black hidden md:block"></div>

            <div className="space-y-12">
              <Phase
                title="Phase 1: Confusion"
                items={[
                  "Launch on Pump.fun",
                  "Website V1 Release",
                  "Community Building",
                  "Meme Takeover",
                ]}
                delay={0.1}
                rotate="rotate-[-2deg]"
              />
              <Phase
                title="Phase 2: Realization"
                items={[
                  "DEX Listing",
                  "CoinGecko Listing",
                  "1,000 Holders",
                  "Partnerships",
                ]}
                delay={0.3}
                rotate="rotate-[1deg]"
              />
              <Phase
                title="Phase 3: Domination"
                items={[
                  "CEX Listings",
                  "NotDog Merch",
                  "NotDog NFT Collection",
                  "To The Moon 🚀",
                ]}
                delay={0.5}
                rotate="rotate-[-1deg]"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 text-center font-comic relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl mb-6 text-brand-yellow">NOTDOG</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="hover:text-brand-blue transition-colors"
            >
              Twitter (X)
            </a>
            <a
              href="#"
              className="hover:text-brand-red transition-colors"
            >
              Telegram
            </a>
            <a
              href="#"
              className="hover:text-brand-green transition-colors"
            >
              DexScreener
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 NOTDOG. All rights reserved (maybe).
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
