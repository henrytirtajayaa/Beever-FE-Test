import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../redux/actions/quoteActions";
import { QUOTE_KEY } from "../redux/reducers/quoteReducer";
import { ActionTypes } from "../redux/constants/actionTypes";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotes())
  }, []);

  let viewQuote = useSelector((state) => {return state[QUOTE_KEY]});

  let fetchQuote = () => {
    dispatch(getQuotes())
  }

  const Favorites = () => {
    let { fav } = useSelector((state) => state.fav);
    if(!fav || !fav.length){
      return <></>
    }
    return (
      <ul>
        {fav.map(f => <p>{f.label}</p>)}
      </ul>
    )
  }

  const ClickFavorite = () => {
    const dispatch = useDispatch();
    let currentQuote = viewQuote.data.map((x) => x.quote);
    const handleClick = () => dispatch({
      type: ActionTypes.SAVE_FAVORITE,
      payload: {
        label: currentQuote,
        id: Math.ceil(Math.random() * 100)
      }
    })

    return (
      <>
      <button onClick={handleClick}>Add Favorite</button>
      </>
    )
  }
  
  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      {viewQuote.data.map((x) => {
          return(
            <div key={x.quote}>
              <h3>{x.quote}</h3>
            </div>
          )
        })
      }
      

      <button onClick={() => fetchQuote()}>Get Quote</button>
      <ClickFavorite />
      <Favorites />
    </section>
  );
}
