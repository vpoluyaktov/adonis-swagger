'use strict'

const { Command } = require('@adonisjs/ace')
const path = require('path')
const Config = use('Config')

class SwaggerExport extends Command {
  static get signature () {
    return `
      swagger:export
      { --silent : Hide the console log }
    `
  }

  static get description () {
    return 'Export config file & swagger-ui assets'
  }

  async handle (args, options) {
    if (!options.silent) this.info('Exporting assets to public folder (public/' + Config('swagger.basePath') + 'docs)')
    await this.copy(path.join(__dirname, '../templates/docs'), 'public/' + Config('swagger.basePath') + 'docs')

    if (!options.silent) this.info('Exporting swagger configuration (config/swagger.js)')
    await this.copy(path.join(__dirname, '../templates/config.js'), 'config/swagger.js')

    if (!options.silent) this.success(`${this.icon('success')} Completed`)
  }
}

module.exports = SwaggerExport
