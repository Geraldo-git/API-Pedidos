import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({
        message: 'API funcionando',
    });
});

export default routes;
