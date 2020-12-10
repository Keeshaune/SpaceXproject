import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            launches: [],
        }
    }

    componentDidMount() {
		fetch('https://api.spacexdata.com/v3/launches').then(response => {
			return response.json();
		}).then(launch => {
			this.setState({launches: launch})
		});
	}

    render () {
        return (
            <div>
                <img src='./images/spacex-logo.png' style={{height: '694px', width: '533px'}}/>
                <img src='./images/launch-home.png'/>
                <Scroll>
                    <CardList launches={this.state.launches} /> 
                </Scroll>
            </div>
        )
    }
}

export default App;