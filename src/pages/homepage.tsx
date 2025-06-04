import React from "react";
import Header from "../components/header";
import ProjectCard from "../components/homepage-components/ProjectCard";
import Intro from "../components/homepage-components/Intro";
import Footer from "../components/footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <ul className="w-full xl:p-12 md:p-8 p-4">
        {" "}
        <ProjectCard folder="./public/content/project-1" />
      </ul>
      <Footer />
    </>
  );
};

export default HomePage;
