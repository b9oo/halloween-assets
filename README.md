# Arcade Halloween Extension

A spooky MakeCode Arcade blocks extension that adds creepy procedural theremin-like audio effects, custom monster sprite spawners, and dramatic strobe lightning flash animations to your retro games.

## Setup and Installation

To use this extension in your MakeCode Arcade project, follow these steps:

1. Open your project in [MakeCode Arcade](https://arcade.makecode.com).
2. Click on **Extensions** in the toolbox menu (located under the Advanced category dropdown folder).
3. Paste your public GitHub repository URL for this extension into the search bar query panel.
4. Click on the extension card to pull it into your current workspace.

Once loaded, a brand new orange **Halloween** category tab will automatically appear in your visual block menu asset drawer!

## Block Reference

### Create Halloween Monster
`halloween.createMonster(monster: HalloweenMonster)`
Spawns a built-in pre-rendered 8-bit Halloween sprite asset right at the center coordinates of your screen layout (80, 60).
- **Parameters:** 
  - `monster`: Choose from predefined asset targets including `Ghost`, `Jack-o'-Lantern`, `Vampire Bat`, or `Witch`.

### Create Custom Monster
`halloween.createCustomMonster(img: Image)`
Spawns a unique monster sprite using your own custom pixel art design or layout arrays.
- **Parameters:**
  - `img`: The pixel art image canvas drawn or pasted directly in the native visual block editor image picker workspace layout grid.

### Play Spooky Sound
`halloween.playSpookySound(sound: SpookySound)`
Plays a mathematically modulated background sound wave sweep engineered to sound eerie and cinematic without interrupting your game performance threads.
- **Parameters:**
  - `sound`: Choose an atmospheric option from `ghost wail`, `witch cackle`, `creepy creak`, or `lightning strike`.

### Trigger Dramatic Lightning Flash
`halloween.lightningFlash()`
Triggers a sudden fullscreen graphical strobe effect that switches the background viewport to solid white and electric blue before instantly restoring your original scene color permanence.

## Code Example

Here is a quick script layout demonstrating how to initialize your arcade game environment with a custom monster and ambient audio loop triggers when the game boots up:

```typescript
// On game start, create a custom ghost monster sprite and play an ambient wail
let playerGhost = halloween.createMonster(HalloweenMonster.Ghost)
halloween.playSpookySound(SpookySound.GhostWail)

// Trigger a structural lightning strike pattern automatically every 5 seconds
game.onUpdateInterval(5000, function () {
    halloween.lightningFlash()
    halloween.playSpookySound(SpookySound.LightningStrike)
})
```

## License
MIT
