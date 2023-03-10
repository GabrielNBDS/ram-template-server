import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Modules/Users/UseCases/Login/LoginValidator'
import User from '../../Models/User'

export default async function LoginController({ auth, request, response }: HttpContextContract) {
  const { email, password } = await request.validate(LoginValidator)

  const user = await User.findBy('email', email)

  if (!user) return response.badRequest({ errors: [{ message: 'Credenciais inválidas.' }] })

  try {
    const { token } = await auth.attempt(email, password)

    return response.ok({
      token,
      ...user.serialize({ fields: { omit: ['rememberMeToken', 'updatedAt', 'createdAt'] } }),
    })
  } catch {
    return response.badRequest({ errors: [{ message: 'Credenciais inválidas.' }] })
  }
}
