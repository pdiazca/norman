import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react'
import rootStore from './stores/rootStore'
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = new rootStore()

ReactDOM.render(<Provider 
    rootStore={root}
    projectStore={root.projectStore}
    componentStore={root.componentStore}
    previewStore={root.previewStore}
    scraperStore={root.scraperStore}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
