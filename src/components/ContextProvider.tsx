import { createContext } from "react";

const AppContext = createContext<any>(null);

export const ContextProvider: React.FC<{
  children: React.ReactNode;
  contextValues: any;
}> = ({ children, contextValues }) => {
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppContext;
