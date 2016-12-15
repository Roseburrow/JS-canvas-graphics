/*global Vector*/
/*jslint maxlen:200 */

var Matrix = (function () {
    function Matrix(X0, X1, X2, Y0, Y1, Y2, Z0, Z1, Z2) {

        this.arrayMatrix = [
            [X0, X1, X2],
            [Y0, Y1, Y2],
            [Z0, Z1, Z2]
        ];
    }
    Matrix.prototype.setTransform = function (pContext) {
        pContext.setTransform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0, 1), this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2));
    };
    Matrix.prototype.transform = function (pContext) {
        pContext.transform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0, 1), this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2));
    };
    Matrix.prototype.getElement = function (pRow, pColumn) {
        return this.arrayMatrix[pRow][pColumn];
    };
    Matrix.createIdentity = function () {
        var identityMatrix = new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return identityMatrix;
    };
    Matrix.createTranslation = function (translationVector) {
        var x1, y1, translationMatrix;
        x1 = translationVector.getX();
        y1 = translationVector.getY();
        translationMatrix = new Matrix(1, 0, x1, 0, 1, y1, 0, 0, 1);
        return translationMatrix;
    };
    Matrix.createScale = function (scaleVector) {
        var x1, y1, scaleMatrix;
        x1 = scaleVector.getX();
        y1 = scaleVector.getY();
        scaleMatrix = new Matrix(x1, 0, 0, 0, y1, 0, 0, 0, 1);
        return scaleMatrix;
    };
    Matrix.createRotation = function (scalar) {
        var x1, y1, x2, y2, rotateMatrix;
        x1 = Math.cos(scalar);
        x2 = -(Math.sin(scalar));
        y1 = Math.sin(scalar);
        y2 = Math.cos(scalar);
        rotateMatrix = new Matrix(x1, x2, 0, y1, y2, 0, 0, 0, 1);
        return rotateMatrix;
    };
    Matrix.prototype.multiply = function (secondMatrix) {
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, newMatrix;
        x0 = this.getElement(0, 0) * secondMatrix.getElement(0, 0) +
             this.getElement(0, 1) * secondMatrix.getElement(1, 0) +
             this.getElement(0, 2) * secondMatrix.getElement(2, 0);
        x1 = this.getElement(0, 0) * secondMatrix.getElement(0, 1) +
             this.getElement(0, 1) * secondMatrix.getElement(1, 1) +
             this.getElement(0, 2) * secondMatrix.getElement(2, 1);
        x2 = this.getElement(0, 0) * secondMatrix.getElement(0, 2) +
             this.getElement(0, 1) * secondMatrix.getElement(1, 2) +
             this.getElement(0, 2) * secondMatrix.getElement(2, 2);
        y0 = this.getElement(1, 0) * secondMatrix.getElement(0, 0) +
             this.getElement(1, 1) * secondMatrix.getElement(1, 0) +
             this.getElement(1, 2) * secondMatrix.getElement(2, 0);
        y1 = this.getElement(1, 0) * secondMatrix.getElement(0, 1) +
             this.getElement(1, 1) * secondMatrix.getElement(1, 1) +
             this.getElement(1, 2) * secondMatrix.getElement(2, 1);
        y2 = this.getElement(1, 0) * secondMatrix.getElement(0, 2) +
             this.getElement(1, 1) * secondMatrix.getElement(1, 2) +
             this.getElement(1, 2) * secondMatrix.getElement(2, 2);
        z0 = this.getElement(2, 0) * secondMatrix.getElement(0, 0) +
             this.getElement(2, 1) * secondMatrix.getElement(1, 0) +
             this.getElement(2, 2) * secondMatrix.getElement(2, 0);
        z1 = this.getElement(2, 0) * secondMatrix.getElement(0, 1) +
             this.getElement(2, 1) * secondMatrix.getElement(1, 1) +
             this.getElement(2, 2) * secondMatrix.getElement(2, 1);
        z2 = this.getElement(2, 0) * secondMatrix.getElement(0, 2) +
             this.getElement(2, 1) * secondMatrix.getElement(1, 2) +
             this.getElement(2, 2) * secondMatrix.getElement(2, 2);
        newMatrix = new Matrix(x0, x1, x2, y0, y1, y2, z0, z1, z2);
        return newMatrix;
    };
    Matrix.prototype.multiplyVector = function (secondVector) {
        var x0, y0, z0, newVector;
        x0 = this.getElement(0, 0) * secondVector.getX() +
             this.getElement(0, 1) * secondVector.getY() +
             this.getElement(0, 2) * secondVector.getZ();
        y0 = this.getElement(1, 0) * secondVector.getX() +
             this.getElement(1, 1) * secondVector.getY() +
             this.getElement(1, 2) * secondVector.getZ();
        z0 = this.getElement(2, 0) * secondVector.getX() +
             this.getElement(2, 1) * secondVector.getY() +
             this.getElement(2, 2) * secondVector.getZ();
        newVector = new Vector(x0, y0, z0);
        return newVector;
    };
    return Matrix;
}());