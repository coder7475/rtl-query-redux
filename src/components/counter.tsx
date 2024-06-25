import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { decrement, increment } from "../redux/slices/counterSlice";

function Counter() {
  const count = useAppSelector((state) => state.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Count is {count}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        {/* <button onClick={() => dispatch(reset())}>Reset</button> */}
        {/* <button onClick={() => dispatch(increaseByNumber(5))}> */}
        {/* Increase by Five */}
        {/* </button> */}
      </div>
    </div>
  );
}

export default Counter;
