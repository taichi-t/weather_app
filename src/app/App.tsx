import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '@/components/common/Layout/Layout';
import Home from '@/components/Home/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
