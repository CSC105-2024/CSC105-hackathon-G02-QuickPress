import { db } from "../index.ts";

const createGame = async (day: string, month: string, year: string, score: number, combo: number, userId: number) => {
    const game = await db.game.create({
        data: {
            day: day,
            month: month,
            year: year,
            score: score,
            combo: combo,
            userId: userId
        }
    })
    return game;
}

const deleteGame = async (id: number) => {
    const game = await db.game.delete({
        where: {
            id: id
        }
    })
    return game;
}

const getAllGame = async (userId: number) => {
    const game = await db.game.findMany({
        where: {
            userId: userId
        }
    })
    return game;
}

export { createGame, deleteGame, getAllGame }