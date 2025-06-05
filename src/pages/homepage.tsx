import React, { useState } from "react";
import Header from "../components/header";
import ProjectCard from "../components/homepage-components/ProjectCard";
import Intro from "../components/homepage-components/Intro";
import Footer from "../components/footer";
import Modal from "../components/modal";
import InputBox from "../components/inputbox";
import Button from "../components/button";
import emailjs from "emailjs-com";

type ContactInfo = {
  name: string;
  email: string;
  message: string;
};

const HomePage: React.FC = () => {
  const [showContact, setShowContact] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    message: "",
  });
  return (
    <>
      <Header />
      <Intro />
      <ul className="w-full xl:p-12 md:p-8 p-4">
        {" "}
        <ProjectCard folder="./public/content/project-1" />
      </ul>
      <Footer contactFunc={() => setShowContact(!showContact)} />
      <Modal
        setShowModal={setShowContact}
        showModal={showContact}
        name={"Contact Me"}
      >
        <div className="flex flex-col gap-4">
          <InputBox
            setInput={(value) =>
              setContactInfo((prev) => ({ ...prev, name: value }))
            }
            label="name"
          />
          <InputBox
            setInput={(value) =>
              setContactInfo((prev) => ({ ...prev, email: value }))
            }
            label="email"
          />
          <InputBox
            setInput={(value) =>
              setContactInfo((prev) => ({ ...prev, name: value }))
            }
            large={true}
            label="message"
          />
          <Button fill={true}>
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-send"
            >
              <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;

const sendEmail = (contactInfo: ContactInfo): boolean => {
  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      "your_template_id",
      e.target as HTMLFormElement,
      "your_user_id"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Email sent!");
      },
      (error) => {
        console.log(error.text);
        alert("Email failed.");
      }
    );
};
