/* Site controller */

angular.module( "vokal.controllers" )

.controller( "Site", [ "$scope", "$rootScope",

    function ( $scope, $rootScope )
    {
        "use strict";

        $scope.canvas = new fabric.Canvas('main');
        $scope.fabricItems = [];
        $scope.pageTiers = [{tier: 1 }, {tier: 2 }, {tier: 3 } ];

        $scope.pageOptions = [
            {
                id: 1,
                type: "Landing Page"
            },
            {
                id: 2,
                type: "Site Level"
            },
            {
                id: 3,
                type: "Form/Dynamic Component"
            },
            {
                id: 4,
                type: "To be produced now"
            },
            {
                id: 5,
                type: "Title not yet decided"
            },
            {
                id: 6,
                type: "To be added at later time"
            },
            {
                id: 7,
                type: "Link opens new window or leaves site"
            },
            {
                id: 8,
                type: "Content alts on same page"
            },
            {
                id: 9,
                type: "Content is part of same page"
            },
            {
                id: 10,
                type: "Contents to be removed"
            },
            {
                id: 11,
                type: "Email Link"
            },
            {
                id: 12,
                type: "Download"
            }
        ];

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

        $scope.addToCanvas = function ( title, type, tier )
        {

            $scope.getShapeType( title, type, tier );

            $scope.fabricItems.push(
                {
                    pageTitle: title,
                    pageType: type
                }
            );
        };

        $scope.getShapeType = function ( title, type, tier )
        {
            var tierWidth,
                tierHeight;

            if ( tier.tier == 1 ) {
                tierWidth = 164;
                tierHeight = 110;
            }
            else if ( tier.tier == 2 ) {
                tierWidth = 164;
                tierHeight = 110;
            } else if ( tier.tier == 3 ) {
                tierWidth = 100;
                tierHeight = 66;
            }


            switch (type.type) {
                case "Landing Page":
                    var r = new fabric.Rect({
                        width: tierWidth,
                        height: tierHeight,
                        fill: "#818385"
                      });


                    // create a rectangle object
                    var t = new fabric.IText(title, {
                      fontFamily: "Helvetica",
                      fill: "#818385",
                      fontSize: 12,
                      top : 10,
                      left: 35
                    });


                    var group = new fabric.Group([ r, t ], {
                      left: 100,
                      top: 100,
                      lockScalingX: true,
                      lockScalingY: true,
                      hasRotatingPoint: false,
                      transparentCorners: false,
                      cornerSize: 7,
                      stroke: "#000000",
                      textAlign: "center"
                    });

                    $scope.canvas.add(group);
                break;
                case "Site Level":

                break;
                case "Form/Dynamic Component":

                break;
                case "To be produced now":

                break;
                case "Title not yet decided":

                break;
                case "To be added at later time":

                break;
                case "Link opens in new window or leaves site":

                break;
                case "Content alts on same page":

                break;
                case "Content is part of same page":

                break;
                case "Contents to be removed":

                break;
                case "Email Link":

                break;
                case "Download":

                break;
            }

        };

    }

] );
