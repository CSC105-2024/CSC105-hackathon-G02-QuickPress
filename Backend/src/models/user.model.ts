import { db } from "../index.ts";

const isDuplicate = async( username: string, email: string ) => {
    const user = await db.user.findFirst({
        where: {
            OR: [
            { username: username },
            { email: email },
  ],
},
});
return user;
}

const createUser = async( username: string, email: string, password: string ) => {
    const user = await db.user.create({
        data: {
            username: username,
            email: email,
            password: password,
        },
    });
    return user;
}

const loginUser = async ( email: string) => {
    const user = await db.user.findUnique({
        where: {
            email: email,
        }
    })
    return user;
}

const getAllInfoUser = async () => {
  const user = await db.user.findMany()
  return user;
}

const getInfoUser = async (id: number) => {
  const user = await db.user.findFirst({
    where: {
        id: id
    }
  })
  return user;
}

const editUsername = async ( id: number, username: string) => {
    const user = await db.user.update({
        where: {
            id: id
        },
        data: {
            username: username
        }
    })
    return user;
}

export { isDuplicate, createUser, getInfoUser, loginUser, getAllInfoUser, editUsername }