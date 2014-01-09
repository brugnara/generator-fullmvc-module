define ['app'], (app) ->
  'use strict'

  app.controller '<%= _.capitalize(name) %>MainCtrl', ($http, $scope, Restangular) ->
    # $scope.
    delete $http.defaults.headers.common["X-Requested-With"]

    Restangular.oneUrl("test", "http://thor:8080/<%= name %>/parameters")
      .get()
      .then (parameters) =>
        console.log(JSON.stringify(parameters));
        $scope.p = parameters.<%= name %>;
      , (err) ->
        console.log "ERROR: " + JSON.stringify err

