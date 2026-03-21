import React from "react";

export default function Navbar() {
  const [active, setActive] = React.useState("home");

  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const navbar = document.getElementById("navbar");

    const observer = new ResizeObserver(() => {
      document.documentElement.style.scrollPaddingTop =
        navbar.offsetHeight + "px";
    });

    observer.observe(navbar);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="navbar"
      className="sticky top-0 flex justify-center gap-4 border-b border-[#2bb3e7]/50 bg-[#000130] px-5 py-3 sm:gap-8 md:gap-12"
    >
      <a
        href="#home"
        className={`pb-1 font-bold transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
          active === "home" ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]" : "text-white"
        }`}
      >
        Home
      </a>

      <a
        href="#about"
        className={`pb-1 font-bold transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
          active === "about" ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]" : "text-white"
        }`}
      >
        About
      </a>

      <a
        href="#resume"
        className={`pb-1 font-bold transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
          active === "resume"
            ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
            : "text-white"
        }`}
      >
        Resume
      </a>

      <a
        href="#certifications"
        className={`pb-1 font-bold transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
          active === "certifications"
            ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
            : "text-white"
        }`}
      >
        Certifications
      </a>

      <a
        href="#contact"
        className={`pb-1 font-bold transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
          active === "contact"
            ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
            : "text-white"
        }`}
      >
        Contact
      </a>
    </header>
  );
}
