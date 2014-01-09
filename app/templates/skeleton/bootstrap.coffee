define ['app', 'angularAMD'], (app, angularAMD) ->
  'use strict'
  app.config ($routeProvider) ->
    console.log 'Configuring routeProvider in <%= name %>/boostrap.js (from coffee)'
    $routeProvider
    .when '/<%= name %>', angularAMD.route
        templateUrl: 'modules/<%= name %>/views/main.html'
        controller: '<%= _.capitalize(name) %>MainCtrl'
        controllerUrl: 'module!<%=name%>/main'
