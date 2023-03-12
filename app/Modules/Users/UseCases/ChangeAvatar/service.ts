import User from '../../Models/User'
import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'
import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'

export default async function ChangeAvatarService(avatar: MultipartFileContract, user: User) {
  user.avatar = Attachment.fromFile(avatar)

  await user.save()

  return user
}
