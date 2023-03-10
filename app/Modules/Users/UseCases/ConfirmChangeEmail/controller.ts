import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ConfirmChangeEmailService } from '.'
import User from '../../Models/User'

export default async function ConfirmChangeEmailController({
  auth,
  response,
  request,
}: HttpContextContract) {
  if (!request.hasValidSignature()) {
    return response.badRequest()
  }

  const user = await User.findByOrFail('email', request.qs().currentEmail)

  try {
    const updatedUser = await ConfirmChangeEmailService(request.qs().email, user)

    const { token } = await auth.login(updatedUser)

    return response.ok({
      token,
      ...user.serialize({ fields: { omit: ['rememberMeToken', 'updatedAt', 'createdAt'] } }),
    })
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
