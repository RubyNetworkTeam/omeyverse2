declare global {
    namespace NodeJS {
      interface ProcessEnv {
            DATABASE_NAME: string,
            DATABASE_USERNAME: string,
            DATABASE_PASSWORD: string,
            DATABASE_HOST: string,

            PORT: string
        }
    }
}

export {}