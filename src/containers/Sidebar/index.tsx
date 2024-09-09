import React from 'react'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Davi Menezes</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          Davziinn
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro front-end
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
