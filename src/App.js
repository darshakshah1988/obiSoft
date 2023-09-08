import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import AppRouter from './modules/AppRouter';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AppRouter />     
    </div>
  );
}

export default App;
