import axios from 'axios'
import React, { Component } from 'react'
import SerchBar from '../shared/SerchBar'
import { ReactComponent as NoData } from '../assets/no_data.svg'
import Cargando from '../shared/Cargando'
import '../css/Home.css'

export default class Home extends Component {
  state = {
    resultados: [], // respuesta de la api
    loading: false // cambiarlo para mostrar un estado de loading
  }

  handleSearch = async (term) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${term}&limit=12&rating=G`)
    this.setState({ loading: false, resultados: res.data.data })
  }

  handleClean = () => {
    this.setState({ resultados: [] })
  }

  render () {
    return (
      <>
        <SerchBar
          // eslint-disable-next-line react/jsx-handler-names
          handleSearch={this.handleSearch}
          // eslint-disable-next-line react/jsx-handler-names
          handleClean={this.handleClean}
        />
        <div className='contenedor'>
          <div className='grid'>
            {
              this.state.resultados.length === 0
                ? <div className='imagen-nodata'><NoData style={{ height: 300, width: 300 }} /></div>
                : this.state.loading
                  ? <p><Cargando /> </p>
                  : this.state.resultados.map(gifObjet =>
                    <img
                      key={gifObjet.id}
                      src={gifObjet.images.downsized.url}
                      alt={gifObjet.slug}
                    />
                  )
            }
          </div>
        </div>
      </>
    )
  }
}
