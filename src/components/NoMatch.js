import React from 'react';

const NoMatch = ({location}) => (
  <div>
      <h3>Sorry, page doesn't exist on path -  <code>{location.pathname}</code></h3>
  </div>
);

export default NoMatch;