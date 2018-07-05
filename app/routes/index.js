import React from "react";
import Page778 from "./Page778";
import Page334 from "./Page334";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page778 },
  childRoutes: [
    {
      path: "/work2",
      name: "/work2",
      component: Page778
    },
    {
      path: "/home",
      name: "/home",
      component: Page334
    },
    {
      path: "*",
      name: "notfound",
      component: Page778
    }
  ]
};
