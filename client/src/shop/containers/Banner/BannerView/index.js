import React, { Component } from 'react';
import { Carousel } from 'antd';
import './styles.css';

export default class BannerView extends Component {
  state = {};
  render() {
    return (
      <Carousel vertical>
        <div>
          <div className="banner__wrap">
            <img
              src="http://res.cloudinary.com/dw3arrxnf/image/upload/c_scale,w_2990/v1519805896/rice_meal_dv6v8w.jpg"
              alt=""
            />
            <div className="banner__wrap__mask" />
            <span>
              <h1>Kitchen & Bar</h1>
              <h6>516 items</h6>
            </span>
          </div>
        </div>
        <div>
          <div className="banner__wrap">
            <img
              src="http://res.cloudinary.com/dw3arrxnf/image/upload/c_scale,w_2990/v1519805896/rice_meal_dv6v8w.jpg"
              alt=""
            />
            <div className="banner__wrap__mask" />
            <span>
              <h1>Jane & Bar</h1>
              <h6>516 items</h6>
            </span>
          </div>
        </div>
        <div>
          <div className="banner__wrap">
            <img
              src="http://res.cloudinary.com/dw3arrxnf/image/upload/c_scale,w_2990/v1519805896/rice_meal_dv6v8w.jpg"
              alt=""
            />
            <div className="banner__wrap__mask" />
            <span>
              <h1>Kate & Bar</h1>
              <h6>516 items</h6>
            </span>
          </div>
        </div>
      </Carousel>
    );
  }
}
