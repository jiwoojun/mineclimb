controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mathnoob.isHittingTile(CollisionDirection.Bottom)) {
        mathnoob.vy = jumpHeight
    }
})
let jumpHeight = 0
let mathnoob: Sprite = null
mathnoob = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f c c c c c f . . . . 
    . . . . . f c c c c c f . . . . 
    . . . f f f c c c c c f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . f d d d f . . . . . 
    . 5 5 5 . . f d d d f . . . . . 
    . 5 5 . . . f f f f f . f . . . 
    . 5 . 5 . . . . f . . . 2 . . . 
    . . . . d f f f f f f f d . . . 
    . . . . . . f 7 7 7 f . 2 . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . e . e . . . . . . 
    . . . . . . . e . e . . . . . . 
    . . . . . . 8 8 . 8 8 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mathnoob, 100, 0)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mathnoob, assets.tile`myTile3`)
scene.cameraFollowSprite(mathnoob)
jumpHeight = 0
mathnoob.ay = 110
info.setScore(0)
game.onUpdate(function () {
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(mathnoob), assets.tile`myTile2`)) {
        tiles.setTileAt(tiles.locationOfSprite(mathnoob), assets.tile`transparency16`)
        jumpHeight += -60
        info.setScore(jumpHeight)
    }
})
