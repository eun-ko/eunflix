import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
//withRouter : 컴포넌트를 감싸주는 컴포넌트
//다른 컴포넌트를 감싸고있는 withRouter을 export중
export default withRouter(({ location: { pathname } }) => (
	<Header>
		<List>
			<Item current={pathname === '/'}>
				<SLink to="/">Movies</SLink>
			</Item>
			<Item current={pathname === '/tv'}>
				<SLink to="/tv">TV</SLink>
			</Item>
			<Item current={pathname === '/search'}>
				<SLink to="/search">Search</SLink>
			</Item>
		</List>
	</Header>
));
//SC에 props전달도 가능
const Header = styled.header`
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0px 10px;
	background-color: rgba(20, 20, 20, 0.8);
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
	display: flex;
`;
const Item = styled.li`
	width: 50px;
	height: 50px;
	text-align: center;
	border-bottom: 3px solid
		${(props) => (props.current ? '#3498db' : 'transparent')};
	transition: border-bottom 0.5s ease-in-out;
`; //current값이 ture인지 아닌지에 따라 색상 지정
const SLink = styled(Link)`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`; //라우터돔에 스타일컴포넌트적용하기
