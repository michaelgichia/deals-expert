import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Homepage from '../Homepage/Loadable';
import TopNavigation from '../TopNavigation';
// Style
import './styles.css';

const { Footer, Content } = Layout;

class App extends Component {
  state = {};
  render() {
    return (
      <Layout className="layout">
        <TopNavigation />
        <Content>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
