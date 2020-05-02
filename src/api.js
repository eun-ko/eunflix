import axios from 'axios';

//api.get("/tv/popular")
//라고 하면, baseURL을 덮어쓰는것,
// /는 절대경로를 의미하는데, 상대경로를 적어줘야함

export const moviesApi = {
	nowPlaying: () =>
		axios.get('movie/now_playing', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
			},
		}),
	upcoming: () =>
		axios.get('movie/upcoming', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
			},
		}),
	popular: () =>
		axios.get('movie/popular', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
			},
		}),
	movieDetail: (id) =>
		axios.get(`movie/${id}`, {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
				append_to_response: 'videos',
			},
		}),
	search: (term) =>
		axios.get('search/movie', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
				query: encodeURIComponent(term),
				//String으로 인코딩 해줘야함
			},
		}),
};

export const tvApi = {
	topRated: () =>
		axios.get('tv/top_rated', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
			},
		}),
	popular: () =>
		axios.get('tv/popular', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
			},
		}),
	airingToday: () =>
		axios.get('tv/airing_today', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
			},
		}),
	showDetail: (id) =>
		axios.get(`tv/${id}`, {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
				append_to_response: 'videos',
			},
		}),
	search: (term) =>
		axios.get('search/tv', {
			params: {
				api_key: '59fd1f65c2e920e3bf07b6f26005dc9d',
				language: 'en-US',
				query: encodeURIComponent(term),
			},
		}),
};
