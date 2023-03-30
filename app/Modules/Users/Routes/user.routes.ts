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
import { DeleteUserController } from '../UseCases/DeleteUser'
import { ChangeUserRoleController } from '../UseCases/ChangeUserRole'
import { ChangeFirstPasswordController } from '../UseCases/ChangeFirstPassword'

Route.group(() => {
  Route.get('/', ({ auth }: HttpContextContract) => {
    return auth.user!.serialize()
  }).middleware('auth')

  Route.patch('/change-name', ChangeNameController).middleware('auth')
  Route.patch('/change-password', ChangePasswordController).middleware('auth')
  Route.patch('/change-email', ChangeEmailController).middleware('auth')
  Route.patch('/change-avatar', ChangeAvatarController).middleware('auth')
  Route.delete('/remove-avatar', RemoveAvatarController).middleware('auth')

  Route.patch('/change-first-password', ChangeFirstPasswordController).middleware('auth')
}).prefix('/me')

Route.group(() => {
  Route.get('/', ListUsersController)
  Route.get('/:id', ReadUserController)
  Route.delete('/:id', DeleteUserController)
  Route.post('/create', CreateUserController)

  Route.patch('/:id/change-role', ChangeUserRoleController)
})
  .prefix('/users')
  .middleware('auth')
