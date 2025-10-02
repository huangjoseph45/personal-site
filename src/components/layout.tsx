import React from "react";
import Header from "./header";
import Footer from "./footer";
import MailModal from "./MailModal";

export type ContactInfo = {
  name: string;
  email: string;
  message: string;
};

const Layout: React.FC<{
  children: React.ReactNode;
  showContact: boolean;
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>;
  setContactInfo: React.Dispatch<React.SetStateAction<any>>;
  contactInfo: ContactInfo;
  contactCount: number;
  setContactCount: React.Dispatch<React.SetStateAction<number>>;
  setContactRes: React.Dispatch<React.SetStateAction<number>>;
  contactRes: number;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  children,
  showContact,
  setShowContact,
  setContactInfo,
  contactInfo,
  setContactCount,
  contactCount,
  setContactRes,
  contactRes,
  error,
  setError,
}) => {
  return (
    <div className="relative bg-primary transition-colors duration-200">
      <MailModal
        setShowContact={setShowContact}
        showContact={showContact}
        setContactInfo={setContactInfo}
        contactInfo={contactInfo}
        setContactCount={setContactCount}
        contactCount={contactCount}
        setContactRes={setContactRes}
        contactRes={contactRes}
        setError={setError}
        error={error}
      />
      <Header setShowContact={setShowContact} />
      {children}
      <Footer contactFunc={() => setShowContact(!showContact)} />
    </div>
  );
};

export default Layout;
