import User from '../../Models/User'

export default async function ChangeFirstPasswordService(password: string, user: User) {
  user.password = password
  user.firstLogin = false

  await user.save()

  return user
}
