import {Request, Response, NextFunction} from 'express';

export default class ValidatePut {
	static validateBody(req: Request, res: Response, next: NextFunction) {
		const {body} = req;

		if (Object.keys(body).length === 0) {
			return res.status(400).json({message: 'Body is required'});
		}

		next();

		if (
			!body.playerTag &&
			!body.characterName &&
			!body.skills &&
			!body.attributes &&
			!body.id
		) {
			return res.status(400).json({message: 'Body is invalid'});
		}
	}

	static validatePlayerTag(req: Request, res: Response, next: NextFunction) {
		const playerTag = req.body.playerTag;

		if (playerTag && typeof playerTag !== 'string') {
			return res.status(400).json({message: 'Key playerTag must be a string'});
		}

		next();
	}

	static validateCharacterName(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const characterName = req.body.characterName;

		if (characterName && typeof characterName !== 'string') {
			return res
				.status(400)
				.json({message: 'Key characterName must be a string'});
		}

		next();
	}

	static validateSkills(req: Request, res: Response, next: NextFunction) {
		const skills = req.body.skills;

		if (skills) {
			if (typeof skills !== 'object' || Array.isArray(skills)) {
				return res.status(400).json({message: 'Key skills must be an object'});
			}

			if (Object.keys(skills).length !== 5) {
				return res.status(400).json({message: 'Key skills must have 5 keys'});
			}
		}
		next();
	}

	static validateAttributes(req: Request, res: Response, next: NextFunction) {
		const attributes = req.body.attributes;

		if (attributes) {
			if (typeof attributes !== 'object' || Array.isArray(attributes)) {
				return res
					.status(400)
					.json({message: 'Key attributes must be an object'});
			}

			if (Object.keys(attributes).length !== 28) {
				return res
					.status(400)
					.json({message: 'Key attributes must have 5 keys'});
			}
		}
		next();
	}
}
