import React, { Component } from 'react';
import EditarCronometro from './EditarCronometro'
import store from '../store';

class NuevoCronometro extends Component {
  constructor () {
    super();
    this.formCronometer = this.formCronometer.bind(this);

    this.state = {
      newForm: false
    }

    store.subscribe(() => {
      this.setState({
        newForm: store.getState().nuevoCronometro
      });
    });
  }

  render() {
    let newButton = <div>
      <button onClick={this.formCronometer}>
      </button>
      </div>
    return (
      <div>
        {this.state.newForm ? <EditarCronometro edit={false} titulo={""} descripcion={""}/> : newButton}
      </div>
    )
  }

  formCronometer() {
    store.dispatch({
      type: "FORMULARIO_NUEVO_CRONOMETRO"
    })
  }
}

export default NuevoCronometro;
