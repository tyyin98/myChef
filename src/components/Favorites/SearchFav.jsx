import { useEffect, useState } from "react";
import { useHomePage } from "../../hooks/useHomePage";

function SearchFav() {
  const [favQuery, setFavQuery] = useState("");
  const { faved, setFavDisplay } = useHomePage();

  function handleSearchFavChange(query) {
    setFavQuery(query);
  }

  useEffect(
    function () {
      if (favQuery !== "") {
        setFavDisplay(
          faved.filter((value) =>
            value.title.toLowerCase().includes(favQuery.toLowerCase()),
          ),
        );
      } else {
        setFavDisplay(faved);
      }
    },
    [favQuery, faved, setFavDisplay],
  );

  return (
    <div className="flex items-center justify-center">
      <input
        className="my-1 h-8 w-80  rounded-lg p-2 placeholder:text-center"
        type="text"
        placeholder="🔍 Search favorites..."
        value={favQuery}
        onChange={(e) => handleSearchFavChange(e.target.value)}
      />
    </div>
  );
}

export default SearchFav;
