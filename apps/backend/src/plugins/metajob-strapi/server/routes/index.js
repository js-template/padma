module.exports = [
  {
    method: "GET",
    path: "/hello",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/stats",
    handler: "statsController.getStats",
    config: {
      policies: [],
      auth: false, // Authentication required
    },
  },
];
