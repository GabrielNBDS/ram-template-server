import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeFirstPasswordService, ChangeFirstPasswordValidator } from '.'

export default async function ChangeFirstPasswordController({
  auth,
  response,
  request,
}: HttpContextContract) {
  const { password } = await request.validate(ChangeFirstPasswordValidator)

  const user = auth.user!

  try {
    const updatedUser = await ChangeFirstPasswordService(password, user)

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
