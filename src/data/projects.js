import RecipesApp from '../img/recipes.avif'
import StarWars from '../img/starwars.avif'
import TrybeWallet from '../img/trybewallet.avif'

export const projects = [
  {
    text: {
      pt: {
        name: 'App de Receitas',
        description: 'Busque por receitas de comidas ou bebidas para preparar. Projeto em grupo desenvolvido durante os estudos de Front-end na Trybe.'
      },
      en: {
        name: 'Recipes App',
        description: 'Search for food or drink recipes to cook or prepare. Group project developed while studying Front-end web dev at Trybe.'
      }
    },
    image: RecipesApp,
    tags: ['react', 'redux', 'hooks', 'scrum', 'jest', 'react-testing-library'],
    github: 'https://github.com/PedroPA94/recipes-app--trybe',
    link: 'https://pedropa94.github.io/recipes-app--trybe/#/'
  },
  {
    text: {
      pt: {
        name: 'Busca Planetária',
        description: 'Visualize, compare and filtre informações sobre os principais planetas de Star Wars. Desenvolvido durante os estudos de Front-end na Trybe.'
      },
      en: {
        name: 'Star Wars Planet Search',
        description: 'Visualize, compare and filter info on the main Star Wars franchise planets. Developed while studying Front-end web dev at Trybe.'
      }
    },
    image: StarWars,
    tags: ['react', 'hooks', 'context api', 'jest', 'react-testing-library'],
    github: 'https://github.com/PedroPA94/star-wars-planet-search-trybe',
    link: 'https://pedropa94.github.io/star-wars-planet-search-trybe/#/'
  },
  {
    text: {
      pt: {
        name: 'TrybeWallet',
        description: 'Ferramenta que permite ao usuário controlar suas despesas em diferentes moedas. Desenvolvido durante os estudos de Front-end na Trybe.'
      },
      en: {
        name: 'TrybeWallet',
        description: 'Tool for the user to control his/her expenses in any of the avaliable currencies. Developed while studying Front-end web dev at Trybe.'
      }
    },
    image: TrybeWallet,
    tags: ['react', 'redux', 'jest', 'test-driven-development', 'react-testing-library'],
    github: 'https://github.com/PedroPA94/trybewallet--trybe',
    link: 'https://pedropa94.github.io/trybewallet--trybe/#/'
  }
]

export default projects
