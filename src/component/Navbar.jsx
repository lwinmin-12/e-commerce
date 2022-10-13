import React, { useRef,useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import AddedItem from './AddedItem'
import { Colect } from "./store/Collection";


const Navbar = () => {
  const { addItem,forAni,searchingFunction,selectFunction } = useContext(Colect)
  const search = useRef()
  const cart = useRef()
  const selectBox = useRef()
  
  const seeCart = () => {
    document.querySelector('#sld').classList.remove('translate-x-[100%]')
  }
  
  
  return <>
    <div className='right-0 left-0 bg-white z-20 w-[80%] py-3 border-2 border-violet-200 shadow-md mx-auto mt-3 flex justify-between items-center rounded'>
          <p className='text-[1.5rem] mx-2'>My Shop</p>
          <div className='mx-2 rounded overflow-hidden space-x-3 flex items-center'>
          {/* <input ref={search} onChange={()=>searchingFunction(search)} type="text" className='border-2 py-2 mx-2' /> */}
        <div className="relative">
            <input ref={search} onChange={()=>searchingFunction(search)} type="text" id="small_outlined" className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-violet-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor='small_outlined'  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-violet-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Search</label>
        </div>
        <select ref={selectBox} onChange={()=>selectFunction(selectBox)} className='border-2 px-2 rounded bg-white text-gray-500 border-violet-600 py-2  '>
          <option value="" >All Categories</option>
          <option value="men's clothing" >men's clothing</option>
          <option value="jewelery" >jewelery</option>
          <option value="electronics" >electronics</option>
          <option value="women's clothing" >women's clothing</option>
        </select>

        <div className='relative '>
          <p className='absolute  top-[5px] z-[1500] right-0 w-5 h-5 text-center bg-red-600 rounded-full pt-[1px] text-sm text-stone-50'>{ addItem.length}</p>
          <button ref={cart} onClick={seeCart} className={`${forAni==true&& 'animate__heartBeat'} animate__animated btn mx-2  my-2 hover:after:scale[7] after:-left-[25px] after:-bottom-[40px]`}>
            <BsCart3 />
            </button>
        </div> 
      </div>      
    </div>
    <AddedItem  />
  </>
      

}

export default Navbar

// added={added}