import prisma from "./prisma";
import bcrypt from 'bcrypt'

export async function authenticate(credentials: any): Promise<any> {
    const {username, password} = credentials;
    try {
        const userFromDB = await prisma.user.findUnique({
            where: {
                username
            }
        })
        if(!userFromDB) return Promise.reject('No User with this username')
        const matches = await bcrypt.compare(password,userFromDB.password);
        if(!matches) return Promise.reject('Wrong password')
        return userFromDB;
    } catch (error) {
        Promise.reject(error);
    }
}