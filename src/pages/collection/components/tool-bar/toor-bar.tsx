import { Box, Button } from '@mui/material';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {}

const Toolbar: FC<Props> = () => {
  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      <Box flex={1}>
        <Button component={RouterLink} to="/create-card">
          Create New Card
        </Button>
      </Box>
    </Box>
  );
};

export default Toolbar;
