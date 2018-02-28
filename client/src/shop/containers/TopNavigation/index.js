import React, { PureComponent } from 'react';
import { Layout, Input, Icon, Menu, Dropdown } from 'antd';
import Logo from './logo.png';
import './styles.css';

const { Header } = Layout;
const Search = Input.Search;

class SearchBarNav extends PureComponent {
  render() {
    return (
      <div className="top-header">
        <img src={Logo} alt="company logo" className="logo-img" />
        <Search className="search-input" placeholder="Search for products" enterButton="Search" />
        <button className="shopping-cart-btn">
          <span>3 items($145)</span>
          <Icon style={{ fontSize: 20, color: 'inherit' }} type="shopping-cart" />
        </button>
      </div>
    );
  }
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class BottomNav extends PureComponent {
  render() {
    return (
      <div className="bottom-header">
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            <Icon type="down" /> Select category
          </a>
        </Dropdown>
        <div className="bottom-header-pupolar-cats">
          <span className="bottom-header-pupolar-label">Popular:</span>
          <a>Pizza Cutter</a>
          <a>Coffee</a>
          <a>Fork</a>
          <a>Handmade</a>
        </div>
        <div className="bottom-header-pupolar-actions">
          <a>Orders</a>
          <a>Wishlist</a>
          <a>Account</a>
          <a>Logout</a>
        </div>
      </div>
    );
  }
}

export default class TopNavigation extends PureComponent {
  state = {
    categories: []
  };
  render() {
    return (
      <Header className="header">
        <SearchBarNav />
        <BottomNav />
      </Header>
    );
  }
}
