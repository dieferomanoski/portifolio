"use client";

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Main large orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl animate-float-medium" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-3xl animate-float-fast" />
      
      {/* Smaller accent orbs */}
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-teal-500/8 to-emerald-500/8 blur-2xl animate-float-medium" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/8 to-indigo-500/8 blur-2xl animate-float-slow" />
    </div>
  );
}
