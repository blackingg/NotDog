import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownUp, Settings, Wallet, ChevronDown, Info } from "lucide-react";

const SwapModal = () => {
  const [amount, setAmount] = useState("1");
  const [output, setOutput] = useState("420.69");
  const [showSettings, setShowSettings] = useState(false);
  const [slippage, setSlippage] = useState("1.0");

  const handleSwap = () => {};

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 w-full max-w-[400px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative mx-auto"
    >
      <div className="flex justify-between items-center mb-4 sm:mb-6 z-20 relative">
        <h2 className="font-comic text-2xl sm:text-3xl text-black">SWAP</h2>
        <motion.button
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowSettings(!showSettings)}
          className={`text-black p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors ${
            showSettings ? "bg-gray-200" : ""
          }`}
        >
          <Settings
            size={20}
            className="sm:w-6 sm:h-6"
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: "auto", opacity: 1, marginBottom: 16 }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            className="overflow-hidden sm:mb-6"
          >
            <div className="bg-gray-100 rounded-xl p-3 sm:p-4 border-2 border-dashed border-gray-300">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-xs sm:text-sm text-gray-500">
                  Max Slippage
                </span>
                <span className="font-bold text-xs sm:text-sm text-brand-red">
                  {slippage}%
                </span>
              </div>
              <div className="flex gap-1.5 sm:gap-2">
                {["0.5", "1.0", "2.0"].map((val) => (
                  <button
                    key={val}
                    onClick={() => setSlippage(val)}
                    className={`flex-1 py-1 rounded-lg font-bold text-xs sm:text-sm border-2 transition-all ${
                      slippage === val
                        ? "bg-brand-blue text-white border-black shadow-[2px_2px_0px_0px_black]"
                        : "bg-white border-transparent text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {val}%
                  </button>
                ))}
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={slippage}
                    onChange={(e) => setSlippage(e.target.value)}
                    className="w-full h-full rounded-lg text-center font-bold text-xs sm:text-sm border-2 border-gray-300 focus:border-black outline-none bg-white"
                  />
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-bold">
                    %
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-brand-yellow/20 hover:bg-brand-yellow/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-transparent focus-within:border-black transition-all mb-2 group">
        <div className="flex justify-between mb-2">
          <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
            Selling
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-gray-500">
            Bal: 12.45 SOL
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent text-2xl sm:text-4xl font-bold font-comic w-full outline-none text-gray-900 placeholder-gray-400"
            placeholder="0"
          />
          <button className="flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-gray-50 rounded-full pl-1.5 sm:pl-2 pr-2 sm:pr-3 py-1 sm:py-1.5 border-2 border-black shadow-sm transition-transform active:scale-95 shrink-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-tr from-[#9945FF] to-[#14F195] rounded-full" />
            <span className="font-bold text-sm sm:text-base">SOL</span>
            <ChevronDown
              size={14}
              className="sm:w-4 sm:h-4"
            />
          </button>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <span className="text-[10px] sm:text-xs font-bold text-gray-400">
            ≈ ${(parseFloat(amount || 0) * 145).toFixed(2)}
          </span>
          <div className="flex gap-1">
            <button className="text-[9px] sm:text-[10px] font-bold bg-white/50 px-1.5 sm:px-2 py-0.5 rounded border border-black/10 hover:border-black/30">
              HALF
            </button>
            <button className="text-[9px] sm:text-[10px] font-bold bg-white/50 px-1.5 sm:px-2 py-0.5 rounded border border-black/10 hover:border-black/30">
              MAX
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center -my-3 sm:-my-4 z-10 relative">
        <motion.button
          whileHover={{ rotate: 180, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const temp = amount;
            setAmount(output);
            setOutput(temp);
          }}
          className="bg-white border-2 sm:border-4 border-black p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <ArrowDownUp
            size={18}
            className="sm:w-5 sm:h-5 text-black"
          />
        </motion.button>
      </div>

      <div className="bg-brand-green/20 hover:bg-brand-green/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-transparent focus-within:border-black transition-all mt-2 mb-3 sm:mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
            Buying
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <input
            type="text"
            value={output}
            readOnly
            className="bg-transparent text-2xl sm:text-4xl font-bold font-comic w-full outline-none text-gray-900"
          />
          <button className="flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-gray-50 rounded-full pl-1.5 sm:pl-2 pr-2 sm:pr-3 py-1 sm:py-1.5 border-2 border-black shadow-sm transition-transform active:scale-95 shrink-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-red rounded-full border border-black/10" />
            <span className="font-bold text-sm sm:text-base">NOTDOG</span>
            <ChevronDown
              size={14}
              className="sm:w-4 sm:h-4"
            />
          </button>
        </div>
        <div className="flex justify-between mt-2 flex-wrap gap-1">
          <span className="text-[10px] sm:text-xs font-bold text-gray-400">
            ≈ ${(parseFloat(amount || 0) * 145).toFixed(2)}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-brand-green">
            1 SOL = 420.69 NOTDOG
          </span>
        </div>
      </div>

      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 px-1 sm:px-2">
        <div className="flex justify-between text-[10px] sm:text-xs font-bold text-gray-500">
          <span className="flex items-center gap-1">
            Price Impact{" "}
            <Info
              size={10}
              className="sm:w-3 sm:h-3"
            />
          </span>
          <span className="text-green-500">&lt; 0.1%</span>
        </div>
        <div className="flex justify-between text-[10px] sm:text-xs font-bold text-gray-500">
          <span className="flex items-center gap-1">
            Network Cost{" "}
            <Info
              size={10}
              className="sm:w-3 sm:h-3"
            />
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[url('https://cryptologos.cc/logos/solana-sol-logo.png')] bg-cover"></span>
            0.00005 SOL
          </span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-brand-red to-orange-500 text-white font-comic text-lg sm:text-2xl py-3 sm:py-4 rounded-xl border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
          <Wallet
            size={20}
            className="sm:w-6 sm:h-6"
          />
          CONNECT WALLET
        </span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </motion.button>

      <motion.div
        animate={{ rotate: [12, 16, 12] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-brand-yellow text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rotate-12 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-50"
      >
        MOON SOON 🚀
      </motion.div>
    </motion.div>
  );
};

export default SwapModal;
