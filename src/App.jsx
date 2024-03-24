import { useState } from "react";
import "./App.css";
import Card from "@mui/material/Card";

import { Box, Button, CardContent, TextField } from "@mui/material";

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit() {
    const errorsArray = [];

    if (emailInput === "") {
      errorsArray.push("email");
      alert("Emailを入力してください");
    }

    if (password === "") {
      errorsArray.push("password");
      alert("passwordを入力してください");
    }

    if (emailInput === "" || password === "") {
      setErrors(errorsArray);
      alert("未入力の項目があります");
      return;
    }

    setErrors([]);

    alert(`Email: ${emailInput}\nPassword: ${password}`);
  }

  return (
    <>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "2rem",
            }}
          >
            <TextField
              required
              error={errors.includes("email")}
              helperText={errors.includes("email") ? "入力してください" : ""}
              label="Email"
              variant="standard"
              sx={{ marginBottom: "1rem" }}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <TextField
              required
              error={errors.includes("password")}
              helperText={errors.includes("password") ? "入力してください" : ""}
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button variant="contained" onClick={handleSubmit}>
            ログイン
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
