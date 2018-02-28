import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import BannerView from '../BannerView';

class Homepage extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Fragment>
        <BannerView />
        <Button type="primary">Hello wolrd</Button>
        <br />
        <p>{this.state.response}</p>
      </Fragment>
    );
  }
}

export default Homepage;
