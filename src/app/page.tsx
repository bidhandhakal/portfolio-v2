"use client";

import { FaGithub, FaInstagram} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  const socials = [
    { href: "https://x.com/bidhaan_daju", icon: <FaXTwitter />, label: "Twitter" },
    { href: "https://github.com/bidhandhakal", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", icon: <FaInstagram />, label: "Instagram" },
    { href: "mailto:bidhandhakal365@gmail.com", icon: <FiMail />, label: "Email" }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="mx-auto max-w-2xl pt-24 px-8 pb-20">

        {/* Avatar and Name */}
        <div className="flex flex-col gap-4 mb-5">
          <Image
            src="/photo.png"
            width={300}
            height={300}
            className="w-28 h-28 object-cover rounded-full ring-2 ring-gray-200 ring-offset-2"
            alt="Bidhan"
          />
          <div className="flex items-center">
            <h1 className="text-lg font-bold text-gray-900">Bidhaan</h1>
            <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-5 h-5 text-blue-500 fill-current" data-testid="icon-verified" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
          </div>
        </div>

        {/* Intro */}
        <p className="text-sm text-gray-500 mb-3">
          Building simple software, usually.
        </p>


        {/* Socials */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              <span className="text-[14px]">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-6" />

        {/* Footer */}
        <p className="text-sm text-gray-400">
          say hi →{" "}
          <a
            href="https://x.com/bidhaan_daju"
              target="_blank"
                  rel="noopener noreferrer"
            className="text-gray-800 font-medium hover:text-black transition-colors"
          >
            @bidhaan_daju
          </a>
        </p>

      </div>
    </div>
  );
}