export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-1/4 h-56 w-56 rounded-full bg-pink-300/30 blur-3xl sm:h-[30rem] sm:w-[30rem] sm:bg-pink-300/35 sm:blur-[120px] dark:bg-violet-600/20 dark:sm:bg-violet-600/25" />
      <div className="absolute top-16 right-0 h-48 w-48 rounded-full bg-purple-200/35 blur-3xl sm:h-[26rem] sm:w-[26rem] sm:bg-purple-200/40 sm:blur-[120px] dark:bg-fuchsia-500/15 dark:sm:bg-fuchsia-500/20" />
      <div className="absolute bottom-0 left-0 hidden h-[24rem] w-[24rem] rounded-full bg-rose-200/40 blur-[120px] sm:block dark:bg-purple-600/15" />
    </div>
  );
}
