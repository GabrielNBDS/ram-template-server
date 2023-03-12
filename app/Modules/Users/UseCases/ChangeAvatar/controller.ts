import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeAvatarValidator, ChangeAvatarService } from '.'

export default async function ChangeAvatarController({
  auth,
  request,
  response,
}: HttpContextContract) {
  const { avatar } = await request.validate(ChangeAvatarValidator)

  const user = auth.user!

  try {
    const updatedUser = await ChangeAvatarService(avatar, user)

    return response.ok(
      updatedUser.serialize({ fields: { omit: ['rememberMeToken', 'updatedAt', 'createdAt'] } })
    )
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
