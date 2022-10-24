const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Web',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Web',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web',
          templates:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\node_modules\\docz-core\\dist\\templates',
          docz:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz',
          cache:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz\\.cache',
          app:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz\\app',
          appPackageJson:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\package.json',
          appTsConfig:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz\\app\\index.html',
          db:
            'C:\\Users\\rromeroru\\projects\\test\\react\\multirepo\\web\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
