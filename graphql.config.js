const { getConfig } = require('@redwoodjs/internal')

module.exports = {
  schema: getPaths().generated.schema,
}
