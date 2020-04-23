import React 'react';
import ReactDOM 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement('div', null, 'Hello World!'),
    document.body.appendChild(document.createElement('div')),
  );
});
