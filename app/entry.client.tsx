import ReactDOM from 'react-dom';
import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import React from 'react';

// Import axe-core for development only
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
  });
}

hydrateRoot(<RemixBrowser />, document);