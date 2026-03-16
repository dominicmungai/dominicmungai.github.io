import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function App() {
  const [active, setActive] = React.useState("home");
  const formRef = React.useRef();

  // -------------------------------
  // Scroll spy: update active navbar link
  // -------------------------------
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

  // -------------------------------
  // Dynamic scroll padding based on navbar height
  // -------------------------------
  React.useEffect(() => {
    const navbar = document.getElementById("navbar");

    const observer = new ResizeObserver(() => {
      document.documentElement.style.scrollPaddingTop =
        navbar.offsetHeight + "px";
    });

    observer.observe(navbar);

    return () => observer.disconnect();
  }, []);

  // -------------------------------
  // EmailJS form submission
  // -------------------------------
  const sendEmail = (e) => {
    e.preventDefault();

    const btn = document.getElementById("submit");
    btn.disabled = true;
    btn.textContent = "Sending...";

    emailjs
      .sendForm(
        "service_xl83oot", // Service ID
        "template_8gdttna", // Template ID
        formRef.current, // form reference
        "IFo6KIFXAvd41uY98", // Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully! I'll get back to you soon.");
          formRef.current.reset();
        },
        () => {
          alert(
            "❌ Failed to send message. Please email me directly at dmungai65@gmail.com",
          );
        },
      )
      .finally(() => {
        btn.disabled = false;
        btn.textContent = "SEND MESSAGE";
      });
  };

  return (
    <div className="flex flex-col">
      <header
        id="navbar"
        className="sticky top-0 flex justify-center gap-4 border-b border-[#2bb3e7]/50 bg-[#000130] px-5 py-3 sm:gap-8 md:gap-12"
      >
        <a
          href="#home"
          className={`pb-1 font-bold text-white transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
            active === "home"
              ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
              : ""
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`pb-1 font-bold text-white transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
            active === "about"
              ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
              : ""
          }`}
        >
          About
        </a>
        <a
          href="#resume"
          className={`pb-1 font-bold text-white transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
            active === "resume"
              ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
              : ""
          }`}
        >
          Resume
        </a>
        <a
          href="#certifications"
          className={`pb-1 font-bold text-white transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
            active === "certifications"
              ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
              : ""
          }`}
        >
          Certifications
        </a>
        <a
          href="#contact"
          className={`pb-1 font-bold text-white transition hover:translate-y-0.5 hover:cursor-pointer hover:text-[#b7dceb] ${
            active === "contact"
              ? "border-b-2 border-[#2bb3e7] text-[#2bb3e7]"
              : ""
          }`}
        >
          Contact
        </a>
      </header>

      <section
        id="home"
        className="flex h-fit flex-col items-center justify-center bg-[url('/back.jpg')] bg-cover bg-center bg-no-repeat px-2 py-20 text-center sm:py-32"
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

      <section id="about" className="h-fit bg-[#010c23] px-6 py-15">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:gap-7">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            About Me
          </h2>
          <p className="text-white/70">
            Do you need to deploy a website, software, or app where the clients
            won't complain about quality? If, yes, I am the person you need!
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
            <div className="mt-1 w-full overflow-hidden rounded-lg border border-[#2bb3e7] md:w-1/2">
              <img
                src="Dominic.jpg"
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
              <div className="mt-auto grid gap-x-3 gap-y-2 text-sm text-nowrap sm:flex sm:flex-wrap sm:gap-y-5 lg:grid lg:grid-cols-3">
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
                <div className="flex items-center justify-center rounded-lg border border-[#2bb3e7]/50 bg-linear-to-b from-white/30 to-[#010c23]/70 px-4 py-3 text-center text-white sm:grow">
                  Highly effective
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="h-fit bg-[#020f2f] px-6 py-15">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:gap-7">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            My Resume
          </h2>

          <div className="flex w-full flex-col rounded-md border border-[#2bb3e7]/60 p-2 sm:p-3">
            <div className="flex flex-col gap-2 text-start sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xl font-bold text-white">
                Snr Quality Assurance Engineer
              </p>
              <p className="w-fit rounded-md bg-[#2bb3e7]/20 px-1 text-[#5fd2ff] sm:px-3 sm:py-1">
                Jan 2025 - Present
              </p>
            </div>
            <p className="mt-1 text-start text-white/70">
              The Wound Pros LLC, Remote
            </p>
            <div className="mt-3">
              <ul className="space-y-1 text-justify text-white">
                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Collaborate in an Agile environment with 2-week sprints,
                    actively participating in sprint planning, daily stand-ups,
                    sprint reviews, and retrospectives.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Design, develop, and execute manual and automated test cases
                    to validate core product functionality and ensure
                    high-quality releases.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Implement and maintain end-to-end automated test suites
                    using Cypress and Playwright, significantly reducing
                    regression testing time and improving coverage.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Perform functional, regression, smoke, exploratory,
                    integration, API, and UI testing across the web and mobile
                    platforms.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Contribute to test strategy and test design reviews,
                    ensuring alignment with business and technical requirements.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Develop reusable automation frameworks and utilities to
                    improve test efficiency and scalability.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>Conduct cross-browser and cross-device testing</span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Support continuous integration (CI) by integrating
                    automation tests with pipelines, enabling continuous
                    delivery (CD)
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Collaborate with developers and product managers to ensure
                    requirements are clear, testable, and aligned with
                    acceptance criteria.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Maintain and update test documentation, including test
                    cases, test data, and traceability matrices.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Work closely with customer support to reproduce reported
                    defects, ensuring timely resolution of production issues
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Enhance testing processes by introducing best practices in
                    defect management, test automation, and reporting.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full flex-col rounded-md border border-[#2bb3e7]/60 p-2 sm:p-3">
            <div className="flex flex-col gap-2 text-start sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xl font-bold text-white">
                Quality Assurance Engineer
              </p>
              <p className="w-fit rounded-md bg-[#2bb3e7]/20 px-1 text-[#5fd2ff] sm:px-3 sm:py-1">
                Jan 2024 - Jan 2025
              </p>
            </div>
            <p className="mt-1 text-start text-white/70">Testlio.com, Remote</p>
            <div className="mt-3">
              <ul className="space-y-1 text-justify text-white">
                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Collaborate with a globally distributed team to deliver
                    high-quality software testing services for various web and
                    mobile applications.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Utilize Testlio’s fused software testing methodology to
                    ensure seamless functionality, performance, and usability
                    across platforms.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Conduct both functional and non-functional testing,
                    leveraging tools such as Cypress, Jenkins and Postman to
                    automate test cases.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Report and track bugs, working closely with development
                    teams to ensure swift issue resolution and minimal
                    disruptions.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Lead efforts in crafting comprehensive test plans, defining
                    clear test scripts, and executing them in accordance with
                    client specifications.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Actively participate in client communications, providing
                    detailed test reports and ensuring alignment on testing
                    outcomes and timelines.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Engage in continuous learning and development through
                    Testlio's knowledge-sharing culture, contributing to the
                    evolution of best practices in quality assurance within a
                    remote work setting
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full flex-col rounded-md border border-[#2bb3e7]/60 p-2 sm:p-3">
            <div className="flex flex-col gap-2 text-start sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xl font-bold text-white">
                Quality Assurance Engineer
              </p>
              <p className="w-fit rounded-md bg-[#2bb3e7]/20 px-1 text-[#5fd2ff] sm:px-3 sm:py-1">
                Aug 2023 - Jan 2025
              </p>
            </div>
            <p className="mt-1 text-start text-white/70">
              Craft Silicon Ltd, Kenya
            </p>
            <div className="mt-3">
              <ul className="space-y-1 text-justify text-white">
                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Testing of the core banking, internet banking, and mobile
                    banking solutions.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>Planning and execution of testing activities.</span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Leading quality assurance initiatives for the development of
                    core banking and mobile banking applications, ensuring the
                    delivery of robust and secure financial software solutions.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Developing and executing comprehensive test plans, ensuring
                    the thorough validation of software functionalities,
                    security protocols, and system integrations.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>Identifying bugs and tracking them in Jira.</span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Generating detailed test documentation, including test
                    cases, test scripts, and test execution reports, to provide
                    clear insights into project progress.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Conducting in-depth root cause analyses and triaging of
                    identified defects, working collaboratively with development
                    teams to implement effective resolutions.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Contributing to the ongoing enhancement of quality assurance
                    processes, methodologies, and industry best practices
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Leading the development and execution of a robust regression
                    testing strategy, ensuring the seamless integration of new
                    features and maintaining system stability.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Participating in sprint planning meetings and providing
                    input on how best to incorporate QA activities into each
                    sprint cycle.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Utilizing Agile methodology to develop effective testing
                    strategy and ensure the timely delivery of high-quality
                    software products.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full flex-col rounded-md border border-[#2bb3e7]/60 p-2 sm:p-3">
            <div className="flex flex-col gap-2 text-start sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xl font-bold text-white">
                Microsoft Software Test Engineer
              </p>
              <p className="w-fit rounded-md bg-[#2bb3e7]/20 px-1 text-[#5fd2ff] sm:px-3 sm:py-1">
                Apr 2021 - Aug 2023
              </p>
            </div>
            <p className="mt-1 text-start text-white/70">
              Techno Brain Ltd, Kenya
            </p>
            <div className="mt-3">
              <ul className="space-y-1 text-justify text-white">
                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Conducting automation testing using Cypress, Postman, and
                    Power Automate App to reduce manual efforts while executing
                    repetitive tasks.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Writing and maintaining code scripts for test automation
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Conducting comprehensive testing on the Windows platform and
                    Microsoft Office suite to ensure the stability and good
                    performance of Windows updates when rolled out to customers.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Generating detailed progress reports on test execution,
                    utilizing Power BI for data visualization to effectively
                    communicate results to management.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Identifying and logging both regression and non-regression
                    bugs on Azure DevOps during test cycles, ensuring thorough
                    documentation and tracking.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Installing and configuring hardware and software required
                    for test execution, ensuring a seamless testing environment.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Designing and developing manual test case scenarios to cover
                    various use cases and edge cases, enhancing test coverage.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Contributing to the ongoing enhancement of quality assurance
                    processes, methodologies, and industry best practices
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Performing in-depth debugging and triaging of bugs and
                    defects, ensuring swift and accurate identification of root
                    causes.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Collaborating closely with Windows software developers to
                    resolve identified issues, facilitating efficient fixes and
                    improvements.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2bb3e7]"></span>
                  <span>
                    Collaborating with DevOps engineers to perform test setup
                    and create pipelines for continuous integration testing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="h-fit bg-[#010c23] px-6 py-15">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:gap-7">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            Certifications
          </h2>
          <div className="mt-5 flex w-full flex-col gap-4">
            <div className="flex w-full flex-col rounded-md border border-[#2bb3e7]/60 p-3">
              <p className="text-xl font-bold text-[#2bb3e7]">
                Certified Tester - Foundation Level
              </p>
              <p className="font-semibold text-white/70">ISTQB</p>
              <img
                src="/istqb.png"
                alt="ISTQB Logo"
                className="mt-2 size-full"
              />
            </div>
            <div className="flex w-full flex-col rounded-md border border-[#2bb3e7]/60 p-3">
              <p className="text-xl font-bold text-[#2bb3e7]">
                Fundamentals of Software Testing
              </p>
              <p className="font-semibold text-white/70">QATestLab</p>
              <img
                src="/qatestlab.png"
                alt="QATestLab Logo"
                className="mt-2 size-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="h-fit bg-[#020f2f] px-6 py-15">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center sm:gap-7">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            Let's work together
          </h2>
          <p className="text-white/70">
            Interested in working together on a project? Reach out to me or
            leave a message and I'll get back to you as soon as possible
          </p>
          <div className="flex w-full flex-col items-center sm:flex-row sm:justify-between">
            <div className="flex h-fit w-full flex-col items-center gap-2 p-4 sm:gap-5">
              <EnvelopeIcon className="h-10 w-10 text-[#2bb3e7]" />
              <p className="text-2xl font-bold text-white">Email</p>
              <p className="text-white/70">dmungai65@gmail.com</p>
            </div>
            <div className="flex h-fit w-full flex-col items-center justify-center gap-2 p-4 sm:gap-5">
              <PhoneIcon className="h-10 w-10 text-[#2bb3e7]" />
              <p className="text-2xl font-bold text-white">Phone</p>
              <p className="text-white/70">+254718230988</p>
            </div>

            <div className="flex h-fit w-full flex-col items-center justify-center gap-2 p-4 sm:gap-5">
              <FaLinkedin className="h-10 w-10 text-[#2bb3e7]" />
              <p className="text-2xl font-bold text-white">LinkedIn</p>
              <a
                href="http://www.linkedin.com/in/dominicmungai"
                className="text-white/70"
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
      <footer className="flex h-fit flex-col items-center justify-center gap-3 border-t border-[#2bb3e7]/50 bg-[url('/back.jpg')] bg-cover bg-center bg-no-repeat px-2 py-5 text-center">
        <p className="font-bold text-white">
          Copyright&copy; {new Date().getFullYear()}.{" "}
          <span className="text-lg text-[#2bb3e7]">Dominic Mungai</span>{" "}
        </p>
        <p className="text-white/80">All rights reserved.</p>
      </footer>
    </div>
  );
}
