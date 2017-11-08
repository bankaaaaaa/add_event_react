import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import Maps from './components/maps'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Location extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lattitude: '',
			longitude: '',
			event: '',
			startDate: moment(),
			clicked: false,
			initialclicked: true
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleChange(date) {
    this.setState({
      startDate: date
    });
  	}

	handleSubmit(e) {
		this.setState({clicked: false, initialclicked: false});
		this.setState({clicked: true});
		e.preventDefault();
	}
	render() {
		return(
			<div className='container'>
			Please enter the details:
			<form onSubmit={this.handleSubmit} className='form-group'>
				Lattitude: <input type="text" name="lattitude" className='form-control' onChange={this.handleInputChange} value={this.state.lattitude} required/><br />
				Longitude: <input type="text" name="longitude" className='form-control' onChange={this.handleInputChange} value={this.state.longitude} required /><br />
				Event: <input type="text" name="event" className='form-control' onChange={this.handleInputChange} value={this.state.event} required /><br />
				Date: <DatePicker  onChange={this.handleChange} selected={this.state.startDate} /><br/>
				<button type="submit" className='btn btn-lg btn-primary form-control'>Submit</button>
			</form>
			{this.state.clicked && <Maps lattitude={this.state.lattitude} longitude={this.state.longitude} event={this.state.event} date={this.state.startDate._d.toDateString()} /> }
			{this.state.initialclicked && <Maps lattitude={22.5689589} longitude={88.428938} event={'office'} date={new Date().toDateString()} /> }
			<br/><br/>
			
			</div>
		);
	}
}

ReactDOM.render(
  <Location />,
document.getElementById('root')
);