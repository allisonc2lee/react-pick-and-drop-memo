import React, { useState, useEffect }  from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import { ClipLoader } from 'react-spinners';

import MemoGrid from '../Components/MemosGrid/MemoGrid'
import Header from '../Components/Header/Header'

const Homepage = (props) => {

    const [memos, setMemos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchData, setFetchData] = useState(false);

    const memoStorageUrl = '/db'

    useEffect(() => {
        console.log(props)
        axios.get(memoStorageUrl)
        .then(response => {
            //console.log(response.data.posts)
            setLoading(false)
            setMemos(response.data.posts)
        })
        .catch(error =>
            setFetchData(true)
        )
    },[]) 


    return (
        <>  
            { loading ? <div className='sweet-loading'>
                <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                />
                </div>  
            : null }
            { fetchData ? <p>Failed to get the memo :o </p> : null }
            <MemoGrid memos={memos}/>
        </>
    )
}

export default Homepage