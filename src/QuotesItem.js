import React from 'react';

function QuotesItem(props) {

    const {id, name, body } = props

    return (
        <div>
            <b>{name}</b>
            <b>{body}</b>
        </div>
    );
}

export default QuotesItem;