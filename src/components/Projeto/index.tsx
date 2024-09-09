import React from 'react'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo fontSize={16}>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
