var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5bad4813-ad80-4e75-91b6-e2c1b9d34efd","67443522-0a77-4035-9472-0c5a691e7fcb","c80b5f46-ea6b-4f65-8a0d-b8f482b7dccf","d91df12a-ac0c-40e5-b5ee-aaa477c9963b","9c420fcb-8ff0-4e4f-92b6-8354b762d415","8beb0362-9c01-444b-90ad-418301948954","809980bf-2a68-4de3-b021-572a67d1bb98","3e5bb8ee-9010-44f9-ac7e-65f5a380c09e","cd60cb74-9719-4558-8dd6-8d23cacee9b3","a42823fb-b915-4c4f-a07e-eec8c276972a","e0cb7c72-0334-4889-8e66-818967c4aa18","7b59cc27-20f9-469a-9103-684f16fbdd9a","44a069b2-8d93-4d42-b515-5b70b8818850"],"propsByKey":{"5bad4813-ad80-4e75-91b6-e2c1b9d34efd":{"name":"RL5Qd.png_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/5bad4813-ad80-4e75-91b6-e2c1b9d34efd.png","frameSize":{"x":992,"y":480},"frameCount":1,"looping":true,"frameDelay":4,"version":"hVBG01XspQrZ_QE4OhL4vfE5bbLQs0aB","loadedFromSource":true,"saved":true,"sourceSize":{"x":992,"y":480},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/5bad4813-ad80-4e75-91b6-e2c1b9d34efd.png"},"67443522-0a77-4035-9472-0c5a691e7fcb":{"name":"th (1).jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/67443522-0a77-4035-9472-0c5a691e7fcb.png","frameSize":{"x":281,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"1q8mlw8opSuzJipJJ8HtbB9XLjsM7TzS","loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":300},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/67443522-0a77-4035-9472-0c5a691e7fcb.png"},"c80b5f46-ea6b-4f65-8a0d-b8f482b7dccf":{"name":"li1pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/c80b5f46-ea6b-4f65-8a0d-b8f482b7dccf.png","frameSize":{"x":88,"y":107},"frameCount":1,"looping":true,"frameDelay":4,"version":"voi_FvMPOIPhzNV4CIvZDEiCnp9cW16Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":107},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/c80b5f46-ea6b-4f65-8a0d-b8f482b7dccf.png"},"d91df12a-ac0c-40e5-b5ee-aaa477c9963b":{"name":"li2pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/d91df12a-ac0c-40e5-b5ee-aaa477c9963b.png","frameSize":{"x":95,"y":107},"frameCount":1,"looping":true,"frameDelay":4,"version":"5zVKQLT5_GF8EqzEIx2fsISaS0vLqE3b","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":107},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/d91df12a-ac0c-40e5-b5ee-aaa477c9963b.png"},"9c420fcb-8ff0-4e4f-92b6-8354b762d415":{"name":"li3pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/9c420fcb-8ff0-4e4f-92b6-8354b762d415.png","frameSize":{"x":90,"y":111},"frameCount":1,"looping":true,"frameDelay":4,"version":"RT9rdWmrfjFf3lwTRlnZRPuyOuyB77Kw","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":111},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/9c420fcb-8ff0-4e4f-92b6-8354b762d415.png"},"8beb0362-9c01-444b-90ad-418301948954":{"name":"li4pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/8beb0362-9c01-444b-90ad-418301948954.png","frameSize":{"x":92,"y":107},"frameCount":1,"looping":true,"frameDelay":4,"version":"ijbVP.jS1mnPyJnijny8MA7LTRYo0jw1","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":107},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/8beb0362-9c01-444b-90ad-418301948954.png"},"809980bf-2a68-4de3-b021-572a67d1bb98":{"name":"li5pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/809980bf-2a68-4de3-b021-572a67d1bb98.png","frameSize":{"x":85,"y":107},"frameCount":1,"looping":true,"frameDelay":4,"version":"6N3Gh6hPucqGTlzFV5Ecz.Mqx3.YkJZy","loadedFromSource":true,"saved":true,"sourceSize":{"x":85,"y":107},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/809980bf-2a68-4de3-b021-572a67d1bb98.png"},"3e5bb8ee-9010-44f9-ac7e-65f5a380c09e":{"name":"li6pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/3e5bb8ee-9010-44f9-ac7e-65f5a380c09e.png","frameSize":{"x":107,"y":107},"frameCount":1,"looping":true,"frameDelay":4,"version":"Hxpo8oq8EElTtptthkcwPxYYMByqkBY3","loadedFromSource":true,"saved":true,"sourceSize":{"x":107,"y":107},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/3e5bb8ee-9010-44f9-ac7e-65f5a380c09e.png"},"cd60cb74-9719-4558-8dd6-8d23cacee9b3":{"name":"li7pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/cd60cb74-9719-4558-8dd6-8d23cacee9b3.png","frameSize":{"x":84,"y":75},"frameCount":1,"looping":true,"frameDelay":4,"version":"IMWT44DdA8rFYICnQMnXCEoGNfRNx1rx","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":75},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/cd60cb74-9719-4558-8dd6-8d23cacee9b3.png"},"a42823fb-b915-4c4f-a07e-eec8c276972a":{"name":"li8pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/a42823fb-b915-4c4f-a07e-eec8c276972a.png","frameSize":{"x":68,"y":71},"frameCount":1,"looping":true,"frameDelay":4,"version":"6b1SY3SZI1uXPXB9DD8qhRfI7a2JYDdW","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":71},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/a42823fb-b915-4c4f-a07e-eec8c276972a.png"},"e0cb7c72-0334-4889-8e66-818967c4aa18":{"name":"li9pimoo0uy21.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/e0cb7c72-0334-4889-8e66-818967c4aa18.png","frameSize":{"x":77,"y":71},"frameCount":1,"looping":true,"frameDelay":4,"version":"yq1LTlFc8VGrN3lTzdJPnHeKU913wDC_","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":71},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/e0cb7c72-0334-4889-8e66-818967c4aa18.png"},"7b59cc27-20f9-469a-9103-684f16fbdd9a":{"name":"th.jpg_1","sourceUrl":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/7b59cc27-20f9-469a-9103-684f16fbdd9a.png","frameSize":{"x":219,"y":164},"frameCount":1,"looping":true,"frameDelay":4,"version":"hvACdQ_fFXx9WFhnGl947Zay6JHnqEYG","loadedFromSource":true,"saved":true,"sourceSize":{"x":219,"y":164},"rootRelativePath":"assets/v3/animations/kMnBxpPRwXrzsYXNpUMZr9w99u-ARMOXREJ_YmgrDo8/7b59cc27-20f9-469a-9103-684f16fbdd9a.png"},"44a069b2-8d93-4d42-b515-5b70b8818850":{"name":"background2.jpg_1","sourceUrl":null,"frameSize":{"x":302,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"cEUGeH2I3asdeazAOdThWguqW56gGGhX","loadedFromSource":true,"saved":true,"sourceSize":{"x":302,"y":170},"rootRelativePath":"assets/44a069b2-8d93-4d42-b515-5b70b8818850.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Background = createSprite(5,200,400,400);
    Background.setAnimation("RL5Qd.png_1");
    Background.scale=0.8;


var player = createSprite(15,323,10,10);
player.setAnimation("th (1).jpg_1");
player.scale=0.1;

var obs1 = createSprite(183,323,10,10);
obs1.setAnimation("li1pimoo0uy21.jpg_1");
obs1.scale=0.3;
obs1.velocityX=-2;
var obs2 = createSprite(157,225,10,10);
obs2.setAnimation("li2pimoo0uy21.jpg_1");
obs2.scale=0.3;
obs2.velocityX=2;
var obs3;



var inGround = createSprite(0,352,800,20);
inGround.visible=false;

var inBlock1 = createSprite(30,249,25,25);
inBlock1.visible=false;
var inBlock2 = createSprite(183,250,130,25);
inBlock2.visible=false;
var inBlock3 = createSprite(184,148,25,25);
inBlock3.visible=false;

var inWall1 = createSprite(96,318,10,10);
inWall1.visible=false;
var inWall2 = createSprite(256,328,10,10);
inWall2.visible=false;
var inWall3 = createSprite(131,223,10,10);
inWall3.visible=false;
var inWall4 = createSprite(231,223,10,10);
inWall4.visible=false;

var fin1 = createSprite(350,298,50,10);
fin1.visible=false;

var gameover;

var BackgroundGroup = createGroup();
var inGround2Group = createGroup();
var obs3Group = createGroup();


function draw() 
{
  background("white");
  
  if(player.isTouching(obs1) || player.isTouching(obs2))
  {
    gameover();
  }
  if(keyDown("RIGHT_ARROW"))
  {
    player.x = player.x+3;
  }
  
  if(keyDown("LEFT_ARROW"))
  {
    player.x = player.x-3;
  }
  
  if(keyDown("UP_ARROW"))
  {
    player.y = player.y-3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    player.y = player.y+3;
  }
  
  if(keyDown("space") && player.y >=200)
  {
    player.velocityY=-4;
  }
  
  if(player.isTouching(fin1))
  {
    Backgrounds();
  }
  
  
  
  player.velocityY = player.velocityY +0.2;
  
  player.collide(inGround);
  player.collide(inBlock1);
  player.collide(inBlock2);
  player.collide(inBlock3);
  player.collide(inGround2Group);
  createEdgeSprites();
  player.bounceOff(edges);
  
  obs1.bounceOff(inWall1);
  obs1.bounceOff(inWall2);
  obs2.bounceOff(inWall3);
  obs2.bounceOff(inWall4);
  obs3Group.bounceOff(inWall1);
  obs3Group.bounceOff(inWall2);
  
  obs1.bounceOff(edges);
  
  
  
  drawSprites();
}


function gameover()
{
   gameover = createSprite(200,200,400,400);
   gameover.setAnimation("th.jpg_1");
   gameover.scale=2.3;
}

function Backgrounds()
{
  obs1.destroy();
  obs2.destroy();
  
  inGround.y=365;
  
  inBlock2.x=265;
  inBlock2.y=210;
  inBlock2.width=225;
  inBlock2.height=50;
  
  inBlock1.x=8;
  inBlock1.y=207;
  inBlock1.height=40;
  
  inBlock3.x=265;
  inBlock3.y=30;
  inBlock3.width=35;
  inBlock3.height=35;
  
  inWall1.x=134;
  inWall1.y=338;
  
  inWall2.x=268;
  
  player.x=15;
  player.y=348;
  
  Background.x=200;
  Background.setAnimation("background2.jpg_1");
  Background.scale=2.3;
  
  obs3 = createSprite(137,340,10,10);
  obs3.setAnimation("li3pimoo0uy21.jpg_1");
  obs3.scale=0.3;
  obs3.velocityX=4;
  obs3Group.add(obs3);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
