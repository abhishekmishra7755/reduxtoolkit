import React from "react";
import { ThemeProvider } from "./ThemeContext";
import HomePage from "./Pages/HomePage";
import { MantineProvider } from "@mantine/core";
import LoginForm from "./Pages/LoginForm";
import AppHeader from "./Pages/AppHeader";
import RazorpayCheckout from "./Pages/RazorpayCheckout";

function App() {
 
  return (
    <ThemeProvider>
      <HomePage />
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <LoginForm />
      </MantineProvider>
      <RazorpayCheckout />
        <AppHeader />
     
    
    </ThemeProvider>
  );
}

export default App;
