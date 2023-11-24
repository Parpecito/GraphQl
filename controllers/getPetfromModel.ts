import { Pet } from "../types.ts";
import { PetModelType } from "../db/Pet.ts";

export const getPetFromModel = async (
    p: PetModelType
  ): Promise<Pet> => {
     const {_id,name,breed}=p;
    return {
      id: _id.toString(),
      name,
      breed,
    };

  }