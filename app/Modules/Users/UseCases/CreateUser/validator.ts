import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    email: schema.string({ trim: true }, [rules.email()]),
  })

  public messages = {
    required: 'Campo obrigatório',
    email: 'Formato inválido',
  }
}
