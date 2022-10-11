import React, { useRef} from 'react'
import MainUi from '../Ui/MainUi'


const Home = ({ change, items , added,addedDelete}) => {
    
    const containerDiv = useRef()

    return (<>
        
        <div ref={containerDiv} className='w-[90%] h-[min-100vh] flex flex-wrap justify-around  p-5 mx-auto '>
        {
              items.value.map((ea, index) => {
                  return <MainUi key={ea.id} added={added} each={ ea } index={index} change={change} addedDelete={addedDelete} />
        
    })
} 
          
      </div>   
  </>
        
  )
}

export default Home


