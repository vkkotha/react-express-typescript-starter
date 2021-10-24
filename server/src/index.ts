import config from 'config';
import http from 'http';

import app from './app';
import { AddressInfo } from 'net';

const port: number = normalizePort(process.env.PORT || config.get('listen.port'));
const ipaddr: string = config.get('listen.ip');
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ipaddr);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(argPort: string | number) {
  let port = 0;
  if (typeof argPort === 'string') {
    port = parseInt(argPort, 10);
    if (isNaN(port)) {
      throw new Error(`Invalid port number format: ${argPort}`);
    }
  } else {
    port = argPort;
  }

  if (port >= 0) {
    return port;
  }

  throw new Error(`Invalid port number: ${argPort}`);
}

function onError(error: { syscall: string; code: string }) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr: string | AddressInfo | null = server.address();
  if (addr) {
    let host;
    if (typeof addr === 'string') {
      host = addr;
    }
    const addressInfo = addr as AddressInfo;
    host =
      addressInfo.address === '0.0.0.0' ||
      addressInfo.address === '' ||
      addressInfo.address === '::'
        ? '127.0.0.1'
        : addressInfo.address;
    const port = addressInfo.port;
    console.log(`Appserver Listening on http://${host}:${port}`);
  } else {
    console.log('Can not get Appserver address info.');
  }
}
