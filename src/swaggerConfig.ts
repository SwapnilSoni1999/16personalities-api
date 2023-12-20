import swaggerJSDoc from "swagger-jsdoc"
import path from "path"

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: "16Personalities API",
      version: "1.0.0",
      description: "16Personalities API (Unofficial)",
    },
    basePath: "/", // Base URL of your API
  },
  apis: [path.join(__dirname, "routes/*.routes.ts")],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
