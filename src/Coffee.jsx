import React from 'react'
import {useEffect, useState} from "react"
const Coffee = () => {

    const [coffeeData , setCoffeeData] = useState([])
    const [count , setCount] = useState(0)
    const [page, setPage] = useState(1)
    const [deleteH1, setDelete] = useState(false)

    const accessKey = import.meta.env.VITE_API_KEY

    async function images() {
        setDelete(true)
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=coffee&client_id=${accessKey}`;
      const response = await fetch(url);
      const data = await response.json();
    console.log(data)
    
    if(count >= data.results.length - 1) {
        setPage(prev => prev + 1)
        setCount(0)
        }
       
            setCoffeeData(data.results)
          
            setCount(prev => prev + 1)
    }
  

  return (
    <div>
         <h1 >Generate random photos of coffee☕</h1>    
        <div className="container">
            {deleteH1 ? <></> :  <h1>Click the button to do so</h1>}
           
                {coffeeData.length > 0 ?
                <>
                <h1>{coffeeData[count].alt_description ? coffeeData[count].alt_description : ""}</h1>
                    <img src={coffeeData[count].urls.regular ? coffeeData[count].urls.regular : ""} alt={coffeeData[count].alt_description ? coffeeData[count].alt_description : ""} />
                </>
            :<></>}
          
            <button onClick={images}>Generate</button>
        </div>
    
    </div>
  )
}

export default Coffee
