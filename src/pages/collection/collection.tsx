import React from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';

import MainLayout from '../../layout/MainLayout';
import useCollection from '../../hooks/useCollection';
import Content from './components/content/Content';
import Toolbar from './components/tool-bar/toor-bar';

export const Collection = () => {
  const { data, isSuccess, loading } = useCollection();
  /**
   * Step 1: Render the card
   */
  return (
    <MainLayout>
      {loading && <CircularProgress />}
      {isSuccess ? (
        <>
          <Toolbar />
          <Content data={data} />
        </>
      ) : (
        <Grid
          container
          sx={{ minHeight: '100vh' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Something when wrong</Typography>
        </Grid>
      )}
    </MainLayout>
  );
};
