/*jslint maxlen:200 */
/*global Vector */
/*global Matrix */
/*global SceneGraphNode*/
/*global Building*/
var DrawBuilding = (function () {
    function DrawBuilding(pX, pY, pScale, pAngle, pColour1, pColour2, pScrollSpeed) {
        this.setX(pX);
        this.setY(pY);
        this.setScale(pScale);
        this.setAngle(pAngle);
        this.setColours(pColour1, pColour2);
        this.setScrollSpeed(pScrollSpeed);
    }
    DrawBuilding.prototype.getX = function () {
        return this.mX;
    };
    DrawBuilding.prototype.getY = function () {
        return this.mY;
    };
    DrawBuilding.prototype.setX = function (pX) {
        this.mX = pX;
    };
    DrawBuilding.prototype.setY = function (pY) {
        this.mY = pY;
    };
    DrawBuilding.prototype.getScale = function () {
        return this.mScale;
    };
    DrawBuilding.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    DrawBuilding.prototype.getAngle = function () {
        return this.mAngle;
    };
    DrawBuilding.prototype.setAngle = function (pAngle) {
        this.mAngle = pAngle;
    };
    DrawBuilding.prototype.setColours = function (pColour1, pColour2) {
        this.mColour1 = pColour1;
        this.mColour2 = pColour2;
    };
    DrawBuilding.prototype.setScrollSpeed = function (pScrollSpeed) {
        this.mScrollSpeed = pScrollSpeed;
    };
    //sets the position of the sun.
    DrawBuilding.prototype.draw = function (pContext, worldMatrix) {
        var rootNode, translateNode, scaleNode, rotateNode,
            building1TranslationNode, building1ScaleNode,
            building2TranslationNode, building2ScaleNode,
            building3TranslationNode, building3ScaleNode,
            building4TranslationNode, building4ScaleNode;

        //Required Nodes
        rootNode = new SceneGraphNode(worldMatrix);
        translateNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(this.mX, this.mY)));
        scaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(this.mScale, this.mScale)));
        rotateNode = new SceneGraphNode(new Matrix.createRotation(this.mAngle));

        building1TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(0, 0)));
        building2TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(100, -40)));
        building3TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(200, 50)));
        building4TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(300, -10)));

        building1ScaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(1, 1, 1)));
        building2ScaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(1, 1.5, 1)));
        building3ScaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(1, 0.85, 1)));
        building4ScaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(1, 1.1, 1)));

        //Create graph...
        building1TranslationNode.addChild(building1ScaleNode);
        building2TranslationNode.addChild(building2ScaleNode);
        building3TranslationNode.addChild(building3ScaleNode);
        building4TranslationNode.addChild(building4ScaleNode);

        building1ScaleNode.addChild(new Building(this.mColour1, this.mColour2));
        building2ScaleNode.addChild(new Building(this.mColour1, this.mColour2));
        building3ScaleNode.addChild(new Building(this.mColour1, this.mColour2));
        building4ScaleNode.addChild(new Building(this.mColour1, this.mColour2));

        rootNode.addChild(translateNode);
        translateNode.addChild(scaleNode);
        scaleNode.addChild(rotateNode);
        rotateNode.addChild(building1TranslationNode);
        rotateNode.addChild(building2TranslationNode);
        rotateNode.addChild(building3TranslationNode);
        rotateNode.addChild(building4TranslationNode);

        //Draw graph...
        rootNode.draw(pContext, worldMatrix);
    };
    DrawBuilding.prototype.update = function () {
        this.mX += this.mScrollSpeed;

        if (this.mX < -600) {
            this.mX = 800;
        }
    };
    return DrawBuilding;
}());