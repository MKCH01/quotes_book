import React from 'react';
import QuotesForm from './QuotesForm';

function EditQuotes(props) {
    const { id, name, body, editItem, handleToggle } = props
    const formSubmission = (formData) => {
        editItem(formData)
        //console.log("edit edit", formData)
    }
    return (
        <div>
            <h2>Edit Quotes</h2>
            <QuotesForm id={id} name={name} body={body} formSubmission={formSubmission} handleToggle={handleToggle} />
        </div>
    );
}

export default EditQuotes;