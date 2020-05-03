import React from 'react';
import SearchPresenter from './SearchPresenter';
import { tvApi, moviesApi } from '../../api';

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

	handleSubmit = () => {
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.searchByTerm(searchTerm);
		}
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		try {
			this.setState({
				loading: true,
			});
			const {
				data: { results: movieResults },
			} = await moviesApi.search(searchTerm);
			const {
				data: { results: tvResults },
			} = await tvApi.search(searchTerm);

			this.setState({
				movieResults,
				tvResults,
			});
		} catch {
			this.setState({
				error: "Can't find results.",
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
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
				handleSubmit={this.handleSubmit}
				//searchPresenter에서 폼을 만들고, 셋업하고
				//handleSubmit을 호출하기 위해 onSubmit을 호출한다
			/>
		);
	}
}
