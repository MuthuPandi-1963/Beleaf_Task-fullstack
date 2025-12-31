import React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const allocations = [
  {
    label: "Token Offer",
    value: "46.000.000",
    percent: 18,
  },
  {
    label: "UTO Bounties",
    value: "11.500.000",
    percent: 35,
  },
  {
    label: "UTO Community Reserve",
    value: "423.000.000",
    percent: 72,
  },
  {
    label: "UTO Community Building",
    value: "23.000.000",
    percent: 12,
  },
]

export default function TokenAllocation() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* background noise / glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT VISUAL */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[420px] w-[420px] rounded-full bg-gradient-to-br from-zinc-700 via-zinc-900 to-black shadow-[0_0_140px_rgba(255,255,255,0.12)]">
            <div className="absolute inset-14 rounded-full border border-zinc-600/40" />
            <div className="absolute inset-24 rounded-full border border-zinc-700/30" />
            <div className="absolute inset-36 rounded-full border border-zinc-800/30" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-12">
          
          {/* header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs tracking-widest text-zinc-400">
              <ChevronRight className="h-3 w-3 text-indigo-500" />
              SUMMARY OF ICO
            </div>

            <h2 className="text-4xl xl:text-5xl font-semibold">
              Token allocation summary
            </h2>
          </div>

          {/* bars */}
          <div className="space-y-10">
            {allocations.map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-zinc-400">{item.label}</span>
                  <span className="text-cyan-400 font-medium">
                    {item.value}
                  </span>
                </div>

                <div className="relative h-[2px] w-full bg-zinc-800 overflow-hidden">
                  <div
                    className={cn(
                      "absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    )}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
