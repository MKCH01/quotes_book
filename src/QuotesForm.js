import React, {useState} from 'react';

function QuotesForm(props) {

    const {id: srlNo, name: author, body: statement, handleToggle }  = props

    const { formSubmission }  = props

    const [id, setId] = useState(srlNo ? srlNo : Number(new Date()))
    const [name, setName] = useState(author ? author : "")
    const [body, setBody] = useState(statement ? statement : "")


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: id,
            name: name,
            body: body
        }  
        formSubmission(formData)
        if(handleToggle){
            handleToggle()
        }
        setName("")
        setBody("")
    }

   


    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    return (
        <div>
        <h2>Add Quotes</h2>
            <form onSubmit={handleSubmit}>
            <label>Name</label><br />
            <input type="text" value={name} onChange={handleNameChange}  /><br />

            <label>Body</label><br />
            <textarea type="text" value={body} onChange={handleBodyChange} /><br />

            <input type="submit" value="save" />
            </form>
        </div>
    );
}

export default QuotesForm;