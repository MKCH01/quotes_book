import React, {useState} from 'react';
import QuotesList from "./QuotesList"
import QuotesForm from "./QuotesForm"

function QuotesContainer(props) {
    const [quotes, setQuotes] = useState([])

    const addItem = (quote) => {
       let result = [...quotes, quote]
       setQuotes(result)
    }

    return (
        <div>
            <h1>quotes container</h1>
            <QuotesList quotes={quotes} />
            <QuotesForm addItem={addItem} />
        </div>
    );
}

export default QuotesContainer;