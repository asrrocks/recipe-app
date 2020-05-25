import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
import Axios from 'axios';

const Home = () => {

    const [search, setSearch] = useState("chicken");
    const [recipes, setRecipes] = useState([]);

    const APP_ID = "a99bd604";
    const APP_KEY = "801b3f6953e413a5d229de1043ba6dbd";

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        // console.log(res);
        setRecipes(res.data.hits);
    }

    const onInputChange = (e) => {
        setSearch(e.target.value);
    }
    const onSearchClick = () => {
        getRecipes();
    }
    return (
        <div>
            <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
            <RecipeCard recipes={recipes} />
        </div>
    );
}

export default Home;