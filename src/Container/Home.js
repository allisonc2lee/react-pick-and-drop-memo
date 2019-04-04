import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import MemoGrid from '../Components/MemosGrid/MemoGrid'
import Header from '../Components/Header/Header'

const Homepage = () => {
    return (
        <>  
            <MemoGrid />
        </>
    )
}

export default Homepage