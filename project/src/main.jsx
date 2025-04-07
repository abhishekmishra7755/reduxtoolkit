import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@mui/material/styles";
import AppTheme from "./shared-theme/AppTheme";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={AppTheme}>
      <App />
     </ThemeProvider>
  
  </StrictMode>,
)
