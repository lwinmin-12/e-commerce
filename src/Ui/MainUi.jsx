import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Colect } from "./store/Collection";
import { useContext } from 'react';

const MainUi = ({ each, index }) => {


    
    // const data = useContext(Colect)

    // console.log(data);
    
  return (
    <div className='w-[20rem] group border-[2px] rounded my-3 shadow-lg pers'>
    {/* <img id={index+'img'} className='w-[75%] h-[200px] duration-200 object-left ml-3 object-contain origin-top-left group-hover:rotate-[-5deg]' src={each.image} alt="" />
    
    <div className='bg-slate-50 py-5 px-3 rounded duration-300 space-y-6 group-hover:shadow-md origin-top rotate-z'>
    <p className='text-xl'>{each.title.length > 25 ? each.title.substring(0, 25) + '....' : each.title }</p>
    <p className='text-gray-400'>
        {
        each.description.length > 70 ?each.description.substring(0,60)+'....':  each.description
         }   
    </p>
    <div className='flex justify-between items-center'>
        <div className='flex space-x-4'>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf/>
        </div>
        <div className='text-gray-600'>
            <p>count { each.rating.count}</p>
        </div>
    </div>
    <div className='flex justify-between items-center'>
        <p className='text-[18px] font-medium'> $ {each.price}</p>
                  {
                      addItem.includes(each) ? <button onClick={()=>addedDelete(each.id)} className='btn bg-violet-600 text-white'>Added</button> : <button onClick={()=>changerHandle(each,true)} className='btn '>Add Cart</button>

                  }
    </div>
    
    </div> */}
</div>

  )
}

export default MainUi;