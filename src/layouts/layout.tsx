import React from 'react';
import Header from '../components/Header';
import Footer from '@/components/footer';

// If you haven't imported React, you can directly use React.ReactNode
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
