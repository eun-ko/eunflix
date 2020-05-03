import React from 'react';
import PropTypes, { bool } from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
	padding: 20px;
`;
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
	<>
		<Helmet>
			<title>Movies | Nomflix</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
				{nowPlaying && nowPlaying.length > 0 && (
					<Section title="Now Playing">
						{nowPlaying.map((movie) => (
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
						{/* 왜 children을 여기에 넣었는지!!
				Section.js에서 div 내부에 원하는 children을 넣어야하니까 (..?)  */}
					</Section>
				)}
				{upcoming && upcoming.length > 0 && (
					<Section title="upComing Movies">
						{upcoming.map((movie) => (
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
				{popular && popular.length > 0 && (
					<Section title="Popular Movies">
						{popular.map((movie) => (
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
				{error & <Message color="#e74c3c" text={error} />}
			</Container>
		)}
	</>
);
HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upcoming: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default HomePresenter;
