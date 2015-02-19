/* Site controller */

angular.module( "vokal.controllers" )

.controller( "Site", [ "$scope", "$rootScope",

    function ( $scope, $rootScope )
    {
        "use strict";

        $scope.canvas = new fabric.Canvas('main');
        $scope.fabricItems = [];

        // Start up
        $scope.canvas.setWidth( $( ".main-container" ).width() - 100 );
        $scope.canvas.setHeight( $( ".main-container" ).height() - 100 );
        $scope.canvas.calcOffset();

        var img = new Image();
        img.onload = function(){
        $scope.canvas.setBackgroundImage(img.src, $scope.canvas.renderAll.bind($scope.canvas), {
                    originX: 'left',
                    originY: 'top',
                    left: 232,
                    top: 0
                });
        };
        img.src = "/build/images/legend.png";

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
