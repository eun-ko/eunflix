import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		//누군가 검색할때 영화,티비 둘다 결과 보여줌
		searchTerm: '',
		loading: false,
		//아무것도 로딩X, 사용자가 검색하기를 기다림
		error: null,
	};

	render() {
		const {
			movieResults,
			tvResults,
			searchTerm,
			loading,
			error,
		} = this.setState;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				loading={loading}
				error={error}
			/>
		);
	}
}
