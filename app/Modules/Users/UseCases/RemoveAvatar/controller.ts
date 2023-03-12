import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RemoveAvatarService } from '.'

export default async function ChangeAvatarController({ auth, response }: HttpContextContract) {
  const user = auth.user!

  try {
    const updatedUser = await RemoveAvatarService(user)

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
