"use client";

import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <div className="mx-auto max-w-sm sm:max-w-md pt-20 px-6 pb-20 sm:scale-120 origin-top transform">
        {/* Avatar */}
        <div className="mb-4">
          <Image
            src="/photo.png"
            width={224}
            height={224}
            className="w-28 h-28 object-cover rounded-full border border-gray-200"
            alt="Bidhan"
          />
        </div>

        {/* Intro */}
        <h1 className="text-lg font-medium text-gray-900">Hi, I'm Bidhan.</h1>
        <p className="text-sm text-gray-600 mb-2">
          Building simple software, usually.
        </p>

        {/* Now line */}
        <p className="inline-flex text-xs mb-6">
          <span className="text-gray-400 mr-1">↳ currently working on</span>
          <span className="text-gray-900">something cool</span>
        </p>

        {/* Socials */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
          <span className="text-gray-400 mr-1">Socials</span>
          <a
            href="https://x.com/bidhaan_daju"
            className="border border-dashed border-gray-400 rounded-md px-2 py-1 text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition-colors"
          >
            <FaXTwitter className="w-3 h-3" /> Twitter
          </a>
          <a
            href="https://github.com/bidhandhakal"
            className="border border-dashed border-gray-400 rounded-md px-2 py-1 text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition-colors"
          >
            <FaGithub className="w-3 h-3" /> GitHub
          </a>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="border border-dashed border-gray-400 rounded-md px-2 py-1 text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition-colors"
          >
            <FaInstagram className="w-3 h-3" /> Instagram
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="border border-dashed border-gray-400 rounded-md px-2 py-1 text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition-colors"
          >
            <FaYoutube className="w-3 h-3" /> YouTube
          </a>
        </div>

        {/* Divider */}
        <div className="border-b border-dashed border-gray-200 my-6"></div>

        {/* Projects
        <div className="mb-8">
          <h2 className="text-xs text-gray-400 uppercase mb-3">Projects</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Something cooking up
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">Cook</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2">
                Next.js
              </span>
            </div>
          </div>
        </div> */}

        {/* Footer */}
        <div className="mt-8 text-xs">
          <span className="text-gray-400">say hi → </span>
          <a
            href="https://x.com/bidhaan_daju"
            className="text-gray-800 hover:text-black transition-colors"
          >
            @bidhaan_daju
          </a>
        </div>
      </div>
    </div>
  );
}
