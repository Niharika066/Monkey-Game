
  var monkey , monkey_running;
  var Banana ,BananaImage, obstacle, ObstaclesImage;
  var FoodGroup, obstaclesGroup, BananaGroup;
  var survivalTime=0, score=0;

  function preload(){


   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    BananaImage = loadImage("banana.png");
    ObstaclesImage = loadImage("obstacle.png");

  }

  function setup(){
    createCanvas(400,300);

    //create groups
    BananaGroup= new Group();
    obstaclesGroup= new Group();

    //create monkey sprite
    monkey=createSprite(80,215,20,20);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale=0.1;

    //create ground sprite
   ground=createSprite(400,290,900,20);
    ground.velocityX=-4;
    ground.x=ground.width/2;

    //create an invisible ground
    invisibleGround = createSprite(400,290,900,20);
    invisibleGround.visible = false;
    }
  function draw(){
    background(220);
    //console.log(monkey.y);

    //give controls to game
    if(keyDown("space") && monkey.y >= 100) {
      monkey.velocityY = -10;
    }        

    monkey.velocityY = monkey.velocityY + 0.8  

  if(ground.x<0){
      ground.x=30;
    }
    monkey.collide(invisibleGround); 

    //add survival time
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("survivalTime:"+survivalTime, 100,50);
    drawSprites();
    spawnBananas();
    spawnObstacles();

  }
  //create function for spawning obstacles
  function spawnObstacles(){
  if (frameCount % 200 === 0){
     var obstacle = createSprite(400,255,10,40);
     obstacle.velocityX = -6;
    obstacle.addImage(ObstaclesImage);
     obstacle.scale=0.16;
      //assign scale and lifetime to the obstacle           

      obstacle.lifetime = 300;

     //adding obstacles to the group
     obstaclesGroup.add(obstacle);
  }
  }

  //create function fpr spawning bananas
  function spawnBananas() {
    if (frameCount % 80 === 0) {
      var Banana = createSprite(400,50,40,10);
      Banana.y = Math.round(random(100,120));
      Banana.addImage(BananaImage);
     Banana.scale = 0.1;
      Banana.velocityX = -6;
      Banana.lifetime=200;  
    }
  }
