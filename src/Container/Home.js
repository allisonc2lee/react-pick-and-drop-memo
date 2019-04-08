import React, { Component }  from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
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

    replyMemo() {
        console.log('replyMemo')
    }



    render() {

        let loadData = <li>Error</li>

        if(this.state.memos !== false) {
            loadData = Object.keys(this.state.memos).map((key) => {
                let arr = [...Array(this.state.memos[key])]
                let memoKey
                if( key.charAt( 0 ) === '-' ) {
                    memoKey = key.slice( 1 );
                    return <MemoGrid notes={arr} url={this.props.match.path} key={memoKey} replyMemo={this.replyMemo} />
                } else {
                    return <MemoGrid notes={arr} url={this.props.match.path} key={key} replyMemo={this.replyMemo}/>
                }
                
            })
        }

        return (
            <>  


               
                
                <Grid container spacing={16}>
                    
                    { this.state.loading ? <div className='sweet-loading'>
                            <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            />
                            </div>  
                        :  null }
                    <Grid container item xs={12} spacing={24}>
                        { loadData }
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default Homepage