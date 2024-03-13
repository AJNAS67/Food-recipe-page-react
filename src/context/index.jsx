import { useState, createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //   const [searchParam, setSearchParam] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);

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
      setSearchParam('')
      setLoading(false);
      console.log(data?.data?.recipes);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam('')

    }
  }
  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit ,loading,recipeList}}
    >
      {children}
    </GlobalContext.Provider>
  );
}
