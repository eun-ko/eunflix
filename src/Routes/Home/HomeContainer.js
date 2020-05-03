import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api';

export default class extends React.Component {
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		error: null,
		loading: true,
	};
	async componentDidMount() {
		try {
			const {
				data: {
					results: nowPlaying,
					//가져올 이름 재설정하기
				},
			} = await moviesApi.nowPlaying();
			const {
				data: { results: upcoming },
			} = await moviesApi.upcoming();
			const {
				data: { results: popular },
			} = await moviesApi.popular();
			this.setState({
				nowPlaying,
				//nowPlaying:nowPlaying과 같은 결과
				upcoming,
				popular,
			});
		} catch {
			this.setState({
				error: "Can't find movies information.",
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	}
	render() {
		const { nowPlaying, upcoming, popular, error, loading } = this.state;
		return (
			<HomePresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				error={error}
				loading={loading}
			/>
		);
	}
}
