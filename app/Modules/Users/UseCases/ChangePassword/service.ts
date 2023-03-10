import User from '../../Models/User'

export default async function ChangePasswordService(password: string, user: User) {
  user.password = password

  await user.save()

  return user
}
