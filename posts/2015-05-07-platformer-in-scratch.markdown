---
title: Build a platformer in Scratch
published: true
tags:
- Scratch Game Challenge
- games
- scratch
- scrolling background
- jumping
- colision detection
- keeping score
---


### An Endless Scrolling background:
In our last session, we created an endless scrolling background by creating a simple painted sprite, splitting it and reversing each vertical half. You can clone that project [here:](https://scratch.mit.edu/projects/55592334/#editor)

### Jumping
Think about what happens when you jump: first you go up, then you go down. To achieve jumping, we need to create a second script on the player sprite, in our case it's called Sprite1. First, we create a new variable called *y vel*, which is short for y velocity, in other words, the speed by which our sprite's y position will change.  Second we need something to trigger the jump with: I chose the *space* key. Finally we set the *y vel* to a positive number and decrease that number incrementally for a limited amount of times. Here's the script:

<img src="/img/jumping.png">

And here is what it looks like:

<img src="/img/cat_jump.gif">

### Making it a game
Next session we will create obstacles, use collision detection to *see* when the cat hits them and save score to a variable! See you then.

