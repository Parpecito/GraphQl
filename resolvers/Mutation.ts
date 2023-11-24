import { PetModel } from "../db/Pet.ts";
import { GraphQLError } from "graphql";
export const Mutation={
    addPet:(_parent:unknown,args:{name:string,breed:string})=>{
        const{name,breed}=args;
        const pet=new PetModel({name,breed});
        pet.save();
        return pet;
      },
      deletePet: async (_parent: unknown, args: { id: string }) => {
        const id=args;
        const pets=await PetModel.findOneAndDelete({_id:id});
        if(!pets){
            throw new GraphQLError(`No se ha encontrado ninguna mascota con ese id`); 
        }
        return{
            id:pets._id.toString(),
            name:pets.name,
            breed:pets.breed
        }
      },
      updatePet: async (_parent: unknown, args:{ id: string,name:string,breed:string })=>{
        const {id,name,breed}=args;
        const pets=await PetModel.findOneAndUpdate({_id:id},{name,breed});
        if(!pets){
            throw new GraphQLError(`No se ha encontrado ninguna mascota con ese id`); 
        }
        return{
            id:pets._id.toString(),
            name:pets.name,
            breed:pets.breed
        }
      }

}