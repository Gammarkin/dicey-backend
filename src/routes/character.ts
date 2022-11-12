import {Router} from 'express';

import CharacterController from '../controllers/Character';
import CharacterService from '../services/Character';
import CharacterModel from '../models/Character';

import validatePost from '../middlewares/validatePost';

const router = Router();

const charModel = new CharacterModel();
const charService = new CharacterService(charModel);
const charController = new CharacterController(charService);

router.get('/', (req, res) => charController.findAll(req, res));
router.get('/:playerTag', (req, res) =>
	charController.findByPlayerTag(req, res)
);

router.post(
	'/',
	validatePost.validateId,
	validatePost.validatePlayerTag,
	validatePost.validateCharacterName,
	validatePost.validateSkills,
	validatePost.validateAttributes,
	(req, res) => charController.create(req, res)
);

router.put('/:playerTag', (req, res) => charController.update(req, res));
router.delete('/:playerTag', (req, res) => charController.destroy(req, res));

export default router;
