/*jslint maxlen:200 */
/*global Vector */
/*global Matrix */
/*global SceneGraphNode*/
/*global RoadLine*/
var DrawLines = (function () {
    function DrawLines(pX, pY, pScale, pAngle) {
        this.setX(pX);
        this.setY(pY);
        this.setScale(pScale);
        this.setAngle(pAngle);
    }
    DrawLines.prototype.getX = function () {
        return this.mX;
    };
    DrawLines.prototype.getY = function () {
        return this.mY;
    };
    DrawLines.prototype.setX = function (pX) {
        this.mX = pX;
    };
    DrawLines.prototype.setY = function (pY) {
        this.mY = pY;
    };
    DrawLines.prototype.getScale = function () {
        return this.mScale;
    };
    DrawLines.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    DrawLines.prototype.getAngle = function () {
        return this.mAngle;
    };
    DrawLines.prototype.setAngle = function (pAngle) {
        this.mAngle = pAngle;
    };

    //sets the position of the sun.
    DrawLines.prototype.draw = function (pContext, worldMatrix) {
        var rootNode, translateNode, scaleNode, rotateNode, line1TranslationNode, line2TranslationNode,
            line3TranslationNode, line4TranslationNode, line5TranslationNode;

        //Required Nodes
        rootNode = new SceneGraphNode(worldMatrix);
        translateNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(this.mX, this.mY)));
        scaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(this.mScale, this.mScale)));
        rotateNode = new SceneGraphNode(new Matrix.createRotation(this.mAngle));

        line1TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(0, 0)));
        line2TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(150, 0)));
        line3TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(300, 0)));
        line4TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(450, 0)));
        line5TranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(600, 0)));

        //Create graph...
        line1TranslationNode.addChild(new RoadLine());
        line2TranslationNode.addChild(new RoadLine());
        line3TranslationNode.addChild(new RoadLine());
        line4TranslationNode.addChild(new RoadLine());
        line5TranslationNode.addChild(new RoadLine());

        rootNode.addChild(translateNode);
        translateNode.addChild(scaleNode);
        scaleNode.addChild(rotateNode);
        rotateNode.addChild(line1TranslationNode);
        rotateNode.addChild(line2TranslationNode);
        rotateNode.addChild(line3TranslationNode);
        rotateNode.addChild(line4TranslationNode);
        rotateNode.addChild(line5TranslationNode);

        //Draw graph...
        rootNode.draw(pContext, worldMatrix);
    };
    DrawLines.prototype.update = function () {
        this.mX -= 8;

        if (this.mX < -700) {
            this.mX = 800;
        }
    };
    return DrawLines;
}());