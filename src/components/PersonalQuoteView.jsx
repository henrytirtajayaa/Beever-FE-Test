import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../redux/constants/actionTypes";

export default function PersonalQuoteView() {

  const MyQuotes = () => {
    let { myQuotes } = useSelector((state) => state.myQuotes);
    if(!myQuotes || !myQuotes.length){
      return <></>
    }
    return (
      <ul>
        {myQuotes.map(myQuote => <p>{myQuote.label}</p>)}
      </ul>
    )
  };

  const QuoteInput = () => {
    const dispatch = useDispatch();
    const [newQuote, setNewQuote] = useState();
    const handleChange = event => setNewQuote(event.target.value);
    const handleClick = () => dispatch({
      type: ActionTypes.SAVE_MY_QUOTE,
      payload: {
        label: newQuote,
        id: Math.ceil(Math.random() * 100)
      }
    })
    
    return (
      <>
        <input
           type="text"
           value={newQuote}
           onChange={handleChange}
        />
        <button
          onClick={handleClick}
          type={`submit`}
        >
          Submit
        </button>
      </>
    )
  }

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
        <QuoteInput />
        <MyQuotes />
    </section>
  );
}
