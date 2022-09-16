import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <ToastContainer position="bottom-center" limit={1} />
      <Home/>
    </div>
  );
}

export default App;
