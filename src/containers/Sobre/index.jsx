import React from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab nam
        dolores iure laudantium veniam rerum culpa pariatur commodi quos, vero
        neque. Voluptatem fugiat impedit quod provident similique sint soluta!
      </Paragrafo>
      <GithubSecao>
        <img
          src="https://github-readme-stats.vercel.app/api?username=Davziinn&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Davziinn&layout=compact&langs_count=7&theme=dracula"
          alt="Top Languages"
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre
