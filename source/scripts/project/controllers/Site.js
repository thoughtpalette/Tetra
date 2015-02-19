/* Site controller */

angular.module( "vokal.controllers" )

.controller( "Site", [ "$scope", "$rootScope",

    function ( $scope, $rootScope )
    {
        "use strict";

        var canvas = new fabric.Canvas('main');

        $scope.addToCanvas = function (title)
        {
            var text = new fabric.Text( title, { left:0, top: 0});

            canvas.add(text);
            $scope.rerender();
        };

        $scope.rerender = function () {
            canvas.renderAll();
            $scope.$apply();
        };



    }

] );
