import { Play, Send, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdvisorsSection() {
  const advisors = [
    {
      role: "FOUNDER",
      name: "Javier C. Emerson",
      image: "/user.png",
      highlight: true,
    },
    {
      role: "CEO",
      name: "Diego H. Redmond",
      image: "/user.png",
    },
    {
      role: "HEAD ADVISOR",
      name: "Julian T. Beaumont",
      image: "/user.png",
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2b2b2b,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
                      <div className="flex items-center gap-x-4 justify-center mb-6">
            <Play className='text-blue-400 text-xl' />
              <h1 className="text-xl font-bold leading-tight text-white">
                Our Advisors
              </h1>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet with our avengers
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex flex-col gap-5">
              {/* Image */}
              <div className="w-[320px] h-95 rounded-2xl overflow-hidden bg-black">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div
                className={cn(
                  "w-full px-4 py-3 rounded-lg transition-all",
                  advisor.highlight
                    ? "border border-orange-500"
                    : "border border-transparent"
                )}
              >
                <p className="text-xs tracking-widest text-muted-foreground mb-1">
                  {advisor.role}
                </p>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {advisor.name}
                  </h3>

                  <div className="flex items-center gap-3">
                    <Send className="h-4 w-4  p-3 rounded-full text-blue-700 hover:scale-110 transition cursor-pointer" />
                    <Youtube className="h-4 w-4 text-red-500 hover:scale-110 transition cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
