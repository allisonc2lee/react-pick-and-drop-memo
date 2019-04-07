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
            let arr = {...response.data}
            return arr

        })

        .catch(error =>
            setFetchData(true)
        )

        // let memosData = Object.keys[response.data].map(key => {
        //     return [...Array(response.data[key])].map(memo => {
        //         return <li>{memo.message}</li>;
        //     });
        // })
        // setMemos(memosData)
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
                
            :  null }

            {/* <MemoGrid notes={memos} url={props.match.path}/> */}

            { fetchData ? <p>Failed to get the memo :o </p> : null }
        </>
    )
}

export default Homepage