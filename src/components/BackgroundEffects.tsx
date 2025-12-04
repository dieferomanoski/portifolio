export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,_rgba(15,23,42,0.9)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(15,23,42,0.9)_1px,_transparent_1px)] bg-[size:90px_90px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-24 h-72 w-72 rounded-full border border-white/14 bg-white/4 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-8rem] h-80 w-80 rounded-full border border-white/10 bg-white/3 blur-3xl" />
    </div>
  );
}


