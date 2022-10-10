import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from "./store";
import AppRoute from './config/app-route.jsx';

// bootstrap
import 'bootstrap';

// css
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './index.css';
import './scss/react.scss';


const container = document.getElementById('root');
const root = createRoot(container);
function App() {
	let element = useRoutes(AppRoute);

	return element;
}

root.render(
	<Provider store={store}>
	  <BrowserRouter>
		<App />
	  </BrowserRouter>
	</Provider>
);
