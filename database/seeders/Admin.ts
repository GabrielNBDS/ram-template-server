import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Modules/Users/Models/User'

export default class AdminSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      name: 'admin',
      role: 'admin',
      password: '123123',
      email: 'admin@admin.com',
    })
  }
}
