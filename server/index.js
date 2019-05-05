import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import AppWrapper from '../src/components/AppWrapper/AppWrapper';

const PORT = 8080
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<AppWrapper />)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})

// import path from 'path';
// import fs from 'fs';
//
// import React from 'react';
// import express from 'express';
// import ReactDOMServer from 'react-dom/server';
//
// import AppWrapper from '../src/components/AppWrapper/AppWrapper';
//
// const PORT = process.env.PORT || 3006;
// const app = express();
//
// app.use(express.static('./build'));
//
// app.get('/*', (req, res) => {
//   const app = ReactDOMServer.renderToString(<AppWrapper />);
//   console.log(app.length);
//
//   const indexFile = path.resolve('./build/index.html');
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     console.log(data)
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }
//     console.log('=======DDDDDDDDDDDDDD=========')
//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">H<h1>TEST</h1></div>`)
//     );
//   });
// });
//
// app.listen(PORT, () => {
//   console.log(`😎 Server is listening on port ${PORT}`);
// });
