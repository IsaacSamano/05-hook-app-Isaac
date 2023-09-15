import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>CounterWithCustomHook: {counter}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button onClick={() => reset()} className="btn btn-danger">Reset</button>
            <button onClick={() => decrement()} className="btn btn-primary">-1</button>
        </>
    )
}
