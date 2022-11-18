import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Colect } from '../store/Collection';
import { useContext } from 'react';
import StarRatings from 'react-star-ratings';
import {logDOM} from "@testing-library/react";


const MainUi = ({ each, index }) => {


    
    const {addItem,addedDelete,changerHandle} = useContext(Colect)
    // console.log(each)

    
  return (
    <div className='w-[20rem] group border-[2px] rounded my-3 shadow-lg pers'>
     <img id={index+'img'} className='w-[75%] h-[200px] duration-200 object-left ml-3 object-contain origin-top-left group-hover:rotate-[-5deg]' src={each.image} alt="" />
    
          <div className='bg-slate-50 py-5 px-2 rounded duration-300  group-hover:shadow-md origin-top rotate-z'>
              
              <p className='text-[21px] font-sans'>{each.title.length > 30 ? each.title.substring(0, 23) + '....' : each.title}</p>

        <div className='my-5 space-y-4'>
              <p className='text-gray-500 text-[15px]'>
        {
        each.description.length > 70 ?each.description.substring(0,60)+'....':  each.description
         }
    </p>
    <div className='flex justify-between items-center'>
            <StarRatings
                rating={each.rating.rate}
                starRatedColor="gold"
                svgIconPath='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="3px"
            />

        <div className='text-gray-500 flex items-center'>
            <p>count { each.rating.count}</p>
        </div>
    </div>
              </div>
    
    <div className='flex justify-between items-center'>
        <p className='text-[18px] font-medium'> $ {each.price}</p>
                  {
                      addItem.includes(each) ? <button onClick={()=>addedDelete(each.id)} className='btn bg-violet-600  text-white'>Added</button> : <button onClick={()=>changerHandle(each,true)} className='btn '>Add Cart</button>
                  }
    </div>
    
    </div>
</div>

  )
}

export default MainUi;