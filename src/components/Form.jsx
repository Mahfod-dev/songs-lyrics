import styled from 'styled-components';
import { useForm } from '../Hooks/useForm';
import { useSongContext } from '../context/contextSong';
import Alert from './Alert';

const initialState = {
	artiste: '',
	song: '',
};

const Form = () => {
	const { artiste, song, handleChange, searchSong } = useForm(initialState);
	const { setAlert, alert, fetchLyrics } = useSongContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (Object.values(searchSong).includes('')) {
			setAlert('Please include all values');
			return;
		}

		fetchLyrics({ artiste, song });
	};

	return (
		<Wrapper onSubmit={handleSubmit}>
			<h1>Find a song lyrics</h1>
			<div className='form-center'>
				<div>
					<label htmlFor='artiste' />
					<input
						type='text'
						id='artiste'
						name='artiste'
						placeholder='name of artist'
						onChange={handleChange}
						value={artiste}
					/>
				</div>
				<div>
					<label htmlFor='song' />
					<input
						type='text'
						id='song'
						name='song'
						placeholder='song of artist'
						onChange={handleChange}
						value={song}
					/>
				</div>
			</div>
			<button type='submit'>Search Lyrics</button>
			<Alert>{alert}</Alert>
		</Wrapper>
	);
};

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 5rem);
	background-color: aliceblue;
	.form-center {
		display: flex;
		flex-direction: row;
		margin-top: 20px;
	}
	input {
		margin-left: 20px;
		padding: 0.5rem 1.25rem;
		border: none;
	}
	button {
		margin-top: 20px;
		border: none;
		font-size: 1rem;
		background-color: #2f2f2f;
		color: #fff;
		padding: 0.75rem 0.5rem;
		border-radius: 5px;
		cursor: pointer;
		font-weight: bold;
	}
	button:active {
		transform: translateY(-2px);
		box-shadow: 2px 2px 5px #5e5a5a;
	}
`;

export default Form;
