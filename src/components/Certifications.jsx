export default function Certifications() {
  return (
    <section id="certifications" className="h-fit bg-[#010c23] px-6 py-15">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:gap-7">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            Certifications
          </h2>
          <div className="mt-5 grid w-full gap-4">
            <div className="flex w-full gap-2 flex-col rounded-md border border-[#2bb3e7]/60 p-3">
              <p className="text-xl font-bold text-[#2bb3e7]">
                Certified Tester - Foundation Level
              </p>
              <p className="font-semibold text-white/60">ISTQB</p>
              <img
                src="./istqb.png"
                alt="ISTQB Logo"
                className="mt-2 rounded-lg w-full object-contain"
              />
            </div>
            <div className="flex w-full gap-2 flex-col rounded-md border border-[#2bb3e7]/60 p-3">
              <p className="text-xl font-bold text-[#2bb3e7]">
                Fundamentals of Software Testing
              </p>
              <p className="font-semibold text-white/60">QATestLab</p>
              <img
                src="./qatestlab.png"
                alt="QATestLab Logo"
                className="mt-2 rounded-lg w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
  );
}