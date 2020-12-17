import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '@/components/common/Layout/Layout';
import { useSelector } from 'react-redux';
import { uiSelector } from '@/features/ui/slice';
import 'tailwindcss/tailwind.css';
import Home from '@/components/Home/Home';

import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  const { ui } = useSelector(uiSelector);
  return (
    <BrowserRouter>
      <Helmet>
        <style>{`body { background-color: ${
          ui.theme === 'theme-light' ? '#f2f3f5' : '#181818'
        }; }`}</style>
      </Helmet>
      <div className={`${ui.theme} content-transition`}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
