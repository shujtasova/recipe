function MyRecipesComponent({ label, image, calories, ingredients }) {
  return (
      <div className="recipe">
        <div className="dish-img">
            <img src={image} alt="dish" />
        </div>
        <div >

          
          <div className="description">
            <div className="container">
              <h2>{label}</h2>
            </div>
            
            <ul className="list">
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  <img
                    src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png "
                    alt="icon"
                    className="icon"
                  />
                  {ingredient}
                </li>
              ))}
            </ul>
            <hr></hr>
            <p>{calories.toFixed()} calories</p>
          </div>
        </div>
      </div>
  );
}

export default MyRecipesComponent;
