import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Modules/Users/Models/User'

export default class AdminSeeder extends BaseSeeder {
  public async run() {
    await User.create({ name: 'admin', email: 'admin@admin.com', password: '123123123' })
  }
}
