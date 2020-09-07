import React from 'react';
import Moment from 'react-moment';

// function withMoment(WrappedComponent) {
//   return class NewComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       // console.log(props);
//     }

//     render() {
//       return <WrappedComponent {...this.props}/>
//     }
//   }
// }

function DateTime({value, format = 'YYYY/MM/DD'}) {
  return (
    <Moment format={format}>{value}</Moment>
  )
}

export default DateTime;