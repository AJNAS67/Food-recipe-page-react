import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
export default function Home() {
  const {recipeList,Loading}=useContext(GlobalContext)
  console.log(recipeList,'recipeList');
  return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
    {recipeList.map((item)=><RecipeItem item={item}/>)}
  </div>;
}
