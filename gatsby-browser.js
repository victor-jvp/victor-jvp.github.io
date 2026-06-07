const React = require("react");
const RootLayout = require("./src/components/RootLayout").default;

exports.wrapPageElement = ({ element }) => {
  return React.createElement(RootLayout, null, element);
};
