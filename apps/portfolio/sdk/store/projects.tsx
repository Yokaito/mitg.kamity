import { create } from 'zustand'

type Stacks =
  | 'React'
  | 'Typescript'
  | 'Nextjs'
  | 'TailwindCSS'
  | 'StyledComponents'
  | 'Sass'
  | 'CSS'
  | 'HTML'
  | 'Javascript'
  | 'Nodejs'
  | 'GraphQL'
  | 'Redux'
  | 'Zustand'

type Frameworks = 'Nextjs' | 'React' | 'Nodejs' | 'Express' | 'Gatsby'

interface Project {
  name: string
  framework: Frameworks
  position: {
    name: string
  }
  stacks: Stacks
  image: {
    src: string
    alternateName: string
  }
  company: {
    name: string
    url: string
    logo: {
      src: string
      alternateName: string
    }
  }
}

interface ProjectsStore {
  projects: Project[]
}

const useProjects = create<ProjectsStore>(() => ({
  projects: [],
}))

export default useProjects
