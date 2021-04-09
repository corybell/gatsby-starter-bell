const { resolve } = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, "src"), "node_modules"],
    },
  })
}
