import { HomePageContext } from "./HomePageContexts";
import { useState } from "react";

function HomePageProvider({ children }) {
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

export { HomePageProvider };
