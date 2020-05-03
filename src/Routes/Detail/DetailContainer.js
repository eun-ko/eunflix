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
		//덮어쓰기하기위해서 result를 const가 아니라 let으로 선언함
		try {
			if (this.isMovie) {
				({ data: result } = await moviesApi.movieDetail(parsedId));
			} else {
				({ data: result } = await tvApi.showDetail(parsedId));
				//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assignment_without_declaration
				//참고하면, 밖에 괄호씌워준거는
				//const { data: result } = await tvApi.showDetail(parsedId) 와 같음
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
