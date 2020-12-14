import React, {Component} from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import Filter from './components/filter';
import Header from './components/Header';
import Sort from './components/Sort';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            launches: [],
            year: null,
            isDescending: false
        }
    }

    componentDidMount() {
		this.getFreshData()
    }

    getFreshData = () => {
        return fetch('https://api.spacexdata.com/v3/launches').then(response => {
			return response.json();
		}).then(launch => {
			this.setState({launches: launch, year: null, isDescending: false})
		});
    }
    
    onSelectChange = (event) => {
        this.setState({year: event.target.value});
    }

    onToggleSort = () => {
        this.state.isDescending ? this.setState({isDescending: false}) : this.setState({isDescending: true})
    }

    render () {
        const { launches, year } = this.state; 
		const filteredLaunches = launches.filter(launch => {
			return launch.launch_year === year;
        })    

        const test = [...this.state.launches];
        const sortedArray= test.sort((a,b) => {
            return (a.flight_number < b.flight_number) ? 1 : -1; 
        });

        const test2 = [...filteredLaunches];
        const filteredSorted = test2.sort((a,b) => {
            return (a.flight_number < b.flight_number) ? 1 : -1;
        })


        return (
            <>
            <div>
                <Header getFreshData={this.getFreshData}/>      
            </div>
            <div style={{display: 'flex'}}>
                <img alt='' src={'./images/launch-home.png'}
                    style={{height: '60%', width: '37vw', padding: '2.6vw'}}/>
                <div>
                    <div style={{display: 'flex', justifyContent: 'flex-end', fontFamily: 'BrandonGrotesque-Regular'}}>
                        <Filter onSelectChange={this.onSelectChange}/>
                        <Sort toggleSort={this.onToggleSort} isDescending={this.state.isDescending}/>
                    </div>
                    <Scroll>
                        <CardList launches={this.state.year !== null ? (this.state.isDescending ? filteredSorted : filteredLaunches) : (this.state.isDescending ? sortedArray : this.state.launches) }/> 
                    </Scroll>
                </div>
            </div>
            </>
        )
    }
}

export default App;