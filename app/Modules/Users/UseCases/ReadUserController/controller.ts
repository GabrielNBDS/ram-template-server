import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ReadUserService } from '.'

export default async function ReadUserController({
  bouncer,
  request,
  response,
}: HttpContextContract) {
  const id = request.param('id')

  await bouncer.with('UserPolicy').authorize('isAdmin')

  try {
    const user = await ReadUserService(id)
    return response.ok(user)
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
