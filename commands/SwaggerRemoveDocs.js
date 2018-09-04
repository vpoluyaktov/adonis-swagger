'use strict'

const { Command } = require('@adonisjs/ace')
const Config = use('Config')

class SwaggerRemoveDocs extends Command {
  static get signature () {
    return `
      swagger:remove-docs
      { --silent : Hide the console log }
    `
  }

  static get description () {
    return 'Remove swagger-ui only'
  }

  async handle (args, options) {
    if (!options.silent) this.info('Removing assets from public folder (public/' + Config('swagger.basePath') + 'docs)')
    await this.removeDir('public/' + Config('swagger.basePath') + 'docs')

    if (!options.silent) this.success(`${this.icon('success')} Completed`)
  }
}

module.exports = SwaggerRemoveDocs
