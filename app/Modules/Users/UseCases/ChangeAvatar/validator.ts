import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChangeAvatarValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    avatar: schema.file({
      size: '3mb',
      extnames: ['jpg', 'jpeg', 'png'],
    }),
  })

  public messages = {
    'required': 'Campo obrigatório',
    'size': 'Tamanho máximo da imagem: 3MB',
    'file.extname': 'Formatos aceitos: PNG e JPG/JPEG',
  }
}
