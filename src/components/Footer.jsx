import React from "react";
import backImage from "../assets/back.jpg";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${backImage})` }}
      className="flex h-fit flex-col items-center justify-center gap-3 border-t border-[#2bb3e7]/50 bg-cover bg-center bg-no-repeat px-2 py-5 text-center"
    >
      <p className="font-bold text-white">
        Copyright&copy; {new Date().getFullYear()}.{" "}
        <span className="text-lg text-[#2bb3e7]">Dominic Mungai</span>{" "}
      </p>
      <p className="text-white/60">All rights reserved.</p>
    </footer>
  );
}
