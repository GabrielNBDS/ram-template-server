import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeUserRoleService, ChangeUserRoleValidator } from '.'
import User from '../../Models/User'

export default async function ChangeUserRoleController({
  bouncer,
  request,
  response,
}: HttpContextContract) {
  const id = request.param('id')

  await bouncer.with('UserPolicy').authorize('isAdmin')

  const { role } = await request.validate(ChangeUserRoleValidator)

  const user = await User.findOrFail(id)

  try {
    await ChangeUserRoleService(user, role)

    return response.noContent()
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
