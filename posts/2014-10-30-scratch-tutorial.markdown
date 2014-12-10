---
title: Cat and Mouse Game.
published: true
tags:
- Scratch
- Collision Detection
- Sprite Movement
---
*You will learn the basic skills needed to create your own game, including sprite movement and collision detection! By the end you will have a cat who meows when she catches her mouse. This will probably take less than half-an-hour to complete.*

<img class="pure-img" src="/img/cat_moves11.png">

###Start with a new sprite
First. Create a new progect on [the scratch website](http://scratch.mit.edu/projects/editor/). You might want to drag out this tutoral page and tile it alongside the scratch page so you can use both without lots of switching back and forth. It might look like this:

<img class="pure-img" src="/img/cat_moves12.png">

Right-click or control-click 'Sprite1' from the 'Sprites' window. Select 'Delete'.

Click the icon for 'Choose new sprite from library'. <img class="pure-img" src="/img/cat_moves2.png"> Choose 'Cat2'.

###Setting up defaults and the game loop
Select 'Events' under the 'Scripts' tab. Drag 'when flag clicked' into the script area.

Select 'Motion'. Drag and attatch 'go to x:0 y:0'. Make sure 'x' is set to '0' and 'y' is set to '0'.

Select 'Control'. Drag and attatch the 'forever' block. This will be our game loop. We will use it later to detect collisions between sprites.

<img class="pure-img" src="/img/cat_moves1.png">

###Controlling the cat sprite
Select 'Events'. Drag the 'when' space key pressed' onto our script window. Do this three more times. In each of those blocks, select the small black triangle and change 'space' to 'up arrow', 'right arrow', 'down arrow', and 'left arrow', so that it matches the image below.

<img class="pure-img" src="/img/cat_moves3.png">

Now select 'Motion'. Drag and attatch a 'point in Direction' block to each 'when _______ key pressed block'.

On each, click the small black triangle and choose the direction that matches the key being detected.

<img class="pure-img" src="/img/cat_moves4.png">

Test it. Click the flag. <img src="/img/cat_moves5.png"> Press the arrow keys on your keyboard. The cat should face in the direction of the key being pressed.

Drag and attach a 'move 10 steps' block to each of the four keypress scripts you have been building.

<img class="pure-img" src="/img/cat_moves6.png">

Click the flag and press your arrow keys. The cat should move across the stage!

###Add a mouse for your cat to catch
Select the new sprite icon. <img src="/img/cat_moves2.png">

Choose 'Mouse1'. Move it away from the cat on the stage.

<img class="pure-img" src="/img/cat_moves7.png">

Select the 'Cat2' sprite in the 'Sprites' window. Our script blocks controlling the cat will come back up in the script window.

<img class="pure-img" src="/img/cat_moves8.png">

Select 'Control'. Drag an 'if then' block into the scripts area.

Select 'Sensing'. Drag a pointy 'touching?' block into the pointy container on the 'if then' block. 

Select the black triangle inside the 'touching?' block. Choose 'Mouse1'.

<img class="pure-img" src="/img/cat_moves9.png">

Select 'Sound'. Drag 'play sound meow2 until done' into the 'if then' block. Next, drag the whole 'if then' block into the forever loop.

<img class="pure-img" src="/img/cat_moves10.png">

Make sure your volume is up. Now click the flag and direct the cat to catch the mouse!

<a href="/img/tutorial.pdf">Download the PDF</a>