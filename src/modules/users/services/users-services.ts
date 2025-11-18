import bcrypt from 'bcrypt'
import {User} from 'src/db/models/user'

type createData = {
    name: string,
    email: string,
    password: string
}

export class UserServices {

    static async create({name, email, password}: createData) {
        if(!name) throw new Error('É necessario informar o nome.')
        if(!email) throw new Error('É necessario informar o email.')
        if(!password) throw new Error('É necessario infomar a senha.')

        const findUser = await User.findOne({
            where: {
                email
            }
        }) 
        if(findUser) throw new Error('Email já cadastrado.')

        const passwordHash = await bcrypt.hash(password, 8)

        const user = await User.create({
            name,
            email,
            password: passwordHash
        })
        return {
            name,
            email
        }
    }
}