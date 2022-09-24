import React, { Component } from 'react'
import '../css/SerchBar.css'

export default class SerchBar extends Component {
  state = {
    searchTerm: ''
  }

  render () {
    return (
      <div className='navbar'>
        <input
          type='text'
            // Pinta los caracteres que el usuario ingresa
          value={this.state.searchTerm}
            // guarda los valores que el usuario escribe en el input
          onChange={e => this.setState({ searchTerm: e.target.value })}
          placeholder='What are you looking for?'
        />
        <div className='botones'>
          <button
            onClick={() => {
              this.props.handleSearch(this.state.searchTerm)
              // limpiar el input
              this.setState({ searchTerm: '' })
            }}
          >
            Search
          </button>

          <button
            onClick={() => this.props.handleClean(this.state.searchTerm)}
          >
            Clear
          </button>
        </div>

      </div>

    )
  }
}
