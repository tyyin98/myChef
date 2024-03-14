import { useContext } from "react";
import { HomePageContext } from "../contexts/HomePageContexts";

function useHomePage() {
  const context = useContext(HomePageContext);
  if (context === undefined)
    throw new Error(
      "HomePage Context was used outside of the HomePageProvider",
    );
  return context;
}

export { useHomePage };
