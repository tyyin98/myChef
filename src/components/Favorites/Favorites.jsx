import { useHomePage } from "../../hooks/useHomePage";
import FavItem from "./FavItem";

function Favorites() {
  const { favDisplay } = useHomePage();

  return (
    favDisplay.length > 0 && (
      <>
        <ul className=" mt-5 h-[75vh] overflow-y-auto rounded-lg bg-yellow-100 px-4 py-2">
          {favDisplay.map((favItem) => (
            <FavItem key={favItem.id} item={favItem} />
          ))}
        </ul>
      </>
    )
  );
}

export default Favorites;
