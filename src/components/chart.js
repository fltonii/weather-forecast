import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import _ from 'lodash';

function average(array) {
  return _.round(_.sum(array)/array.length)
}

const Chart = props => (
  <div>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
  </div>
);

export default Chart;
