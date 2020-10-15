import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";
import {HeadProvider, Title} from 'react-head';
import "./App.css";
import Game from "./TicTacToeGame";
import App from "./App";

function Menu() {
    return (
        <Router>
            <Switch>
                <Route path="/game">
                    <About />
                </Route>
                <Route path="/logo">
                    <Logo />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

function Layout(props) {
    return (
        <div>
            <HeadProvider>
                <Title>{props.title}</Title>
            </HeadProvider>
            <Header/>
            {props.children}
        </div>
    );
}

function Header() {
    const match = useRouteMatch();
    
    return (
        <div>
            <ul>
                <li>
                    <Link className={match.url === "/" ? 'red' : ''} to="/">Home</Link>
                </li>
                <li>
                    <Link className={match.url === "/game" ? 'red' : ''} to="/game">Game</Link>
                </li>
                <li>
                    <Link className={match.url === "/logo" ? 'red' : ''} to="/logo">Logo</Link>
                </li>
                <li>
                    <Link className={match.url === "/topics" ? 'red' : ''} to="/topics">Topics</Link>
                </li>
            </ul>
        </div>
    );
}

function Home() {
    return (
        <Layout title="Home">
            <h2>Home</h2>
        </Layout>
    );
}

function About() {
    return (
        <Layout title="About">
            <Game/>
        </Layout>
    );
}

function Logo() {
    return (
        <Layout title="Logo">
            <App/>
        </Layout>
    );
}

function Topics() {
    let match = useRouteMatch();

    return (
        <Layout title="Topics">
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </Layout>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default Menu;