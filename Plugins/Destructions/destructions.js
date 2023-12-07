function PluginMain() {
    let Plugin_Name = "Destructions"
    let Plugin_Description = `This plugin adds destructive functions ☢`
    let Plugin = new DatapackMakerPlugin(Plugin_Name,Plugin_Description)
    let Init = (code,[]) => {
        code.AddLoadLine("scoreboard objectives add ToggleAcidRain dummy")
        code.AddLoadLine("scoreboard objectives add ToggleStorm dummy")
        code.AddLoadLine("scoreboard objectives add ToggleVirus dummy")
        code.AddLoadLine("scoreboard objectives add ToggleLavaRain dummy")
        code.AddLoadLine("scoreboard objectives add ToggleTornado dummy")
        code.AddLoadLine("scoreboard objectives add DisasterTicks dummy")
        code.AddLoadLine("scoreboard players set StormTimer DisasterTicks 0")
        code.AddLoadLine("scoreboard players set StormLTimer DisasterTicks 0")
        code.AddLoadLine("scoreboard players set LavaTimer DisasterTicks 0")
        code.AddTickLine("execute if score Server ToggleAcidRain matches 1 run weather thunder")
        code.AddTickLine("execute if score Server ToggleAcidRain matches 1 run execute as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] run effect give @s wither 10 100 true")
        code.AddTickLine("execute if score Server ToggleAcidRain matches 1 run execute as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s run particle dust 0.2 1 0 1 ~ ~0.4 ~ 0.05 0.15 0.05 0.1 10 force")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run weather thunder")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute as @e[type=lightning_bolt] at @s run summon tnt")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute as @e[type=lightning_bolt] at @s run particle flame ~ ~ ~ 0 0 0 0.6 50 force")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormTimer DisasterTicks matches 10 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s rotated as @s run tp @s ~ ~ ~ ~ ~20")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormTimer DisasterTicks matches 13 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s rotated as @s run tp @s ~ ~ ~ ~-10 ~-5")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormTimer DisasterTicks matches 20 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s rotated as @s run tp @s ~ ~ ~ ~-20 ~")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormTimer DisasterTicks matches 28 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s rotated as @s run tp @s ~ ~ ~ ~-70 ~-20")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormTimer DisasterTicks matches 34 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s rotated as @s run tp @s ~ ~ ~ ~190 ~-8")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormTimer DisasterTicks matches 44 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s rotated as @s run tp @s ~ ~ ~ ~-60 ~10")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormLTimer DisasterTicks matches 500 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s run summon lightning_bolt")
        code.AddTickLine("execute if score Server ToggleStorm matches 1 run execute if score StormLTimer DisasterTicks matches 499 as @a at @s positioned over motion_blocking_no_leaves if entity @s[distance=..2] at @s run summon lightning_bolt")
        code.AddTickLine("execute if score Server ToggleVirus matches 1 run execute as @e at @s if entity @e[sort=nearest,distance=2..5] run effect give @s poison 3823 9 true")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @a at @s run summon marker ~ ~ ~ {Tags:[\"DisasterLavaRainPosition\"]}")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @a at @s run summon marker ~ ~ ~ {Tags:[\"DisasterLavaRainPosition\"]}")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @a at @s run summon marker ~ ~ ~ {Tags:[\"DisasterLavaRainPosition\"]}")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @a at @s run summon marker ~ ~ ~ {Tags:[\"DisasterLavaRainPosition\"]}")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @a at @s run summon marker ~ ~ ~ {Tags:[\"DisasterLavaRainPosition\"]}")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @a at @s run summon marker ~ ~ ~ {Tags:[\"DisasterLavaRainPosition\"]}")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @e[tag=DisasterLavaRainPosition] at @s run spreadplayers ~ ~ 10 50 true @s")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 as @e[tag=DisasterLavaRainPosition] at @s run fill ~-1 150 ~-1 ~1 152 ~1 lava replace air")
        code.AddTickLine("execute if score Server ToggleLavaRain matches 1 run execute if score LavaTimer DisasterTicks matches 100 run kill @e[tag=DisasterLavaRainPosition]")
        code.AddTickLine("execute if score StormTimer DisasterTicks matches 50 run scoreboard players set StormTimer DisasterTicks 0")
        code.AddTickLine("execute if score StormTimer DisasterTicks matches 100 run scoreboard players set LavaTimer DisasterTicks 0")
        code.AddTickLine("execute if score StormLTimer DisasterTicks matches 500 run scoreboard players set StormTimer DisasterTicks 0")
        code.AddTickLine("scoreboard players add StormTimer DisasterTicks 1")
        code.AddTickLine("scoreboard players add StormLTimer DisasterTicks 1")
        code.AddTickLine("scoreboard players add LavaTimer DisasterTicks 1")
        return code
    }
    Plugin.AddButton("Import Destructions (if you want to use this plugin add this function (anywhere you like))",Init)
    let Disasters = (code,[DisasterType]) => {
        switch (DisasterType) {
            case "Acid Rain":
                code.AddLine("execute if score Server ToggleAcidRain matches 0 run scoreboard players set Server ToggleAcidRain 1");
                code.AddLine("execute if score Server ToggleAcidRain matches 1 run scoreboard players set Server ToggleAcidRain 0");
                break;
            case "Storm":
                code.AddLine("execute if score Server ToggleStorm matches 0 run scoreboard players set Server ToggleStorm 1");
                code.AddLine("execute if score Server ToggleStorm matches 1 run scoreboard players set Server ToggleStorm 0");
                break;
            case "Virus":
                code.AddLine("execute if score Server ToggleVirus matches 0 run scoreboard players set Server ToggleVirus 1");
                code.AddLine("execute if score Server ToggleVirus matches 1 run scoreboard players set Server ToggleVirus 0");
                break;
            case "Lava Rain":
                code.AddLine("execute if score Server ToggleLavaRain matches 0 run scoreboard players set Server ToggleLavaRain 1");
                code.AddLine("execute if score Server ToggleLavaRain matches 1 run scoreboard players set Server ToggleLavaRain 0");
                break;
        }
        return code
    }
    Plugin.AddButton("Toggle disaster: <OPTIONS:Acid Rain, Storm, Virus, Lava Rain>",Disasters)
    // to be continued!
}