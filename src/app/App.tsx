import * as React from 'react';
import Layout from '@/components/Layout/Layout';
import { useSelector } from 'react-redux';
import { uiSelector } from '@/features/ui/slice';
import '@/style/index.css';
import Home from '@/components/Home/Home';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  const { ui } = useSelector(uiSelector);
  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${
          ui.theme === 'theme-light' ? '#f2f3f5' : '#181818'
        };
        transition: background-color 0.25s;
         }`}</style>
      </Helmet>
      <div className={`${ui.theme} bg-background content-transition`}>
        <Layout>
          <Home />
        </Layout>
      </div>
    </>
  );
};

export default App;
