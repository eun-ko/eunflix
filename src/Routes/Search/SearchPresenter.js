import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../../Components/Loader';
import Section from '../../Components/Section';

const Container = styled.div`
	padding: 0px 20px;
`;
const Form = styled.form`
	margin-bottom: 50px;
	width: 100%;
`;
const Input = styled.input`
	all: unset;
	font-size: 28px;
	width: 100%;
`;

const SearchPresenter = ({
	movieResults,
	tvResults,
	loading,
	error,
	searchTerm,
	handleSubmit,
	updateTerm,
}) => (
	<Container>
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder="Search Movies or TV shows..."
				value={searchTerm}
				onChange={updateTerm}
				//value는 input을 제어하기 위해 필요
			></Input>
		</Form>
		{loading ? (
			<Loader />
		) : (
			<>
				{movieResults && movieResults.length > 0 && (
					<Section title="Movie Results">
						{/* children */}
						{movieResults.map((movie) => (
							<span key={movie.id}>{movie.title}</span>
						))}
					</Section>
				)}

				{tvResults && tvResults.length > 0 && (
					<Section title="TV Show Results">
						{/* children */}
						{tvResults.map((show) => (
							<span key={show.id}>{show.name}</span>
						))}
					</Section>
				)}
			</>
		)}
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	searchTerm: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired,
};
//proptypes하는 이유는 컨테이너가 알맞은 props를 presenter에 주고있나 확인하기 위해서

export default SearchPresenter;
