import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeEmailValidator } from '.'
import { ChangeEmailService } from '.'

export default async function ChangeEmailController({
  auth,
  request,
  response,
}: HttpContextContract) {
  const { email } = await request.validate(ChangeEmailValidator)

  const user = auth.user!

  try {
    const updatedUser = await ChangeEmailService(email, user)

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
