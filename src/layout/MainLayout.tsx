import { Container } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

type MainLayoutProps = {};

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
