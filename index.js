const express = require('express')
const graphqlHTTP = require('express-graphql')
const voyagerMiddleware = require('graphql-voyager/middleware/express').default
const app = express()
const schema = require('./schema')
const PORT = process.env.PORT || 4000
app.use('/graphql', graphqlHTTP({
    schema: schema
}));

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }))
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

