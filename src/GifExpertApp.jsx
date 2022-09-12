import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball'])
    
    const onAddCategory = ( newCategory ) => {
        /* const newItem = 'Valorant'
        setCategories([newItem, ...categories]) */
        
        if ( categories.includes(newCategory) ) return 

        setCategories((cat) => [newCategory, ...cat])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
                
            <AddCategory 
                onNewCategory={ value => onAddCategory(value) }
            />
  
            {
                categories.map( category => (
                        <GifGrid key={ category } category={ category } />
                    ) 
                )
            }
        </>
    )
}
