import User from '../../Models/User'

export default async function CreateUserService(name: string, email: string) {
  const user = await User.create({ name, email, password: '123456' })

  return user
}
