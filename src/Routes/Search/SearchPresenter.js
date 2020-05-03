import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

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
			/>
		</Form>
		{loading ? (
			<Loader />
		) : (
			<>
				{movieResults && movieResults.length > 0 && (
					<Section title="Movie Results">
						{/* children */}
						{movieResults.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								title={movie.original_title}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								isMovie={true}
								year={movie.release_date && movie.release_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}

				{tvResults && tvResults.length > 0 && (
					<Section title="TV Show Results">
						{/* children */}
						{tvResults.map((show) => (
							<Poster
								key={show.id}
								id={show.id}
								title={show.original_name}
								imageUrl={show.poster_path}
								rating={show.vote_average}
								year={
									show.first_air_date && show.first_air_date.substring(0, 4)
								}
							/>
						))}
					</Section>
				)}
			</>
		)}
		{error && <Message text={error} color="#e74c3c" />}
		{tvResults &&
			movieResults &&
			(tvResults.length === 0) & (movieResults === 0) && (
				<Message text="Nothing found" color="#95a5a6" />
				//왜 0이 뜨냐
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
