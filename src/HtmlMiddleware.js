'use strict'

const { Middleware } = require('parcel-bundler')
const { _strip } = require('.')

class HtmlMiddleware extends Middleware {
  async postGenerate () {
    if (this.asset.options.production) {
      this.asset.contents = _strip(this.asset.contents)
    }
  }
}

module.exports = HtmlMiddleware
