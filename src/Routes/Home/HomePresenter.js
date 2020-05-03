import React from 'react';
import PropTypes, { bool } from 'prop-types';
import styled from 'styled-components';

import Section from '../../Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
	padding: 0px 10px;
`;
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{nowPlaying && nowPlaying.length > 0 && (
				<Section title="Now Playing">
					{nowPlaying.map((movie) => (
						<span key={movie.id}> {movie.title}</span>
					))}
					{/* 왜 children을 여기에 넣었는지!!
				Section.js에서 div 내부에 원하는 children을 넣어야하니까 (..?)  */}
				</Section>
			)}
			{upcoming && upcoming.length > 0 && (
				<Section title="upComing Movies">
					{upcoming.map((movie) => (
						<span key={movie.id}> {movie.title}</span>
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title="Popular Movies">
					{popular.map((movie) => (
						<span key={movie.id}> {movie.title}</span>
					))}
				</Section>
			)}
		</Container>
	);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upcoming: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default HomePresenter;
