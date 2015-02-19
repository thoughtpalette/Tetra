/* Site controller */

angular.module( "vokal.controllers" )

.controller( "Site", [ "$scope", "$rootScope",

    function ( $scope, $rootScope )
    {
        "use strict";

        $scope.canvas = new fabric.Canvas('main');
        $scope.fabricItems = [];

        $scope.canvas.setWidth( $( ".main-container" ).width() - 100 );
        $scope.canvas.setHeight( $( ".main-container" ).height() - 100 );
        $scope.canvas.calcOffset();

        $scope.addToCanvas = function ( title, type )
        {

            $scope.fabricItems.push(
                {
                    pageTitle: title,
                    pageType: type
                }
            );


            var text = new fabric.Text( title,
                {
                    left:0,
                    top: 0,
                    fontFamily: "Arial",
                    fontSize: 14
                });

            $scope.canvas.add(text);
        };
    }

] );
