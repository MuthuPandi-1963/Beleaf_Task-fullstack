import React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const timeline = [
  {
    date: "JANUARY 01, 2025",
    title: "Creation of the idea of iconic project",
    active: true,
  },
  {
    date: "JANUARY 21, 2025",
    title: "Start of ICO project worldwide",
  },
  {
    date: "JANUARY 21, 2025",
    title: "Launch of the tutorial and resource",
  },
  {
    date: "JANUARY 21, 2025",
    title: "Launch of Iconic mobile version (iOS)",
  },
]

export default function RoadmapTimeline() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* subtle world map glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,white_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs tracking-widest text-zinc-400">
            <ChevronRight className="h-3 w-3 text-violet-500" />
            ROADMAP
          </div>

          <h1 className="text-4xl xl:text-5xl font-semibold leading-tight">
            Timeline about details
            <br />
            funding & development
            <br />
            goals.
          </h1>
        </div>

        {/* CENTER VISUAL (3D placeholder) */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-[420px] rounded-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-[0_0_120px_rgba(255,255,255,0.08)]">
            <div className="absolute inset-16 rounded-full border border-zinc-700/40" />
            <div className="absolute inset-28 rounded-full border border-zinc-700/30" />
          </div>
        </div>

        {/* RIGHT TIMELINE */}
        <div className="relative pl-8">
          {/* vertical line */}
          <div className="absolute left-3 top-0 h-full w-px bg-zinc-800" />

          <ul className="space-y-10">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative">
                {/* dot */}
                <span
                  className={cn(
                    "absolute -left-6.5 top-1 h-3 w-3 rounded-full border",
                    item.active
                      ? "border-violet-500 bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.9)]"
                      : "border-zinc-600 bg-black"
                  )}
                />

                <div className="space-y-2">
                  <p className="text-xs tracking-widest text-zinc-500">
                    {item.date}
                  </p>
                  <p
                    className={cn(
                      "text-sm leading-relaxed",
                      item.active ? "text-white" : "text-zinc-300"
                    )}
                  >
                    {item.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
