import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AppLayout from './layouts/AppLayout';

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "homepage" */ "./pages/home")
);

const Mint = React.lazy(() =>
  import(/* webpackChunkName: "mint" */ "./pages/mint")
);

const Faq = React.lazy(() =>
  import(/* webpackChunkName: "faq" */ "./pages/faq")
);

const Error = React.lazy(() =>
  import(/* webpackChunkName: "error" */ "./pages/error")
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <AppLayout>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <HomePage {...props} />}
                />
                <Route
                  path="/mint"
                  exact
                  render={(props) => <Mint {...props} />}
                />
                <Route
                  path="/faq"
                  exact
                  render={(props) => <Faq {...props} />}
                />
                <Route
                  path="/error"
                  exact
                  render={(props) => <Error {...props} />}
                />
                <Redirect to="/error" />
              </Switch>
            </AppLayout>
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default App;
