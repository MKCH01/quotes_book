import React, {useState} from 'react';

function QuotesForm(props) {

    const { addItem }  = props

    const [name, setName] = useState("")
    const [body, setBody] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: name,
            body: body
        }  
        addItem(formData)
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