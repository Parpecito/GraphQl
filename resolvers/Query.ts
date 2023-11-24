import { Pet } from "../types.ts"
import { getPetFromModel } from "../Controllers/getPetFromModel.ts";
import { PetModel } from "../db/Pet.ts";
import { GraphQLError } from "graphql";

export const Query={
    pet:async(_parent:unknown,args:{id:string}):Promise<Pet>=>{
        const {id}=args;
        const pets=await PetModel.findOne({_id:id});
        if(!pets){
            throw new GraphQLError("No se ha encontrado ninguna mascota con ese id"); 
        }
        const p=await getPetFromModel(pets);
        return p;
        
        
    },
    petByBreed:async (_parent:unknown,args:{breed?:string}):Promise<Array<Pet>>=>{
        const {breed}=args;
        const pets=await PetModel.find(breed?{breed}:{});
        
        return pets.map((p)=>{
            return{
                id:p._id.toString(),
                name:p.name,
                breed:p.breed,
            }
        })
        
    },
}



