import React from 'react';

function QuotesItem(props) {

    const {id, name, body, removeItem } = props

    return (
        <div>
            <b>{name}</b>  <br />
            <b>{body}</b> 
            <button onClick={() => {
                removeItem(id)
            }}>remove</button>
            <br /> <br />
        </div>
    );
}

export default QuotesItem;