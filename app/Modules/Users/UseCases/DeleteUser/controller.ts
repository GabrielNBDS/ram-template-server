import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DeleteUserService } from '.'
import User from '../../Models/User'

export default async function DeleteUserController({
  bouncer,
  request,
  response,
}: HttpContextContract) {
  const id = request.param('id')

  await bouncer.with('UserPolicy').authorize('isAdmin')

  const user = await User.findOrFail(id)

  try {
    await DeleteUserService(user)

    return response.noContent()
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
