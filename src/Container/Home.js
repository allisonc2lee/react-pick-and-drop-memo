import React, { Component }  from 'react'
// import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import { ClipLoader } from 'react-spinners';

import MemoGrid from '../Components/MemosGrid/MemoGrid'
// import Header from '../Components/Header/Header'

class Homepage extends Component {

    state = {
        memos: {},
        loading: true,
        fetchDate: false,
        updated: false
    }

    componentDidMount() {
        axios.get('/memos.json')
        .then(response => {
            let memos
            let arr = {...response.data}
            let test = Object.keys(arr).map((key, index) => {
                let arr = [...Array(this.state.memos[key])]
                return arr
            })


            // let memosData = Object.keys(this.state.memos).map(key => {
            //     let arr = [...Array(this.state.memos[key])]
            //     console.log(arr)
            //     return arr
                
            // })

            this.setState({
                loading: false,
                memos: arr,
                updated: true
            })

        })

        .catch(error =>
            this.setState({
                fetchData: true
            })
        )
    }


    // componentDidUpdate(prevState) {
    //     if(prevState.memos !== false) {
    //         this.loadData()
    //     }
    // }

    // loadData() {
    //     let memosData = Object.keys(this.state.memos).map(key => {
    //         let arr = [...Array(this.state.memos[key])]
    //         return arr.map(memo => {
    //             return <li>{memo.message}</li>
    //         });
    //     })
    //     console.log(memosData)
    //     return memosData
    // }


    render() {

        let loadData = <li>Error</li>

        if(this.state.memos !== false) {
            loadData = Object.keys(this.state.memos).map(key => {
                let arr = [...Array(this.state.memos[key])]
                return arr.map(memo => {
                    return <li>{memo.message}</li>
                });
            })
        }

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

                <ul>
                    { loadData }
                </ul>
    
                {/* <MemoGrid notes={memos} url={props.match.path}/> */}

    
                { this.state.fetchData ? <p>Failed to get the memo :o </p> : null }
            </>
        )
    }
}

export default Homepage