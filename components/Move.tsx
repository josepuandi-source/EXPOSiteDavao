"use client";

import { useContent } from "./ContentProvider";
import { Container, Reveal, SectionHeader } from "./ui";
import { BriefcaseIcon, ClipboardIcon, DeviceIcon, GlobeIcon, HomeIcon, UsersIcon } from "./icons";

const ICONS = { home: HomeIcon, briefcase: BriefcaseIcon, device: DeviceIcon, clipboard: ClipboardIcon, globe: GlobeIcon, users: UsersIcon };

/** "More Than Study": the six ways U&I helps students settle in once they arrive in Australia. */
export default function Move() {
  const { move } = useContent();
  return (
    <section className="bg-primary-50 py-20 md:py-24">
      <Container>
        <SectionHeader title={move.title} subtitle={move.subtitle} className="mb-12" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {move.items.map((it, i) => {
            const Icon = ICONS[it.icon];
            return (
              <Reveal key={it.title} delay={(i % 3) * 0.06}>
                {/* Icon and title on one line, the description underneath, the number tucked in the corner */}
                <div className="relative h-full rounded-2xl bg-white p-6 shadow-[0_6px_22px_rgba(13,31,58,.07)]">
                  <span aria-hidden="true" className="absolute right-5 top-4 font-heading text-xs font-semibold tracking-[0.2em] text-primary-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4 pr-6">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-700 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold leading-tight text-navy-900">{it.title}</h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{it.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
