import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Modules/Users/Models/User'

export default class UserPolicy extends BasePolicy {
  public async isAdmin(user: User) {
    return user.role === 'admin'
  }
}
