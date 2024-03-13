import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //   const [searchParam, setSearchParam] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate()


  console.log(searchParam);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log("call handle function");
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      setRecipeList(data?.data?.recipes);
      setSearchParam("");
      setLoading(false);
      console.log(data?.data?.recipes);
      navigate('/')
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");

    }
  }
  async function handleAddToFavorite(event) {
    let copFavoriteList = [...favoriteList];
    const index=copFavoriteList.findIndex((item)=>item.id===event.id)
   
    if(index===-1){
      copFavoriteList.push(event)
    }
    else{
      copFavoriteList.splice(index)
      console.log(copFavoriteList,'copFavoriteListcopFavoriteListcopFavoriteList');

    }
    setFavoriteList(copFavoriteList)
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        handleAddToFavorite,
        favoriteList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
