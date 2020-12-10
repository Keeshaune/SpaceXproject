import React, {Component} from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import Filter from './filter';
import Header from './components/Header';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            launches: [],
            year: null
        }
    }

    componentDidMount() {
		this.getFreshData()
    }

    getFreshData = () => {
        return fetch('https://api.spacexdata.com/v3/launches').then(response => {
			return response.json();
		}).then(launch => {
			this.setState({launches: launch, year : null})
		});
    }
    
    onSelectChange = (event) => {
        this.setState({year: event.target.value});
        console.log(event.target.value);
    }

    render () {
        const { launches, year } = this.state; // destructuring (now i dont have to use this.state.robots but just robots)
		const filteredLaunches = launches.filter(launch => {
			return launch.launch_year === year;
        })
        return (
            <>
            <Header getFreshData={this.getFreshData}/>
            <div style={{display: 'flex'}}>
                <img src={'./images/launch-home.png'}
                    style={{height: '60%', width: '40vw', padding: '100px'}}/>
                <div>
                <Filter onSelectChange={this.onSelectChange}/>
                <Scroll>
                    <CardList launches={this.state.year !== null ? filteredLaunches : this.state.launches} /> 
                </Scroll>
                </div>
            </div>
            </>
        )
    }
}

export default App;