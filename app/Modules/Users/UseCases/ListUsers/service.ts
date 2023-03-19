import User from '../../Models/User'

export default async function ListUsersService(page: number) {
  const usersQuery = User.query()

  const users = await usersQuery.paginate(page, 10)

  return users.toJSON()
}
