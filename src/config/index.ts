import development from './development'

export interface Config {
    port: number
}

export const NODE_ENV = process.env.NODE_ENV || 'development'

function getConfig (): Config {
  switch (NODE_ENV) {
    case 'development': {
      return development
    }

    default: {
      return development
    }
  }
}

const config = getConfig()

export default config