import type { FC, ReactNode } from 'react';
import React from 'react';

import TopNav from '../TopNav';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="g-container s grid">
      <div className="header">
        <TopNav />
      </div>

      <div className="sidebar">
        <footer />
      </div>

      <div className="bg-primary Background content grow overflow-x-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
