const { buildSchema } = require('graphql')

var schema = buildSchema(`
    type Product {
        id: Int,
        industry: Industry,
        type: Type,
        parent: Parent
    }

    type Industry {
        id: Int,
        product: Product
    }
    type Type {
        id: Int,
        product: Product
    }
    type Parent {
        id: Int,
        product: Product
    }
    type Query {
        something(id: Int) : Product
    }
    type Mutation {
        change(id: Int) : Product
    }
`)

module.exports = schema
