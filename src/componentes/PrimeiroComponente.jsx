//aula 415-418
import React from 'react'
/*passando valores no componente via props*/
let isLegal = true

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{1 + 1}</h2>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>

/*passando o valor do componente via props na index*/
//export default (props) => 
//  <div>
//      <h1>{props.valor}</h1>
//  </div>

/*componente com arrow function simplificação*/
// export default () => 
//     <div>
//         <h1>Primeiro Componente (Arrow)!</h1>
//     </div>
 
/*exportação do componente em função parte superior*/
// export default function() {
//     return <h1>Primeiro Componente!</h1>
// }

/*primeiro componente em função */
// function primeiro() {
//     return <h1>Primeiro Componente!</h1>
// }

// export default primeiro