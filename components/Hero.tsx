"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "./ContentProvider";
import ExpoLogo from "./ExpoLogo";
import { CalendarIcon, PinIcon } from "./icons";
import Clouds from "./Clouds";

const ART = "/images/art";

// The poster's blue sky, laid over the top of the Sydney photo so the logo and details sit on clean sky.
const skyFade = "linear-gradient(180deg, #6CA9DF 0%, rgba(150,194,234,.75) 18%, rgba(255,236,196,.25) 45%, rgba(255,241,207,0) 65%)";

/** Davao poster hero: blue sky into a golden Sydney harbour, logo + event details, and the student. */
export default function Hero() {
  const { hero } = useContent();
  const d = hero.details;
  const b = hero.brandLine;
  return (
    <section id="hero" className="relative overflow-hidden bg-sky text-navy-900">
      {/* Sydney Opera House and Harbour Bridge at sunset */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image src={`${ART}/sydney.webp`} alt="" fill priority sizes="100vw" className="object-cover object-[50%_70%] lg:object-[50%_55%]" />
        <div className="absolute inset-0" style={{ backgroundImage: skyFade }} />
        <div className="absolute right-[8%] top-[18%] h-40 w-[28rem] rounded-full bg-white/25 blur-3xl" />
        {/* Soft warm glow behind the event details so they stay readable over the photo */}
        <div className="absolute left-1/2 top-[44%] h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#FFF6DD]/55 blur-3xl lg:left-[-4%] lg:translate-x-0" />
      </div>
      <Clouds />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-end gap-2 px-4 pt-10 sm:px-6 md:pt-14 lg:grid-cols-[1.15fr_1fr] lg:px-8">
        <motion.div
          className="flex flex-col items-center pb-6 text-center lg:items-start lg:pb-[clamp(110px,12vw,190px)] lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* U&I Global Philippines (official wordmark), with "Since 1997" underneath */}
          <div className="flex flex-col items-center drop-shadow-[0_2px_8px_rgba(4,60,100,.35)] lg:items-start">
            <p className="flex items-center gap-2.5 whitespace-nowrap text-white">
              <Image src={`${ART}/uandi-global-white.webp`} alt={`${b.lead} ${b.script}`} width={920} height={330} priority className="h-[64px] w-auto md:h-[86px]" />
              <span className="-mt-2 font-heading text-[24px] font-medium leading-none md:text-[32px]">{b.country}</span>
            </p>
            <p className="-mt-1.5 font-heading text-[13px] font-semibold uppercase tracking-[0.3em] text-white md:text-[15px]">{b.since}</p>
          </div>

          <ExpoLogo alt={hero.logo.alt} strap={hero.strap} strapClassName="text-[#16181C]" className="mt-4 w-[min(100%,420px)] md:w-[460px]" />
          <p className="-mt-1 font-heading text-[clamp(34px,5.4vw,54px)] font-extrabold leading-none tracking-tight text-slate-500 lg:pl-[11%]">{hero.city}</p>

          <div className="mt-6 flex flex-col gap-2">
            <p className="flex flex-wrap items-baseline justify-center gap-x-2.5 lg:justify-start">
              <CalendarIcon className="h-6 w-6 self-center text-primary-700" />
              <span className="font-heading text-2xl font-extrabold text-primary-700 md:text-3xl">{d.date}</span>
              <span className="text-base font-medium md:text-lg">{d.time}</span>
            </p>
            {/* Venue opens Google Maps; on hover/focus a live map preview pops up */}
            <div className="group relative self-center lg:self-start">
              <a href={d.mapUrl} target="_blank" rel="noopener noreferrer" aria-label={`${d.venue}, ${d.address} – ${d.mapLabel}`} className="block rounded-lg">
                <span className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <PinIcon className="h-6 w-6 shrink-0 text-primary-700" />
                  <span className="font-heading text-xl font-bold underline decoration-primary-700/30 decoration-2 underline-offset-4 transition-colors group-hover:decoration-primary-700 md:text-2xl">
                    {d.venue}
                  </span>
                </span>
                <span className="mx-auto mt-2 block max-w-[24rem] text-sm text-navy-700 md:pl-[34px] lg:mx-0">{d.address}</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary-700 md:pl-[34px]">
                  {d.mapLabel} ↗
                </span>
              </a>
              <div
                aria-hidden="true"
                className="pointer-events-none invisible absolute left-1/2 top-full z-30 w-[340px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:hidden lg:left-0 lg:translate-x-0"
              >
                <div className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_16px_40px_rgba(13,31,58,.35)]">
                  <iframe src={d.mapEmbed} title={d.venue} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[220px] w-full" tabIndex={-1} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={hero.primaryCta.href}
              className="inline-flex min-h-12 items-center rounded-2xl bg-primary-700 px-7 font-heading text-lg font-bold text-white shadow-[0_8px_20px_rgba(4,85,132,.3)] transition-transform hover:-translate-y-0.5 hover:bg-primary-900"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center rounded-2xl border-2 border-primary-700/70 bg-white/40 px-6 font-heading text-lg font-semibold text-primary-700 backdrop-blur-sm transition-colors hover:bg-white"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>

        {/* Student, standing in front of the harbour as on the poster */}
        <motion.div
          className="relative mx-auto w-[min(78%,330px)] sm:w-[350px] lg:mx-0 lg:ml-auto lg:w-[min(100%,450px)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          <Image src={`${ART}/student-davao.webp`} alt="" width={977} height={1525} priority sizes="(min-width: 1024px) 450px, 350px" className="h-auto w-full" />
        </motion.div>
      </div>

      {/* Trust line over the water, as along the bottom of the poster */}
      <div className="relative z-10 bg-[linear-gradient(90deg,rgba(4,62,98,.85),rgba(4,85,132,.6)_60%,rgba(4,85,132,0))] text-white lg:absolute lg:bottom-0 lg:left-0 lg:w-[60%]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center sm:px-6 lg:px-8 lg:text-left">
          <p className="font-heading text-[15px] font-semibold leading-snug md:text-[17px]">{hero.trust[0]}</p>
          <p className="text-[13px] leading-snug text-white/85 md:text-[15px]">{hero.trust[1]}</p>
        </div>
      </div>
    </section>
  );
}
