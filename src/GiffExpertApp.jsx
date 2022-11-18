import { useState } from "react";
import {AddCategory, GiffGrid} from "./components";




const GiffExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        
        setCategories([ newCategory, ...categories]);
    }


    return (
        <>
            <h1>GiffExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />


            {
                categories.map((category) => (
                    <GiffGrid key={category}
                        category={category} />
                ))

            }



        </>
    )
}

export default GiffExpertApp;
