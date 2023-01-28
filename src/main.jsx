import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextSong } from './context/contextSong';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextSong>
			<App />
		</ContextSong>
	</React.StrictMode>
);
