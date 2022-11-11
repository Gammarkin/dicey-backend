import ICharacter from '../interfaces/IChar';
import CharacterModel from '../models/Characters';
import seed from '../seed';

const charModel = new CharacterModel();

const read = async (): Promise<ICharacter[] | ICharacter> => {
	const characters = await charModel.read();

	if (characters.length === 0) {
		seed.forEach(async (char) => {
			await charModel.create(char);
		});

		return charModel.read();
	}

	return characters;
};

const readOne = async (id: string): Promise<ICharacter | null> =>
	charModel.readOne(id);

const create = async (body: ICharacter): Promise<ICharacter> =>
	charModel.create(body);

const update = async (
	id: string,
	body: ICharacter
): Promise<ICharacter | null> => charModel.update(id, body);

const destroy = async (id: string): Promise<void> => charModel.delete(id);

export default {
	read,
	readOne,
	create,
	update,
	destroy,
};
