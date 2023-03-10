import User from '../../Models/User'

export default async function ChangeNameService(name: string, user: User) {
  user.name = name

  return await user.save()
}
