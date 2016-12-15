/*jslint maxlen:200 */
/*global window*/
/*global alert*/
/*global document*/
/*global Vector*/
/*global Matrix */
/*global SceneGraphNode*/

/*global Sun*/

/*global DrawSunDown*/
/*global SunDown*/

/*global DrawSky*/
/*global Sky*/

/*global Ground*/
/*global DrawGround*/
/*global DrawLines*/
/*global RoadLine*/

/*global Building*/
/*global DrawBuilding*/
/*global DrawLastBuildings*/

/*global carBody*/
/*global carWheel*/
/*global carWindow*/
/*global DrawCar*/

//the window event load handler
function onLoad() {
    var mainCanvas, mainContext, worldMatrix, sceneRootNode,
        sunDown, sky, ground, cityscape1, cityscape2, cityscape3, cityscape4,
        newcityscape1, newcityscape2, newcityscape3, newcityscape4,
        car, roadLines, roadLines2;

    function setOrigin() {
        worldMatrix = Matrix.createTranslation(new Vector(mainCanvas.width / 2, mainCanvas.height / 2));
        worldMatrix.setTransform(mainContext);
    }

    //this function will initialise our variables
    function initialiseCanvasContext() {
        //find the canvas element using its weird id attribute
        mainCanvas = document.getElementById('mainCanvas');
        //if it is not found
        if (!mainCanvas) {
            //make a message ox show an error
            alert('Error: I cannot find the canvas element!');
            return;
        }
        //Get the 2D canvas context.
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }

        setOrigin();

        sunDown = new DrawSunDown(400, 140, 2.8, 0);
        sky = new DrawSky(0, 0, 1, 0);
        ground = new DrawGround(0, 0, 1, 0);
        roadLines = new DrawLines(100, 640, 1, 0);
        roadLines2 = new DrawLines(850, 640, 1, 0);

        cityscape1 = new DrawBuilding(140, 400, 1, 0, '#000000', '#545454', -2);
        cityscape2 = new DrawBuilding(230, 400, 1.2, 0, '#000000', '#3D3D3D', -1.75);
        cityscape3 = new DrawBuilding(170, 300, 1.5, 0, '#000000', '#171717', -1.5);
        cityscape4 = new DrawLastBuildings(0, 100, 1, 0, '#000000', '#2D2D2E', -1.65);

        newcityscape1 = new DrawBuilding(-240, 400, 1, 0, '#000000', '#545454', -2);
        newcityscape2 = new DrawBuilding(-330, 400, 1.2, 0, '#000000', '#3D3D3D', -1.75);
        newcityscape3 = new DrawBuilding(-270, 300, 1.5, 0, '#000000', '#171717', -1.5);
        newcityscape4 = new DrawLastBuildings(-100, 100, 1, 0, '#000000', '#2D2D2E', -1.65);

        car = new DrawCar(260, 575, 1.5, 0);

        sceneRootNode = new SceneGraphNode(Matrix.createIdentity());
        sceneRootNode.addChild(sky);
        sceneRootNode.addChild(sunDown);

        sceneRootNode.addChild(cityscape3);
        sceneRootNode.addChild(newcityscape3);

        sceneRootNode.addChild(cityscape4);
        sceneRootNode.addChild(newcityscape4);

        sceneRootNode.addChild(cityscape2);
        sceneRootNode.addChild(newcityscape2);

        sceneRootNode.addChild(cityscape1);
        sceneRootNode.addChild(newcityscape1);

        sceneRootNode.addChild(ground);
        sceneRootNode.addChild(roadLines);
        sceneRootNode.addChild(roadLines2);
        sceneRootNode.addChild(car);
    }

    //this function will draw to the canvas.
    function draw() {
        mainContext.fillStyle = 'grey';
        mainContext.fillRect(-400, -300, mainCanvas.width, mainCanvas.height);
        mainContext.strokeStyle = "000000";

        sceneRootNode.draw(mainContext, Matrix.createIdentity());
    }

    function update() {
        cityscape1.update();
        cityscape2.update();
        cityscape4.update();
        cityscape3.update();

        newcityscape1.update();
        newcityscape2.update();
        newcityscape4.update();
        newcityscape3.update();

        car.update();
        roadLines.update();
        roadLines2.update();
    }

    function canvasLoop() {
        update();
        draw();
        window.requestAnimationFrame(canvasLoop);
    }
    initialiseCanvasContext();
    canvasLoop();
}

window.addEventListener('load', onLoad, false);