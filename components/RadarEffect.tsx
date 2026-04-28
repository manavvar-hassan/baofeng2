const RadarEffect = () => {
  return (
    <div className="relative flex justify-center items-center">
      <span className="absolute w-20 h-20 rounded-full bg-blue-300 animate-ping"></span>
      <span className="absolute w-20 h-20 rounded-full bg-blue-300 animate-ping delay-2000"></span>
      <div className="relative z-10 flex justify-center items-center w-5 h-5 rounded-full bg-blue-300/50 backdrop-blur-md"></div>
    </div>
  );
};

export default RadarEffect;
