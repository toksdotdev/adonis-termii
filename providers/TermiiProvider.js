'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class TermiiProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton('Adonis/Termii', () => {
      const Config = this.app.use('Adonis/Src/Config');

      const Termii = require('../src/');
      const apiKey = Config.get('termii.apiKey');
      const baseUrl = Config.get('termii.baseUrl');
      const senderId = Config.get('termii.senderId');

      return new Termii(baseUrl, apiKey, senderId);
    })
  }

  /**
   * On boot add commands with ace.
   *
   * @return {void}
   */
  boot() {
    this.app.alias('Adonis/Termii', 'Termii');
  }
}

module.exports = TermiiProvider
