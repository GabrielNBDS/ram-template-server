import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeNameService, ChangeNameValidator } from '.'

export default async function ChangeNameController({
  auth,
  request,
  response,
}: HttpContextContract) {
  const { name } = await request.validate(ChangeNameValidator)

  const user = auth.user!

  try {
    const updatedUser = await ChangeNameService(name, user)

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
