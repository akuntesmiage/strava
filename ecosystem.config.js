module.exports = {
  apps: [{
    name: 'main',
    script: 'main.js',
    watch: true,
    ignore_watch: ["connection/session/creds.json"],
    watch_options: {
      followSymlinks: false
    },
    restart_delay: 1000
  }]
}
