import React, { Component } from 'react';
import { Collapse, Slider, Switch } from 'antd';

import './styles.css';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function FilterTitles(title) {
  return <span className="filter__titles">{title}</span>;
}

export default class FilterView extends Component {
  state = { disabled: false };
  render() {
    const { disabled } = this.state;
    return (
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header={FilterTitles('PRICE')} key="1">
          <Slider range defaultValue={[20, 50]} disabled={disabled} />
          <div className="filter__price__subs">
            <span>KSh: 20</span> <span>KSh: 120</span>
          </div>
        </Panel>
        <Panel header={FilterTitles('TYPE')} key="21">
          <p>{text}</p>
        </Panel>
        <Panel header={FilterTitles('BRANDS')} key="2">
          <p>{text}</p>
        </Panel>
        <Panel header={FilterTitles('COLLECTIONS')} key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    );
  }
}
