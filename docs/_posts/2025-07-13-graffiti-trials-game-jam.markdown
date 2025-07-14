---
layout: post
title:  "Graffiti Trials: Urban Game Jam #1 Post Mortem"
date:   2025-07-13 05:20:00 -0700
categories: game-jam graffiti-trials
---

## What went right?

# 1: A physics-based character controller

For Graffiti Trials, the goal was to make a third-person character which did a couple of things: walk, jump, and spray graffiti. The walking and jumping of the character is self-explanatory, but my design for the graffiti spray was to apply a backwards force on the player when the graffiti can was used.

For these mechanics, I would need to implement a character controller. I had two choices: use one of my previously made character controllers using Unity’s built-in character controller class, or create one from scratch using rigid body physics. I chose the latter, as I wanted to have more control when applying the forces on the character, such as the graffiti spray force.

The majority of the game jam period was spent on making sure the character controller felt responsive to the player input whether using a mouse and keyboard or on a controller. The main challenges of creating the character controller from scratch were figuring out how much force to apply during physics updates, how much damping to apply in the air versus on the ground, and collision detection with the ground. Showing the forces as gizmos in the Unity game scene and editor helped the debugging process significantly.

![](/assets/img/gifs/walk-jump-graffiti.gif)

# 2: NPC dialogue system

For time trial courses, I wanted to have an NPC that serves as the time trial master for that course. For the scope of the game jam, this NPC would only ask you if you wanted to try the course, and once you had a time to your name, it would react to it depending on whether you beat their time or not.

With just a little bit more than a day left of the game jam, I implemented an NPC dialogue manager that can be reused if new time trial courses are added to the game. This NPC dialogue manager has a dialogue camera which transitions from the main one once dialogue starts. It is also tied to a course manager, allowing the dialogue text to react to the player’s time for a particular course.

It would be pretty rude if the player still walked around, jumped, or even left the dialogue zone while talking to the time trial master, which is why I also implemented a state for the player while interacting with an NPC. This state stops the player from doing much else except for listening to what the time trial master has to say.

![](/assets/img/gifs/dialogue-npc.gif)

# 3: The time trial mode

With less than 24 hours left, it was time to make the time trial mode. My favorite game that has a time trial mode is *Mario Kart Wii* and the way that it is handled (apart from tracking ghost data and displaying it during a time trial) is pretty simple. Like in a standard race, a countdown is displayed, and three laps need to be completed.

Obviously, this game is much different. Since the theme of the game jam was to be around urban culture, I wanted to make something around parkouring. From this perspective, the player should just parkour their way to an endpoint. Once the player agreed to participate in the time trial, they would be placed in the start-point of the course where a countdown would start. They are then free to race to the pole-like object at the end of the course, where their time is saved and compared against their best (if they had already raced).

They could of course fall from the map on their way to the end. If this happens, I added some borders which respawn the player and stop the timer of their time trial. With the time trial mode and parkouring being the core gameplay of the game, I was content with the replayability and the ability to get better scores.

![](/assets/img/gifs/time-trial.gif)

## What went wrong?
# 1: Game polish

In game development, “juice” must be accounted for. This key part of the game development process only took place in the last few hours before submission, where I still needed to add:

* A character model with multiple animations and animation states
* A particle effect for using the graffiti can feature
* A skybox instead of Unity’s default
* Materials and colors to go on the levels, characters, and UI
* Sounds while playing and interacting

Fortunately, I was able to crunch most of the features in time. For the models, I made them straight out of Unity’s ProBuilder tool, which I believe worked out well. I find making the models using primitive shapes to be quite fun and was pleased with the end result. The particle effect for the graffiti can is implemented using Unity’s default particle effect. While it works with the spray animation, the effect is basic and could have been enhanced if more time was spent on it or by exploring a custom shader. The skybox used in graffiti trials was from the Unity Asset Store by [Geoff Dallimore](https://assetstore.unity.com/packages/3d/environments/sci-fi/real-stars-skybox-lite-116333), and the materials and colors used were selected from a color palette for the game and applied with metallic and smoothness values. At this point, there was no time left to continue working on the game, which is why there's no music or sounds.

Sound in games is very important. When linked to interactions, it provides a confirmation to the player that they are performing an action or that something is happening around them. Looking back at the project, these cues could have been added as the player states were being developed such as the walking, jumping, and spraying graffiti. They could have also helped in finding bugs earlier when making the character controller, as I would be able to tell if the forces being applied happened multiple times or once, such as the jumping force for example.

# 2: Testing builds

Something that I wish I had done much earlier during the development process was to create game builds periodically and test its functionality on the itch.io website and on its own.  There are multiple benefits to periodically building the game especially given the short duration of the game jam.

One of those benefits is playtesting. I had a couple of people try the game out once it was done, and it was obvious to see what was missing from the game to better their experience. By playtesting earlier builds, I could have prioritized aspects of the game which would help player enjoyment.

Another is to check if the build is mostly bug-free. Unfortunately in my case, there was a critical bug that crashed the game once the player attempted to retry the time trial course. To work around this, they would have to reload the page every time they wanted to retry the course. While developing and testing the game in Unity, the game did not crash during this interaction. However, by testing builds periodically, I would have caught and fixed the bug before submitting the game.

## What are the next steps?

While the core foundations of the game are implemented, many aspects can still be reworked.

The next steps for *Graffiti Trials* are to fix bugs and add overall game polish. This would include fixing the UI bug that crashes the game, adding an in-game tutorial, polishing the character models and animations, and adding sound effects to interactions. After completing this step, playtesting will be crucial to get feedback on the gameplay.

Once the game reaches a polished state and the gameplay feels good to players, more levels and NPCs can be added to test their skills further!
