const { home } = require('./general')

const ATOM_PATH = `${home()}/.atom/snippets.cson`
const VSCODE_PATH = `${home()}/Library/Application\ Support/Code/User/snippets`
const SUBLIME_PATH = `${home()}/Library/Application\ Support/Sublime Text 3/Packages/User`
const STYLE_FILE_PATH = 'css+scss+less'
const ALL_FILE_PATH = 'c+clj+coffee+cs+cc+css+fs+git+go+groovy+hbs+html+jade+java+js+jsx+json+less+liquid+lua+make+md+objc+pl+php+plain+python+ps1+r+cshtml+rb+rust+scss+sh+sql+swift+toml+ts+vb+xml+xsl+yaml'

module.exports = {
  ATOM_PATH,
  VSCODE_PATH,
  SUBLIME_PATH,
  STYLE_FILE_PATH,
  ALL_FILE_PATH,
}