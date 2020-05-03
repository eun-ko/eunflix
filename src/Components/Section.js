import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
	//이 섹션이 마지막 children이 아니면 marginbottom을 주고 싶지 않음
`;

const Title = styled.span`
	font-size: 14px;
	font-weight: 600;
`;

const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(auto-fill, 125px);
`;

const Section = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grid>{children}</Grid>
	</Container>
);

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};
export default Section;
