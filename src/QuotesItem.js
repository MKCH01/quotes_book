import React, {useState} from 'react';
import EditQuotes from "./EditQuotes"

function QuotesItem(props) {

    const {id, name, body, removeItem,editItem } = props
    const [ toggle, setToggle ] = useState(false)

    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }

    return (
        <div>{toggle ? <div> 
            <EditQuotes
                id={id}
                name={name}
                body={body}
                editItem={editItem}
                handleToggle={handleToggle}
            />
            <button onClick={handleToggle}>cancel</button> </div> :( <div>
            
            <b>{name}</b>  <br />
            <b>{body}</b> 
            <button onClick = {() => {
                handleToggle(id)
            }}>Edit</button>
            <button onClick={() => {
                removeItem(id)
            }}>remove</button>
            <br /> <br />
            </div>) }
            
        </div>
    );
}

export default QuotesItem;