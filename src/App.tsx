import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="h-screen w-full flex mx-auto justify-center items-center">
      <div className="text-3xl flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 border-2 p-5"
        >
          Increment
        </button>
        <h1 className="p-5">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 border-2 p-5"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
