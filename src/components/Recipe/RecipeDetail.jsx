import { useEffect, useState } from "react";
import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";
import { useHomePage } from "../../contexts/HomePageContexts";
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
          <div className="p-4">Instrcutions:</div>
          <div className="p-4">{recipeDetail.instructions}</div>
          <div>
            <button onClick={handleCloseButton}>close</button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;

// const detailRecipe = {
//   vegetarian: false,
//   vegan: false,
//   glutenFree: false,
//   dairyFree: false,
//   veryHealthy: true,
//   cheap: false,
//   veryPopular: false,
//   sustainable: false,
//   lowFodmap: false,
//   weightWatcherSmartPoints: 11,
//   gaps: "no",
//   preparationMinutes: -1,
//   cookingMinutes: -1,
//   aggregateLikes: 2,
//   healthScore: 90,
//   creditsText: "foodista.com",
//   sourceName: "foodista.com",
//   pricePerServing: 168.12,
//   extendedIngredients: [
//     {
//       id: 20081,
//       aisle: "Baking",
//       image: "flour.png",
//       consistency: "SOLID",
//       name: "flour",
//       nameClean: "wheat flour",
//       original: "2 tablespoons Flour",
//       originalName: "Flour",
//       amount: 2,
//       unit: "tablespoons",
//       meta: [],
//       measures: {
//         us: {
//           amount: 2,
//           unitShort: "Tbsps",
//           unitLong: "Tbsps",
//         },
//         metric: {
//           amount: 2,
//           unitShort: "Tbsps",
//           unitLong: "Tbsps",
//         },
//       },
//     },
//     {
//       id: 11291,
//       aisle: "Produce",
//       image: "spring-onions.jpg",
//       consistency: "SOLID",
//       name: "green onions",
//       nameClean: "spring onions",
//       original: "cup Green Onions, chopped",
//       originalName: "Green Onions, chopped",
//       amount: 1,
//       unit: "cup",
//       meta: ["chopped"],
//       measures: {
//         us: {
//           amount: 1,
//           unitShort: "cup",
//           unitLong: "cup",
//         },
//         metric: {
//           amount: 100,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 1085,
//       aisle: "Milk, Eggs, Other Dairy",
//       image: "milk.jpg",
//       consistency: "LIQUID",
//       name: "non-fat milk",
//       nameClean: "fat free milk",
//       original: "1 1/4 cups Non-Fat Milk",
//       originalName: "Non-Fat Milk",
//       amount: 1.25,
//       unit: "cups",
//       meta: [],
//       measures: {
//         us: {
//           amount: 1.25,
//           unitShort: "cups",
//           unitLong: "cups",
//         },
//         metric: {
//           amount: 306.25,
//           unitShort: "ml",
//           unitLong: "milliliters",
//         },
//       },
//     },
//     {
//       id: 4053,
//       aisle: "Oil, Vinegar, Salad Dressing",
//       image: "olive-oil.jpg",
//       consistency: "SOLID",
//       name: "olive oil",
//       nameClean: "olive oil",
//       original: "2 tablespoons Olive Oil",
//       originalName: "Olive Oil",
//       amount: 2,
//       unit: "tablespoons",
//       meta: [],
//       measures: {
//         us: {
//           amount: 2,
//           unitShort: "Tbsps",
//           unitLong: "Tbsps",
//         },
//         metric: {
//           amount: 2,
//           unitShort: "Tbsps",
//           unitLong: "Tbsps",
//         },
//       },
//     },
//     {
//       id: 11282,
//       aisle: "Produce",
//       image: "brown-onion.png",
//       consistency: "SOLID",
//       name: "onion",
//       nameClean: "onion",
//       original: "2 tablespoons Onion, minced",
//       originalName: "Onion, minced",
//       amount: 2,
//       unit: "tablespoons",
//       meta: ["minced"],
//       measures: {
//         us: {
//           amount: 2,
//           unitShort: "Tbsps",
//           unitLong: "Tbsps",
//         },
//         metric: {
//           amount: 2,
//           unitShort: "Tbsps",
//           unitLong: "Tbsps",
//         },
//       },
//     },
//     {
//       id: 1033,
//       aisle: "Cheese",
//       image: "parmesan.jpg",
//       consistency: "SOLID",
//       name: "parmesan cheese",
//       nameClean: "parmesan",
//       original: "1/4 cup Parmesan Cheese, grated",
//       originalName: "Parmesan Cheese, grated",
//       amount: 0.25,
//       unit: "cup",
//       meta: ["grated"],
//       measures: {
//         us: {
//           amount: 0.25,
//           unitShort: "cups",
//           unitLong: "cups",
//         },
//         metric: {
//           amount: 25,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 10511297,
//       aisle: "Produce",
//       image: "parsley.jpg",
//       consistency: "SOLID",
//       name: "parsley",
//       nameClean: "fresh parsley",
//       original: "cup Fresh Parsley or Basil, chopped",
//       originalName: "Fresh Parsley or Basil, chopped",
//       amount: 1,
//       unit: "cup",
//       meta: ["fresh", "chopped"],
//       measures: {
//         us: {
//           amount: 1,
//           unitShort: "cup",
//           unitLong: "cup",
//         },
//         metric: {
//           amount: 60,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 20420,
//       aisle: "Pasta and Rice",
//       image: "fusilli.jpg",
//       consistency: "SOLID",
//       name: "tubular pasta",
//       nameClean: "pasta",
//       original: "8 ounces Tubular Pasta",
//       originalName: "Tubular Pasta",
//       amount: 8,
//       unit: "ounces",
//       meta: [],
//       measures: {
//         us: {
//           amount: 8,
//           unitShort: "oz",
//           unitLong: "ounces",
//         },
//         metric: {
//           amount: 226.796,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 11304,
//       aisle: "Produce",
//       image: "peas.jpg",
//       consistency: "SOLID",
//       name: "peas",
//       nameClean: "petite peas",
//       original: "1 cup Frozen Peas, thawed",
//       originalName: "Frozen Peas, thawed",
//       amount: 1,
//       unit: "cup",
//       meta: ["frozen", "thawed"],
//       measures: {
//         us: {
//           amount: 1,
//           unitShort: "cup",
//           unitLong: "cup",
//         },
//         metric: {
//           amount: 145,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 6168,
//       aisle: "Condiments",
//       image: "hot-sauce-or-tabasco.png",
//       consistency: "LIQUID",
//       name: "dsh pepper sauce",
//       nameClean: "hot sauce",
//       original: "1 dsh Hot Pepper Sauce",
//       originalName: "dsh Hot Pepper Sauce",
//       amount: 1,
//       unit: "",
//       meta: ["hot"],
//       measures: {
//         us: {
//           amount: 1,
//           unitShort: "",
//           unitLong: "",
//         },
//         metric: {
//           amount: 1,
//           unitShort: "",
//           unitLong: "",
//         },
//       },
//     },
//     {
//       id: 15121,
//       aisle: "Canned and Jarred",
//       image: "canned-tuna.png",
//       consistency: "SOLID",
//       name: "water-packed tuna",
//       nameClean: "tuna packed in water",
//       original: "6 1/2 ounces Can Water-Packed Tuna, drained",
//       originalName: "Water-Packed Tuna, drained",
//       amount: 6.5,
//       unit: "ounces",
//       meta: ["drained"],
//       measures: {
//         us: {
//           amount: 6.5,
//           unitShort: "oz",
//           unitLong: "ounces",
//         },
//         metric: {
//           amount: 184.272,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//   ],
//   id: 654959,
//   title: "Pasta With Tuna",
//   readyInMinutes: 45,
//   servings: 4,
//   sourceUrl: "http://www.foodista.com/recipe/K6QWSKQM/pasta-with-tuna",
//   image: "https://spoonacular.com/recipeImages/654959-556x370.jpg",
//   imageType: "jpg",
//   summary:
//     'Pasta With Tunan is a <b>pescatarian</b> main course. This recipe serves 4. For <b>$1.68 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. One serving contains <b>423 calories</b>, <b>24g of protein</b>, and <b>10g of fat</b>. 2 people have made this recipe and would make it again. This recipe from Foodista requires flour, parsley, non-fat milk, and parmesan cheese. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is amazing. <a href="https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303">Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, <a href="https://spoonacular.com/recipes/tuna-pasta-565100">Tuna Pasta</a>, and <a href="https://spoonacular.com/recipes/tuna-pasta-89136">Tuna Pasta</a> are very similar to this recipe.',
//   cuisines: [],
//   dishTypes: ["side dish", "lunch", "main course", "main dish", "dinner"],
//   diets: ["pescatarian"],
//   occasions: [],
//   winePairing: {
//     pairedWines: [],
//     pairingText:
//       "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
//     productMatches: [],
//   },
//   instructions:
//     "<ol><li>Cook pasta in a large pot of boiling water until al dente. Drain and return to warm pot. Put olive oil in saucepan and add onion. Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens. Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce. Pour over pasta and stir gently to mix. Serve at once.</li></ol>",
//   analyzedInstructions: [
//     {
//       name: "",
//       steps: [
//         {
//           number: 1,
//           step: "Cook pasta in a large pot of boiling water until al dente.",
//           ingredients: [
//             {
//               id: 20420,
//               name: "pasta",
//               localizedName: "pasta",
//               image: "fusilli.jpg",
//             },
//             {
//               id: 14412,
//               name: "water",
//               localizedName: "water",
//               image: "water.png",
//             },
//           ],
//           equipment: [
//             {
//               id: 404752,
//               name: "pot",
//               localizedName: "pot",
//               image: "stock-pot.jpg",
//             },
//           ],
//         },
//         {
//           number: 2,
//           step: "Drain and return to warm pot. Put olive oil in saucepan and add onion.",
//           ingredients: [
//             {
//               id: 4053,
//               name: "olive oil",
//               localizedName: "olive oil",
//               image: "olive-oil.jpg",
//             },
//             {
//               id: 11282,
//               name: "onion",
//               localizedName: "onion",
//               image: "brown-onion.png",
//             },
//           ],
//           equipment: [
//             {
//               id: 404669,
//               name: "sauce pan",
//               localizedName: "sauce pan",
//               image: "sauce-pan.jpg",
//             },
//             {
//               id: 404752,
//               name: "pot",
//               localizedName: "pot",
//               image: "stock-pot.jpg",
//             },
//           ],
//         },
//         {
//           number: 3,
//           step: "Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens.",
//           ingredients: [
//             {
//               id: 20081,
//               name: "all purpose flour",
//               localizedName: "all purpose flour",
//               image: "flour.png",
//             },
//             {
//               id: 1077,
//               name: "milk",
//               localizedName: "milk",
//               image: "milk.png",
//             },
//           ],
//           equipment: [
//             {
//               id: 404661,
//               name: "whisk",
//               localizedName: "whisk",
//               image: "whisk.png",
//             },
//           ],
//         },
//         {
//           number: 4,
//           step: "Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce.",
//           ingredients: [
//             {
//               id: 6168,
//               name: "hot sauce",
//               localizedName: "hot sauce",
//               image: "hot-sauce-or-tabasco.png",
//             },
//             {
//               id: 11291,
//               name: "green onions",
//               localizedName: "green onions",
//               image: "spring-onions.jpg",
//             },
//             {
//               id: 11297,
//               name: "parsley",
//               localizedName: "parsley",
//               image: "parsley.jpg",
//             },
//             {
//               id: 1041009,
//               name: "cheese",
//               localizedName: "cheese",
//               image: "cheddar-cheese.png",
//             },
//             {
//               id: 11304,
//               name: "peas",
//               localizedName: "peas",
//               image: "peas.jpg",
//             },
//             {
//               id: 10015121,
//               name: "tuna",
//               localizedName: "tuna",
//               image: "canned-tuna.png",
//             },
//           ],
//           equipment: [],
//         },
//         {
//           number: 5,
//           step: "Pour over pasta and stir gently to mix.",
//           ingredients: [
//             {
//               id: 20420,
//               name: "pasta",
//               localizedName: "pasta",
//               image: "fusilli.jpg",
//             },
//           ],
//           equipment: [],
//         },
//         {
//           number: 6,
//           step: "Serve at once.",
//           ingredients: [],
//           equipment: [],
//         },
//       ],
//     },
//   ],
//   originalId: null,
//   spoonacularScore: 93.85128021240234,
//   spoonacularSourceUrl: "https://spoonacular.com/pasta-with-tuna-654959",
// };
