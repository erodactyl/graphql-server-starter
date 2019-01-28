const server = require('./src');
const PORT = process.env.PORT || 8080;

server.listen({ port: PORT });
