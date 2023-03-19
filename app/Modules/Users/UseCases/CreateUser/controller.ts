import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateUserService, CreateUserValidator } from '.'

export default async function CreateUserController({
  bouncer,
  request,
  response,
}: HttpContextContract) {
  const { name, email } = await request.validate(CreateUserValidator)

  await bouncer.with('UserPolicy').authorize('isAdmin')

  try {
    const users = await CreateUserService(name, email)

    return response.ok(users)
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
