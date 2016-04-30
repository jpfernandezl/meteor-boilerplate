/**
 * @file Enable serving of index.html when directories are requested.
 */
import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import serveStatic from 'serve-static'
Meteor.startup(() => {
  WebApp.rawConnectHandlers
    .use(serveStatic(
      '../../../../../public',
      {
        index: [
          'index.html',
          'index.htm'
        ]
      }))
})
