import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsPlusLg , BsTrash} from 'react-icons/bs'
import {v4 as uuidv4 } from 'uuid'
import { totalNum } from '../App'
const AddedItem = ({ added }) => {
    const {total,plusHandle,minusHandle,trashHandle} = useContext(totalNum)

    const closeSlide = () => {
        document.querySelector('#sld').classList.add('translate-x-[100%]')
    }
    const delObject = useRef()

    return (
    <div id='sld' className='translate-x-[100%] space-y-5 overflow-scroll overflow-x-hidden shadow-lg duration-300 fixed top-0 right-0 w-[25%] h-[100vh] z-[1500] bg-white'>
        <div className='flex w-[90%] mx-auto mt-2 text-2xl justify-between items-center'>
                <p className='flex items-center'>Short Card
                    <span className='text-base mx-1 bg-violet-500 px-2 text-white rounded'>{added.length}</span>
                </p>
            <BsPlusLg onClick={closeSlide} className='rotate-[45deg]'/>
        </div>
        <div ref={delObject} className='flex-nowrap space-y-14 p-5 !mb-[100px]'>
            {
                added.map((item,index) => {
                    return (
                        <div id={index}  key={uuidv4()} className='w-80% group animate__animated  border-2 px-2 relative hover:bg-gray-100 rounded'>
                            <img className='w-[20%] h-[100px] object-contain absolute -top-[40px]' src={item.image} alt="" />
                            <div className='flex justify-end '>
                                <button  onClick={() => trashHandle(item.id,delObject,index)} className='bg-red-500 rounded p-1 duration-300 scale-0 group-hover:scale-100 group-hover:origin-right'>
                                    <BsTrash/>
                                </button>
                            </div>
                            <p className='text-lg mt-[60px]'>{
                                item.description.length > 50 ?item.description.substring(0,45)+'....':  item.description
                            }</p>
                            <div className='flex justify-between my-2 items-center'>
                                <p >$ {total[index]?.toFixed(2)}</p>
                                <div className='flex space-x-1 bg-sky-100'>
                                    <button onClick={()=>minusHandle(index,item.price)} className='px-3 py-1 after:w-[20px] after:h-[20px] after:-left-[20px] after:-bottom-[20px] btn '>-</button>
                                    <p className='px-3 py-1 text-violet-600'>1</p>
                                    <button onClick={()=>plusHandle(index,item.price)} className='px-3 py-1 after:w-[20px] after:h-[20px] after:-left-[20px] after:-bottom-[20px] btn '>+</button>
                                </div>
                            </div>
                        </div>
                        )
                })
           }
            </div>
            <div className='fixed bottom-0 w-[25%] z-50 shadow-lg sha py-2 px-5 bg-white'>
                <div className='flex justify-between mb-5'>
                    <p>total</p>
                    <p>
                        {total.length != 0 ? total.reduce((pv,cv)=> pv+cv).toFixed(2): 0 }
                    </p>
                </div>
                <div className='flex justify-center'>
                <button className='btn'>Check Out</button>
                </div>
            </div>
    </div>
   
  )
}

export default AddedItem

