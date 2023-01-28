import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [searchSong, setSearchSong] = useState(initialState);

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setSearchSong({ ...searchSong, [name]: value });
	};

	const onReset = () => {
		setSearchSong(initialState);
	};

	return {
		...searchSong,
		searchSong,
		handleChange,
		onReset,
	};
};
