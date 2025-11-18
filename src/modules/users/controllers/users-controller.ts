import {Request, Response} from 'express'

import { UserServices } from '../services/users-services'

export class UserController {
    static async create(req: Request, res: Response) {
        const {name, email, password} = req.body

        const output = await UserServices.create({name, email, password})

        res.status(201).send(output)
    }
}