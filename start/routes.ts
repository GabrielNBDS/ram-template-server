import Route from '@ioc:Adonis/Core/Route'
import 'App/Modules/Users/Routes/auth.routes'
import 'App/Modules/Users/Routes/user.routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
