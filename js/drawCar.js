/*jslint maxlen:200 */
/*global Vector */
/*global Matrix */
/*global SceneGraphNode*/
/*global CarBody*/
/*global CarWindow*/
/*global CarWheel*/
var DrawCar = (function () {
    function DrawCar(pX, pY, pScale, pAngle) {
        this.setX(pX);
        this.setY(pY);
        this.setScale(pScale);
        this.setAngle(pAngle);
        this.setWheelAngle();
    }
    DrawCar.prototype.getX = function () {
        return this.mX;
    };
    DrawCar.prototype.getY = function () {
        return this.mY;
    };
    DrawCar.prototype.setX = function (pX) {
        this.mX = pX;
    };
    DrawCar.prototype.setY = function (pY) {
        this.mY = pY;
    };
    DrawCar.prototype.setWheelAngle = function () {
        this.mWheelAngle = 0;
    };
    DrawCar.prototype.getScale = function () {
        return this.mScale;
    };
    DrawCar.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    DrawCar.prototype.getAngle = function () {
        return this.mAngle;
    };
    DrawCar.prototype.setAngle = function (pAngle) {
        this.mAngle = pAngle;
    };

    //sets the position of the sun.
    DrawCar.prototype.draw = function (pContext, worldMatrix) {
        var rootNode, translateNode, scaleNode, rotateNode, carBodyTranslation, carWindowTranslation,
            carWheel1Translation, carWheel2Translation, carWheel1Rotation, carWheel2Rotation,
            carWheel1Scale, carWheel2Scale;

        //Required Nodes
        rootNode = new SceneGraphNode(worldMatrix);
        translateNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(this.mX, this.mY)));
        scaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(this.mScale, this.mScale)));
        rotateNode = new SceneGraphNode(new Matrix.createRotation(this.mAngle));

        carBodyTranslation = new SceneGraphNode(new Matrix.createTranslation(new Vector(0, 0)));
        carWindowTranslation = new SceneGraphNode(new Matrix.createTranslation(new Vector(75, -8)));

        carWheel1Translation = new SceneGraphNode(new Matrix.createTranslation(new Vector(40, 25)));
        carWheel2Translation = new SceneGraphNode(new Matrix.createTranslation(new Vector(200, 30)));
        carWheel1Rotation = new SceneGraphNode(new Matrix.createRotation(this.mWheelAngle));
        carWheel2Rotation = new SceneGraphNode(new Matrix.createRotation(this.mWheelAngle));
        carWheel1Scale = new SceneGraphNode(new Matrix.createScale(new Vector(0.9, 0.9, 1)));
        carWheel2Scale = new SceneGraphNode(new Matrix.createScale(new Vector(0.8, 0.8, 1)));

        //Create graph...
        carBodyTranslation.addChild(new CarBody());
        carWindowTranslation.addChild(new CarWindow());
        carWheel1Rotation.addChild(new CarWheel());
        carWheel2Rotation.addChild(new CarWheel());

        carWheel1Scale.addChild(carWheel1Translation);
        carWheel2Scale.addChild(carWheel2Translation);
        carWheel1Translation.addChild(carWheel1Rotation);
        carWheel2Translation.addChild(carWheel2Rotation);

        rootNode.addChild(translateNode);
        translateNode.addChild(scaleNode);
        scaleNode.addChild(rotateNode);
        rotateNode.addChild(carBodyTranslation);
        rotateNode.addChild(carWindowTranslation);
        rotateNode.addChild(carWheel1Scale);
        rotateNode.addChild(carWheel2Scale);

        //Draw graph...
        rootNode.draw(pContext, worldMatrix);
    };
    DrawCar.prototype.update = function () {
        this.mWheelAngle += 0.6;
    };
    return DrawCar;
}());