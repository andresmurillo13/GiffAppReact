import { useState } from "react";
import AddCategory from "./components/AddCategory";



const GiffExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory) => {
        console.log(newCategory)
        setCategories([...categories,newCategory]);
    }
        

    return (
        <>
            <h1>GiffExpertApp</h1>
           
            <AddCategory 
             
            onNewCategory={ onAddCategory }
            />
            

            <ol>{categories.map(category => {
                return <li key={category}>{category}</li>
            })}</ol>
        </>
    )
}

export default GiffExpertApp;
