import React from 'react'
import {useEffect, useState} from "react"
const Coffee = () => {

    const [coffeeData , setCoffeeData] = useState([])
    const [count , setCount] = useState(-1)

    async function generateImage(){
        const url = "https://api.sampleapis.com/coffee/hot";
        const response = await fetch(url)
        const data = await response.json()
        setCount(prev => prev + 1)
        if( count >= data.length - 1 ){
            setCoffeeData([])
            alert("We have no more photos :(")
            return
        }
        console.log(data)
        setCoffeeData(data)
   
    }

    
      
   


  return (
    <div>
        <div className="container">
            <h1>Generate random photos of coffee☕</h1>
            {coffeeData.length > 0 ? <>
                <h2>{coffeeData[count].title}</h2>
                <img src={coffeeData[count].image} alt="" />
                    </> : <></>}
          
            <button onClick={generateImage}>Generate</button>
        </div>
    
    </div>
  )
}

export default Coffee
