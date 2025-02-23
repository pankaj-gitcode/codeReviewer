import express from 'express'
import codeReviwer from '../controller/controller.js';

const reviewRouter = express.Router();


reviewRouter.post('/codereview', codeReviwer);

export default reviewRouter;
