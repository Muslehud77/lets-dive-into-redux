import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  decrementByValue,
} from "../redux/features/counter/counterSlice";


const Counter = () => {

    const {count} = useSelector((state)=> state.counter)
    const dispatch = useDispatch()


    return (
      <div>
        <h1 className="text-5xl text-center my-10">Redux Counter</h1>
        <div className="flex justify-center items-center gap-10">
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="bg-green-400 px-4 py-2 m-2"
          >
            Increment by 5
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-400 px-4 py-2 m-2"
          >
            Increment
          </button>
          <h1 className="text-3xl">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-400 px-4 py-2 m-2"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(decrementByValue(5))}
            className="bg-green-400 px-4 py-2 m-2"
          >
            Increment by 5
          </button>
        </div>
      </div>
    );
};

export default Counter;