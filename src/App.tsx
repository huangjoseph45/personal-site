import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/homepage";
import ResumePage from "./pages/resumepage";
import PageLoadWrapper from "./components/PageLoadWrapper";
import Layout from "./components/layout";

// If ContactInfo isn't declared elsewhere, define it here or import it
type ContactInfo = {
  name: string;
  email: string;
  message: string;
};

function App() {
  const [showContact, setShowContact] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    message: "",
  });
  const [contactCount, setContactCount] = useState<number>(0);
  const [contactRes, setContactRes] = useState<number>(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // reset count whenever the contact modal/section is toggled
    setContactCount(0);
  }, [showContact]);

  return (
    <BrowserRouter>
      <PageLoadWrapper>
        <Layout
          showContact={showContact}
          setShowContact={setShowContact}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          contactCount={contactCount}
          setContactCount={setContactCount}
          setContactRes={setContactRes}
          contactRes={contactRes}
          error={error}
          setError={setError}
        >
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  showContact={showContact}
                  setShowContact={setShowContact}
                />
              }
            />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Layout>
      </PageLoadWrapper>
    </BrowserRouter>
  );
}

export default App;
