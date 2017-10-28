<template>
    <div>
        <canvas id="currentCanvas"></canvas>

        <div class="bottom-left-canvas">
            <span id="zoom-level">Zoom : 0%</span>
            &nbsp;&nbsp;&nbsp;
            <span id="mouse-pos">X: 0, Y: 0</span>
            &nbsp;&nbsp;&nbsp;
            <span id="selection-pos">X: 0, Y: 0</span>
        </div>
    </div>
</template>

<script>
    const LEFT_CLICK   = 1;
    const MIDDLE_CLICK = 2;
    const RIGHT_CLICK  = 3;

    export default {
        data () {
            return {};
        },
        mounted () {
            // create a wrapper around native canvas element (with id="c")
            let canvas = new fabric.Canvas('currentCanvas');

            let panning = false;

            //Manage panning and selection
            /* canvas.on('mouse:up', (e) => {
                 console.log('Mouse up');
                 if (e.e.which === MIDDLE_CLICK) {
                     console.log('Middle click');
                     panning          = false;
                     canvas.selection = true;
                 }
             });*/

            var Container = document.getElementById('currentCanvas');
            Container.addEventListener('click', (e) => {
                console.log('event :', e);
                /* if (e.e.which !== 2) {
                     return;
                 }
                 e.preventDefault();
                 alert('middle button pressed');*/
            });

            canvas.on('mouse:down', (e) => {
                console.log('Mouse down');
                console.log(e.e.which);

                if (e.e.which === MIDDLE_CLICK) {
                    console.log('Middle click');

                    panning          = true;
                    canvas.selection = false;
                }
            });
            canvas.on('mouse:move', (e) => {
                if (panning && e && e.e && e.e.which === MIDDLE_CLICK) {
                    let units = 10;
                    let delta = new fabric.Point(e.e.movementX, e.e.movementY);
                    canvas.relativePan(delta);
                }

                let pointer = canvas.getPointer(event.e);
                let posX    = pointer.x;
                let posY    = pointer.y;

                $('#mouse-pos').text(`x: ${Math.round(posX)}, y: ${Math.round(posY)}`);

            });

            canvas.on('object:selected', (s) => {
                let p = s.target;
                $('#selection-pos').text(`x : ${Math.round(p.left)}, y : ${Math.round(p.top)}`);
            });

            //Resize object stroke on scale
            canvas.observe('object:modified', (e) => {
                //e.target.resizeToScale();
            });

            //Better scale without losing aspect ratio
            fabric.Object.prototype.resizeToScale = function () {
                switch (this.type) {
                    case 'circle':
                        this.radius *= this.scaleX;
                        this.scaleX = 1;
                        this.scaleY = 1;
                        break;
                    case 'ellipse':
                        this.rx *= this.scaleX;
                        this.ry *= this.scaleY;
                        this.width  = this.rx * 2;
                        this.height = this.ry * 2;
                        this.scaleX = 1;
                        this.scaleY = 1;
                        break;
                    case 'polygon':
                    case 'polyline':
                        let points = this.get('points');
                        for (let i = 0; i < points.length; i++) {
                            let p = points[ i ];
                            p.x *= this.scaleX;
                            p.y *= this.scaleY;
                        }
                        this.scaleX = 1;
                        this.scaleY = 1;
                        this.width  = this.getBoundingBox().width;
                        this.height = this.getBoundingBox().height;
                        break;
                    case 'triangle':
                    case 'line':
                    case 'rect':
                        this.width *= this.scaleX;
                        this.height *= this.scaleY;
                        this.scaleX = 1;
                        this.scaleY = 1;
                    default:
                        break;
                }
            };

            fabric.Object.prototype.getBoundingBox = function () {
                let minX = null;
                let minY = null;
                let maxX = null;
                let maxY = null;
                switch (this.type) {
                    case 'polygon':
                    case 'polyline':
                        let points = this.get('points');

                        for (let i = 0; i < points.length; i++) {
                            if (minX === undefined) {
                                minX = points[ i ].x;
                            } else if (points[ i ].x < minX) {
                                minX = points[ i ].x;
                            }
                            if (minY === undefined) {
                                minY = points[ i ].y;
                            } else if (points[ i ].y < minY) {
                                minY = points[ i ].y;
                            }
                            if (maxX === undefined) {
                                maxX = points[ i ].x;
                            } else if (points[ i ].x > maxX) {
                                maxX = points[ i ].x;
                            }
                            if (maxY === undefined) {
                                maxY = points[ i ].y;
                            } else if (points[ i ].y > maxY) {
                                maxY = points[ i ].y;
                            }
                        }
                        break;
                    default:
                        minX = this.left;
                        minY = this.top;
                        maxX = this.left + this.width;
                        maxY = this.top + this.height;
                }
                return {
                    topLeft    : new fabric.Point(minX, minY),
                    bottomRight: new fabric.Point(maxX, maxY),
                    width      : maxX - minX,
                    height     : maxY - minY
                };
            };

            //Zoom
            document.addEventListener('mousewheel', (e) => {
                let evt     = window.event || e;
                let delta   = evt.detail ? evt.detail * (-120) : evt.wheelDelta;
                let curZoom = canvas.getZoom();
                let newZoom = curZoom + delta / 5000;
                let x       = e.offsetX;
                let y       = e.offsetY;

                if (newZoom < 0.05) {
                    newZoom = 0.05;
                }
                if (newZoom > 3) {
                    newZoom = 3;
                }

                $('#zoom-level').text(`Zoom: ${Math.round(newZoom * 100)}%`);
                //applying zoom values.
                canvas.zoomToPoint({
                    x: x,
                    y: y
                }, newZoom);
                if (e !== null) {
                    e.preventDefault();
                }
                return false;
            }, false);

            //Set default selector
            fabric.Object.prototype.set({
                transparentCorners      : false,
                cornerColor             : '#0070ff',
                borderColor             : '#ff4800',
                cornerSize              : 10,
                padding                 : 10,
                selectionBackgroundColor: '#c1d2e7'
            });

            canvas.selectionBorderColor = 'rgba(255, 0, 0, 0.3)';
            canvas.setBackgroundColor('rgba(21, 21, 21, 1)', canvas.renderAll.bind(canvas));

            let sceneRect = new fabric.Rect({
                left: 0,
                top : 0,
                fill: 'rgba(240, 240, 240, 1)'
            });

            let w = 800;
            let h = 600;

            sceneRect.lockMovementX = sceneRect.lockMovementY = true;
            sceneRect.selectable = false;
            sceneRect.evented    = false;
            sceneRect.setWidth(w);
            sceneRect.setHeight(h);
            sceneRect.excludeFromExport = true;
            canvas.add(sceneRect);
            sceneRect.sendToBack();

            canvas.renderAll();

            this.resizeCanvas(canvas);
        },
        methods: {
            addLine (line) {
                this.$store.commit('addLine', line);
            },
            resizeCanvas (canvas) {

                let layout = $('#layout');

                canvas.setHeight(layout.parent().height());
                canvas.setWidth(layout.parent().width());
                canvas.renderAll();
            }
        }
    };
</script>

<style>
    #currentCanvas {
        outline: 2px dashed grey;
        outline-offset: 5px;
    }

</style>

