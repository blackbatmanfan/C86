var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
 
player_x = 10;
player_y = 10;

var player_object= "";
function  player_update()
{
fabric.Image.fromURL("player.png", functon(Img)
{
player_object= Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);

});
}

function  new_image(get_image)
{
fabric.Image.fromURL(get_image, functon(Img)
{
block_image_object= Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:player_y,
left:player_x
});
canvas.add(block_image_object);

});
}
window.addEventListener("keyboard", my_keyboard);

function my_keyboard(e)
{

KeyPresed = e.KeyCode;
console.log(KeyPressed);
  

if(keyPressed == '37')
  {
  
   left();
   console.log("left");
}

if(keyPressed == '38')
  {
  
   up();
   console.log("up");
}

if(keyPressed == '39')
  {
  
   right();
   console.log("right");
}

if(keyPressed == '40')
  {
  
   down();
   console.log("down");
}

if(keyPressed == '87')
  {

    new_image('wall.jpg');
   console.log("W");
}

if(keyPressed == '71')
  {

    new_image('ground.jpg');
   console.log("g");
}

if(keyPressed == '76')
 { 

    new_image('ligt_green.png');
   console.log("l");
}

if(keyPressed == '84')
  {

    new_image('trunk.jpg');
   console.log("t");
}

if(keyPressed == '82')
  {

    new_image('roof.jpg');
   console.log("r");
}

if(keyPressed == '89')
  {

    new_image('yellow_wall.jpg');
   console.log("y");
}

if(keyPressed == '68')
  {

    new_image('dark_green.png');
   console.log("d");
}

if(keyPressed == '85')
  {

    new_image('unique.jpg');
   console.log("u");
}

if(keyPressed == '67')
  {

    new_image('clouds.jpg');
   console.log("c");
}
}


