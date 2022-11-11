import {Model, UpdateQuery} from 'mongoose';
import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
	protected _model: Model<T>;

	constructor(model: Model<T>) {
		this._model = model;
	}

	public async create(obj: T | T[]): Promise<T> {
		return this._model.create({...obj});
	}

	public async readOne(id: string): Promise<T | null> {
		return this._model.findOne({id});
	}

	public async read(): Promise<T[]> {
		return this._model.find({});
	}

	public async update(id: string, obj: Partial<T>): Promise<T | null> {
		return this._model.findOneAndUpdate({id}, {...obj} as UpdateQuery<T>, {
			new: true,
		});
	}

	public async delete(id: string): Promise<void> {
		await this._model.deleteOne({id});
	}
}

export default MongoModel;
