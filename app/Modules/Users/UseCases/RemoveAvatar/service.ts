import User from '../../Models/User'

export default async function RemoveAvatarService(user: User) {
  user.avatar = null

  await user.save()

  return user
}
