import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="mx-auto min-h-[40rem] min-w-[30rem] h-screen bg-bgsecondary w-[60vw] flex items-center justify-center">
      <h1 className="text-center mx-auto -translate-y-[30vh] text-4xl">
        Error: Page not Found
      </h1>
    </div>
  );
};
export default ErrorPage;
