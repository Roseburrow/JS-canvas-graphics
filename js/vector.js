/*jslint maxlen:150 */

var Vector = (function () {
    function Vector(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }

    Vector.prototype.getX = function () {
        return this.mX;
    };
    Vector.prototype.setX = function (pX) {
        this.mX = pX;
    };
    Vector.prototype.getY = function () {
        return this.mY;
    };
    Vector.prototype.setY = function (pY) {
        this.mY = pY;
    };
    Vector.prototype.getZ = function () {
        return this.mZ;
    };
    Vector.prototype.setZ = function (pZ) {
        this.mZ = pZ;
    };

    Vector.prototype.add = function (secondvector) {
        var thirdVector = new Vector(0, 0, 0);
        thirdVector.setX(this.getX() + secondvector.getX());
        thirdVector.setY(this.getY() + secondvector.getY());
        thirdVector.setZ(this.getZ() + secondvector.getZ());
        return thirdVector;
    };

    Vector.prototype.subtract = function (secondvector) {
        var thirdVector = new Vector(0, 0, 0);
        thirdVector.setX(this.getX() - secondvector.getX());
        thirdVector.setY(this.getY() - secondvector.getY());
        thirdVector.setZ(this.getZ() - secondvector.getZ());
        return thirdVector;
    };

    Vector.prototype.multiply = function (scalar) {
        var thirdVector = new Vector(0, 0, 0);
        thirdVector.setX(this.getX() * scalar);
        thirdVector.setY(this.getY() * scalar);
        thirdVector.setZ(this.getZ() * scalar);
        return thirdVector;
    };

    Vector.prototype.divide = function (scalar) {
        var thirdVector = new Vector(0, 0, 0);
        thirdVector.setX(this.getX() / scalar);
        thirdVector.setY(this.getY() / scalar);
        thirdVector.setZ(this.getZ() / scalar);
        return thirdVector;
    };

    Vector.prototype.magnitude = function () {
        var scalar;
        scalar = Math.sqrt(this.getX() *  this.getX() + this.getY() * this.getY() + this.getZ() * this.getZ());
        return scalar;
    };

    Vector.prototype.normalise = function () {
        var magnitude, normalisedVector;
        normalisedVector = new Vector(0, 0, 0);
        magnitude = this.magnitude();
        normalisedVector.setX(this.getX() / magnitude);
        normalisedVector.setY(this.getY() / magnitude);
        normalisedVector.setZ(this.getZ() / magnitude);
        return normalisedVector;
    };

    Vector.prototype.limitTo = function (scalar) {
        var limitedVector = new Vector(this.getX(), this.getY(), this.getZ());
        if (this.magnitude() > scalar) {
            limitedVector = limitedVector.normalise().multiply(scalar);
        }
        return limitedVector;
    };

    Vector.prototype.dotProduct = function (secondVector) {
        var scalar;
        scalar = (this.getX() * secondVector.getX()) + (this.getY() * secondVector.getY()) + (this.getZ() * secondVector.getZ());
        return scalar;
    };

    Vector.prototype.interpolate = function (pVector, pScalar) {
        return new Vector(this.getX() + (pVector.getX() - this.getX()) * pScalar,
            this.getY() + (pVector.getY() - this.getY()) * pScalar,
            this.getZ() + (pVector.getZ() - this.getZ()) * pScalar);
    };

    Vector.prototype.angleBetween = function (secondVector) {
        var scalar, dot, mag;
        dot = this.dotProduct(secondVector);
        mag = this.magnitude() * secondVector.magnitude();
        scalar = Math.acos(dot / mag);
        return scalar;
    };

    Vector.prototype.rotate = function (scalar) {
        var rotatedVector = new Vector(0, 0, 0);
        rotatedVector.setX(this.getX() * Math.cos(scalar) - this.getY() * Math.sin(scalar));
        rotatedVector.setY(this.getY() * Math.cos(scalar) + this.getX() * Math.sin(scalar));
        return rotatedVector;
    };

    return Vector;
}());

