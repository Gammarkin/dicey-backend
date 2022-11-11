import {Router} from 'express';
import CharacterController from '../controllers/Character';

const router = Router();

router.get('/', CharacterController.get);
router.get('/:id', CharacterController.getOne);
router.post('/', CharacterController.post);
router.put('/:id', CharacterController.put);
router.delete('/:id', CharacterController.remove);

export default router;
