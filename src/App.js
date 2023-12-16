
import './App.css';


function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  return (
    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
    <h1 className='text-gray-500'>Welcome to my app</h1>
    <MyButton />
  </div>
  );
}

export default App;
