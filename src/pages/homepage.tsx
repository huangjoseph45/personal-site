import React, { useEffect, useState } from "react";
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
  const [contactCount, setContactCount] = useState<number>(0);

  const [contactRes, setContactRes] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const mdFiles = Object.keys(
    import.meta.glob("../../public/content/**/content.md", {
      eager: true,
      query: "raw",
    })
  ) as Array<string>;

  useEffect(() => {
    setContactRes(0);
  }, [showContact]);
  return (
    <>
      <Header />
      <Intro showContact={() => setShowContact(!showContact)} />
      <ul className="w-full xl:p-12 md:p-8 p-4 flex flex-col gap-8">
        {mdFiles?.reverse().map((file, index) => {
          return (
            <ProjectCard
              folder={`project-${mdFiles.length - index}`}
              key={file}
            />
          );
        })}
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
              setContactInfo((prev) => ({ ...prev, message: value }))
            }
            large={true}
            label="message"
          />
          <Button
            fill={true}
            onClick={async () => {
              const res = (await sendEmail(
                contactInfo,
                setContactCount,
                setError,
                contactCount
              )) as boolean;
              if (res) {
                setContactRes(1);
              } else {
                setContactRes(2);
              }
            }}
          >
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
          {contactRes == 1 ? (
            <p className="text-quarternary">Sent Successfully!</p>
          ) : contactRes == 2 ? (
            <p className="text-quarternary">{error}</p>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </>
  );
};

export default HomePage;

const sendEmail = async (
  contactInfo: ContactInfo,
  setContactCount: React.Dispatch<React.SetStateAction<number>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  contactCount: number
): Promise<boolean> => {
  try {
    if (contactCount > 3) {
      console.log("HI");
      throw new Error("You have sent too many requests! Try again later!");
    }
    if (contactInfo.email.length === 0 || contactInfo.name.length === 0) {
      throw new Error("Please add your contact info!");
    }
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      contactInfo,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    setContactCount((prev) => prev + 1);
    return Math.floor(result.status / 100) == 2;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong sending your email.";
    console.error(message);
    setError(message);
    return false;
  }
};
