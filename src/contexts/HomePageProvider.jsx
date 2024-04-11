import { useLocalStorageState } from "../hooks/useLocalStorage";
import { HomePageContext } from "./HomePageContexts";
import { useState } from "react";

function HomePageProvider({ children }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnSearchPage, setIsOnSearchPage] = useState(true);
  const [faved, setFaved] = useLocalStorageState([], "faved");
  const [favDisplay, setFavDisplay] = useState(faved);

  return (
    <HomePageContext.Provider
      value={{
        isDetailOpen,
        setIsDetailOpen,
        isLoading,
        setIsLoading,
        isOnSearchPage,
        setIsOnSearchPage,
        faved,
        setFaved,
        favDisplay,
        setFavDisplay,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}

export { HomePageProvider };
