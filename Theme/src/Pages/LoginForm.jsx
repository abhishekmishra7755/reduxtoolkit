import { TextInput, PasswordInput, Button } from "@mantine/core";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <TextInput 
        label="Email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <PasswordInput 
        label="Password" 
        placeholder="Enter your password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        mt="md" 
      />

      <Button fullWidth mt="md" color="blue">Login</Button>
    </div>
  );
}

export default LoginForm;