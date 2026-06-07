const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(
    <script
      key="theme-mode"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var mode = localStorage.getItem('theme-mode') || 'auto';
            if (mode === 'dark') {
              document.body.setAttribute('data-theme', 'darkTheme');
            } else if (mode === 'light') {
              document.body.setAttribute('data-theme', 'lightTheme');
            } else {
              if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.setAttribute('data-theme', 'darkTheme');
              }
            }
          })();
        `,
      }}
    />,
  );
};
