export default function WaveEffect() {
  return (
    <div className="relative flex items-center justify-center w-68 h-68 mx-auto translate-y-1/2">
      {/* center circle (speaker) */}
      <div className="relative z-10 w-56 h-56 rounded-full bg-blue-300/20 shadow-[0_0_30px_#3b82f6]" />

      {/* wave 1 */}
      <span className="absolute w-50 h-50 rounded-full border-r-7 border-blue-500 animate-wave" />
      <span className="absolute w-50 h-50 rounded-full border-l-7 border-blue-400 animate-wave" />
      <span className="absolute w-65 h-65 rounded-full border-r-7 border-blue-700 animate-wave" />
      <span className="absolute w-65 h-65 rounded-full border-l-7 border-blue-700 animate-wave" />
      <span className="absolute w-80 h-80 rounded-full border-r-7 border-blue-700 animate-wave" />
      <span className="absolute w-80 h-80 rounded-full border-l-7 border-blue-700 animate-wave" />

      {/* wave 2 */}
      {/* <span className="absolute w-50 h-50 rounded-full border-2 border-blue-500 animate-wave delay-700" /> */}

      {/* wave 3 */}
      {/* <span className="absolute w-70 h-70 rounded-full border-2  border-blue-500 animate-wave delay-[1400ms]" /> */}
    </div>
  );
}
