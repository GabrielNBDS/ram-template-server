import Route from '@ioc:Adonis/Core/Route'
import LoginController from 'App/Modules/Users/UseCases/Login/LoginController'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

Route.post('/login', LoginController)
Route.delete('/logout', async ({ auth, response }: HttpContextContract) => {
  await auth.logout()

  return response.noContent()
}).middleware('auth')
