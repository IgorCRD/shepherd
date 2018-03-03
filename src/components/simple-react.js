import React from 'react';
import ReactLogo from 'images/logo.svg';
import Package from 'root/package.json';

const ReactLogoComp = () => (
  <img src={ReactLogo} alt="react logo" style={{ width: '50px', height: '50px' }} />
);

const SimpleReact = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex' }}>
      <ReactLogoComp />
      <p style={{ color: '#333333' }}>
        very <strong>Simple React</strong> template with webpack4!
      </p>
      <ReactLogoComp />
    </div>
    <div>
      <h4 style={{ color: '#333333' }}>What you get when using this template:</h4>
      <pre>
        {JSON.stringify(
          {
            dependencies: Package.dependencies,
            devDependencies: Package.devDependencies,
          },
          null,
          '  ',
        )}
      </pre>
    </div>
  </div>
);

export default SimpleReact;
