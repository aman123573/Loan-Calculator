import React from 'react';
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CircularProgress,
  Box,
} from '@mui/material';
import { useAllExchangeRates } from '../hooks/useAllExchangeRate';

const ExchangeRatesPage = () => {
  const { rates, loading, error } = useAllExchangeRates();

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Container sx={{ mt: 8 }}>
        <Typography color="error">Failed to load exchange rates.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates (Base: USD)
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(rates).map(([code, rate]) => (
              <TableRow key={code}>
                <TableCell>{code}</TableCell>
                <TableCell align="right">{rate.toFixed(4)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ExchangeRatesPage;
