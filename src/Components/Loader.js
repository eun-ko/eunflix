import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	width: 100vh;
	display: flex;
	font-size: 28px;
	margin-top: 20px;
	justify-content: center;
`;

export default () => (
	<Container>
		<span role="img" aria-label="Loading">
			⏰
		</span>
	</Container>
);
