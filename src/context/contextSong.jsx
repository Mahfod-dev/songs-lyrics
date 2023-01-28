import { createContext, useContext, useState } from 'react';

const ContextProvider = createContext();
const url = `https://api.lyrics.ovh/v1`;

export const ContextSong = ({ children }) => {
	const [alert, setAlert] = useState('');

	const fetchLyrics = async (lyrics) => {
		const { song, artiste } = lyrics;
		try {
			const response = await fetch(`${url}/${artiste}/${song}`);
			const data = await response.json();

			
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ContextProvider.Provider value={{ setAlert, alert, fetchLyrics }}>
			{children}
		</ContextProvider.Provider>
	);
};

export const useSongContext = () => {
	return useContext(ContextProvider);
};
