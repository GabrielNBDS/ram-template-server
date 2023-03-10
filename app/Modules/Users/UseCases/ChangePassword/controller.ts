import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangePasswordService, ChangePasswordValidator } from '.'
import Hash from '@ioc:Adonis/Core/Hash'

export default async function ChangePasswordController({
  auth,
  response,
  request,
}: HttpContextContract) {
  const { password, newPassword } = await request.validate(ChangePasswordValidator)

  const user = auth.user!

  if (!(await Hash.verify(user.password, password))) {
    return response.badRequest({ errors: [{ field: 'password', message: 'Senha incorreta.' }] })
  }

  try {
    await ChangePasswordService(newPassword, user)

    return response.status(200)
  } catch (err) {
    console.log(err)
    return response.internalServerError({
      errors: [{ message: 'Ocorreu um erro. Tente novamente.' }],
    })
  }
}
