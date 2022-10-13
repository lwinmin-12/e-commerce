import { createContext,useEffect, useState,useRef} from "react"
import Swal from "sweetalert2";

export const Colect = createContext()

const Collection = ({ children }) => {

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
  }, [])
  
  const plusHandle = (i, ogp ,delObj ) => {
     
    setTotal(total.map((each, index) => index == i ? {...each,price: each.price+ogp,selectedNum:each.selectedNum+1} : {...each,price:each.price} ))
  
  }


    const minusHandle = (i,ogp) => {
        // setTotal(total.map((each, index) => index ==i && each.selectedNum == 1 ? {price:each.price} : {price: each.price-ogp,selectedNum:each.selectedNum-1}  ))
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
      setTotal((prev) => [...prev, { price:e.price , selectedNum : 1 }])
      // const img = new Image();
      
      setTimeout(() => {
        setForAni(false)
      },1500)
    }
    const addedDelete = (id) => {
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
          setAddItem(addItem.filter((each) => each.id!= id))
        }
      })
     
    }
  const value = {
    items,
    addItem,
    forAni,
    total,
    searchedItems,
    searchingFunction,
    selectFunction,
    plusHandle,
    minusHandle,
    trashHandle,
    changerHandle,
    addedDelete
  }
  
  return (
      <Colect.Provider value={value}>
          {children}
      </Colect.Provider>
  )
}

export default Collection