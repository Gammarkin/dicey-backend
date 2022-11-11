import {Request, Response} from 'express';

import CharacterService from '../services/Character';

const get = async (_req: Request, res: Response) => {
	const characters = await CharacterService.read();

	return res.status(200).json(characters);
};

const getOne = async (req: Request, res: Response) => {
	const {id} = req.params;

	const character = await CharacterService.readOne(id);

	if (!character) {
		return res.status(404).json({message: 'Character not found'});
	}

	return res.status(200).json(character);
};

const post = async (req: Request, res: Response) => {
	const charCreated = await CharacterService.create(req.body);

	return res.status(201).json(charCreated);
};

const put = async (req: Request, res: Response) => {
	const {id} = req.params;

	const charUpdated = await CharacterService.update(id, req.body);

	if (!charUpdated) {
		return res.status(404).json({message: 'Character not found'});
	}

	return res.status(200).json(charUpdated);
};

const remove = async (req: Request, res: Response) => {
	const {id} = req.params;

	await CharacterService.destroy(id);

	return res.status(204).end();
};

export default {
	get,
	getOne,
	post,
	put,
	remove,
};
