import convict from "convict"

type ConfigObject = {
  app: {
    id: string
    masterKey: string
  }
  cloud: {
    path?: string
  }
  http: {
    server: {
      host: string
      port: number
      backend: {
        path: string
        url: string
      }
    }
  }
  db: {
    uri: string
  }
}

const config = convict<ConfigObject>({
  app: {
    id: {
      env: "APP_ID",
      arg: "app-id",
      default: "application-id",
    },
    masterKey: {
      env: "APP_MASTER_KEY",
      arg: "app-master-key",
      default: "application-master-key",
    },
  },
  cloud: {
    path: {
      env: "CLOUD_PATH",
      arg: "cloud-path",
      default: undefined,
    },
  },
  http: {
    server: {
      host: {
        env: "HTTP_SERVER_HOST",
        arg: "http-server-host",
        default: "0.0.0.0",
      },
      port: {
        format: Number,
        env: "HTTP_SERVER_PORT",
        arg: "http-server-port",
        default: 3000,
      },
      backend: {
        path: {
          env: "HTTP_SERVER_BACKEND_PATH",
          arg: "http-server-backend-path",
          default: "/backend",
        },
        url: {
          env: "HTTP_SERVER_BACKEND_URL",
          arg: "http-server-backend-url",
          default: "http://0.0.0.0:3000/backend",
        },
      },
    },
  },
  db: {
    uri: {
      env: "DB_URI",
      arg: "db-uri",
      default: "mongodb://0.0.0.0:27017/backend",
    },
  },
})

export type { ConfigObject }
export default config
