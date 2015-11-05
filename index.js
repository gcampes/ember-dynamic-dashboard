/* jshint node: true */
'use strict';

module.exports = {
  name: 'dynamic-dashboard',

  included: function (app) {
      this._super.included(app);

      app.import('vendor/dynamic-dashboard.css');
  }
};
