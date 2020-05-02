import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
	state = {
		result: null,
		//id로 검색한 값에 대한 결과
		error: null,
		loading: true,
	};
	render() {
		const { result, error, loading } = this.state;
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}
