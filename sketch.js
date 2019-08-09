//BREAK DOWN TASKS
//1. We need to create a black background
//2. Create a "user" rectangle that always resets in the top left corner (origin)
//3. Allow "user" rectangle to change coordinates with arrowkeys
//4. Restrict movement within the canvas
//5. Create "enemy" rectangle w/ random coordinates
//6. 



let myPosX = 25;
let myPosY = 25;
let mySpeed = 6; //this global variable makes it MUCH easier to change our movement speed
let myWidth = 50;
let myHeight = 50;

let r;
let g;
let b;

let enemyPosX, enemyPosY;
let enemyWidth = 50,
    enemyHeight = 50;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let foodLeft, foodRight, foodTop, foodBottom;

let points = 0;

let coins = 0;

//Declare variables for graphics
let android;
let apple;
//N.B. ".png" files are good for graphics because we only will get the image, NOT  a (tacky) background


function setup() {
    createCanvas(900, 900);
    background(0);

    imageMode(CENTER); //makes the center of the canvas the origin point of our square


    //determine random starting position of "enemy" square
    enemyPosX = random(25, 875);
    enemyPosY = random(100, 875);



        //Load in images
    android = loadImage("android.png") //we need to input the EXACT name of our image. 
    apple = loadImage("apple.png")


}

function draw() {
    //refresh the background so we dont have trails
    background(0);
    r = random(255);
    g = random(255);
    b = random(255);
    //you can input these variables for "fill()" if you want the user square to flash with random colors



    //instead of drawing the user and enemy squares, we'll do this
    //here is the enemy togepi
    image(apple, enemyPosX, enemyPosY, enemyWidth, enemyHeight); //this draws an image(the image "togepi", at "enemyPosX" and "Y" and then, use the size: "enemyWidth", "enemyHeight")

    //here is the user clefairy
    image(android, myPosX, myPosY, myWidth, myHeight);








    // //Make the user square
    // fill(0, 0, 255);
    // rect(myPosX, myPosY, 50, 50);

    // //Make the "enemy" square
    // fill(255, 0, 0);
    // rect(enemyPosX, enemyPosY, enemyWidth, enemyHeight);


    if (keyIsDown(LEFT_ARROW)) {
        myPosX -= mySpeed;
    }
    //N.B. If we used "else if" for each subsequent key, we wouldn't be able to use two keys at once and move diagnoally
    if (keyIsDown(RIGHT_ARROW)) {
        myPosX += mySpeed;
    }

    if (keyIsDown(UP_ARROW)) {
        myPosY -= mySpeed; //the y-axis values on our canvas DECREASE as we go up.
    }

    if (keyIsDown(DOWN_ARROW)) {
        myPosY += mySpeed;
    }

    //Now we want to restrict movement within the canvas
    if (myPosX <= 25) {
        myPosX = 25;
    }

    if (myPosX >= 875) {
        myPosX = 875;
    }

    if (myPosY <= 25) {
        myPosY = 25;
    }

    if (myPosY >= 875) {
        myPosY = 875;
    }

    //Define user sqare edges
    myLeft = myPosX - 25;
    myRight = myPosX + 25
    myTop = myPosY - 25;
    myBottom = myPosY + 25;

    //Deine "enemy" square edges
    enemyLeft = enemyPosX - 25;
    enemyRight = enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom = enemyPosY + 25;

    //NOW WE NEED TO MAKE THE PROGRAM DETECT "COLLISONS" (or rather, non-collsions)
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) { //when we are NOT colliding, both of these conditions are true
        //If these are true, there is no collison, so we don't need to do anything.
    } else {
        //If there IS collision
        console.log("Collision!")

        //output text to the user
        fill(r, g, b, 40); //the fourth position in the "fill" command determines opacity
        text("You're colliding with the enemy! Move now!", 555, 780) //this command prints text ON the canvas

        //increase points by 1
        points++


        //move the enemy to a new position
        enemyPosX = random(775);
        enemyPosY = random(775);
    }
    //this prints out how many enemies we've collected
    fill(255);
    text("Enemies collected: " + points, 750, 25);


}
