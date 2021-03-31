import React, {useState, useEffect} from 'react';
import QuotesList from "./QuotesList"
import QuotesForm from "./QuotesForm"


function QuotesContainer(props) {
    const [quotes, setQuotes] = useState([])


    useEffect(() => {
        const result = JSON.parse(localStorage.getItem("quotes")) || []
        setQuotes(result)
    }, [])

    useEffect(() => {
        localStorage.setItem("quotes", JSON.stringify(quotes))
        
    }, [quotes])

    const addItem = (quote) => {
       let result = [quote, ...quotes]
       setQuotes(result)
    }

    const removeItem = (id) => {
       const result = quotes.filter(quote => {
           return quote.id !== id
       })
       setQuotes(result)
    }

    return (
        <div>
            <h1>quotes container</h1>
            <QuotesList quotes={quotes} removeItem={removeItem} />
            <QuotesForm addItem={addItem} />
        </div>
    );
}

export default QuotesContainer;