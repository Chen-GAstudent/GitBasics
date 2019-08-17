var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var marioWidth = 32;
var marioHeight = 32;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMoveSpeed = 5;
var gravity = 10;
var jumpForce = 20;
var maxJumpForce = 20;
var jumpForceDecay = 1;
var goombaWidth = 80;
var goombaHeight = 80;
var goombaPositionX = canvas.width / 3;
var goombaPositionY = canvas.height / 3;
var goombaMoveSpeed = 3;
var flyingGoombaWidth = 60;
var flyingGoombaHeight = 60;
var flyingGoombaPositionX = canvas.width / 4;
var flyingGoombaPositionY = canvas.height / 4;
var flyingGoombaMoveSpeed = 10;

var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var goombaTexture = new Image();
goombaTexture.src = "https://i.ya-webdesign.com/images/goomba-transparent-pixel-11.gif"
//goombaTexture.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///9PJQIAAAD/0YBFEACvo550dHRBAwD/1YLMxcJJGgBRJgKAa2FEFgC1jVO0tLSHdGuOjo5LHgBxV0skEQH/0Hs4GgG7mV5ra2utra3/4rOOfHRIFwCilI6VhX3Cn2E+HQHIyMh9fX2pnJZ5YVb/2YXFomOjo6M/AADitm6rg02OdEfFvLnEm1w3AACvkW85OTnkxZFiYmJVVVXNzc1lRzg0DQAiCwBQQDlrT0K2rKeSbD3h4eEvBQCQkJAdAADdpsiuAAADmElEQVR4nO3b6VbaQBiAYVcCEavGDQREGkSsu4JLlHr/d1UyE3oyEJJBhZlw3udfMTPkPUA/griyAgAAAAAAAAAAAAAAAACYQfC2P81bYPrkfoTveNM4vumT+xH+xuo0GxTmA4X5t5lSuGn65L4n2G+H+t7UQq8vjtjP69BoOG5oeuAwURzhNEyf6hc16iltcXUKbUVh/gt97cLcjcWgXQ6ljAmV1xfHt/MzNE6zx8RYohwap6ZPXJv2C3DsyZqflyOFFNpviQuD8m5Ie0yovL5YXbZ5aMw8JsYS7R8ap197eqrqFJpE4TIUbsVpRymr7CwMasLry0HMmW7i1ll82cur3MyuoVFz6kPuy1rckXbhkbLuxQ03c2qmoxQ18QLcOviRwgOxrk7hYlG4pIXP2UMjOuLZ4sLgVIiuJs6Egd9rDfUKn1lDIxoTnwW5wB/IDcTPvL7c2vTQKIsxUR9dTYhHxCnJn/3NfLKOnp5/5YKSE3/MPbGzUzYXJ+y6k+c9KtzTLtyTC0rO5CHurrk4gUIKKaRw/iikkEIK50+jcOAI6oGuvHFgcWHQCPlJv6IYK9wrXQ+VavFEtyZv3Mss9Pq+uKfFX2K0u8pFRUrhjvyX8vW20RfadjILo0uMbnvhheWEp+dcCqMHffEXURRSuEyF1ZTCar4Lezuh6kdK4UdVHNPLaaEqsVBF4WJROIHCFQoXLaXQrW0mUBa45aRDail7WlW46m4kcGc9xObCOaCQQgoTtLviP4fUP9va1pW6i7gfA59iXAfCW8qf3r3/0vWessubvKPrhRdGkj5NjGzfnBf1nN9sT93Fys9L/xcW1/UUKaSQwu8odxPeX8oRcDtD4a1ckrBX1/T3aa6TrhHu/giX2oWXcsFd0mbGxkSak2gKaAYOE6UT0yeu7eRQuy3ukEJ7UEihjeSvKEYevlj4oOzSMx2lqKzFNfXnRFyxqexSMR2lKMyhsGA6SkEhhXkr7KgfX6RFKR9mdGwslGOi9aSc21XzOCblEqN4GT+weaXs8tSyYmg8rmU6Tik8zl7+aLiwkn2K3yw0PRYppHA5CuXsWD+Mk3PifDkKrzrN0MNJ3IO4rXOVvTwHhZGqsq6qvY7CeaOQQvsLNd6XfrPQ9PvSi9/C/RwK7+XWF4bKxhSyT3jmQkuuDyMUUkihectfeFHIUmkpC1qVzBWWjAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKR/fOSmTJVPC3AAAAAASUVORK5CYII=";
var flyingGoombaTexture = new Image();
flyingGoombaTexture.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggupy2Y9TI5t5Ag3RhmdK05THuD0gyaNl6jcI7GF1CUTQPNukGw";

function update() {

	// BEGIN UPDATE LOGIC
	//-------------------------------------
	if (isKeyDown(LEFT_KEY)) {
		marioPositionX -= marioMoveSpeed;
	}

  	if (isKeyDown(RIGHT_KEY)) {
		marioPositionX += marioMoveSpeed;
	}

  if(isKeyDown(UP_KEY)) {
    marioPositionY -= jumpForce;
    jumpForce -= jumpForceDecay;

    

  }


  
  // apply gravity so the character falls down
  marioPositionY += gravity;
  goombaPositionY += gravity;
 // goombaPositionX += 1;
  flyingGoombaPositionX -= 3;

  // stop the character from falling down the screen
  if(marioPositionY > canvas.height - marioHeight) {
    marioPositionY = canvas.height - marioHeight;
    jumpForce = maxJumpForce;
  }
  
  if(goombaPositionY > canvas.height - goombaHeight) {
    goombaPositionY = canvas.height - goombaHeight;
    jumpForce = maxJumpForce;
  }
 

	// TASK:
	// 1 - make goomba move to the right when mario is on the right side of goomba
	// 2 - make goomba move to the left with mario is on the left side of goomba

  /*if(marioPositionY > canvas.height) {
    marioPositionY = canvas.height - marioHeight;
  }*/
  //wrap character from right to left side of screen
   if(marioPositionX > canvas.width) {
    marioPositionX = 0;
  }
  //wrap mario from left to right
   if(marioPositionX < 0) {
     marioPositionX = canvas.width;
   }
    //wrap character from right to left side of screen
   if(marioPositionX > goombaPositionX + goombaWidth) {
    goombaPositionX += goombaMoveSpeed;
  }
  //wrap goomba from left to right
   if(marioPositionX + marioWidth < goombaPositionX) {
     goombaPositionX -= goombaMoveSpeed;
   }

   

      //wrap character from right to left side of screen
   if(flyingGoombaPositionX > canvas.width) {
    flyingGoombaPositionX = 0;
  }
  //wrap flyingGoomba from left to right
   if(flyingGoombaPositionX < 0) {
     flyingGoombaPositionX = canvas.width;
   }

   
  
	//-------------------------------------
	// END UPDATE LOGIC



	// BEGIN DRAW LOGIC
	//-------------------------------------

	graphics.clearRect(0, 0, canvas.width, canvas.height)

	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

  graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);
  
  graphics.drawImage(
		flyingGoombaTexture,
		flyingGoombaPositionX, flyingGoombaPositionY, flyingGoombaWidth, flyingGoombaHeight);
	//-------------------------------------

	// ask the browser to call the update function again.
	requestAnimationFrame(update);
}


// DO NOT EDIT BELOW THIS LINE
//--------------------------------------------------------------------

var keys = [];
var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;

// check key down events
window.addEventListener('keydown', function (event) {
	keys[event.keyCode] = true;
}, true);

// check key release events
window.addEventListener('keyup', function (event) {
	keys[event.keyCode] = false;
}, true);

function isKeyDown(key) {
	return keys[key];
}

update();
//--------------------------------------------------------------------