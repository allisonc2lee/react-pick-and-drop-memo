import React, { useState } from 'react'

const SubmitMemo = () => {

    return(
        <>  
            <h2>Add a SubmitMemo</h2>
            <form action="">
                <label>Enter your message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button>Add</button>
            </form>
        </>
    )
}

export default SubmitMemo