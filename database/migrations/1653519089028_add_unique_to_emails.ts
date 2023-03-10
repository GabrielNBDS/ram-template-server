import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable('users', (table) => {
      table.unique(['email'])
    })
  }

  public async down() {
    this.schema.alterTable('users', (table) => {
      table.dropUnique(['email'])
    })
  }
}
