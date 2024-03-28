//aula 422 || 424
import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        <Membro nome="Rafael" sobrenome="Silva"/>
        <Membro nome="Daniela" sobrenome="Silva"/>
        <Membro nome="Pedro" sobrenome="Silva"/>
        <Membro nome="Ana" sobrenome="Silva"/>
    </div>

/**pode ser feito dessa forma
 * export default props => 
    <div>
        <Membro nome="Rafael" sobrenome={props.sobrenome} />
        <Membro nome="Daniela" sobrenome={props.sobrenome} />
        <Membro nome="Pedro" sobrenome={props.sobrenome} />
        <Membro nome="Ana" sobrenome={props.sobrenome} />
    </div>
 */