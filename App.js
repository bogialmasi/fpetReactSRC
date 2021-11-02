import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/home/Home';
import { Layout } from './views/layout/Layout';
import { NotFound } from './views/notFound/NotFound';

import { Playlist } from './views/playlist/Playlist';

export function App() {
  return (
    <Router>
      {/*Sablon*/}
      <Layout>
        <Switch>
          {/*Kezdőlap*/}
          <Route exact path="/">
            <Home />
          </Route>
          {/*Playlist oldal*/}
          <Route path="/playlist">
            <Playlist />
          </Route>
          {/*Le nem kezelt elérési út komponense*/}
          <Route>
            <NotFound error="A megadott elérési út nem található!"/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}