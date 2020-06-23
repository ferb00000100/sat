import React from 'react';
import "bootswatch/dist/lumen/bootstrap.min.css";
import { Col } from 'reactstrap';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import CollectorPage from './pages/collectorPage';
import HomePage from './pages/HomePage';
import AuditPage from './pages/AuditPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
// import './App.css';
// import Audit from "./components/Audit";
// import NotFound from "./components/NotFound";
// require('dotenv').config();

// import { render } from 'react-dom';

const client = new ApolloClient({
    uri: "http://prism-LoadB-1CNC3JZSS6UIU-1000581532.us-east-1.elb.amazonaws.com/awsPrisma/dev"
})

function App() {


return (
    <BrowserRouter>
        <Route>
            <Col>
            <NavBar/>
            <Switch>
            <div>
                <ApolloProvider client={client}>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/collectors" component={CollectorPage}/>
                    <Route exact path="/audit" component={AuditPage}/>
                </ApolloProvider>
            </div>
            </Switch>
            </Col>
        </Route>
    </BrowserRouter>
    )
}

export default App;
