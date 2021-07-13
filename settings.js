module.exports = {
  uiPort: process.env.NODE_RED_PORT || 1880,
  flowFile: process.env.NODE_RED_FLOW_FILE || 'flows.json',
  flowFilePretty: true,
  contextStorage: {
    default: {
      module: 'memory'
    },
    file: {
      module: 'localfilesystem',
      config: {
        dir: process.env.NODE_RED_PERSISTENCE_DIR || undefined
      }
    }
  },
  editorTheme : {
    page: {
      title: process.env.NODE_RED_TITLE || 'Node-RED'
    },
    header: {
      title: process.env.NODE_RED_TITLE || 'Node-RED'
    }
  },
  logging: {
    console: {
      level: 'info'
    } 
  },
  adminAuth: process.env.NODE_RED_ADMIN_PASSWORD ? {
      type: 'credentials',
      users: [{
          username: 'admin',
          password: process.env.NODE_RED_ADMIN_PASSWORD,
          permissions: '*'
      }]
  } : undefined,
  httpAdminRoot: process.env.NODE_RED_UI_ROOT === 'true' ? '/admin' : '/',
  ui: process.env.NODE_RED_UI_ROOT === 'true' ? { path : '/' } : { path : 'ui' }
}
