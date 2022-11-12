import {Request, Response, NextFunction} from 'express';

export default class ValidatePost {
	static validateId(req: Request, res: Response, next: NextFunction) {
		const {id} = req.body;

		if (!id) {
			return res.status(400).json({message: 'Key id is required'});
		}

		if (isNaN(+id)) {
			return res.status(400).json({message: 'Key id must be a number'});
		}

		next();
	}

	static validatePlayerTag(req: Request, res: Response, next: NextFunction) {
		const {playerTag} = req.body;

		if (!playerTag) {
			return res.status(400).json({message: 'Key playerTag is required'});
		}

		if (typeof playerTag !== 'string') {
			return res.status(400).json({message: 'Key playerTag must be a string'});
		}

		next();
	}

	static validateCharacterName(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const {characterName} = req.body;

		if (!characterName) {
			return res.status(400).json({message: 'Key characterName is required'});
		}

		if (typeof characterName !== 'string') {
			return res
				.status(400)
				.json({message: 'Key characterName must be a string'});
		}

		next();
	}

	static validateSkills(req: Request, res: Response, next: NextFunction) {
		const {skills} = req.body;

		if (!skills) {
			return res.status(400).json({message: 'Key skills is required'});
		}

		if (typeof skills !== 'object' || Array.isArray(skills)) {
			return res.status(400).json({message: 'Key skills must be an object'});
		}

		if (Object.keys(skills).length !== 5) {
			return res.status(400).json({message: 'Key skills must have 5 keys'});
		}

		next();
	}

	static validateAttributes(req: Request, res: Response, next: NextFunction) {
		const {attributes} = req.body;

		if (!attributes) {
			return res.status(400).json({message: 'Key attributes is required'});
		}

		if (typeof attributes !== 'object' || Array.isArray(attributes)) {
			return res
				.status(400)
				.json({message: 'Key attributes must be an object'});
		}

		if (Object.keys(attributes).length !== 28) {
			return res.status(400).json({
				message: 'Key attributes must have 27 keys',
			});
		}

		next();
	}
}
