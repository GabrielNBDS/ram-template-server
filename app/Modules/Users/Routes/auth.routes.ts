import Route from '@ioc:Adonis/Core/Route'
import LoginController from 'App/Modules/Users/UseCases/Login/LoginController'

Route.post('/login', LoginController)
