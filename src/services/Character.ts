import IService from '../interfaces/IService';
import {IModel} from '../interfaces/IModel';
import ICharacter from '../interfaces/IChar';

class CharacterService implements IService<ICharacter> {
	private _char: IModel<ICharacter>;

	constructor(model: IModel<ICharacter>) {
		this._char = model;
	}

	public async create(obj: ICharacter): Promise<ICharacter> {
		return this._char.create(obj);
	}

	public async findAll(): Promise<ICharacter[]> {
		return this._char.read();
	}

	public async findById(id: string): Promise<ICharacter | null> {
		return this._char.readOne(id);
	}

	public async updateOne(
		id: string,
		obj: ICharacter
	): Promise<ICharacter | null> {
		return this._char.update(id, obj);
	}

	public async destroy(id: string): Promise<ICharacter | null> {
		return this._char.delete(id);
	}
}

export default CharacterService;
