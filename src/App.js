import { Provider } from 'react-redux';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
);
export default App;