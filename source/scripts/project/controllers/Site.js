/* Site controller */

angular.module( "vokal.controllers" )

.controller( "Site", [ "$scope", "$rootScope",

    function ( $scope, $rootScope )
    {
        "use strict";

        var canvas = new fabric.Canvas('main');
        $scope.fabricItems = [];
        $scope.pageTiers = [{tier: 1 }, {tier: 2 }, {tier: 3 } ];
        $scope.fileName = "";
        $scope.nameSet = false;

        $scope.isPageMode = true;

        $scope.pageOptions = [{id: 1, type: "Landing Page"}, {id: 2, type: "Site Level"}, {id: 3, type: "Dynamic Component"}, {id: 4, type: "To be produced now"}, {id: 5, type: "Title not yet decided"}, {id: 6, type: "To be added at later time"}, {id: 7, type: "New window"}, {id: 8, type: "Content alts on same page"}, {id: 9, type: "Content is part of same page"}, {id: 10, type: "Contents to be removed"}, {id: 11, type: "Email Link"}, {id: 12, type: "Download"} ];

        // Start up
        canvas.setWidth( $( ".main-container" ).width() - 100 );
        canvas.setHeight( $( ".main-container" ).height() - 100 );
        canvas.backgroundColor = "white";
        canvas.calcOffset();

        var img = new Image();
        img.onload = function(){
        canvas.setBackgroundImage(img.src, canvas.renderAll.bind(canvas), {
                    originX: 'left',
                    originY: 'top',
                    left: 0,
                    top: 0
                });
        };

        img.src = "/build/images/large-bg.jpg";

        $scope.removePage = function ( id )
        {

            $.each(canvas.getObjects(), function ( i, val )
            {
                if ( val.rand === id )
                {
                    canvas.remove(val);
                    canvas.renderAll();
                    return false;
                }
            });

            $.each( $scope.fabricItems, function ( index, key )
            {
                if ( key.pageId === id )
                {
                    $scope.fabricItems.splice( index, 1 );
                    return false;
                }
            });
        };

        $scope.clearCanvas = function ()
        {
            if ( confirm( "Do you want to start over?" ) )
            {
                canvas.clear();
                $scope.fabricItems = [];
                $scope.fileName = "";
                $scope.nameSet = false;
            }
        };

        $scope.editName = function ()
        {
            $.each(canvas.getObjects(), function ( i, val )
            {
                if ( (val.title !== undefined) && (val.title = $scope.fileName ) )
                {
                    canvas.remove(val);
                    canvas.renderAll();
                }
            });

            $scope.nameSet = false;
        };

        $scope.setName = function ( fileName )
        {
            $scope.nameSet = true;
            $scope.fileName = fileName;

            // create a rectangle object
            var pageName = new fabric.IText(fileName, {
              fontFamily: "Helvetica",
              fill: "#818385",
              fontSize: 12,
              top : 750,
              left: 35,
              title: fileName,
              hasControls: false,
              selectable: false
            });

            canvas.add(pageName);
        };

        $scope.downloadBoard = function ()
        {
            // Click an artifical anchor to 'force' download.
            var link = document.createElement('a');
            link.download = $scope.fileName + '.png';
            link.href = $scope.getCanvasBlob();
            link.click();
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
            var data = canvas.toDataURL({
                width: canvas.getWidth(),
                height: canvas.getHeight(),
                multiplier: self.downloadMultipler
            });

            return data;
        };

        $scope.enterDrawingMode = function ()
        {
            $scope.isPageMode = false;
            canvas.isDrawingMode = true;
        };

        $scope.enterPageMode = function ()
        {
            canvas.isDrawingMode = false;
            $scope.isPageMode = true;
        };

        $scope.addToCanvas = function ( title, type, tier )
        {
            var randId = Math.random();

            $scope.getShapeType( title, type, tier, randId );

            $scope.fabricItems.push(
                {
                    pageId: randId,
                    pageTitle: title,
                    pageType: type
                }
            );
        };

        $scope.getShapeType = function ( title, type, tier, randId )
        {
            var tierWidth,
                tierHeight,
                tierFontSize;

            if ( tier.tier == 1 ) {
                tierWidth = 164;
                tierHeight = 110;
                tierFontSize = 12;
            }
            else if ( tier.tier == 2 ) {
                tierWidth = 164;
                tierHeight = 110;
                tierFontSize = 10;
            } else if ( tier.tier == 3 ) {
                tierWidth = 100;
                tierHeight = 66;
                tierFontSize = 10;
            }

            switch (type.type) {
                case "Landing Page":
                    var r = new fabric.Rect({
                        width: tierWidth,
                        height: tierHeight,
                        fill: "#818385"
                      });

                    // create a rectangle object
                    var t = new fabric.IText(title.toUpperCase(), {
                      fontFamily: "Helvetica",
                      fill: "#818385",
                      fontSize: tierFontSize,
                      top : tierHeight,
                      left: 0
                    });


                    var group = new fabric.Group([ r, t ], {
                      left: 100,
                      top: 100,
                      lockScalingX: true,
                      lockScalingY: true,
                      hasRotatingPoint: false,
                      transparentCorners: false,
                      cornerSize: 7,
                      textAlign: "center"
                    });

                    group.rand = randId;

                    canvas.add(group);
                break;
                case "Site Level":

                break;
                case "Dynamic Component":
                    var r = new fabric.Rect({
                        width: tierWidth,
                        height: tierHeight,
                        stroke: "#888a8d",
                        strokeWidth: 2,
                        fill: "#d1d2d3"
                      });

                    // create a rectangle object
                    var t = new fabric.IText(title.toUpperCase(), {
                      fontFamily: "Helvetica",
                      fill: "#818385",
                      fontSize: tierFontSize,
                      top : tierHeight,
                      left: 0
                    });


                    var group = new fabric.Group([ r, t ], {
                      left: 100,
                      top: 100,
                      lockScalingX: true,
                      lockScalingY: true,
                      hasRotatingPoint: false,
                      transparentCorners: false,
                      cornerSize: 7,
                      textAlign: "center"
                    });

                    group.rand = randId;

                    canvas.add(group);
                break;
                case "To be produced now":
                    var r = new fabric.Rect({
                        width: tierWidth,
                        height: tierHeight,
                        stroke: "#959699",
                        strokeWidth: 2,
                        fill: "#ffffff"
                      });

                    // create a rectangle object
                    var t = new fabric.IText(title.toUpperCase(), {
                      fontFamily: "Helvetica",
                      fill: "#818385",
                      fontSize: tierFontSize,
                      top : tierHeight,
                      left: 0
                    });


                    var group = new fabric.Group([ r, t ], {
                      left: 100,
                      top: 100,
                      lockScalingX: true,
                      lockScalingY: true,
                      hasRotatingPoint: false,
                      transparentCorners: false,
                      cornerSize: 7,
                      textAlign: "center"
                    });

                    group.rand = randId;

                    canvas.add(group);
                break;
                case "Title not yet decided":
                    var r = new fabric.Rect({
                        width: tierWidth,
                        height: tierHeight,
                        stroke: "#c4c6c8",
                        strokeWidth: 2,
                        fill: "#ffffff"
                      });

                    // create a rectangle object
                    var t = new fabric.IText(title.toUpperCase(), {
                      fontFamily: "Helvetica",
                      fill: "#e5e5e6",
                      fontSize: tierFontSize,
                      top : tierHeight,
                      left: 0
                    });


                    var group = new fabric.Group([ r, t ], {
                      left: 100,
                      top: 100,
                      lockScalingX: true,
                      lockScalingY: true,
                      hasRotatingPoint: false,
                      transparentCorners: false,
                      cornerSize: 7,
                      textAlign: "center"
                    });

                    group.rand = randId;

                    canvas.add(group);

                break;
                case "To be added at later time":

                break;
                case "New window":
                    var r = new fabric.Rect({
                        width: tierWidth,
                        height: tierHeight,
                        strokeDashArray: [5, 5],
                        stroke: "#c4c6c8",
                        strokeWidth: 2,
                        fill: "#ffffff"
                      });

                    // create a rectangle object
                    var t = new fabric.IText(title.toUpperCase(), {
                      fontFamily: "Helvetica",
                      fill: "#818385",
                      fontSize: tierFontSize,
                      top : tierHeight,
                      left: 0
                    });


                    var group = new fabric.Group([ r, t ], {
                      left: 100,
                      top: 100,
                      lockScalingX: true,
                      lockScalingY: true,
                      hasRotatingPoint: false,
                      transparentCorners: false,
                      cornerSize: 7,
                      textAlign: "center"
                    });

                    group.rand = randId;

                    canvas.add(group);

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
