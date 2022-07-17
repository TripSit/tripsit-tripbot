export default {
  GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: process.env.PORT ?? '8080',
  TS_ICON_URL: process.env.TS_ICON_URL ?? 'https://fossdroid.com/images/icons/me.tripsit.tripmobile.13.png',
  FLAME_ICON_URL: process.env.FLAME_ICON_URL ?? 'https://imgur.com/b923xK2.png',
  DISCLAIMER: process.env.DISCLAIMER ?? 'Dose responsibly!',
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_REDIRECT_URI: process.env.DISCORD_CLIENT_REDIRECT_URI,
  DISCORD_CLIENT_TOKEN: process.env.DISCORD_CLIENT_TOKEN,
  DISCORD_OWNER_ID: process.env.DISCORD_OWNER_ID,
  DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID,
};
