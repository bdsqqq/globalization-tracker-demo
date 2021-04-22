const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        validator: resolve(__dirname, "validator/index.html"),
      },
    },
  },
};
