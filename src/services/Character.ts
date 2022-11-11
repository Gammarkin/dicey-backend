import IService from '../interfaces/IService';
import {IModel} from '../interfaces/IModel';
import ICharacter from '../interfaces/IChar';

class CharacterService implements IService<ICharacter> {
	private _car: IModel<ICharacter>;

	constructor(model: IModel<ICharacter>) {
		this._car = model;
	}

	public async create(obj: ICharacter): Promise<ICharacter> {
		return this._car.create(obj);
	}

	public async findAll(): Promise<ICharacter[]> {
		return this._car.read();
	}

	public async findById(id: string): Promise<ICharacter | null> {
		return this._car.readOne(id);
	}

	public async updateOne(
		id: string,
		obj: ICharacter
	): Promise<ICharacter | null> {
		return this._car.update(id, obj);
	}

	public async destroy(id: string): Promise<ICharacter | null> {
		return this._car.delete(id);
	}
}

export default CharacterService;
