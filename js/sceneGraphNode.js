/*global Matrix*/
var SceneGraphNode = (function () {
    function SceneGraphNode(pMatrix) {
        this.setTranslationMatrix(pMatrix);
        this.mChildren = [];
    }
    SceneGraphNode.prototype.getTranslationMatrix = function () {
        return this.mNodeTranslationmatrix;
    };
    SceneGraphNode.prototype.setTranslationMatrix = function (pTranslationMatrix) {
        this.mNodeTranslationMatrix = pTranslationMatrix;
    };
    SceneGraphNode.prototype.getNumberOfChildren = function () {
        return this.mChildren.length;
    };
    SceneGraphNode.prototype.getChild = function (index) {
        return this.mChildren[index];
    };
    SceneGraphNode.prototype.addChild = function (newChild) {
        this.mChildren.push(newChild);
    };
    SceneGraphNode.prototype.draw = function (pContext, pMatrix) {
        var i, newTransformationMatrix, noOfChildren;
        noOfChildren = this.getNumberOfChildren();
        newTransformationMatrix = pMatrix.multiply(this.mNodeTranslationMatrix);
        newTransformationMatrix.setTransform(pContext);

        for (i = 0; i < noOfChildren; i += 1) {
            this.getChild(i).draw(pContext, newTransformationMatrix);
        }
    };
    return SceneGraphNode;
}());