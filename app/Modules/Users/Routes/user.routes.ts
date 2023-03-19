import Route from '@ioc:Adonis/Core/Route'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeNameController } from '../UseCases/ChangeName'
import { ChangeEmailController } from '../UseCases/ChangeEmail'
import { ChangePasswordController } from '../UseCases/ChangePassword'
import { ChangeAvatarController } from '../UseCases/ChangeAvatar'
import { RemoveAvatarController } from '../UseCases/RemoveAvatar'
import { ListUsersController } from '../UseCases/ListUsers'
import { CreateUserController } from '../UseCases/CreateUser'
import { ReadUserController } from '../UseCases/ReadUserController'

Route.group(() => {
  Route.get('/', ({ auth }: HttpContextContract) => {
    return auth.user!.serialize()
  }).middleware('auth')

  Route.patch('/change-name', ChangeNameController).middleware('auth')
  Route.patch('/change-password', ChangePasswordController).middleware('auth')
  Route.patch('/change-email', ChangeEmailController).middleware('auth')
  Route.patch('/change-avatar', ChangeAvatarController).middleware('auth')
  Route.delete('/remove-avatar', RemoveAvatarController).middleware('auth')
}).prefix('/me')

Route.group(() => {
  Route.get('/', ListUsersController).middleware('auth')
  Route.get('/:id', ReadUserController).middleware('auth')
  Route.post('/create', CreateUserController).middleware('auth')
}).prefix('/users')
