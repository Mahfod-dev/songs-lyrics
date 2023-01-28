import styled from 'styled-components';

const NavBar = () => {
	return (
		<Wrapper>
			<h1> Single Lyrics</h1>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	height: 5rem;
	background-color: #2f2f2f;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default NavBar;
