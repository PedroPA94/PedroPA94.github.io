import React from 'react'
import { GiFishingHook } from 'react-icons/gi'
import { GrMysql } from 'react-icons/gr'
import { ImDatabase } from 'react-icons/im'
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTestinglibrary
} from 'react-icons/si'

export const skills = {
  languages: [
    {
      name: 'Javascript',
      logo: <SiJavascript />
    },
    {
      name: 'SQL',
      logo: <ImDatabase />
    },
    {
      name: 'HTML',
      logo: <SiHtml5 />
    },
    {
      name: 'CSS',
      logo: <SiCss3 />
    }
  ],
  frontend: [
    {
      name: 'React',
      logo: <SiReact />
    },
    {
      name: 'Redux',
      logo: <SiRedux />
    },
    {
      name: 'Hooks',
      logo: <GiFishingHook />
    },
    {
      name: 'Context API',
      logo: <SiReact />
    }
  ],
  backend: [
    {
      name: 'Node.js',
      logo: <SiNodedotjs />
    },
    {
      name: 'Express.js',
      logo: <SiExpress />
    },
    {
      name: 'MySQL',
      logo: <GrMysql />
    }
  ],
  testing: [
    {
      name: 'Jest',
      logo: <SiJest />
    },
    {
      name: 'React Testing Library',
      logo: <SiTestinglibrary />
    }
  ],
  tools: [
    {
      name: 'Git',
      logo: <SiGit />
    },
    {
      name: 'Docker',
      logo: <SiDocker />
    }
  ]
}

export default skills
