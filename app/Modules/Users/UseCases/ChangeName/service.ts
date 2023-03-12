import User from '../../Models/User'

export default async function ChangeNameService(name: string, user: User) {
  user.name = name

  await user.save()

  return user
}
