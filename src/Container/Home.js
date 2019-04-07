import React, { Component }  from 'react'
// import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import { ClipLoader } from 'react-spinners';

import MemoGrid from '../Components/MemosGrid/MemoGrid'
// import Header from '../Components/Header/Header'

class Homepage extends Component {

    state = {
        memos: null,
        loading: true,
        fetchDate: false,
        updated: false
    }

    componentDidMount() {
        axios.get('/memos.json')
        .then(response => {
            let arr = {...response.data}
            this.setState({
                loading: false,
                memos: arr,
                updated: true
            })
            console.log(arr)

        })

        .catch(error =>
            this.setState({
                fetchData: true
            })
        )
    }


    componentDidUpdate(prevState) {
        if(prevState.memos !== false) {
            // let memosData = Object.keys(this.state.memos).map(key => {
            //     let arr = [...Array(this.state.memos[key])]
            //     return arr.map(memo => {
            //         return <li>{memo.message}</li>
            //     });
            // })
            // console.log(memosData)
            // return memosData
            this.loadData()
        }
    }

    loadData() {
        let memosData = Object.keys(this.state.memos).map(key => {
            let arr = [...Array(this.state.memos[key])]
            return arr.map(memo => {
                return <li>{memo.message}</li>
            });
        })
        console.log(memosData)
        return memosData
    }


    render() {

        return (
            <>  
                { this.state.loading ? <div className='sweet-loading'>
                    <ClipLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    />
                    </div>  
                    
                :  null }
    
                {/* <MemoGrid notes={memos} url={props.match.path}/> */}

    
                { this.state.fetchData ? <p>Failed to get the memo :o </p> : null }
            </>
        )
    }
}

export default Homepage