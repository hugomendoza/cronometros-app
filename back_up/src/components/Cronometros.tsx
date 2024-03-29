import React, { Component } from "react";
import { Grid } from 'semantic-ui-react';
import store from '../store';
import Cronometro from './Cronometro';
import EditarCronometro from './EditarCronometro';

class Cronometro extends Component {
  constructor () {
    super();

    this.state = {
      cronometros: []
    }

    store.subscribe(() => {
      this.setState({
        cronometros: store.getState().cronometros
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <div>
            { this.state.cronometros.map((cronometro, index) =>
            cronometro.editarCronometro ? <EditarCronometro key={ index } edit={ true } titulo = {cronometro.titulo} descripcion={cronometro.descripcion}/> :
            <Cronometro key = {index}
              titulo = {cronometro.titulo}
              descripcion = {cronometro.descripcion}
              ms = {cronometro.ms}
              segundos = {cronometro.segundos}
              minutos = {cronometro.minutos}
              horas = {cronometro.horas}
              running = {cronometro.running}
              id = {cronometro.id}
              editarCronometro = {cronometro.editarCronometro} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Cronometros;
