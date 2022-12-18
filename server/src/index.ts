import express, { Request, Response }  from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { Controller } from './app/controller.js'
import {Database} from './adapters/database.js'

dotenv.config()

const {PORT, DB_USER, DB_PASSWORD} = process.env;
const app = express();

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@calendar-db.r2bbfu3.mongodb.net/?retryWrites=true&w=majority`
const repository = new Database(uri, 'Accounts');

app.use(cors)
app.use(express.json())
app.use('/', new Controller(repository).process())

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}...`);
    console.log(`http://localhost:${PORT}/`);
});

