import bcrypt from "bcrypt";
import { getAllUsers } from "../repositories/users.repositories";


export const getAllUsersService = async () => {
    const users = await getAllUsers();

    return users.map((u)=> ({
        id : u.id,
        name : u.name,
        lastname : u.lastname,
        identificacion : u.identification, 
        email : u.email,
        role : u.ROL.name
    }))
    
}