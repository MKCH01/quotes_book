import React from 'react';
import QuotesItem from "./QuotesItem"


function QuotesList(props) {
    const { quotes }  = props
    console.log("quotes data", quotes.length)
    return (
        <div>
           {quotes.length === 0 ? (
               <div><h3>No Quotes Found</h3><h3>Add Your first Quotes</h3></div>
           ): (
               <div>
               <h1>My Quotes -  {quotes.length}</h1>
                {
                    quotes.map(quote => {
                        return <QuotesItem key={quote.id} {...quote} />
                    })
                }
               </div>
           )}
        </div>
    );
}

export default QuotesList;