var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // LABEL CLASS 
    var GameImage = (function (_super) {
        __extends(GameImage, _super);
        // CONSTRUCTOR METHOD
        function GameImage(imageName, imageUri, x, y) {
            _super.call(this, imageUri);
            //regX- the left offset for this display object's registration point
            this.regX = this.getBounds().width * 1; //return a rectangle representing this object's boundsin its local coordinate system
            //regY- the y offset for this display object's registration point
            this.regY = this.getBounds().height * 1; //0.5
            this.x = x;
            this.y = y;
        }
        return GameImage;
    })(createjs.Bitmap);
    objects.GameImage = GameImage;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map