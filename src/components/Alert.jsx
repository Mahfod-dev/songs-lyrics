import styled from 'styled-components';

const Alert = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
	background-color: #2f2f2f;
	color: #fff;
	margin-top: 30px;
`;

export default Alert;
