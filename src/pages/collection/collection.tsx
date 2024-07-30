import React, { useMemo, useState } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';

import MainLayout from '../../layout/MainLayout';
import useCollection from '../../hooks/useCollection';
import Content from './components/content/Content';
import Toolbar, { SortBy, SortByValues } from './components/tool-bar/toor-bar';

export const Collection = () => {
  const { data, isSuccess, loading } = useCollection();
  const [sortBy, setSortBy] = useState<SortByValues>(SortBy.DOB);

  const collections = useMemo(() => {
    if (loading || !isSuccess) {
      return [];
    }

    return data.sort((a, b) => {
      if (sortBy === SortBy.DOB) {
        return (
          new Date(a.player.birthday).getTime() -
          new Date(b.player.birthday).getTime()
        );
      }

      const leftPlayerFullName = [a.player.firstname, a.player.lastname].join(
        ' '
      );

      const rightPlayerFullName = [b.player.firstname, b.player.lastname].join(
        ' '
      );

      if (leftPlayerFullName < rightPlayerFullName) {
        return -1;
      }
      if (leftPlayerFullName > rightPlayerFullName) {
        return 1;
      }

      return 0;
    });
  }, [data, sortBy, loading, isSuccess]);

  /**
   * Step 1: Render the card
   */
  return (
    <MainLayout>
      {loading && <CircularProgress />}
      {isSuccess ? (
        <>
          <Toolbar sortBy={sortBy} setSortBy={setSortBy} />
          <Content data={collections} />
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
