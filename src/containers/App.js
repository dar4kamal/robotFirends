import React, { Component } from 'react'
import { connect } from "react-redux"
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

import { changeSearchField , requestRobots } from "../actions"


const mapStateToProps = (state) => {    
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {    

    componentDidMount() {        
        this.props.onRequestRobots();        
    }    

    render() {        
        const { searchField , onSearchChange , robots, isPending, error} = this.props;
        return isPending ? 
        (
            <div className="tc">
                <h2>
                    <pre className="pa2 ma5">
                        L O A D I N G . . . R O B O T S
                    </pre>                        
                </h2>
            </div>
        ) : !error ? (
            <div className="tc">
                <h2 className="f1"> Robot Friends </h2>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={
                            robots.filter(obj => {
                                return obj.name.toLowerCase().includes(searchField);
                            })
                        }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        ) : (
            <div className="tc">
                <h2>
                    <pre className="pa2 ma5">
                        E R R O R <pre>L O A D I N G . . . R O B O T S</pre>                        
                    </pre>                        
                </h2>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);