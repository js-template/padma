module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL'),
  proxy: true,
  settings: {
    timeout: {
      upload: env.int('SERVER_TIMEOUT_UPLOAD', 60000), // Default timeout is 60 seconds
    },
  },
});

