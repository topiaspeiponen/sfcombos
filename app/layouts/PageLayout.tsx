import React, { ReactNode } from 'react';

export interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout(props: PageLayoutProps) {
  const { children } = props;

  return (
    <>
      <div className="flex justify-center">
        <div className="lg:container align-center px-8">
          {children}
        </div>
      </div>
    </>
  );
}