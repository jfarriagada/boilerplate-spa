import React, {Component} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'

const style = {
  margin: 12,
}

const Home = React.createClass({
  // los propTypes ya estan recibidos desde el component app

  handleIncrement() {
    console.log('clicked')
    this.props.onIncrement()
  },
  handleDecrement() {
    this.props.onDecrement()
  },

	render() {
		return (
		  <div>
				<h2>HOME PAGE</h2>
        <h1> {this.props.banco} </h1>
        <button onClick={this.handleIncrement}>
          SUMAR
        </button>
        <button onClick={this.handleDecrement}>
          RESTAR
        </button>
		    <RaisedButton label="Default" style={style} />
      </div>
		)
	}
})

export default Home
