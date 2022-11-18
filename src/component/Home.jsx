import React, { useRef} from 'react'
import MainUi from '../Ui/MainUi'
import {Colect} from "../store/Collection";
import { useContext } from 'react';
const Home = () => {
    const {items} = useContext(Colect)
    const containerDiv = useRef()
    return (<>
        
        <div ref={containerDiv} className='w-[90%] h-[min-100vh] mt-24 flex flex-wrap justify-around  p-5 mx-auto '>
        {
                  items.value.map((ea, index) => {
                  return <MainUi key={ea.id} each={ea} index={index} />
    })
} 
          
      </div>   
  </>
        
  )
}

export default Home

// added={added} each={ ea } index={index} change={change} addedDelete={addedDelete}


