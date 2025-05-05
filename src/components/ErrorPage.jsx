import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ErrorPage = () => (
  <Container sx={{ textAlign: 'center', mt: 8 }}>
    <Typography variant="h2" color="error" gutterBottom>
      404
    </Typography>
    <Typography variant="h5" gutterBottom>
      Oops! Page not found.
    </Typography>
    <Typography variant="body1" sx={{ mb: 4 }}>
      The page you are looking for does not exist or has been moved.
    </Typography>
    <Box>
      <Button
        variant="contained"
        component={RouterLink}
        to="/"
      >
        Back to Home
      </Button>
    </Box>
  </Container>
);

export default ErrorPage;
