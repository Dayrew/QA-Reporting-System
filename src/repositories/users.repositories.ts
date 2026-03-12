import {prisma} from "../config/prisma";


export const getAllUsers = async() => {
    return prisma.uSERS.findMany({include : {ROL: true}});
}