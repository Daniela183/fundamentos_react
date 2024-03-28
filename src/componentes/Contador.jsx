//aula 431-433
import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }
    menosUm = () => {
        this.alterarNumero(-1)
    }

    maisUm = () => {
        this.alterarNumero(1)
        //this.setState({ numero: this.state.numero + 1 })
        //this.state.numero = this.state.numero + 1
    }

    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <div style={{padding:'5px', margin:'5px'}}>
                    <button onClick={this.menosUm}>Dec </button>
                    <button onClick={this.maisUm}>Inc </button>
                </div>
                <div style={{padding:'5px', margin:'0 5px'}}>
                    <button onClick={() => this.alterarNumero(-10)}>
                        Dec 10 </button>
                        <button onClick={() => this.alterarNumero(10)}>
                        Inc 10 </button>
                </div>
            </div>
        )
    }
}

/*solução 01 - Bind aula 431*/
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

/*solução 02 - Função Arrow (onClick) aula 432*/
// <button onClick={() => this.maisUm()}>Inc</button>

/*solução 03 - Função Arrow*/
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }