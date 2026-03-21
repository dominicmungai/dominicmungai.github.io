import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_xl83oot",
      "template_8gdttna",
      formRef.current,
      "IFo6KIFXAvd41uY98"
    );
  };

  return (
    <section id="contact" className="h-fit bg-[#020f2f] px-6 py-15">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:gap-7">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            Let's work together
          </h2>
          <p className="text-white/50">
            Interested in working together on a project? Reach out to me or
            leave a message and I'll get back to you as soon as possible
          </p>
          <div className="grid w-full gap-4 sm:grid-cols-3">
            <div className="flex w-full flex-col items-center justify-center gap-2 p-4 sm:gap-5">
              <EnvelopeIcon className="h-10 w-10 text-[#2bb3e7]" />
              <p className="text-2xl font-bold text-white">Email</p>
              <p className="text-white/50">dmungai65@gmail.com</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2 p-4 sm:gap-5">
              <PhoneIcon className="h-10 w-10 text-[#2bb3e7]" />
              <p className="text-2xl font-bold text-white">Phone</p>
              <p className="text-white/50">+254718230988</p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-2 p-4 sm:gap-5">
              <FaLinkedin className="h-10 w-10 text-[#2bb3e7]" />
              <p className="text-2xl font-bold text-white">LinkedIn</p>
              <a
                href="http://www.linkedin.com/in/dominicmungai"
                className="text-white/50"
                target="_blank"
              >
                dominicmungai
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="mt-5 w-full">
            {/* Top Inputs */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="w-full rounded-lg border border-[#2bb3e7] bg-white px-3 py-2 focus:ring-1 focus:ring-[#2bb3e7] focus:outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-lg border border-[#2bb3e7] bg-white px-3 py-2 focus:ring-1 focus:ring-[#2bb3e7] focus:outline-none"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                required
                pattern="\+[0-9]{12}"
                maxLength={13}
                minLength={13}
                title="Phone number must start with + followed by exactly 12 digits (13 characters total)"
                className="w-full rounded-lg border border-[#2bb3e7] bg-white px-3 py-2 focus:ring-1 focus:ring-[#2bb3e7] focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <textarea
                name="message"
                rows="8"
                placeholder="Message"
                required
                className="w-full rounded-lg border border-[#2bb3e7] bg-white px-3 py-2 focus:ring-1 focus:ring-[#2bb3e7] focus:outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <button
                id="submit"
                type="submit"
                className="rounded-md border border-[#2bb3e7] px-8 py-3 font-bold text-white hover:cursor-pointer hover:bg-[#2bb3e7] hover:text-[#020f2f]"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
  );
}