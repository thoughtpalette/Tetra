/* Site controller */

angular.module( "vokal.controllers" )

.controller( "Site", [ "$scope", "$rootScope", "$modal",

    function ( $scope, $rootScope, $modal )
    {
        "use strict";

        $scope.canvas = new fabric.Canvas('main');
        $scope.fabricItems = [];
        $scope.pageTiers = [{tier: 1 }, {tier: 2 }, {tier: 3 } ];

        $scope.isPageMode = true;

        $scope.pageOptions = [{id: 1, type: "Landing Page"}, {id: 2, type: "Site Level"}, {id: 3, type: "Form/Dynamic Component"}, {id: 4, type: "To be produced now"}, {id: 5, type: "Title not yet decided"}, {id: 6, type: "To be added at later time"}, {id: 7, type: "Link opens new window or leaves site"}, {id: 8, type: "Content alts on same page"}, {id: 9, type: "Content is part of same page"}, {id: 10, type: "Contents to be removed"}, {id: 11, type: "Email Link"}, {id: 12, type: "Download"} ];

        // Start up
        $scope.canvas.setWidth( $( ".main-container" ).width() - 100 );
        $scope.canvas.setHeight( $( ".main-container" ).height() - 100 );
        $scope.canvas.backgroundColor = "white";
        $scope.canvas.calcOffset();

        var img = new Image();
        img.onload = function(){
        $scope.canvas.setBackgroundImage(img.src, $scope.canvas.renderAll.bind($scope.canvas), {
                    originX: 'left',
                    originY: 'top',
                    left: 100,
                    top: 0
                });
        };
        img.src = "/build/images/legend.png";

        $scope.clearCanvas = function ()
        {
            $scope.canvas.clear();
            $scope.fabricItems
        };

        $scope.downloadBoard = function ()
        {
            // Stops active object outline from showing in image
            $scope.canvas.deactivateAll();

            var initialCanvasScale = $scope.canvas.canvasScale;

            // Click an artifical anchor to 'force' download.
            var link = document.createElement('a');
            var filename = 'main' + '.png';
            link.download = filename;
            link.href = $scope.getCanvasBlob();
            link.click();

            $scope.canvas.canvasScale = initialCanvasScale;
            $scope.canvas.setZoom();
        };

        $scope.getCanvasBlob = function ()
        {
                var base64Data = $scope.getCanvasData();
                var data = base64Data.replace('data:image/png;base64,', '');
                var blob = b64toBlob(data, 'image/png');
                var blobUrl = URL.createObjectURL(blob);

                return blobUrl;
        };

        function b64toBlob(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);

                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {type: contentType});
            return blob;
        }

        $scope.getCanvasData = function ()
        {
            var data = $scope.canvas.toDataURL({
                width: $scope.canvas.getWidth(),
                height: $scope.canvas.getHeight(),
                multiplier: self.downloadMultipler
            });

            return data;
        };

        $scope.enterDrawingMode = function ()
        {
            $scope.isPageMode = false;
            $scope.canvas.isDrawingMode = true;
        };

        $scope.enterPageMode = function ()
        {
            $scope.canvas.isDrawingMode = false;
            $scope.isPageMode = true;
        };

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
