import { List } from 'src/db/models/list.model';
import AppError from 'src/error/app-error';

export class ListServices {
  static async create(title: string, userId: number) {
    if(!title) throw new AppError('Necessario preencher o titulo.');

    const list = await List.create({
      title,
      ownerId: userId
    });
  }
}