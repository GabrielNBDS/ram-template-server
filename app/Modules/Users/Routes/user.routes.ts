import Route from '@ioc:Adonis/Core/Route'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ChangeNameController } from '../UseCases/ChangeName'
import { ChangeEmailController } from '../UseCases/ChangeEmail'
import { ConfirmChangeEmailController } from '../UseCases/ConfirmChangeEmail'
import { ChangePasswordController } from '../UseCases/ChangePassword'
import { ChangeAvatarController } from '../UseCases/ChangeAvatar'
import { RemoveAvatarController } from '../UseCases/RemoveAvatar'

Route.get('/me', ({ auth }: HttpContextContract) => {
  return auth.user!.serialize({ fields: { omit: ['rememberMeToken', 'updatedAt', 'createdAt'] } })
}).middleware('auth')
Route.patch('/me/change-name', ChangeNameController).middleware('auth')
Route.patch('/me/change-password', ChangePasswordController).middleware('auth')
Route.patch('/me/change-email', ChangeEmailController).middleware('auth')
Route.get('/me/confirm-change-email', ConfirmChangeEmailController)
Route.patch('/me/change-avatar', ChangeAvatarController).middleware('auth')
Route.delete('/me/remove-avatar', RemoveAvatarController).middleware('auth')
