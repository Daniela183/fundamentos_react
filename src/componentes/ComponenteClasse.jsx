//aula 429
import React, { Component } from 'react'

export default class ComponenteClasse extends Component {
    render() {
        return (
            <h1>{this.props.valor || 'Padrão'}</h1>
        )
    }
}

//React.Component pode referenciar dessa forma