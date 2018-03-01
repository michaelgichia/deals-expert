import React, { Component, Fragment } from 'react';
import BannerView from '../BannerView';
import FilterView from '../FilterView';

class Homepage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <BannerView />
        <FilterView />
      </Fragment>
    );
  }
}

export default Homepage;
