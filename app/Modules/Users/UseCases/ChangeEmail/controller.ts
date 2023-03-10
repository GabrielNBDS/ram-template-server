import Mail from '@ioc:Adonis/Addons/Mail'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeEmailValidator } from '.'
import Route from '@ioc:Adonis/Core/Route'
import User from '../../Models/User'
import Env from '@ioc:Adonis/Core/Env'

export default async function ChangeEmailController({
  auth,
  request,
  response,
}: HttpContextContract) {
  const { email } = await request.validate(ChangeEmailValidator)

  if (auth.user!.email === email) {
    return response.badRequest({ errors: [{ field: 'email', message: 'Esse já é seu e-mail.' }] })
  }

  const alreadyUsed = await User.findBy('email', email)

  if (alreadyUsed) {
    return response.badRequest({ errors: [{ field: 'email', message: 'E-mail em uso.' }] })
  }

  const url = Route.builder()
    .qs({ email, currentEmail: auth.user!.email })
    .makeSigned('/me/confirm-change-email', { expiresIn: '30m' })

  await Mail.sendLater((message) => {
    message
      .from('naoresponda@ramstack.com')
      .to(email)
      .subject('Atualizar e-mail')
      .htmlView('emails/update-email', {
        url: `${Env.get('CLIENT_URL')}/dashboard${url}`,
      })
  })

  return response.status(200)
}
