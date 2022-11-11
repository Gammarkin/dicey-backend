import {Request, Response} from 'express';
import ICharacter from '../interfaces/IChar';
import IService from '../interfaces/IService';

const OBJECT_NOT_FOUND = 'Object not found';

export default class CarController {
	constructor(private _service: IService<ICharacter>) {}

	public async create(req: Request, res: Response<ICharacter>) {
		const results = await this._service.create(req.body);

		return res.status(201).json(results);
	}

	public async findAll(_req: Request, res: Response<ICharacter[]>) {
		const results = await this._service.findAll();

		return res.status(200).json(results);
	}

	public async findById(
		req: Request,
		res: Response<ICharacter | Record<string, string>>
	) {
		const {id} = req.params;

		const results = await this._service.findById(id);

		if (!results) {
			return res.status(404).json({error: OBJECT_NOT_FOUND});
		}

		return res.status(200).json(results);
	}

	public async update(
		req: Request,
		res: Response<ICharacter | Record<string, string>>
	) {
		const {id} = req.params;
		if (Object.keys(req.body).length === 0) {
			return res.status(400).json({error: 'Body is empty'});
		}

		const results = await this._service.updateOne(id, req.body);

		if (!results) {
			return res.status(404).json({error: OBJECT_NOT_FOUND});
		}

		return res.status(200).json(results);
	}

	public async destroy(
		req: Request,
		res: Response<ICharacter | Record<string, string>>
	) {
		const {id} = req.params;

		const results = await this._service.destroy(id);

		if (!results) {
			return res.status(404).json({error: OBJECT_NOT_FOUND});
		}

		return res.status(204).end();
	}
}
