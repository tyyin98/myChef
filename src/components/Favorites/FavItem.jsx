import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";
import { useHomePage } from "../../hooks/useHomePage";

function FavItem({ item }) {
  const { setFaved, setIsDetailOpen } = useHomePage();
  const { setCurrRecipeId } = useSearchRecipe();

  function handleClickItem() {
    setCurrRecipeId(item.id);
    setIsDetailOpen(true);
  }

  function handleDelete(id) {
    console.log("delete");
    setFaved((faved) => faved.filter((favedItem) => favedItem.id !== id));
  }

  return (
    <div className="flex justify-between">
      <li
        className="flex list-none items-center justify-start overflow-scroll border-b border-t border-white"
        onClick={handleClickItem}
      >
        <img className="w-32 p-2" src={item.image} alt={item.title} />
        <div>{item.title}</div>
      </li>
      <button onClick={() => handleDelete(item.id)}>&times;</button>
    </div>
  );
}

export default FavItem;
