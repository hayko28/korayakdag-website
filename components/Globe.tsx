"use client";

export default function Globe() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-orange-400 animate-pulse" />
    </div>
  );
}