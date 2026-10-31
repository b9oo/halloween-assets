/**
 * Custom Halloween Blocks Extension for MakeCode Arcade
 * Save this file inside a 'custom.ts' module block inside your project 
 * to instantly add a brand-new, customized 'Halloween' category to your blocks toolbox!
 */

enum SpookySound {
    //% block="ghost wail"
    GhostWail,
    //% block="witch cackle"
    WitchCackle,
    //% block="creepy creak"
    CreepyCreak,
    //% block="lightning strike"
    LightningStrike
}

enum HalloweenMonster {
    //% block="Ghost"
    Ghost,
    //% block="Jack-o'-Lantern"
    Pumpkin,
    //% block="Vampire Bat"
    Bat,
    //% block="Witch"
    Witch
}

// Configured using FontAwesome 5 Unicode hex string escape notations for standard block category graphics
//% color="#e67e22" icon="\uf6e2" weight=100 block="Halloween"
namespace halloween {

    /**
     * Spawns a custom pre-rendered 8-bit Halloween monster sprite at the center of your screen layout.
     * @param monster choose which spooky monster to summon onto the game grid
     */
    //% blockId=halloween_create_monster
    //% block="create halloween %monster"
    //% monster.defl=HalloweenMonster.Ghost
    export function createMonster(monster: HalloweenMonster): Sprite {
        let newSprite: Sprite = null;

        if (monster == HalloweenMonster.Ghost) {
            newSprite = sprites.create(img`
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 f 1 1 f 1 1 . . . . 
                . . . . 1 f 1 1 1 1 f 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 5 5 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 a 1 a 1 a 1 a . . . . 
                . . . . . a . a . a . a . . . . 
            `, SpriteKind.Player);
        } else if (monster == HalloweenMonster.Pumpkin) {
            newSprite = sprites.create(img`
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 . . . . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                . . 4 4 4 f 4 4 4 4 f 4 4 4 . . 
                . . 4 4 4 f 4 4 4 4 f 4 4 4 . . 
                . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . 4 4 4 4 4 2 2 2 2 4 4 4 4 4 . 
                . . 4 4 4 4 2 4 4 2 4 4 4 4 . . 
                . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
            `, SpriteKind.Enemy);
        } else if (monster == HalloweenMonster.Bat) {
            newSprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . f f f . . . . . . f f f . . 
                . f f f f f . . . . f f f f f . 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f . f f f f f f f f f f . f f 
                . . . . f 2 f f f f 2 f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . f f f a a f f f . . . . 
                . . . . . f f f f f f . . . . . 
            `, SpriteKind.Enemy);
        } else if (monster == HalloweenMonster.Witch) {
            newSprite = sprites.create(img`
                . . . . . . . a . . . . . . . . 
                . . . . . . a a a . . . . . . . 
                . . . . . a a a a a . . . . . . 
                . . . . a a a a a a a . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . . . . 5 5 f 5 f . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . . 
                . . . . . 8 8 8 8 8 . . . . . . 
                . . . . . e . . . e . . . . . . 
            `, SpriteKind.Enemy);
        }

        if (newSprite) {
            newSprite.setPosition(80, 60);
        }
        return newSprite;
    }

    /**
     * Plays a sequenced audio sweep matching a spooky custom environmental sound effect event.
     * @param sound choice of scary synthesizer audio pattern to trigger
     */
    //% blockId=halloween_play_sound
    //% block="play spooky sound %sound"
    export function playSpookySound(sound: SpookySound): void {
        control.runInParallel(function () {
            if (sound == SpookySound.GhostWail) {
                // Generates an unstable, eerie horror theremin pitch by layering wave vibrato onto a long swooping slide
                for (let i = 0; i < 60; i++) {
                    let baseFreq = 440 + Math.sin(i * 0.35) * 55;
                    if (i < 30) {
                        baseFreq -= (i * 5);
                    } else {
                        baseFreq += ((i - 30) * 6);
                    }
                    music.playTone(baseFreq, 22);
                }
            } else if (sound == SpookySound.WitchCackle) {
                // High-pitched, disjointed, chaotic laugh patterns that rapidly change duration to sound manic
                for (let i = 0; i < 14; i++) {
                    let noteDuration = 55 - (i * 2);
                    music.playTone(980 + (i * 20), noteDuration);
                    music.playTone(1350 - (i * 30), noteDuration);
                    pause(8);
                }
            } else if (sound == SpookySound.CreepyCreak) {
                // Creates abrasive structural friction by alternating high-frequency glass squeaks with microtonal bass clicks
                for (let i = 0; i < 28; i++) {
                    if (i % 2 == 0) {
                        music.playTone(2400 + Math.sin(i) * 120, 15);
                    } else {
                        music.playTone(80 + (i % 3 * 12), 20);
                    }
                }
            } else if (sound == SpookySound.LightningStrike) {
                // A massive high-frequency explosion shatter that collapses instantly into a low-frequency heavy rumble simulation
                for (let i = 0; i < 18; i++) {
                    music.playTone(Math.randomRange(850, 2200), 12);
                }
                for (let i = 0; i < 22; i++) {
                    music.playTone(Math.randomRange(35, 105), 35);
                }
            }
        })
    }

    /**
     * Triggers a sudden graphical lightning screen strobe strike across the arcade window.
     */
    //% blockId=halloween_lightning_flash
    //% block="trigger dramatic lightning flash"
    export function lightningFlash(): void {
        let oldColor = scene.backgroundColor();
        scene.setBackgroundColor(1); // Strobe flash to bright white
        pause(70);
        scene.setBackgroundColor(9); // Shift temporarily to electric blue
        pause(45);
        scene.setBackgroundColor(oldColor); // Instantly restore previous background permanence
    }
}
