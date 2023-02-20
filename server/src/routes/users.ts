import { Router } from 'express';

import Service from '../services/users';

const router = Router();
const service = new Service();

router.post('/register', service.register);
router.post('/login', service.login);

router.get('/:id', service.findOne);
router.patch('/:id', service.update);
router.delete('/:id', service.remove);

router.get('/', service.findAll);

export default router;