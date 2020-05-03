import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
	constructor(props) {
		super(props);

		const {
			location: { pathname },
		} = props;

		this.state = {
			result: null,
			//id로 검색한 값에 대한 결과
			error: null,
			loading: true,
			isMovie: pathname.includes('/movie/'),
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: { id },
			},
			history: { push },
		} = this.props;
		this.isMovie = this.state;
		const parsedId = parseInt(id);
		if (isNaN(parsedId)) {
			//number가 아니면
			return push('/');
			//return 하면 함수 죽음
		}
		let result = null;
		try {
			if (this.isMovie) {
				({ data: result } = await moviesApi.movieDetail(parsedId));
			} else {
				({ data: result } = await tvApi.showDetail(parsedId));
			}
		} catch {
			this.setState({ error: "Can't find anything." });
		} finally {
			this.setState({ loading: false, result });
		}
	}
	render() {
		const { result, error, loading } = this.state;
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}
