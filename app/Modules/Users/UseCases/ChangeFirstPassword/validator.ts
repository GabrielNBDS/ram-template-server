import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChangePasswordValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    password: schema.string({ trim: true }, [rules.minLength(8)]),
  })

  public messages = {
    required: 'Campo obrigatório',
    minLength: 'Mínimo de 8 caracteres',
  }
}
