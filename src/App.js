import "./App.css";
import Inputs from "./components/Input";
import { useState } from "react";
import amortizacionTabla from "./components/amortizacionTabla";
import Box from "@mui/material/Box";

function App() {
  const [loan, setLoan] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");
  return (
    <Box m={{ xs: 2, sm: 3, md: 4, lg: 5 }} mt={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Inputs
          onChange={(loan, nper, rate) => {
            setLoan(loan);
            setNper(nper);
            setRate(rate);
          }}
        />
        <Box mt={2}>
        </Box>
      </Box>
      <Box mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
        <amortizacionTabla loan={loan} nper={nper} rate={rate} />
      </Box>
    </Box>
  );
}

export default App;
