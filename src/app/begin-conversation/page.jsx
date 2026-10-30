// "use client";

// import { Fragment, useEffect, useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// // ─── EmailJS config ───────────────────────────────────────────────────────────
// const EJS = {
//   service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//   enquiryTemplate: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//   replyTemplate: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
//   publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
// };

// // the visitor's text goes into an HTML email → escape it first
// const esc = (s = "") =>
//   String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
// const dash = (s) => (s && s.trim() ? s.trim() : "—");

// // ─── Type styles (measured from the Figma screen, 857px wide frame) ──────────
// const T = "font-['Times_New_Roman']";
// const sans = "font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]";
// const MAROON = "text-[#651A1A]";
// const ORANGE = "text-[#B5651D]";

// // Lines break like Figma on desktop (lg+) and flow naturally below that.
// const Lines = ({ lines }) =>
//   lines.map((l, i) => (
//     <Fragment key={i}>
//       {l}
//       {i < lines.length - 1 && (
//         <>
//           <span className="lg:hidden"> </span>
//           <br className="hidden lg:block" />
//         </>
//       )}
//     </Fragment>
//   ));

// // ─── Scroll reveal (soft fade + rise) ─────────────────────────────────────────
// function Reveal({ className = "", delay = 0, children }) {
//   const ref = useRef(null);
//   const [on, setOn] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     if (!("IntersectionObserver" in window)) {
//       setOn(true);
//       return;
//     }
//     const io = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setOn(true);
//           io.disconnect();
//         }
//       },
//       { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`${className} transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
//         on ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
//       }`}
//     >
//       {children}
//     </div>
//   );
// }

// // ─── Options ──────────────────────────────────────────────────────────────────
// const NATURE = [
//   "Fort And Heritage Restoration – Name, Location, Condition, Intended Outcome",
//   "Hotel And Hospitality Conversion – Property Type, Intended Guest Experience, Timeline",
//   "Property Advisory – Buying Or Selling, Region, Budget Range, Long-term Intention",
//   "Interior Design – Type Of Space, Location, Scale, Character You Are Seeking",
//   "Art Installation – Event Or Venue, Date, Theme, Scale Of Environment",
//   "Antique Restoration – Type Of Object, Current Condition, Keeping Or Selling After",
//   "General Enquiry",
//   "Something Else Entirely",
// ];

// const TIMELINE = [
//   "I Am In The Early Stages Of Thinking",
//   "I Am Ready To Begin Within Six Months",
//   "I Have A Specific Deadline Or Opening Date",
//   "I Am Not Yet Sure",
// ];

// // Figma shows the first option of each group ticked. Set to true to start like that.
// const START_LIKE_FIGMA = false;

// const EMPTY = { name: "", email: "", phone: "", location: "", bestTime: "", message: "", website: "" };

// // ─── Shared classes ───────────────────────────────────────────────────────────
// const labelCls = `${sans} mb-[clamp(6px,0.8vw,12px)] block text-[clamp(10px,1.1vw,16px)] leading-[1.3] text-[#111]`;
// const inputCls = `${sans} w-full border border-[#E6DFDB] bg-white px-[clamp(10px,1vw,16px)] text-[clamp(10.5px,0.9vw,14px)] text-[#2b2b2b] outline-none transition-colors duration-300 placeholder:text-[#8c8c8c] focus:border-[#651A1A]`;
// const heading = `${sans} text-[clamp(10px,1.1vw,16px)] font-bold leading-[1.3] text-[#111]`;

// // ─── Field ────────────────────────────────────────────────────────────────────
// function Field({ label, name, value, onChange, placeholder, type = "text", textarea = false, required = false, autoComplete }) {
//   const id = `bc-${name}`;
//   return (
//     <div>
//       <label htmlFor={id} className={labelCls}>
//         {label}
//       </label>
//       {textarea ? (
//         <textarea
//           id={id}
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           maxLength={3000}
//           className={`${inputCls} h-[clamp(130px,9.3vw,160px)] resize-none py-[clamp(10px,0.9vw,14px)] leading-[1.55]`}
//         />
//       ) : (
//         <input
//           id={id}
//           name={name}
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           maxLength={150}
//           autoComplete={autoComplete}
//           className={`${inputCls} h-[clamp(40px,3.6vw,56px)]`}
//         />
//       )}
//     </div>
//   );
// }

// // ─── Checkbox (red tick when selected) ────────────────────────────────────────
// function Check({ checked, onChange, label }) {
//   return (
//     <label className="flex cursor-pointer items-center gap-[clamp(9px,1.15vw,16px)]">
//       <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
//       <span className="flex h-[clamp(14px,1.5vw,22px)] w-[clamp(14px,1.5vw,22px)] shrink-0 items-center justify-center border border-[#E6DFDB] bg-white transition-colors duration-200 peer-checked:border-[#E31E18] peer-checked:bg-[#E31E18] peer-focus-visible:ring-2 peer-focus-visible:ring-[#651A1A]/40 peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100">
//         <svg
//           viewBox="0 0 12 12"
//           aria-hidden="true"
//           className="h-[68%] w-[68%] scale-50 fill-none stroke-white opacity-0 transition-all duration-200"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M2 6.3 4.8 9 10 3.2" />
//         </svg>
//       </span>
//       <span className={`${sans} text-[clamp(10px,0.93vw,14px)] leading-[1.4] text-[#111]`}>{label}</span>
//     </label>
//   );
// }

// // ═══════════════════════════════════════════════════════════════════════════════
// // PAGE
// // ═══════════════════════════════════════════════════════════════════════════════
// export default function BeginConversationPage() {
//   const [form, setForm] = useState(EMPTY);
//   const [nature, setNature] = useState(START_LIKE_FIGMA ? [NATURE[0]] : []);
//   const [timeline, setTimeline] = useState(START_LIKE_FIGMA ? TIMELINE[0] : "");
//   const [status, setStatus] = useState("idle"); // idle | sending | success | error
//   const [msg, setMsg] = useState("");

//   const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   const toggleNature = (v) => setNature((n) => (n.includes(v) ? n.filter((x) => x !== v) : [...n, v]));
//   // timeline looks like checkboxes (as in Figma) but behaves like a single choice
//   const pickTimeline = (v) => setTimeline((t) => (t === v ? "" : v));

//   async function onSubmit(e) {
//     e.preventDefault();
//     if (status === "sending") return;

//     if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
//       setStatus("error");
//       setMsg("Please share your name and a valid email address.");
//       return;
//     }

//     // honeypot: bots fill the hidden field → pretend success, send nothing
//     if (form.website) {
//       setStatus("success");
//       setMsg("Thank you. Your message has reached us — we will write back within 24 hours.");
//       return;
//     }

//     if (!EJS.service || !EJS.enquiryTemplate || !EJS.publicKey) {
//       setStatus("error");
//       setMsg("The form is not connected yet. Please call or email us directly.");
//       return;
//     }

//     // simple cooldown so one browser cannot spam the form (60 s)
//     try {
//       const last = Number(sessionStorage.getItem("rt-last-send") || 0);
//       if (Date.now() - last < 60000) {
//         setStatus("error");
//         setMsg("Your message was just sent. Please wait a minute before sending another.");
//         return;
//       }
//     } catch {}

//     setStatus("sending");
//     setMsg("");
//     try {
//       const params = {
//         name: form.name.trim(),
//         first_name: form.name.trim().split(" ")[0],
//         email: form.email.trim(),
//         phone: dash(form.phone),
//         location: dash(form.location),
//         best_time: dash(form.bestTime),
//         timeline: timeline || "—",
//         nature_html: nature.length ? nature.map((n) => "• " + esc(n)).join("<br/>") : "—",
//         nature_short: nature.length ? nature.map((n) => n.split(" – ")[0]).join(", ") : "—",
//         message_html: esc(dash(form.message)).replace(/\r?\n/g, "<br/>"),
//       };

//       // EmailJS v5: init publicKey first, then send
//       emailjs.init({ publicKey: EJS.publicKey });

//       const result = await emailjs.send(EJS.service, EJS.enquiryTemplate, params);
//       console.log("EmailJS enquiry sent:", result.status, result.text);

//       // optional autoreply
//       if (EJS.replyTemplate) {
//         try {
//           await emailjs.send(EJS.service, EJS.replyTemplate, params);
//         } catch (replyErr) {
//           console.warn("Autoreply failed (non-blocking):", replyErr);
//         }
//       }

//       try { sessionStorage.setItem("rt-last-send", String(Date.now())); } catch {}

//       setStatus("success");
//       setMsg("Thank you. Your message has reached us — we will write back within 24 hours.");
//       setForm(EMPTY);
//       setNature(START_LIKE_FIGMA ? [NATURE[0]] : []);
//       setTimeline(START_LIKE_FIGMA ? TIMELINE[0] : "");
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       setStatus("error");
//       setMsg(
//         err?.text
//           ? `Send failed: ${err.text}. Please call or email us directly.`
//           : "We could not send your message. Please try again or call us."
//       );
//     }
//   }

//   return (
//     // pt = room for your fixed header (the Figma crop started below it) — tweak if needed
//     <main className="relative w-full overflow-hidden pb-16 pt-28 lg:pb-[6.5vw] lg:pt-[3vw]">
//       {/* ───────────── Intro ───────────── */}
//       <section className="px-6 text-center">
//         <Reveal>
//           <h1 className={`${T} text-[clamp(30px,3.87vw,64px)] font-normal uppercase leading-[1.2] ${MAROON}`}>
//             Begin Conversation
//           </h1>
//         </Reveal>

//         <Reveal delay={80}>
//           <h2 className={`${T} mt-3 text-[clamp(19px,2.64vw,44px)] font-normal uppercase leading-[1.3] ${ORANGE} lg:mt-[2.5vw]`}>
//             Tell Us Your Vision
//           </h2>
//         </Reveal>

//         <Reveal delay={160}>
//           <p className={`${T} mx-auto mt-4 max-w-[640px] text-[clamp(11px,1.2vw,18px)] uppercase leading-[1.75] text-[#2b2b2b] lg:mt-[2.05vw] lg:max-w-none lg:whitespace-nowrap`}>
//             <Lines
//               lines={[
//                 "Every great space begins with a thought too important to leave unspoken. Whatever brought you here",
//                 "we want to hear it.",
//               ]}
//             />
//           </p>
//         </Reveal>
//       </section>

//       {/* ───────────── Pink form band ───────────── */}
//       <section className="mt-12 bg-[#FBE9E7] px-6 py-10 lg:mt-[5.25vw] lg:px-0 lg:pb-[2.4vw] lg:pt-[2.6vw]">
//         <Reveal>
//           <form onSubmit={onSubmit} noValidate aria-describedby="bc-status">
//             {/* honeypot — real people never see or fill this */}
//             <input
//               type="text"
//               name="website"
//               value={form.website}
//               onChange={set}
//               tabIndex={-1}
//               autoComplete="off"
//               aria-hidden="true"
//               className="absolute -left-[9999px] h-0 w-0 opacity-0"
//             />

//             <div className="mx-auto grid max-w-[640px] grid-cols-1 gap-10 lg:mx-0 lg:ml-[19.8%] lg:max-w-none lg:grid-cols-[31.4vw_36.5vw] lg:gap-x-[2.6vw] lg:gap-y-0">
//               {/* ── left: fields ── */}
//               <div className="flex flex-col gap-[clamp(14px,1.7vw,26px)]">
//                 <Field label="Your Name" name="name" value={form.name} onChange={set} placeholder="How shall we address you?" required autoComplete="name" />
//                 <Field label="Email address" name="email" type="email" value={form.email} onChange={set} placeholder="We will write back within 24 hours" required autoComplete="email" />
//                 <Field label="Telephone number" name="phone" type="tel" value={form.phone} onChange={set} placeholder="Including country code if outside India" autoComplete="tel" />
//                 <Field label="Your location" name="location" value={form.location} onChange={set} placeholder="City and country – so we know your time zone" />
//                 <Field label="Best time to speak" name="bestTime" value={form.bestTime} onChange={set} placeholder="Can suggest the best time to speak" />
//                 <Field
//                   label="Tell us about the property or project"
//                   name="message"
//                   textarea
//                   value={form.message}
//                   onChange={set}
//                   placeholder="There is no template for this. Write as much or as little as you know. Tell us the history if you know it. Tell us the dream if that is all you have. We have begun projects from a single sentence and from a hundred-page brief. Both are equally welcome."
//                 />
//               </div>

//               {/* ── right: project + timeline ── */}
//               <div>
//                 <p className={heading}>Your Project</p>
//                 <p className={`${sans} mt-3 text-[clamp(10px,1.1vw,16px)] leading-[1.3] text-[#111] lg:mt-[1.72vw]`}>
//                   What is the nature of your enquiry?
//                 </p>

//                 <div className="mt-4 flex flex-col gap-3 lg:mt-[1.53vw] lg:gap-[1.13vw]">
//                   {NATURE.map((n) => (
//                     <Check key={n} label={n} checked={nature.includes(n)} onChange={() => toggleNature(n)} />
//                   ))}
//                 </div>

//                 <p className={`${heading} mt-8 lg:mt-[2.64vw]`}>What Is Your Approximate Timeline?</p>

//                 <div className="mt-4 flex flex-col gap-3 lg:mt-[1.69vw] lg:gap-[1.13vw]">
//                   {TIMELINE.map((t) => (
//                     <Check key={t} label={t} checked={timeline === t} onChange={() => pickTimeline(t)} />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* ── send ── */}
//             <div className="mt-10 flex flex-col items-center lg:mt-[2.8vw]">
//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className={`${T} h-[clamp(44px,4.1vw,60px)] w-[clamp(140px,15.9vw,240px)] bg-[#E31E18] text-[clamp(11px,1.3vw,18px)] font-bold uppercase tracking-[0.02em] text-white transition-colors duration-300 hover:bg-[#c41914] disabled:cursor-not-allowed disabled:opacity-70`}
//               >
//                 {status === "sending" ? "Sending…" : "Send"}
//               </button>

//               <p
//                 id="bc-status"
//                 role="status"
//                 aria-live="polite"
//                 className={`${T} mt-4 min-h-[1.5em] px-4 text-center text-[clamp(11px,1.2vw,17px)] leading-[1.5] ${
//                   status === "error" ? "text-[#B3261E]" : MAROON
//                 }`}
//               >
//                 {msg}
//               </p>
//             </div>
//           </form>
//         </Reveal>
//       </section>
//     </main>
//   );
// }




"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// the visitor's text goes into an HTML email → escape it first
const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const dash = (s) => (s && s.trim() ? s.trim() : "—");

// ─── Type styles (measured from the Figma screen, 857px wide frame) ──────────
const T = "font-['Times_New_Roman']";
const sans = "font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]";
const MAROON = "text-[#651A1A]";
const ORANGE = "text-[#B5651D]";

// Lines break like Figma on desktop (lg+) and flow naturally below that.
const Lines = ({ lines }) =>
  lines.map((l, i) => (
    <Fragment key={i}>
      {l}
      {i < lines.length - 1 && (
        <>
          <span className="lg:hidden"> </span>
          <br className="hidden lg:block" />
        </>
      )}
    </Fragment>
  ));

// ─── Scroll reveal (soft fade + rise) ─────────────────────────────────────────
function Reveal({ className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        on ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

// ─── Options ──────────────────────────────────────────────────────────────────
const NATURE = [
  "Fort And Heritage Restoration – Name, Location, Condition, Intended Outcome",
  "Hotel And Hospitality Conversion – Property Type, Intended Guest Experience, Timeline",
  "Property Advisory – Buying Or Selling, Region, Budget Range, Long-term Intention",
  "Interior Design – Type Of Space, Location, Scale, Character You Are Seeking",
  "Art Installation – Event Or Venue, Date, Theme, Scale Of Environment",
  "Antique Restoration – Type Of Object, Current Condition, Keeping Or Selling After",
  "General Enquiry",
  "Something Else Entirely",
];

const TIMELINE = [
  "I Am In The Early Stages Of Thinking",
  "I Am Ready To Begin Within Six Months",
  "I Have A Specific Deadline Or Opening Date",
  "I Am Not Yet Sure",
];

// Figma shows the first option of each group ticked. Set to true to start like that.
const START_LIKE_FIGMA = false;

const EMPTY = { name: "", email: "", phone: "", location: "", bestTime: "", message: "", website: "" };

// ─── Shared classes ───────────────────────────────────────────────────────────
const labelCls = `${sans} mb-[clamp(6px,0.8vw,12px)] block text-[clamp(10px,1.1vw,16px)] leading-[1.3] text-[#111]`;
const inputCls = `${sans} w-full border border-[#E6DFDB] bg-white px-[clamp(10px,1vw,16px)] text-[clamp(10.5px,0.9vw,14px)] text-[#2b2b2b] outline-none transition-colors duration-300 placeholder:text-[#8c8c8c] focus:border-[#651A1A]`;
const heading = `${sans} text-[clamp(10px,1.1vw,16px)] font-bold leading-[1.3] text-[#111]`;

// ─── Field ────────────────────────────────────────────────────────────────────
function Field({ label, name, value, onChange, placeholder, type = "text", textarea = false, required = false, autoComplete }) {
  const id = `bc-${name}`;
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={3000}
          className={`${inputCls} h-[clamp(130px,9.3vw,160px)] resize-none py-[clamp(10px,0.9vw,14px)] leading-[1.55]`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={150}
          autoComplete={autoComplete}
          className={`${inputCls} h-[clamp(40px,3.6vw,56px)]`}
        />
      )}
    </div>
  );
}

// ─── Checkbox (red tick when selected) ────────────────────────────────────────
function Check({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-[clamp(9px,1.15vw,16px)]">
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
      <span className="flex h-[clamp(14px,1.5vw,22px)] w-[clamp(14px,1.5vw,22px)] shrink-0 items-center justify-center border border-[#E6DFDB] bg-white transition-colors duration-200 peer-checked:border-[#E31E18] peer-checked:bg-[#E31E18] peer-focus-visible:ring-2 peer-focus-visible:ring-[#651A1A]/40 peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100">
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="h-[68%] w-[68%] scale-50 fill-none stroke-white opacity-0 transition-all duration-200"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 6.3 4.8 9 10 3.2" />
        </svg>
      </span>
      <span className={`${sans} text-[clamp(10px,0.93vw,14px)] leading-[1.4] text-[#111]`}>{label}</span>
    </label>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function BeginConversationPage() {
  const [form, setForm] = useState(EMPTY);
  const [nature, setNature] = useState(START_LIKE_FIGMA ? [NATURE[0]] : []);
  const [timeline, setTimeline] = useState(START_LIKE_FIGMA ? TIMELINE[0] : "");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [msg, setMsg] = useState("");

  // arriving from a product page (/begin-conversation?product=...) → pre-fill the message
  useEffect(() => {
    const prod = new URLSearchParams(window.location.search).get("product");
    if (prod) setForm((f) => (f.message ? f : { ...f, message: `I would like to enquire about: ${prod.slice(0, 120)}\n\n` }));
  }, []);

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const toggleNature = (v) => setNature((n) => (n.includes(v) ? n.filter((x) => x !== v) : [...n, v]));
  // timeline looks like checkboxes (as in Figma) but behaves like a single choice
  const pickTimeline = (v) => setTimeline((t) => (t === v ? "" : v));

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setStatus("error");
      setMsg("Please share your name and a valid email address.");
      return;
    }

    // honeypot
    if (form.website) {
      setStatus("success");
      setMsg("Thank you. Your message has reached us — we will write back within 24 hours.");
      return;
    }

    // ── Build WhatsApp message ──
    const lines = [
      `*New Enquiry – Royal Treasure*`,
      ``,
      `*Name:* ${form.name.trim()}`,
      `*Email:* ${form.email.trim()}`,
      `*Phone:* ${dash(form.phone)}`,
      `*Location:* ${dash(form.location)}`,
      `*Best Time:* ${dash(form.bestTime)}`,
      ``,
      `*Nature of Enquiry:*`,
      nature.length ? nature.map((n) => `• ${n.split(" – ")[0]}`).join("\n") : "—",
      ``,
      `*Timeline:* ${timeline || "—"}`,
      ``,
      `*Message:*`,
      dash(form.message),
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const waNumber = "919999999999"; // ← Yahan actual number daalo
    const waUrl = `https://wa.me/${waNumber}?text=${text}`;

    setStatus("success");
    setMsg("Redirecting to WhatsApp...");

    // Open WhatsApp in same tab — popup blockers won't interfere
    setTimeout(() => {
      window.location.href = waUrl;
    }, 500);

    // Reset form
    setForm(EMPTY);
    setNature(START_LIKE_FIGMA ? [NATURE[0]] : []);
    setTimeline(START_LIKE_FIGMA ? TIMELINE[0] : "");
  }

  return (
    // pt = room for your fixed header (the Figma crop started below it) — tweak if needed
    <main className="relative w-full overflow-hidden pb-16 pt-18 lg:pb-[6.5vw]">
      {/* ───────────── Intro ───────────── */}
      <section className="px-6 text-center">
        <Reveal>
          <h1 className={`${T} text-[clamp(30px,3.87vw,64px)] font-normal uppercase leading-[1.2] ${MAROON}`}>
            Begin Conversation
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <h2 className={`${T} mt-3 text-[clamp(19px,2.64vw,44px)] font-normal uppercase leading-[1.3] ${ORANGE} lg:mt-[2.5vw]`}>
            Tell Us Your Vision
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className={`${T} mx-auto mt-4 max-w-[640px] text-[clamp(11px,1.2vw,18px)] uppercase leading-[1.75] text-[#2b2b2b] lg:mt-[2.05vw] lg:max-w-none lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "Every great space begins with a thought too important to leave unspoken. Whatever brought you here",
                "we want to hear it.",
              ]}
            />
          </p>
        </Reveal>
      </section>

      {/* ───────────── Form band with bg image ───────────── */}
      <section
        className="mt-12 px-6 py-10 lg:mt-[5.25vw] lg:px-0 lg:pb-[2.4vw] lg:pt-[2.6vw]"
        style={{
          backgroundImage: "url('/images/form-background.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundColor: "#FBE9E7",
        }}
      >
        <Reveal>
          <form onSubmit={onSubmit} noValidate aria-describedby="bc-status">
            {/* honeypot — real people never see or fill this */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={set}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <div className="mx-auto grid max-w-[640px] grid-cols-1 gap-10 lg:mx-0 lg:ml-[19.8%] lg:max-w-none lg:grid-cols-[31.4vw_36.5vw] lg:gap-x-[2.6vw] lg:gap-y-0">
              {/* ── left: fields ── */}
              <div className="flex flex-col gap-[clamp(14px,1.7vw,26px)]">
                <Field label="Your Name" name="name" value={form.name} onChange={set} placeholder="How shall we address you?" required autoComplete="name" />
                <Field label="Email address" name="email" type="email" value={form.email} onChange={set} placeholder="We will write back within 24 hours" required autoComplete="email" />
                <Field label="Telephone number" name="phone" type="tel" value={form.phone} onChange={set} placeholder="Including country code if outside India" autoComplete="tel" />
                <Field label="Your location" name="location" value={form.location} onChange={set} placeholder="City and country – so we know your time zone" />
                <Field label="Best time to speak" name="bestTime" value={form.bestTime} onChange={set} placeholder="Can suggest the best time to speak" />
                <Field
                  label="Tell us about the property or project"
                  name="message"
                  textarea
                  value={form.message}
                  onChange={set}
                  placeholder="There is no template for this. Write as much or as little as you know. Tell us the history if you know it. Tell us the dream if that is all you have. We have begun projects from a single sentence and from a hundred-page brief. Both are equally welcome."
                />
              </div>

              {/* ── right: project + timeline ── */}
              <div>
                <p className={heading}>Your Project</p>
                <p className={`${sans} mt-3 text-[clamp(10px,1.1vw,16px)] leading-[1.3] text-[#111] lg:mt-[1.72vw]`}>
                  What is the nature of your enquiry?
                </p>

                <div className="mt-4 flex flex-col gap-3 lg:mt-[1.53vw] lg:gap-[1.13vw]">
                  {NATURE.map((n) => (
                    <Check key={n} label={n} checked={nature.includes(n)} onChange={() => toggleNature(n)} />
                  ))}
                </div>

                <p className={`${heading} mt-8 lg:mt-[2.64vw]`}>What Is Your Approximate Timeline?</p>

                <div className="mt-4 flex flex-col gap-3 lg:mt-[1.69vw] lg:gap-[1.13vw]">
                  {TIMELINE.map((t) => (
                    <Check key={t} label={t} checked={timeline === t} onChange={() => pickTimeline(t)} />
                  ))}
                </div>
              </div>
            </div>

            {/* ── send ── */}
            <div className="mt-10 flex flex-col items-center lg:mt-[2.8vw]">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${T} h-[clamp(44px,4.1vw,60px)] w-[clamp(140px,15.9vw,240px)] bg-[#E31E18] text-[clamp(11px,1.3vw,18px)] font-bold uppercase tracking-[0.02em] text-white transition-colors duration-300 hover:bg-[#c41914] disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>

              <p
                id="bc-status"
                role="status"
                aria-live="polite"
                className={`${T} mt-4 min-h-[1.5em] px-4 text-center text-[clamp(11px,1.2vw,17px)] leading-[1.5] ${
                  status === "error" ? "text-[#B3261E]" : MAROON
                }`}
              >
                {msg}
              </p>
            </div>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
