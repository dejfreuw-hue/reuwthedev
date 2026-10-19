// Everything on the site is rendered from this file — edit here, nowhere else.
//
//   status:  "live" → available now
//            "soon" → shown with an "Awaiting approval" badge
//   art:     an image in assets/, or null for a generated tile
//   accent:  the card's highlight colour
//   addons:  optional extras shown inside the card (used by WatchBan)

const SHOP_URL = "https://builtbybit.com/"; // TODO: paste your BuiltByBit profile URL here

const PLUGINS = [
  {
    name: "WatchBan",
    subtitle: "Bans, Mutes & Case History",
    version: "1.2.0",
    price: "15.00",
    status: "soon",
    category: "minecraft",
    accent: "#ff5a4f",
    art: null,
    featured: true,
    description:
      "Bans, mutes, kicks and warns as numbered cases with a GUI, history and auto-escalation. Two optional add-ons extend it.",
    tags: ["Moderation", "GUI", "Case history"],
    url: "https://builtbybit.com/resources/watchban-bans-mutes-case-history.131705/",
    addons: [
      {
        name: "WatchPanel",
        subtitle: "Web Dashboard",
        price: "7.99",
        version: "1.0.0",
        status: "soon",
        description: "A browser dashboard that runs inside your server: cases, quick actions, staff stats.",
        url: "https://builtbybit.com/resources/watchpanel-web-dashboard-for-watchban.132217/"
      },
      {
        name: "WatchChat",
        subtitle: "Chat Filter",
        price: "5.99",
        version: "1.0.0",
        status: "soon",
        description: "Anti-spam, swear filter, scam-link and advertising blocker that files every case in WatchBan.",
        url: "https://builtbybit.com/resources/watchchat-chat-filter-for-watchban.131968/"
      }
    ]
  },
  {
    name: "ReAntiXray",
    subtitle: "Raytrace-based & Fake Ores",
    version: "1.1.0",
    price: "14.99",
    status: "live",
    category: "minecraft",
    accent: "#33d6ff",
    art: "assets/reantixray.png",
    description:
      "Raytrace-based per-block anti-xray with entity, tile and custom-block culling. Also supports Folia.",
    tags: ["Anti-xray", "Folia", "Fake ores"],
    url: "https://builtbybit.com/resources/reantixray-raytrace-based-fake-ores.116612/"
  },
  {
    name: "OreWatch",
    subtitle: "X-Ray Detection",
    version: "1.1.0",
    price: "12.49",
    status: "live",
    category: "minecraft",
    accent: "#ff8a1f",
    art: "assets/orewatch.png",
    description:
      "Detects X-ray mining patterns and alerts staff with a suspicion %, teleport links and invisible spectate.",
    tags: ["Detection", "Staff tools", "Discord alerts"],
    url: "https://builtbybit.com/resources/orewatch-x-ray-detection.126206/"
  },
  {
    name: "The Bridge",
    subtitle: "Bridge Duels",
    version: "1.1.0",
    price: "9.99",
    status: "live",
    category: "minecraft",
    accent: "#ff4d4d",
    art: "assets/thebridge.png",
    description:
      "Standalone bridge minigame: solo and doubles, end-portal goals, glass cages, parties and stats.",
    tags: ["Minigame", "1.8 → latest", "Parties"],
    url: "https://builtbybit.com/resources/reuws-the-bridge-bridge-duels.116690/"
  },
  {
    name: "Reuw",
    subtitle: "Multipurpose Discord Bot",
    version: "1.0.0",
    price: "9.99",
    status: "soon",
    category: "discord",
    accent: "#5865f2",
    art: null,
    description:
      "Self-hosted TypeScript bot with moderation, tickets, music, AI, leveling, economy and 19+ modules.",
    tags: ["Discord", "Self-hosted", "19+ modules"],
    url: "https://builtbybit.com/resources/reuw-multipurpose-discord-bot.131618/"
  },
  {
    name: "LuckyHook",
    subtitle: "Advanced Fishing Plugin",
    version: "1.0",
    price: "5.99",
    status: "live",
    category: "minecraft",
    accent: "#1fc7b4",
    art: null,
    description:
      "Replaces Minecraft's plain fishing with a customizable RPG-style system.",
    tags: ["Fishing", "RPG", "Customizable"],
    url: "https://builtbybit.com/resources/luckyhook-advanced-fishing-plugin.114924/"
  },
  {
    name: "TNT Tag",
    subtitle: "Minigame",
    version: "1.0",
    price: "4.99",
    status: "live",
    category: "minecraft",
    accent: "#ffb020",
    art: null,
    description:
      "Fast-paced TNT Tag minigame with in-game arena setup, GUIs, scoreboards, stats and leaderboards.",
    tags: ["Minigame", "Arena setup", "Leaderboards"],
    url: "https://builtbybit.com/resources/reuws-tnt-tag-plugin.115783/"
  }
];
