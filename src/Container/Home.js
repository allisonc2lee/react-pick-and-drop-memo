import React, { useState, useEffect }  from 'react'
// import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import { ClipLoader } from 'react-spinners';

import MemoGrid from '../Components/MemosGrid/MemoGrid'
// import Header from '../Components/Header/Header'

const Homepage = (props) => {

    const [memos, setMemos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchData, setFetchData] = useState(false);


    useEffect(() => {
        // console.log(props)
        axios.get('/memos.json')
        .then(response => {
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
            : <MemoGrid notes={memos} url={props.match.path}/> }
            {/* <MemoGrid notes={memos} url={props.match.path}/> */}
            { fetchData ? <p>Failed to get the memo :o </p> : null }
        </>
    )
}

export default Homepage