import React from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
function App() {
	return (
		<>
			{/*라우터 밖에 있기 때문에 모든곳에서 header가 나타남*/}

			<Router />
			<GlobalStyles></GlobalStyles>
		</>
	);
}

export default App;
