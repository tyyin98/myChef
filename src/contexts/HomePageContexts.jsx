import { useState, useContext, createContext } from "react";

const HomePageContext = createContext();

function HomePageProvdier({ children }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnSearchPage, setIsOnSearchPage] = useState(true);

  return (
    <HomePageContext.Provider
      value={{
        isDetailOpen,
        setIsDetailOpen,
        isLoading,
        setIsLoading,
        isOnSearchPage,
        setIsOnSearchPage,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}

function useHomePage() {
  const context = useContext(HomePageContext);
  if (context === undefined)
    throw new Error(
      "HomePage Context was used outside of the HomePageProvider",
    );
  return context;
}

export { HomePageProvdier, useHomePage };
