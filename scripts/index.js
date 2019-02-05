var menu = new Menu("Admin Menu", "Funktionen", "hp");
var playerInteraction = menu.addSubMenu("Spieler Interaktion", "Spieler Interaktion", "Spieler Funktionen", "pi", menu.short);
playerInteraction.addItem("Kick");
var ban = playerInteraction.addSubMenu("Ban", "Spieler Bannen", "Spieler Bannen", "ban", playerInteraction.short)
ban.addItem("Temp-Ban");
ban.addItem("Perma-Ban");
var commands = menu.addSubMenu("Commands", "Commands", "Commands", "cmd", menu.short)
commands.addItem("Announce");
commands.addItem("No Clip");
menu.addItem("God-Mode");

mc.addMenu("hp", menu);


mc.openMenu("hp");