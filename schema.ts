export const Schema=`#graphql
  type Pet{
    id:ID!
    name:String!
    breed:String!
  }
  type Query{
    pet(id:ID!):Pet! 
    petByBreed(breed:String):[Pet!]!
  }
  type Mutation {
    addPet( name: String!, breed: String!): Pet!
    deletePet(id: ID!): Pet!
    updatePet(id: ID!, name: String!, breed: String!): Pet!
  }
`;