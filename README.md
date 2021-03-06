# Lighting

* Chrome desktop browser works best.
* Firefox works OK.
* Untested on Safari.
* Edge lags too much to be playable. 

## Mentions

* https://twitter.com/github/status/808698454192984064
* https://github.blog/2016-12-13-game-off-iv-highlights/

## Credits

* [Megan McDuffee](http://meganmcduffee.com) - Music
* Alex Sengsoury - Building Model
* Alisa Tana - Sprites
* Anthony Villena - Design and Programming
* AI is based on Yiyuan Lee's GA [research](https://codemyroad.wordpress.com/2013/04/14/tetris-ai-the-near-perfect-player/)
* Sound FX are CC0 and acquired from [freesound.org](https://www.freesound.org/): [1](https://www.freesound.org/people/claudiooliveira2/sounds/155599/), [2](https://www.freesound.org/people/RutgerMuller/sounds/364860/), [3](https://www.freesound.org/people/Adam_N/sounds/324891/), [4](https://www.freesound.org/people/Adam_N/sounds/346684/)

## About

Lighting was written for GitHub's [Game Off 2016](https://gameoff.github.com/), where the theme was to write a game loosely based on "hacking, modding, and/or augmenting".

A popular real-life hack is the repurposing of office building lights to simulate low resolution displays. This game was inspired by two events that showcased this type of hack:

* **Building Design** - Green Building, MIT, [2012](http://hacks.mit.edu/by_year/2012/tetris/)
  * The building design, window lighting, and collapse animation came from this event.
  * There was no gameplay sound that I could tell from at this event, just the noise of the crowd, and I decided to keep it that way for the atmosphere of this game.
* **Gameplay Design** - Cira Centre, Philadelpha, [2014](http://drexel.edu/now/archive/2014/June/Cira-Tetris-Guinness/)
  * The idea of having two competing buildings whose lines cleared affected each other came from this event.
* The idea of a crowd watching gathering, reacting, and then leaving came from videos of both events.

## Building

Install the latest gulp-cli if not already installed. This project was built with CLI version 1.2.2. 
<pre>
npm install gulpjs/gulp-cli -g
</pre>

Run the default task to build the dist directory and start a server for it.
<pre>
gulp
</pre>

The dist directory can be removed with the clean task
<pre>
gulp clean
</pre>

## Dependencies

* [gulp](http://gulpjs.com/) - Trying something new after having using grunt with my previous project.
* [three.js](https://threejs.org/) - This is my first 3D game.
* [tween.js](https://github.com/tweenjs/tween.js) - Easing functions for camera, NPC travel, light strobing, etc...
* [howler.js](https://howlerjs.com/) - I had a good experience using this with [mazing](https://github.com/hiddenwaffle/mazing) so I used it again.

## Original Plan

The original plan was to have random office lights on. As you cleared the rows they were on, the lights would go out and people would exit the building and gather together to see what was going on.
Unfortunately, during playtesting it became apparent that having random lights scattered throughout the board was **really** difficult to fit shapes around. That's when I changed the gameplay to what they did at the Cira Centre.
