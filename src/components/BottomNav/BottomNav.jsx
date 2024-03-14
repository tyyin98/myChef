import { useHomePage } from "../../contexts/HomePageContexts";

function BottomNav() {
  const { isOnSearchPage, setIsOnSearchPage } = useHomePage();

  function handleSearchButton() {
    if (!isOnSearchPage) {
      setIsOnSearchPage(true);
    }
  }

  function handleFavButton() {
    if (isOnSearchPage) {
      setIsOnSearchPage(false);
    }
  }
  return (
    <div className="fixed inset-x-0 bottom-0 bg-yellow-500 ">
      <div className="flex h-12 items-center justify-around">
        <button onClick={() => handleSearchButton()}>Search</button>
        <button onClick={() => handleFavButton()}>Favorites</button>
      </div>
    </div>
  );
}

export default BottomNav;
