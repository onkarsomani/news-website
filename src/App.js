import React from 'react'
import Navbar from './Navbar'
import NewsBoard from './NewsBoard'
import { useState } from 'react'


const App = () => {
    const [category , setCategory ] =useState("general");
    return (
        <div>
            <Navbar setCategory = {setCategory}/>
            <NewsBoard category = {category}/>
        </div>
    )
}

export default App
