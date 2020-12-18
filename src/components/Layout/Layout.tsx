import * as React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC = ({ children }: Partial<LayoutProps>) => {
  return (
    <>
      <div className="wrap">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
