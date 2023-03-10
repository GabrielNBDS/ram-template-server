import User from '../../Models/User'

export default async function ConfirmChangeEmailService(email: string, user: User) {
  user.email = email

  await user.save()

  return user
}
