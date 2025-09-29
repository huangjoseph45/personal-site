import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import PageLoadWrapper from "./components/PageLoadWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageLoadWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageLoadWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
