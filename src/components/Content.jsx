import {useState} from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Box,
} from "@mui/material";

const Content = () => {
  const [loanAmount, setLoanAmount] = useState("100000");
  const [interestRate, setInterestRate] = useState("8.5");
  const [term, setTerm] = useState("5");
  return (
    <>
      {/* Main Section */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
          Loan Calculator Dashboard
        </Typography>

        {/* Input Grid */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Loan Amount"
              type="number"
              fullWidth
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Interest Rate (%)"
              type="number"
              fullWidth
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Term (Years)"
              type="number"
              fullWidth
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </Grid>
        </Grid>

        {/* Calculate Button */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              console.log("Calculating loan with:", {
                loanAmount,
                interestRate,
                term,
              });
            }}
          >
            CALCULATE
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Content;
