import React from 'react';
import Moment from 'react-moment';

function DateTime({value, format = 'YYYY/MM/DD'}) {
  return (
    <Moment format={format}>{value}</Moment>
  )
}

export default DateTime;