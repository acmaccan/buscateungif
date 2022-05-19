# buscateUnGif

React 17.0.1
Giphy API
Animate.css
Hooks - customHooks
PropTypes
Unit Testing: Jest + Enzyme + React Hooks Testing Library


Downgraded to React 17.0.1 for Enzyme compatibility.

package.json:
```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.5",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.0",
    "web-vitals": "^0.2.4"
}
```

index.js:
```
import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

const divRoot = document.querySelector('#root');
ReactDOM.render(
    <GifExpertApp />, divRoot
);
```

$ npm i
$ npm i –save-dev enzyme
$ npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
$ npm install --save-dev enzyme-to-json

setupTest.js:
```
import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
```

$ npm run start / npm run test
