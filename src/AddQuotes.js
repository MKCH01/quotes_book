import React from 'react';
import QuotesForm from "./QuotesForm"

function AddQuotes(props) {

const { addItem } = props

const formSubmission = (formData) => {
    addItem(formData)
}

    return (
        <div>
            <h1>Add Quotes</h1>
            <QuotesForm formSubmission={formSubmission} />
        </div>
    );
}

export default AddQuotes;