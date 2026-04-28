"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#031C26] text-white px-6 lg:px-12 py-12 mt-3 mb:mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-10">
        {/* 🔥 LEFT - SUBSCRIBE */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="text-sm mb-4">Get 10% off your first order</p>

          <div className="flex border border-gray-400 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 outline-none text-sm w-full"
            />
            <button className="px-3">➤</button>
          </div>
        </div>

        {/* 📞 SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <p className="text-sm">
            G S Tele Communication Limited, Unit No. 461, Tower B1, Spaze i-Tech
            Park, Sector 49, Gurgaon-122018
          </p>
          <p className="mt-2 text-sm">support@baofengradios.com</p>
          <p className="text-sm mt-1">+917011831918</p>
        </div>

        {/* 👤 ACCOUNT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Blogs</li>
            <li>FAQs</li>
            <li>About Us</li>
            <li>All Categories</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* 📲 DOWNLOAD + SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Download App</h3>

          <p className="text-xs text-gray-400 mb-3">
            Save $3 with App New User Only
          </p>

          {/* QR + Buttons */}
          <div className="flex gap-3 mb-4">
            <div className="w-16 h-16 bg-white"></div>
            <div className="flex flex-col gap-2">
              <div className="bg-black px-3 py-1 text-xs rounded">
                Google Play
              </div>
              <div className="bg-black px-3 py-1 text-xs rounded">
                App Store
              </div>
            </div>
          </div>

          {/* 🔥 SOCIAL ICONS (ANIMATION READY) */}
          <div className="flex gap-4 mt-3">
            <div className="social-icon">
              <FaFacebookF size={16} />
            </div>

            <div className="social-icon">
              <FaTwitter size={16} />
            </div>

            <div className="social-icon">
              <FaInstagram size={16} />
            </div>

            <div className="social-icon">
              <FaLinkedinIn size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM */}
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © Copyright 2026 GS Telecommunication Limited. All rights reserved.
      </div>

      {/* 🎯 SOCIAL ANIMATION */}
      <style jsx>{`
        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid #3b4b55;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        // .social-icon:hover {
        //   transform: translateY(-6px) scale(1.1);
        //   background: #0ea5e9;
        //   box-shadow: 0 10px 20px rgba(14, 165, 233, 0.4);
        // }

        .social-icon:first-child:hover {
          transform: translateY(-6px) scale(1.1);
          background: #1877F2;
          box-shadow: 0 10px 20px rgba(14, 165, 233, 0.4);
        }

        .social-icon:nth-child(3):hover {
          transform: translateY(-6px) scale(1.1);
          background: #E4405F;
          background-image: linear-gradient( #f9ce34, #ee2a7b, #6228d7.)
          box-shadow: 0 10px 20px rgba(14, 165, 233, 0.4);
        }

        .social-icon:nth-child(2):hover {
          transform: translateY(-6px) scale(1.1);
          background: #1DA1F2;
          background-image: linear-gradient(to bottom, #FB2C36,#FF6900)
          box-shadow: 0 10px 20px rgba(14, 165, 233, 0.4);
        }

        .social-icon:nth-child(4):hover {
          transform: translateY(-6px) scale(1.1);
          background: #0A66C2;
          background-image: linear-gradient(to bottom, #FB2C36,#FF6900)
          box-shadow: 0 10px 20px rgba(14, 165, 233, 0.4);
        }

        .social-icon:hover svg {
          color: white;
        }
      `}</style>
    </div>
  );
}
