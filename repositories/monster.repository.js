import Monster from "../models/monster.model.js";

export const getMonstersFromRepository = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters;
    } catch (e){
        throw Error("Error while fetching monsters");
    }
}


export const updateMonstersInRepository = async (query, update) => {
    try{
        return await Monster.findOneAndUpdate(
            {...query},
            {...update},
            {new: true}
        ).lean()
    }   catch (e) {
        throw Error("Error while updating monster");
    }
}

export const deleteMonsterFromRepository = async (query) => {
    try {
        const monster = await Monster.findOneAndDelete({ ...query });
        return monster;
    } catch (e) {
        throw Error("Error while deleting a superhero");
    }
}

export const createMonsterInRepository = async (payload) => {
    try {
    const highestIdMonster = await Monster.findOne().sort('-id').exec();
    let highestId = 0;
    if (highestIdMonster) {
        highestId = highestIdMonster.id;
    }
    payload.id = highestId + 1;
    const newMonster = new Monster(payload);
    const savedMonster = await newMonster.save();
    return savedMonster;
    } catch (e){
        throw Error("Error while creating a monster");
    }
}