module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  name: "strapi::body",
  config: {
    formLimit: "256mb", // modify form body
    jsonLimit: "256mb", // modify JSON body
    textLimit: "256mb", // modify text body
    formidable: {
      maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
    },
  },
  "metajob-strapi": {
    enabled: true,
  },
  "google-maps": {
    enabled: true,
  },
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"], // optional
      // You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
      googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
      // See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
      autocompletionRequestOptions: {},
    },
  },
  seo: {
    enabled: true,
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  "react-icons": true,

  email: {
    provider: env("EMAIL_PROVIDER", "smtp"),
    providerOptions: {
      host: env("EMAIL_HOST"),
      port: env("EMAIL_PORT"),
      auth: {
        user: env("EMAIL_NAME"),
        pass: env("EMAIL_PASSWORD"),
      },
      secure: env("EMAIL_SECURE", 587),
    },
    settings: {
      defaultFrom: env("EMAIL_NAME"),
      defaultReplyTo: env("EMAIL_NAME"),
    },
  },
});
