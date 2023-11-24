/*
  //Esto va obligatorio y si te devuelve es un array de Pets
  pet(id:ID!):Pet! //Son 2 querys diferentes
  El query pasa datos y el mutation lo que hace es modificar los datos
  Aqui se va a pasar el ID ya que no estanos trabajando con MOngo
*/
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose"
import { Schema } from "./schema.ts";
import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
console.log("Se ha conectado a la base de datos");


const resolvers={
  Query,
  Mutation,
}


const server = new ApolloServer({ 
  typeDefs:Schema,
  resolvers:resolvers,
});
const { url } = await startStandaloneServer(server,{
  listen:{
    port:3000
  }
});
console.log(`Funcionando en ${url}`);