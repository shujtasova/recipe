import { useEffect, useState } from "react";
import "./App.css";
import video from "./food.mp4";
import MyRecipesComponent from "./MyRecipesComponent";

function App() {
  const MY_ID = "b4d46036";
  const MY_KEY = "d7c7bea0b9e13f78896e1ae84f4efb22";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setMyRecipes(data.hits);
    };

    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="search-container">
        <form onSubmit={finalSearch} className="form-container">
          <input
            className="search"
            onChange={myRecipeSearch}
            value={mySearch}
          />
          <button onClick={finalSearch}>
            <img
              src="https://img.icons8.com/fluency/48/000000/fry.png"
              alt="icon"
            />
          </button>
        </form>
      </div>

      <div className="recipies">
        {myRecipes.map((element, index) => (
          <MyRecipesComponent key={index}
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
