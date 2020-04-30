import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
//Switch는 한번에 오직 하나의 Route만 렌더링해줌
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Header from './Header';
//2-1의 Q.- 그래서 home이 제일 먼저 실행되어야한다는건 어떻게 알려주는거?
// route에 여러가지 path가 있는데 왜 home으로 가는거?
export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			{/* path는 어느 url에서 해당 Route를 render할지 알려줌,
        exact는 정확히 해당 path여야만 한다는것을 알려주고,
        component는 누군가 이 route에 왔을 때 어떤 컴포넌트가
        보여질 것에 대한것 */}
			<Route path="/tv" component={TV} />
			{/*<Route path="/tv/popular" render={() => <h1>popular</h1>} />*/}
			<Route path="/search" component={Search} />
			<Redirect from="*" to="/" />
			{/*일치하는 route가 하나도 없다면 어느페이지든 받아서 /로 보내줌-근데 에러남->switch필요*/}
		</Switch>
	</Router>
);
