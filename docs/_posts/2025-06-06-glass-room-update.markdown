---
layout: post
title:  "Glass Room: Fix for player phasing through glass cubes"
date:   2025-06-06
categories: glass-room
---

Bug fix for Glass Room!

Bug: When loading into the glass rooms, the player model phases through the moving cubes, causing the player to lose immediately.

Root cause: The glass cubes' positions were being directly manipulated in the default update loop, instead of the fixed update loop used by the physics engine. Performing physics-like movement calculations in the default update loop can cause all kinds of undefined behavior, such as objects not detecting each other colliding!

Fix: The calculations for the glass cubes' next position is now done in the fixed update loop!

Load the game again and you will no longer fall through! At least not until the glass breaks...
