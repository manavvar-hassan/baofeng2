import Image from "next/image";
import "./ThreeD.css";
import { Star } from "lucide-react";

const ThreeD = () => {
  return (
    <div className="flex">

      <div className="card">
        <div className="wrapper">
          <div className="flex flex-col gap-1">
            <p className="px-2 py-1 bg-red-500 rounded-full max-w-20 text-center text-white uppercase font-medium text-xs tracking-wider">
              hot deal
            </p>
            <p className="text-sm font-medium bg-[#D7E9F2] px-2 py-1 max-w-12 rounded-full mt-2">
              -19%
            </p>
          </div>
          <img alt="a" src="images/hd2.png" className="cover-image" />

          <p className="text-xs uppercase font-bold title">
            Baofeng BF-888s Licence Free Walkie Talkie
          </p>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
            </div>
            <p className="text-sm text-gray-500">(234)</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">₹1399</span>
            <span className="line-through text-gray-400 text-sm">₹1599</span>
          </div>
        </div>
        <img alt="a" src="images/hd2.png" className="character" />
      </div>

      <div className="card">
        <div className="wrapper">
          <div className="flex flex-col gap-1">
            <p className="px-2 py-1 bg-red-500 rounded-full max-w-20 text-center text-white uppercase font-medium text-xs tracking-wider">
              hot deal
            </p>
            <p className="text-sm font-medium bg-[#D7E9F2] px-2 py-1 max-w-12 rounded-full mt-2">
              -19%
            </p>
          </div>
          <img alt="a" src="images/hd1.png" className="cover-image" />

          <p className="text-xs uppercase font-bold title">
            Baofeng BF-33C Licence Free Walkie Talkie
          </p>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
            </div>
            <p className="text-sm text-gray-500">(234)</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">₹1399</span>
            <span className="line-through text-gray-400 text-sm">₹1599</span>
          </div>
        </div>
        <img alt="a" src="images/hd1.png" className="character" />
      </div>

      <div className="card">
        <div className="wrapper">
          <div className="flex flex-col gap-1">
            <p className="px-2 py-1 bg-red-500 rounded-full max-w-20 text-center text-white uppercase font-medium text-xs tracking-wider">
              hot deal
            </p>
            <p className="text-sm font-medium bg-[#D7E9F2] px-2 py-1 max-w-12 rounded-full mt-2">
              -19%
            </p>
          </div>
          <img alt="a" src="images/hd3.png" className="cover-image" />

          <p className="text-xs uppercase font-bold title">
            Baofeng BF-33C Licence Free Walkie Talkie
          </p>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
              <Star color="#FDC700" fill="#FDC700" size="12" />
            </div>
            <p className="text-sm text-gray-500">(234)</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">₹1399</span>
            <span className="line-through text-gray-400 text-sm">₹1599</span>
          </div>
        </div>
        <img alt="a" src="images/hd3.png" className="character" />
      </div>
    </div>
  );
};

export default ThreeD;
