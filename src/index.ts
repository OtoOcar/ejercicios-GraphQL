import cors from 'cors'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import express from 'express' 
import { schema } from './graphql'

const app = express()

app.use(cors())
const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

async function startServer() {
    await server.start()
    server.applyMiddleware({ app })
    app.listen(4000, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    })
}

startServer()