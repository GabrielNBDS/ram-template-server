import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { roles } from '../../Models/User'

export default class ChangeUserRoleValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    role: schema.enum(roles),
  })

  public messages = {
    required: 'Obrigatório escolher papel',
    enum: 'O papel deve ser um dos seguintes: {{ options.choices }}',
  }
}
