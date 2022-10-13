import React from 'react'
import MainUi from '../Ui/MainUi'
import { Colect } from "./store/Collection";
import { useContext } from 'react';
const SearchedItems = () => { 
    const {    searchedItems    } = useContext(Colect)
  return (
    <div className='w-[90%] h-[min-100vh] flex flex-wrap justify-around  p-5 mx-auto '>
        {
              searchedItems.value.map((ea, index) => {
        return <MainUi key={ea.id} each={ea} index={index} />
        
    })
} 
          
      </div>  
  )
}
// { console.log(search.value)}
export default SearchedItems
// added={added} key={ea.id} each={ ea } index={index} change={change} addedDelete={addedDelete}