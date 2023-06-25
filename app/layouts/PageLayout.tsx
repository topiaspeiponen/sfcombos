import React, { ReactNode } from 'react';
import Header from '../components/Header';

export interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout(props: PageLayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="lg:container align-center p-4">
          {children}
        </div>
      </div>
    </>
  );
}