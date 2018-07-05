import React from "react";
import Page773 from "./Page773";
import Page911 from "./Page911";
import Page110 from "./Page110";

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
  indexRoute: { component: Page773 },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: Page773
    },
    {
      path: "/get-in-touch",
      name: "/get-in-touch",
      component: Page911
    },
    {
      path: "/work",
      name: "/work",
      component: Page110
    },
    {
      path: "*",
      name: "notfound",
      component: Page773
    }
  ]
};
