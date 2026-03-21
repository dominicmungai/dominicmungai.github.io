export default function About() {
  return (
    <section id="about" className="h-fit bg-[#010c23] px-6 py-15">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:gap-7">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            About Me
          </h2>
          <p className="text-white/50">
            Do you need to deploy a website, software, or app where the clients
            won't complain about quality? If, yes, I am the person you need!
          </p>

          <div className="flex flex-col gap-3 md:flex-row">
            <div className="mt-1 w-full overflow-hidden rounded-lg border border-[#2bb3e7] md:w-1/2">
              <img
                src="./Dominic.jpg"
                alt="Profile"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="mt-4 flex w-full flex-col gap-2 sm:gap-4 md:mt-0 md:w-1/2">
              <p className="text-justify text-sm text-white">
                I am a Senior Quality Assurance Engineer with over 5 years of
                experience in software testing and quality management. I have a
                strong background in both manual and automated testing and hold
                the ISTQB CTFL certification. Throughout my career, I have
                worked on a wide range of projects including web applications,
                mobile platforms, and desktop software, ensuring that products
                meet high standards of reliability and performance. I specialize
                in identifying defects early in the development lifecycle and
                collaborating closely with developers and product teams to
                deliver stable, high-quality releases. I am passionate about
                breaking down complex systems, uncovering hidden issues, and
                continuously improving testing processes to deliver the best
                possible user experience.
              </p>
              <h1 className="my-2 text-lg font-bold text-[#00b7ff]">
                MY CORE SKILLS
              </h1>
              <div className="mt-auto grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-nowrap sm:gap-y-5 lg:grid-cols-3">
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Manual testing
                </div>
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Automated testing
                </div>
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Test case design
                </div>
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Critical thinking
                </div>
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Attention to details
                </div>
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Creativity
                </div>
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Problem solving
                </div>
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Good analysis
                </div>
                <div className="col-span-2 flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow lg:col-auto">
                  Highly effective
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}