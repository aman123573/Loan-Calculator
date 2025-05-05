// src/components/Content.js
import React, { useState, useContext } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// custom hooks & context
import { useEMICalculator } from "../hooks/useEMICalculator";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { CurrencyContext } from "../context/CurrencyContext";

const Content = () => {
  
  const [loanAmount, setLoanAmount] = useState("100000");
  const [interestRate, setInterestRate] = useState("8.5");
  const [term, setTerm] = useState("5");

  
  const { currency, setCurrency } = useContext(CurrencyContext);

  
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);

  
  const calculateEMI = useEMICalculator();
  const { rate: exchangeRate, loading: rateLoading } =
    useExchangeRates(currency);

  const handleCalculate = async () => {
    
    const { emi: rawEmi, schedule: rawSchedule } = calculateEMI(
      loanAmount,
      interestRate,
      term
    );

    
    const convertedEmi = (rawEmi * exchangeRate).toFixed(2);
    const convertedSchedule = rawSchedule.map((row) => ({
      month: row.month,
      principal: (row.principal * exchangeRate).toFixed(2),
      interest: (row.interest * exchangeRate).toFixed(2),
      balance: (row.balance * exchangeRate).toFixed(2),
    }));

    
    setEmi(convertedEmi);
    setSchedule(convertedSchedule);
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Loan Calculator Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Loan Amount */}
        <Grid item xs={12} md={3}>
          <TextField
            label="Loan Amount"
            type="number"
            fullWidth
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </Grid>
        {/* Interest Rate */}
        <Grid item xs={12} md={3}>
          <TextField
            label="Interest Rate (%)"
            type="number"
            fullWidth
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </Grid>
        {/* Term */}
        <Grid item xs={12} md={3}>
          <TextField
            label="Term (Years)"
            type="number"
            fullWidth
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Grid>
        {/* Currency Select */}
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Currency</InputLabel>
            <Select
              label="Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {["USD", "EUR", "GBP", "INR", "JPY"].map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Calculate Button */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleCalculate}
          disabled={rateLoading}
        >
          {rateLoading ? "Loading Rates…" : "CALCULATE"}
        </Button>
      </Box>

      {/* Results */}
      {emi && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Monthly EMI: {currency} {emi}
          </Typography>

          <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell align="right">Principal</TableCell>
                  <TableCell align="right">Interest</TableCell>
                  <TableCell align="right">Remaining Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell>{row.month}</TableCell>
                    <TableCell align="right">
                      {row.principal} {currency}
                    </TableCell>
                    <TableCell align="right">
                      {row.interest} {currency}
                    </TableCell>
                    <TableCell align="right">
                      {row.balance} {currency}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Container>
  );
};

export default Content;
