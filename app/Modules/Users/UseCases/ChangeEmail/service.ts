import User from '../../Models/User'

export default async function ChangeEmailService(email: string, user: User) {
  user.email = email

  await user.save()

  return user
}
