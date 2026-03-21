import backImage from "../assets/back.jpg";

export default function Home() {
  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${backImage})` }}
      className="flex h-fit flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-2 py-20 text-center sm:py-32"
    >
      <p className="text-sm text-white sm:text-lg">Hi there,</p>
      <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-7xl lg:text-8xl">
        I am <span className="text-[#2bb3e7]">Dominic Mungai</span>
      </h1>
      <p className="mt-6 text-lg text-white sm:text-2xl md:text-3xl lg:text-4xl">
        Senior quality assurance engineer
      </p>
      <p className="mt-6 text-sm text-white/70 sm:text-lg">
        ISTQB CTFL certified
      </p>
      <div className="mt-10 rounded-lg bg-[#74c4e4] px-3 text-sm text-[#000000] italic sm:text-lg">
        I love breaking down software and websites for fun
      </div>
      <button
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="mt-20 rounded-md border-r-2 border-b-4 border-l-2 border-r-[#2bb3e7] border-b-[#2bb3e7] border-l-[#2bb3e7] bg-[#000130] p-2 font-bold text-white transition hover:translate-y-0.5 hover:cursor-pointer hover:border-t-0 hover:bg-[#2bb3e7]"
      >
        HIRE ME!
      </button>
    </section>
  );
}
