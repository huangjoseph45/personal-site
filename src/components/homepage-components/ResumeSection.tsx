import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import ThreeDDiv from "../3DDiv";

export default function ResumeSection({ resumeUrl }: { resumeUrl?: string }) {
  const nav = useNavigate();
  return (
    <section className="relative ">
      <div className="mx-4 md:mx-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-8  border-borderSecondary bg-bgsecondary pb-4 sm:px-8 sm:py-8 shadow-md backdrop-blur-sm md:grid-cols-12"
        >
          <ThreeDDiv />
          {/* Left: Icon */}
          <div className="md:flex hidden w-1/8 h-full md:col-span-2  md:justify-center">
            <span className="inline-flex items-center justify-center bg-bgPrimary text-secondary">
              <img
                src="src/assets/resume.png"
                className="w-full"
                aria-hidden="true"
              />
              <span className="sr-only">Resume</span>
            </span>
          </div>
          {/* Middle: Copy */}
          <div className="md:col-span-7 max-w-[40rem]">
            <h2 className="text-center sm:text-left text-4xl sm:text-3xl md:text-2xl font-semibold tracking-tight text-quarternary">
              Explore my experience
            </h2>
            <p className="md:block hidden mt-2 max-w-prose text-secondary">
              I’ve summarized my projects, skills, and impact in a concise
              resume. Take a look, and feel free to reach out if you’d like more
              details.
            </p>
          </div>
          {/* Right: Actions */}
          <div className="flex justify-end items-center md:col-span-3 flex-1 lg:mx-12">
            <div className="flex flex-col gap-3 md:items-end">
              <Button
                label="View Resume"
                onClick={() => nav("/resume")}
                disabled={false}
                variant="tertiary"
                size={1}
                fill={false}
              />

              {resumeUrl && (
                <Button
                  label="My Resume"
                  onClick={() => null}
                  disabled={false}
                  variant="primary"
                  size={1}
                  fill={false}
                >
                  <a
                    href={resumeUrl}
                    download
                    aria-label="Download resume as PDF"
                    className="inline-flex items-center gap-2 text-primary"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
