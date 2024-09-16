import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import "./App.css";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState("chicken");

    const fetchRecipes = async () => {
        try {
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}`
            );
            if (!res.ok) {
                throw new Error("Failed to fetch recipes.");
            }
            const data = await res.json();
            setRecipes(data.data.recipes);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, [inputValue]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    function handleClick() {
        handleInputChange();
    }

    if (loading) return <p id="loading_info">Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Navbar />
            <div className="input_div">
                <input
                    type="text"
                    placeholder="Search Item..."                    
                    onChange={handleInputChange}
                    className="navbar_input"
                />
                <button className="search_btn" onClick={handleClick}>
                    Search Item
                </button>
            </div>
            <h1 id="recipe_title">Recipes</h1>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <h2 id="recipe_heading">{recipe.title}</h2>
                        <img src={recipe.image_url} alt={recipe.title} />
                        <p id="recipe_publisher">{recipe.publisher}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
