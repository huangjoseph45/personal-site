import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

// One-page optimized version:
// - Print-focused CSS scales content slightly during print to guarantee a single page (Letter).
// - Reduced paddings/margins, tightened line-heights, slightly smaller fonts.
// - Keeps all content intact; only layout/styling adjusted.

// ----- Data -----
const CONTACT = {
  name: "Joseph Huang",
  phone: "551-998-0955",
  email: "huangjoseph45@gmail.com",
  linkedin: "https://www.linkedin.com/in/josephbhuang/",
  site: "https://josephbhuang.vercel.app/",
};

const EDUCATION = [
  {
    school: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    detail:
      "B.S. Computer Engineering - System Architecture and Distributed System & Software Design Concentrations",
    date: "May 2027",
    gpa: "GPA: 4.0",
  },
];

const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: [
      "Java",
      "Python",
      "C",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Go",
    ],
  },
  {
    label: "Technologies",
    items: [
      "React",
      "React Native",
      "Node",
      "Express",
      "Tailwind",
      "Flask",
      "Selenium",
      "PyTorch",
      "FastAPI",
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "Mongoose", "Supabase", "PostgreSQL"],
  },
  {
    label: "Tools",
    items: ["GitHub Actions", "Vercel", "Render", "Vite", "Docker"],
  },
  { label: "Cloud", items: ["Amazon S3", "Google Cloud"] },
];

const EXPERIENCE = [
  {
    leftTop: <b>Fullstack Developer Intern</b>,
    rightTop: <span>May. 2025 – Aug. 2025</span>,
    leftBottom: <span className="text-sm">Code for the Community</span>,
    rightBottom: <i className="text-sm">Remote</i>,
    bullets: [
      "Automated blog to notification pipeline with Python and GitHub Actions, sending real time updates to all users.",
      "Developed frontend for fundraiser page and integrated donation APIs, ensuring accurate campaign metrics.",
      "Built shop page for Middle East Children’s Alliance, integrating APIs with resilient fallbacks for a 50k+ userbase.",
    ],
  },
  {
    leftTop: <b>Software Engineer</b>,
    rightTop: <span>Sep. 2024 – Nov. 2024</span>,
    leftBottom: <span className="text-sm">Blueprint Fellowship</span>,
    rightBottom: <i className="text-sm">New Brunswick, NJ</i>,
    bullets: [
      "Architected a secure authentication system with Flask JWT and role-based access control, achieving 100% test coverage.",
      "Developed optimized RESTful endpoints for user, product, and order services, improving query performance by 30%.",
    ],
  },
  {
    leftTop: <b>Software Engineer</b>,
    rightTop: <span>Sep. 2024 – Present</span>,
    leftBottom: (
      <span className="text-sm">
        Undergraduate Student Alliance of Computer Scientists
      </span>
    ),
    rightBottom: <i className="text-sm">New Brunswick, NJ</i>,
    bullets: [
      "Completed 12+ workshops on DSA and software engineering, enhancing technical depth and problem solving skills.",
      "Built and deployed an interactive drawing canvas app with React, strengthening knowledge in component driven architecture and state management.",
    ],
  },
];

const PROJECTS = [
  {
    name: <b>News Cap - HackGT 12</b>,
    right: <span>Sep. 2025</span>,
    bottom: (
      <div className="flex gap-2">
        <a
          target="_blank"
          className="underline underline-offset-4"
          href="https://GitHub.com/WBryceP/Hackgt25-News-Cap"
        >
          GitHub
        </a>{" "}
        <a
          target="_blank"
          className="underline underline-offset-4"
          href="http://devpost.com/software/fact-checker-ga8kjp"
        >
          Devpost
        </a>
      </div>
    ),
    bullets: [
      "Developed a video fact-checking platform with React & FastAPI to verify claims and combat misinformation.",
      "Integrated TwelveLabs’ Pegasus for video analysis, recognized as a Top 3 project by the sponsor.",
      "Engineered scalable microservices with Docker Compose for seamless, containerized full-stack communication.",
    ],
  },

  {
    name: <b>News Cluster</b>,
    right: <span>Sept. 2025 – Present</span>,
    bottom: (
      <a
        target="_blank"
        className="underline underline-offset-4"
        href="https://GitHub.com/huangjoseph45/news-articles"
      >
        GitHub
      </a>
    ),
    bullets: [
      "Built a full-stack news aggregation platform gathering articles from over 70 of the largest U.S. newspapers.",
      "Implemented BIRCH clustering in Python to group articles by topic, helping readers explore diverse perspectives.",
      "Developed scalable backend server in Go for efficient data ingestion, preprocessing, and clustering pipeline.",
      "Designed responsive React/Tailwind frontend to deliver clustered articles with  topic-based exploration.",
    ],
  },

  {
    name: <b>Imagine Collective </b>,
    right: <span>Jan. 2025 – May. 2025 </span>,
    bottom: (
      <a
        target="_blank"
        className="underline underline-offset-4"
        href="https://imagine-collective.tech/"
      >
        imagine-collective.tech
      </a>
    ),
    bullets: [
      "Deployed full-stack e-commerce platform with 20 REST APIs for authentication, product browsing, and order management.",
      "Integrated Stripe for secure checkout and webhook-based real-time order confirmation.",
      "Built responsive, animated UI with Tailwind & Framer Motion, achieving 95+ Lighthouse score.",
      "Integrated AWS S3 for scalable, high-availability product image storage and retrieval.",
    ],
  },
];

// ----- Component -----
export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.assert(
      Array.isArray(EDUCATION) && EDUCATION.length > 0,
      "EDUCATION should be a non-empty array"
    );
    console.assert(
      Array.isArray(SKILLS) && SKILLS.every((s) => Array.isArray(s.items)),
      "SKILLS items should be arrays"
    );
    console.assert(
      Array.isArray(EXPERIENCE) &&
        EXPERIENCE.every((e) => Array.isArray(e.bullets)),
      "EXPERIENCE bullets should be arrays"
    );
    console.assert(
      Array.isArray(PROJECTS) &&
        PROJECTS.every((p) => Array.isArray(p.bullets)),
      "PROJECTS bullets should be arrays"
    );
    if (resumeRef.current === null) {
      console.warn(
        "[TEST] resumeRef not mounted yet — check component structure."
      );
    }
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Joseph-Huang-Resume",
    pageStyle: `
      @page { size: 8.5in 11in; margin: 0.4in; }
      @media print {
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      }
    `,
  });

  const handleDownloadPDF = () => {
    if (typeof window !== "undefined" && typeof window.print === "function") {
      resumeRef.current?.scrollIntoView({ block: "start" });
      if (!resumeRef.current) return;
      setTimeout(() => handlePrint(), 0);
    } else {
      console.error("Print API is not available in this environment.");
      alert(
        "PDF download isn't supported in this environment. Try using your browser's Print to PDF."
      );
    }
  };

  return (
    <div className="text-black min-h-screen w-full  p-4 print:p-0">
      <style>{`
        /* Page setup */
        @page { size: 8.5in 11in; margin: 0.4in; }
        
        /* Tighten everything for one-page fit */
        .resume-root { font-size: 13px; line-height: 1.2; }
        .resume-root .section-title { font-size: 16px; }
        .resume-root .name { font-size: 28px; }
        .resume-root .subheading-top { font-size: 14px; }
        .resume-root .subheading-bottom { font-size: 12px; }
        .resume-root .tight-list li { margin-top: 0.15rem; margin-bottom: 0.15rem; }
        .resume-root .chip a { text-decoration: underline; text-underline-offset: 4px; }

        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          /* Scale the page slightly to guarantee single-page fit */
          .print-scale { transform: scale(1.0); transform-origin: top left;  }
          /* Remove shadows/borders that waste space */
          .no-chrome { box-shadow: none !important; border: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[850px] bg-white shadow-xl ring-1 ring-black/5 rounded-md no-chrome">
        {/* Controls */}
        <div className="flex justify-end p-3 no-print">
          <button
            onClick={handleDownloadPDF}
            data-testid="download-pdf"
            className="px-3 py-1.5 text-sm bg-neutral-900 text-white rounded hover:bg-neutral-700"
          >
            Download PDF
          </button>
        </div>

        {/* Resume content */}
        <div ref={resumeRef} className="print-scale resume-root">
          {/* Heading */}
          <header className="px-8 pt-3 pb-3">
            <div className="text-center">
              <h1 className="name font-semibold tracking-tight [font-variant:small-caps]">
                {CONTACT.name}
              </h1>
              <div className="mt-1 text-sm text-neutral-800 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                <span>{CONTACT.phone}</span>
                <span className="opacity-60">|</span>
                <a
                  target="_blank"
                  className="chip"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
                <span className="opacity-60">|</span>
                <a target="_blank" className="chip" href={CONTACT.linkedin}>
                  linkedin.com/in/josephbhuang
                </a>
                <span className="opacity-60">|</span>
                <a target="_blank" className="chip" href={CONTACT.site}>
                  josephbhuang.vercel.app
                </a>
              </div>
            </div>
          </header>

          {/* Body */}
          <main className="px-8 pb-8 pt-1 space-y-6">
            {/* Education */}
            <Section title="Education">
              <ul className="list-none pl-0 space-y-2">
                {EDUCATION.map((e, i) => (
                  <li key={i}>
                    <ResumeSubheading
                      leftTop={<b>{e.school}</b>}
                      rightTop={<span>{e.location}</span>}
                      leftBottom={
                        <span className="subheading-bottom">{e.detail}</span>
                      }
                      rightBottom={
                        <i className="subheading-bottom">{e.date}</i>
                      }
                    />
                    <div className="-mt-0.5 text-xs">{e.gpa}</div>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Technical Skills */}
            <Section title="Technical Skills">
              <ul className="list-none pl-0 text-sm">
                {SKILLS.map(({ label, items }) => (
                  <li key={label} className="-mb-0.5 last:mb-0">
                    <b>{label}</b>: {items.join(", ")}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Experience */}
            <Section title="Experience">
              <ul className="list-none pl-0 space-y-4 pt-2">
                {EXPERIENCE.map((ex, idx) => (
                  <li key={idx} className="-mt-2">
                    <ResumeSubheading
                      leftTop={ex.leftTop}
                      rightTop={ex.rightTop}
                      leftBottom={ex.leftBottom}
                      rightBottom={ex.rightBottom}
                    />
                    <TightList items={ex.bullets} />
                  </li>
                ))}
              </ul>
            </Section>

            {/* Projects */}
            <Section title="Projects">
              <ul className="list-none pl-0 space-y-2 ">
                {PROJECTS.map((p, idx) => (
                  <li key={idx}>
                    <ProjectHeading
                      left={p.name}
                      right={p.right}
                      bottom={p.bottom}
                    />
                    <TightList items={p.bullets} />
                  </li>
                ))}
              </ul>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="break-inside-avoid">
      <h2 className="-mt-4 section-title [font-variant:small-caps] tracking-wide">
        {title}
      </h2>
      <div className="h-px bg-black/80 mb-2" />
      {children}
    </section>
  );
}

function ResumeSubheading({
  leftTop,
  rightTop,
  leftBottom,
  rightBottom,
}: {
  leftTop: React.ReactNode;
  rightTop: React.ReactNode;
  leftBottom: React.ReactNode;
  rightBottom: React.ReactNode;
}) {
  return (
    <div className="-mt-1 break-inside-avoid">
      <div className="flex items-baseline justify-between">
        <div className="subheading-top">{leftTop}</div>
        <div className="subheading-top">{rightTop}</div>
      </div>
      <div className="-mt-0.5 flex items-baseline justify-between text-xs">
        <div className="subheading-bottom">{leftBottom}</div>
        <div className="subheading-bottom italic">{rightBottom}</div>
      </div>
    </div>
  );
}

function ProjectHeading({
  left,
  right,
  bottom,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  bottom: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline justify-between text-sm">
        <div className="font-medium">{left}</div>
        <div>{right}</div>
      </div>
      <div className="mb-[2px]">{bottom}</div>
    </div>
  );
}

function TightList({ items }: { items: string[] }) {
  return (
    <ul className="tight-list list-disc pl-3 text-[13px] leading-snug">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}
