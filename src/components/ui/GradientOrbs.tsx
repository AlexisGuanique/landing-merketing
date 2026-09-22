export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-pink-300/35 blur-[120px] dark:bg-violet-600/25" />
      <div className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-purple-200/40 blur-[120px] dark:bg-fuchsia-500/20" />
      <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-rose-200/40 blur-[120px] dark:bg-purple-600/15" />
    </div>
  );
}
