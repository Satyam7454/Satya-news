import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyNewsContextProvider } from './context/MyNewsContext.jsx'

createRoot(document.getElementById("root")).render(
  <MyNewsContextProvider>
    <App />
  </MyNewsContextProvider>
);
