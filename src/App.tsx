function App() {
  return (
    <div className="h-screen w-full flex mx-auto justify-center items-center">
      <div className="text-3xl flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button className="bg-blue-500 border-2 p-5">Increment</button>
        <h1 className="p-5">0</h1>
        <button className="bg-red-500 border-2 p-5">Decrement</button>
      </div>
    </div>
  );
}

export default App;
