import * as React from "react";
import { AppContainer } from "src/containers/app";

import { Switch } from "react-router";
import { Redirect, Route, RouteProps, Router } from "react-router-dom";

import { AlbumPage } from "src/containers/AlbumPage";
import { AlbumsChartPage } from "src/containers/AlbumsChartPage";
import { ArtistPage } from "src/containers/artistPage";
import { ChartPage } from "src/containers/ChartPage";

import history from "src/history";
import SearchRoutes from "./search";

export default <Router history={history}>
    <AppContainer>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/chart" />} />
        <Route exact path="/chart" component={ChartPage} />
        <Route exact path="/albums" component={AlbumsChartPage} />
        <Route exact path="/album/:id" component={AlbumPage} />
        <Route exact path="/artist/:id" component={ArtistPage} />
        <SearchRoutes />
      </Switch>
    </AppContainer>
  </Router >
// );

// export default Routes;
