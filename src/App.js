import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import { bindActionCreatores } from 'redux';

class App extends Component {

  componentDidMount(){
    this.props.moviesList();
  }

  render(){
    return (
      <div className="App">
        {
          this.props.movies ?
            this.props.movies.map((item)=>(
              <div key={item.id}>
                {item.name}
              </div>
            ))
            : null
        }
      </div>
    );
  }  
}

function mapStateToProps(state){
  return{
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreatores({moviesList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
