import { useState } from "react";
import { useFetch, useCounter } from "../hooks/"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const [counter, setCounter] = useState(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);


    console.log(data);

    const { name, gender } = !!data && data[0];


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? <LoadingQuote />
                    : <Quote name={name} gender={gender} />
            }

            <button onClick={() => setCounter(counter + 1)} className="btn btn-primary"
                disabled={isLoading}>
                Next quote
            </button>
        </>
    )
}
