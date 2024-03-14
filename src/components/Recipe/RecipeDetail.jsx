import { useEffect, useState } from "react";
import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";
import { useHomePage } from "../../hooks/useHomePage";

// b5dd3b928c05439bb5a74517645529a4
// 7844e6f4170c48e8a6635f9ab3d2dab8

function RecipeDetail() {
  const { setIsDetailOpen } = useHomePage();
  const { currRecipeId } = useSearchRecipe();

  const [recipeDetail, setRecipeDetail] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(
    function () {
      async function fetchDetail() {
        setIsloading(true);
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${currRecipeId}/information?apiKey=b5dd3b928c05439bb5a74517645529a4`,
        );
        const data = await res.json();
        console.log(data);
        setRecipeDetail(data);
        setIsloading(false);
      }
      fetchDetail();
    },
    [currRecipeId],
  );

  function handleCloseButton() {
    setIsDetailOpen(false);
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      {isLoading && "LOADING"}
      {!isLoading && (
        <div className="grid-rows-3">
          <div>
            <button onClick={handleCloseButton}>close</button>{" "}
          </div>
          <div className="p-4">Instrcutions:</div>
          <div className=" p-4">{recipeDetail.instructions}</div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
