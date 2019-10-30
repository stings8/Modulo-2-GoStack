import Router from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello Omni' }));

export default routes;
