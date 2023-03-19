import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ListUsersService } from '.'

export default async function ListUsersController({
  bouncer,
  request,
  response,
}: HttpContextContract) {
  const page = request.input('page', 1)

  await bouncer.with('UserPolicy').authorize('isAdmin')

  try {
    const users = await ListUsersService(page)

    return response.ok(users)
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
