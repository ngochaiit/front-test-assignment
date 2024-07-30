import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';

import { CollectionItem } from '../../../../modal/collection';
import CollectionCard from '../collection-card/CollectionCard';

interface Props {
  data: CollectionItem[];
}

const Content: FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return (
      <Grid
        container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>Please create a new card item</Typography>
      </Grid>
    );
  }
  return (
    <Grid py={5} container spacing={2}>
      {data.map((item) => (
        <Grid item xs={6} md={3}>
          <CollectionCard key={item.id} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
