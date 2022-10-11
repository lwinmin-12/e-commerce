import React from 'react'
import MainUi from '../Ui/MainUi'

const SearchedItems = ({ search,change ,added,addedDelete }) => { 

  return (
    <div className='w-[90%] h-[min-100vh] flex flex-wrap justify-around  p-5 mx-auto '>
        {
              search.value.map((ea, index) => {
        return <MainUi added={added} key={ea.id} each={ ea } index={index} change={change} addedDelete={addedDelete} />
        
    })
} 
          
      </div>  
  )
}
// { console.log(search.value)}
export default SearchedItems