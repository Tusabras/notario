import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { ngUniversalEngine } from './universal-engine';
enableProdMode();
const server = express();

// import { AppServerModuleNgFactory } from '../../aot/src/uni/app.server.ngfactory';

// server.engine('html', ngUniversalEngine({
//     bootstrap: [AppServerModuleNgFactory]
// }));
 
// set default view directory
server.set('views', 'src');
// handle requests for routes in the app.  ngExpressEngine does the rendering.
server.get(['/', '/home', '/heroes', '/detail/:id'], (req, res) => {
    res.render('index-aot.html', {req});
});
// handle requests for static files
server.get(['/*.js', '/*.css'], (req, res, next) => {
    let fileName: string = req.originalUrl;
    console.log(fileName);
    let root = fileName.startsWith('/node_modules/') ? '.' : 'src';
    res.sendFile(fileName, { root: root }, function (err) {
        if (err) {
            next(err);
        }
    });
}); 
let port:any = 3200;
if(process.env.PORT)port=process.env.PORT;
else port = 3200;

 server.listen(port, () => {
  console.log('Server up and running: '+ port);
});