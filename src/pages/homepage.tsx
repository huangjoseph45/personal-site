import React from "react";
import ProjectCard from "../components/homepage-components/ProjectCard";
import Intro from "../components/homepage-components/Intro";

import ResumeSection from "../components/homepage-components/ResumeSection";

const HomePage: React.FC<{
  showContact: boolean;
  setShowContact: (b: boolean) => void;
}> = ({ showContact, setShowContact }) => {
  const mdFiles = Object.keys(
    import.meta.glob("../../public/content/**/content.md", {
      eager: true,
      query: "raw",
    })
  ) as Array<string>;

  return (
    <div className="relative">
      <Intro showContact={() => setShowContact(!showContact)} />
      <ResumeSection />

      <h1 className="xl:px-12 md:px-8 px-4 mb-4">My Projects</h1>
      <ul className="w-full xl:px-12 md:px-8 px-4 flex flex-col gap-8 mb-16">
        {mdFiles?.reverse().map((file, index) => {
          return (
            <ProjectCard
              folder={`project-${mdFiles.length - index}`}
              key={file}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
