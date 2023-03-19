import User from '../../Models/User'

export default async function ListUsersService(id: number) {
  const user = await User.findOrFail(id)

  return user
}
