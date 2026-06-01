"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Mic, Play, Pause } from "lucide-react";

type TextMsg = {
  from: "customer" | "bot";
  kind: "text";
  text: string;
  time: string;
};

type VoiceMsg = {
  from: "customer" | "bot";
  kind: "voice";
  duration: string;
  time: string;
};

type Msg = TextMsg | VoiceMsg;

type Scenario = {
  title: string;
  tag: string;
  contact: string;
  status: string;
  messages: Msg[];
};

const scenarios: Scenario[] = [
  {
    title: "Client support",
    tag: "FAQ + bookings",
    contact: "Carmen Reyes",
    status: "online",
    messages: [
      { from: "customer", kind: "text", text: "Hi! Are you open Sunday?", time: "10:42" },
      {
        from: "bot",
        kind: "text",
        text: "We're closed Sundays — open Mon–Sat 9 to 7 ✨ Anything I can help with?",
        time: "10:42",
      },
      {
        from: "customer",
        kind: "text",
        text: "Can I book a table Saturday 7pm for 4?",
        time: "10:43",
      },
      {
        from: "bot",
        kind: "text",
        text: "Done ✓ Table for 4, Saturday 7pm. Confirmation sent 🍷",
        time: "10:43",
      },
    ],
  },
  {
    title: "Voice notes",
    tag: "Talk naturally",
    contact: "Diana Mendez",
    status: "voice message",
    messages: [
      { from: "customer", kind: "voice", duration: "0:11", time: "15:32" },
      {
        from: "bot",
        kind: "text",
        text: "Got it — moving your Friday haircut to Thursday at 3pm 📅",
        time: "15:32",
      },
      { from: "customer", kind: "voice", duration: "0:04", time: "15:33" },
      {
        from: "bot",
        kind: "text",
        text: "Confirmed for Thursday 3pm with Maria. See you then 💇✨",
        time: "15:33",
      },
    ],
  },
  {
    title: "Onboarding",
    tag: "Welcome flow",
    contact: "Sarah Lim",
    status: "new client",
    messages: [
      {
        from: "bot",
        kind: "text",
        text: "Welcome to Acme, Sarah 👋 I'll get you set up in 3 quick steps.",
        time: "9:15",
      },
      {
        from: "bot",
        kind: "text",
        text: "1️⃣ ID upload\n2️⃣ Preferences\n3️⃣ First payment method",
        time: "9:15",
      },
      {
        from: "customer",
        kind: "text",
        text: "Sounds good — where do I upload?",
        time: "9:16",
      },
      {
        from: "bot",
        kind: "text",
        text: "Tap here 👉 acme.co/up/9k2 — takes 30 seconds",
        time: "9:16",
      },
    ],
  },
  {
    title: "Reporting",
    tag: "Friday recap",
    contact: "Owner · Acme",
    status: "internal",
    messages: [
      { from: "bot", kind: "text", text: "📊 Friday recap is ready", time: "16:00" },
      {
        from: "bot",
        kind: "text",
        text: "Revenue: $47,210 (+12% wk)\nNew customers: 38\nAvg ticket: $124",
        time: "16:00",
      },
      {
        from: "bot",
        kind: "text",
        text: "⚠️ Refund rate up 3% this week — flagged the spike for you.",
        time: "16:00",
      },
      {
        from: "customer",
        kind: "text",
        text: "Send the breakdown to ops?",
        time: "16:02",
      },
      { from: "bot", kind: "text", text: "Sent to #ops + Hannah ✓", time: "16:02" },
    ],
  },
  {
    title: "Troubleshooting",
    tag: "Diagnostics",
    contact: "Mike Tran",
    status: "online",
    messages: [
      { from: "customer", kind: "text", text: "Wifi keeps cutting out 😩", time: "8:08" },
      {
        from: "bot",
        kind: "text",
        text: "Got it — quick check: just one device or all of them?",
        time: "8:08",
      },
      { from: "customer", kind: "text", text: "All of them", time: "8:09" },
      {
        from: "bot",
        kind: "text",
        text: "Restarting your router remotely now… done ⚙️ Back online in ~30s. Ping me if not!",
        time: "8:09",
      },
    ],
  },
];

const TEXT_MESSAGE_DELAY_MS = 1100;
const VOICE_MESSAGE_DELAY_MS = 1900;
const SCENARIO_HOLD_MS = 2200;

export function WhatsAppMockup() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [step, setStep] = useState(0);

  const scenario = scenarios[scenarioIdx];

  useEffect(() => {
    if (step < scenario.messages.length) {
      const justShown = scenario.messages[step - 1];
      // Voice notes need extra time to "play" before the next message arrives
      const delay =
        justShown?.kind === "voice" ? VOICE_MESSAGE_DELAY_MS : TEXT_MESSAGE_DELAY_MS;
      const t = setTimeout(() => setStep((s) => s + 1), delay);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setScenarioIdx((i) => (i + 1) % scenarios.length);
      setStep(0);
    }, SCENARIO_HOLD_MS);
    return () => clearTimeout(t);
  }, [step, scenario.messages]);

  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Soft accent halo */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 211, 102, 0.18) 0%, transparent 60%)",
        }}
      />

      {/* Phone frame */}
      <div className="relative bg-text rounded-[2.6rem] p-2 shadow-[0_20px_60px_-15px_rgba(15,17,21,0.4),0_0_0_1px_rgba(15,17,21,0.6)]">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-text rounded-b-2xl z-20" />

        {/* Screen */}
        <div className="bg-[#E5DDD5] rounded-[2.1rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="bg-[#075E54] h-7 pt-1 px-5 flex items-center justify-between text-white text-[10px] font-medium font-mono">
            <span>9:41</span>
            <span className="opacity-0">·</span>
            <span>●●●● 5G</span>
          </div>

          {/* WhatsApp header */}
          <div className="bg-[#075E54] text-white px-3 py-2.5 flex items-center gap-3 border-b border-black/10">
            <div className="text-white/80 text-lg leading-none">‹</div>
            <div className="h-9 w-9 rounded-full bg-[#25D366] flex items-center justify-center font-mono text-xs font-medium border border-white/20">
              SK
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={scenario.contact}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="min-w-0 flex-1"
              >
                <div className="text-[13px] font-medium leading-tight truncate">
                  {scenario.contact}
                </div>
                <div className="text-[10px] text-white/70 leading-tight">
                  {scenario.status}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-3 text-white/80 text-base leading-none">
              <span>◐</span>
              <span>⋮</span>
            </div>
          </div>

          {/* Scenario chip */}
          <div className="absolute top-[68px] left-1/2 -translate-x-1/2 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, scale: 0.9, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white/95 backdrop-blur-sm border border-black/5 px-2.5 py-1 rounded-full font-mono text-[9px] text-text-muted uppercase tracking-wider shadow-sm whitespace-nowrap"
              >
                {scenario.title} · {scenario.tag}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Chat area with WhatsApp pattern */}
          <div
            className="px-3 py-3 pt-9 min-h-[340px] max-h-[340px] flex flex-col gap-1.5 justify-end overflow-hidden"
            style={{
              backgroundImage: `
                radial-gradient(rgba(15,17,21,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "12px 12px",
              backgroundColor: "#E5DDD5",
            }}
          >
            <AnimatePresence mode="popLayout">
              {scenario.messages.slice(0, step).map((msg, i) => (
                <MessageBubble key={`${scenarioIdx}-${i}`} msg={msg} />
              ))}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div className="bg-[#F0F0F0] px-2 py-1.5 flex items-center gap-2 border-t border-black/5">
            <div className="text-text-subtle text-base leading-none">😊</div>
            <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[11px] text-text-subtle">
              Message
            </div>
            <div className="text-text-subtle text-base leading-none">📎</div>
            <div className="h-7 w-7 rounded-full bg-[#075E54] flex items-center justify-center text-white">
              <Mic size={12} strokeWidth={2.2} />
            </div>
          </div>
        </div>
      </div>

      {/* Scenario indicator dots */}
      <div className="flex justify-center gap-1.5 mt-5">
        {scenarios.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Show ${s.title} scenario`}
            onClick={() => {
              setScenarioIdx(i);
              setStep(0);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === scenarioIdx
                ? "w-6 bg-accent"
                : "w-1.5 bg-border-strong hover:bg-text-subtle"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Msg }) {
  if (msg.kind === "voice") {
    return <VoiceBubble msg={msg} />;
  }
  return <TextBubble msg={msg} />;
}

function TextBubble({ msg }: { msg: TextMsg }) {
  const isBot = msg.from === "bot";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex ${isBot ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative max-w-[78%] px-2.5 py-1.5 rounded-lg shadow-sm ${
          isBot
            ? "bg-[#DCF8C6] text-text rounded-tr-sm"
            : "bg-white text-text rounded-tl-sm"
        }`}
      >
        <p className="text-[11.5px] leading-[1.45] whitespace-pre-line">
          {msg.text}
        </p>
        <div className="flex items-center justify-end gap-1 mt-0.5">
          <span className="text-[8.5px] text-text-subtle">{msg.time}</span>
          {isBot && (
            <span className="flex text-[#34B7F1] -mr-0.5">
              <Check size={9} strokeWidth={3} className="-mr-2" />
              <Check size={9} strokeWidth={3} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const WAVEFORM_BARS = [
  4, 7, 11, 6, 9, 13, 5, 8, 12, 16, 10, 5, 7, 14, 11, 6, 9, 13, 4, 8, 15, 7, 5, 11, 8, 12, 6,
];

function VoiceBubble({ msg }: { msg: VoiceMsg }) {
  const isBot = msg.from === "bot";
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play the waveform when this bubble appears
  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    const totalMs = 1600; // demo speed — feels real but keeps the scenario moving
    const start = Date.now();
    let raf = 0;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / totalMs, 1);
      setProgress(p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setIsPlaying(false);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const activeIdx = progress * WAVEFORM_BARS.length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex ${isBot ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative px-2 py-1.5 rounded-lg shadow-sm flex items-center gap-2 ${
          isBot
            ? "bg-[#DCF8C6] rounded-tr-sm"
            : "bg-white rounded-tl-sm"
        }`}
      >
        {/* Play / pause button */}
        <button
          aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#075E54] text-white"
        >
          {isPlaying ? (
            <Pause size={9} strokeWidth={0} fill="currentColor" />
          ) : (
            <Play size={9} strokeWidth={0} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        {/* Waveform */}
        <div className="flex items-center gap-[2px] py-1">
          {WAVEFORM_BARS.map((h, i) => {
            const isActive = i < activeIdx;
            return (
              <span
                key={i}
                className={`w-[1.5px] rounded-full transition-colors duration-100 ${
                  isActive
                    ? "bg-[#075E54]"
                    : "bg-text-subtle/30"
                }`}
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>

        {/* Mic + duration + status, stacked */}
        <div className="flex flex-col items-end gap-0.5 pl-0.5">
          <div className="flex items-center gap-1">
            <Mic size={8} strokeWidth={2.2} className="text-[#075E54]" />
            <span className="text-[8.5px] font-mono text-text-muted leading-none">
              {msg.duration}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <span className="text-[8.5px] text-text-subtle">{msg.time}</span>
            {isBot && (
              <span className="flex text-[#34B7F1] -mr-0.5">
                <Check size={8} strokeWidth={3} className="-mr-2" />
                <Check size={8} strokeWidth={3} />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
