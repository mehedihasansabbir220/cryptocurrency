import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import { CryptoDetailes, Navbar, News, HomePage, Exchanges, Cryptocurrencies } from './component';

const App = () => {
    return (
        <div className="app">
            <div className="navnar">
                <Navbar></Navbar>

            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinID">
                                <CryptoDetailes />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title lavel={5} style={{
                        color: 'white',
                        textAlign: "center"
                    }}>
                        Cryptoverse <br />
                        all rights reserverd
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/news">news</Link>
                        <Link to="/cryptocurrencies">cryptocurrencies</Link>
                        <Link to="/exchanges">exchanges</Link>
                    </Space>

                </div>

            </div>

        </div>
    );
};

export default App;