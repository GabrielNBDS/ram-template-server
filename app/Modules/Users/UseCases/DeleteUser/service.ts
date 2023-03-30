import User from '../../Models/User'

export default async function DeleteUserService(user: User) {
  await user.delete()
}
