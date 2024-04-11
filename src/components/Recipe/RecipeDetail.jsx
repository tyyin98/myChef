import { useEffect, useState } from "react";
import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";
import { useHomePage } from "../../hooks/useHomePage";

const apikey = "b5dd3b928c05439bb5a74517645529a4";
// const apikey = "7844e6f4170c48e8a6635f9ab3d2dab8";

function RecipeDetail() {
  const { setIsDetailOpen } = useHomePage();
  const { currRecipeId } = useSearchRecipe();
  // const { setFaved } = useHomePage();

  const [recipeDetail, setRecipeDetail] = useState();
  const [isLoading, setIsloading] = useState(false);

  useEffect(
    function () {
      async function fetchDetail() {
        setIsloading(true);
        try {
          const res = await fetch(
            `https://api.spoonacular.com/recipes/${currRecipeId}/information?apiKey=${apikey}`,
          );
          const data = await res.json();
          console.log(data);
          setRecipeDetail(data);
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsloading(false);
        }
      }
      fetchDetail();
    },
    [currRecipeId],
  );

  function handleCloseButton() {
    setIsDetailOpen(false);
  }

  // const { id, title, image } = recipeDetail ?? {};
  // function handleAddToFav() {
  //   console.log("add button clicked");
  //   setFaved((faved) => [...faved, { id, title, image }]);
  // }

  return (
    <div className="absolute inset-0 flex items-center justify-center  backdrop-blur-sm">
      {isLoading && "LOADING"}
      {recipeDetail && (
        <div className="grid-rows-3">
          <div>
            {/* <button onClick={handleAddToFav}>⭐️ add to favorites</button> */}
          </div>
          <div className="p-4">{recipeDetail.title}</div>
          <div className="h-[45vh] overflow-y-auto bg-yellow-100 p-4">
            <HtmlComponent htmlString={recipeDetail.instructions} />
          </div>
          <img src={recipeDetail.image} />
          <div className="flex items-center justify-center">
            <button
              onClick={handleCloseButton}
              className="w-60 rounded bg-yellow-500 px-4 py-2 font-bold text-black"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function HtmlComponent({ htmlString }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default RecipeDetail;
