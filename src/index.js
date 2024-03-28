//aula 412-414
import React from 'react';
import ReactDOM from 'react-dom';

//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA, { CompB as B } from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
//import Pai from './componentes/Pai'
//import ComponenteClasse from './componentes/ComponenteClasse'
//import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')
ReactDOM.render(
  <div>
    <Hook />
    {/*<Contador numeroInicial={100} /> 
    <ComponenteClasse valor="Sou um componente de classe!" /> 
    <Pai /> 
    <ComponenteComFuncao />
    <Familia sobrenome="Pereira">
          <Membro nome="Andre" />
          <Membro nome="Mariana" />
      </Familia> 
    
    <FamiliaSilva /> 
    <FamiliaSilva sobrenome="Silva Pereira" /> 
    <MultiElementos />
    <CompA valor="Olá eu sou A!" />
      <B valor="B na área!" />
    <PrimeiroComponente valor="Bom dia!" />
    <PrimeiroComponente />*/}
  </div>
  , elemento)

/*mostrando mensagem aula 413*/
//const elemento = document.getElementById('root')
//ReactDOM.render(<h1>Olá React!</h1>, elemento)

/*fazendo lista de forma simplificada com js aula 414*/
//const elemento = document.getElementById('root')
//const jsx = <h1>Olá React!</h1>

//ReactDOM.render(jsx, elemento)
//ReactDOM.render(
//  <ul>
//     <li>1) Pedro</li>
//     <li>2) Maria</li>
//     <li>3) Ana</li>
//  </ul>
//, elemento)

/*manipulando a dom manualmente*/

//const lista = document.createElement('ul')

// let item = document.createElement('li')
// let texto = document.createTextNode('1) Pedro')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('2) Maria')
// item.appendChild(texto)
// lista.appendChild(item)

// item = document.createElement('li')
// texto = document.createTextNode('3) Ana')
// item.appendChild(texto)
// lista.appendChild(item)

// const elemento = document.getElementById('root')
// elemento.appendChild(lista)