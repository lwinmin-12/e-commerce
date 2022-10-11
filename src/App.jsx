import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import { createContext, useEffect, useState, } from "react";
import SearchedItems from "./component/SearchedItems";
import Swal from "sweetalert2";

export const totalNum = createContext();

function App() {
  const Swal = require('sweetalert2')
  
  const [items, setItem] = useState({
    isLoading: false,
    value: [],
    error: null
  });

  const [addItem, setAddItem] = useState([]);
  const [forAni, setForAni] = useState(false);
  const [total, setTotal] = useState([]);
  const [searchedItems,setSearchedItems] = useState({value:[],text:''})
  
  const searchingFunction = (search) => {
    setSearchedItems(()=>({value:items.value.filter(element => {
      return element.title.toLowerCase().includes(search.current.value.toLowerCase())
    }),text:search.current.value}))
  }
  const selectFunction = (search) => {
    setSearchedItems(()=>({value:items.value.filter(element => {
      return element.category.toLowerCase().includes(search.current.value.toLowerCase())
    }),text:search.current.value}))
  }
    
  useEffect(() => {
    setItem((prev)=>({...prev,isLoading:true}))
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
      .then(json => setItem((prev) => {
        return (
                {...prev,isLoading:false,value:json}
              )
      }))
      .catch((e) => {
        setItem((pre) => ({ ...pre, isLoading: false, error: e }));
      });  
  },[])
  
  

    const plusHandle = (i,ogp) => {
        setTotal(total.map((ea ,index)=> index==i? ea+ogp : ea))
     
    }
    const minusHandle = (i,ogp) => {
        setTotal(total.map((ea, index) => {
            return index ==i && ea < ogp ? ea : ea-ogp
            
        }))
    }
  
  
    const trashHandle = (delItemId,delObj,index) => {
      // delObj.current.childNodes.forEach((eachDiv) => {
      //   eachDiv.id == index && eachDiv.classList.add('animate__rotateOutDownLeft')
      // })
      // setTimeout(() => {
      //   setAddItem(addItem.filter((ea) => ea.id != delItemId))
      //   total.splice(index,1)
      // }, 1000)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        delObj.current.childNodes.forEach((eachDiv) => {
        eachDiv.id == index && eachDiv.classList.add('animate__rotateOutDownLeft')
      })
      setTimeout(() => {
        setAddItem(addItem.filter((ea) => ea.id != delItemId))
        total.splice(index,1)
      }, 1000)
        }
      })
    }

  const changerHandle = (e,b) => {
    setAddItem((pre) => ([...pre, e]))
    setForAni(b)
    setTotal((prev) =>[ ...prev,e.price])
    setTimeout(() => {
      setForAni(false)
    },1500)
  }
  const addedDelete = (id) => {
    setAddItem(addItem.filter((each) => each.id!= id))
  }
  // console.log(total)
  return <totalNum.Provider value={{
    total,
    plusHandle,
    minusHandle,
    trashHandle
  }}>
    <div className="relative overflow-hidden">
    <Navbar added={addItem} ani={forAni} searchingFunction={searchingFunction} selectFunction={selectFunction} />
      
      {searchedItems.text.length > 0 ? <SearchedItems change={changerHandle} search={ searchedItems } added={addItem} addedDelete={addedDelete} />  : <Home items={items} change={changerHandle} added={addItem} addedDelete={addedDelete} /> }
     
    </div>
  </totalNum.Provider>
}

export default App;
