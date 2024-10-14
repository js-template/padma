/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnErrorOccurred } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={AnErrorOccurred} />
        {/* Add compinents field here */}
      </Switch>
    </div>
  );
};

export default App;
