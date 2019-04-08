import React, { Component }  from 'react'
import axios from 'axios'
import { ClipLoader } from 'react-spinners';

import MemoGrid from '../Components/MemosGrid/MemoGrid'

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
            let arr = {...response.data}
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
    render() {

        let loadData = <li>Error</li>

        if(this.state.memos !== false) {
            loadData = Object.keys(this.state.memos).map((key) => {
                let arr = [...Array(this.state.memos[key])]
                let memoKey
                if( key.charAt( 0 ) === '-' ) {
                    memoKey = key.slice( 1 );
                    return <MemoGrid notes={arr} url={this.props.match.path} key={memoKey}/>
                } else {
                    return <MemoGrid notes={arr} url={this.props.match.path} key={key} />
                }
                
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

                <div className="memoGrid">
                    { loadData }
                </div>
                { this.state.fetchData ? <p>Failed to get the memo :o </p> : null }
            </>
        )
    }
}

export default Homepage