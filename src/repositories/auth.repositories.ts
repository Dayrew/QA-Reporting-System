import  { prisma } from "../config/prisma";

export const findUserByEmail = async (email:string) => {
    return prisma.uSERS.findUnique({where : {email}, include : {ROL: true}});
}

