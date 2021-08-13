import 'reflect-metadata'

import { createServer } from 'http'

import App from './app';

// import '@shared/typeorm'

const port = 9000

createServer(App).listen(port , () => {
    console.log('hello');
}) 