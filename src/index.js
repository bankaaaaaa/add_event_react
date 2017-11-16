import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app'


class Location extends React.Component {
	render(){
		return(
			<App />
		);
	}	
}
ReactDOM.render(
  <Location />,
document.getElementById('root')
);