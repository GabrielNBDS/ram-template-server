import User, { roles } from '../../Models/User'

export default async function ChangeUserRoleService(user: User, role: (typeof roles)[number]) {
  user.role = role

  await user.save()
}
