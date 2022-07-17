declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GITHUB_AUTH_TOKEN?: string;
        NODE_ENV?: 'development' | 'production';
        PORT?: string;
        TS_ICON_URL?: string;
        FLAME_ICON_URL?: string;
        DISCLAIMER?: string;
        DISCORD_CLIENT_ID: string;
        DISCORD_CLIENT_SECRET: string;
        DISCORD_CLIENT_REDIRECT_URI: string;
        DISCORD_CLIENT_TOKEN: string;
        DISCORD_OWNER_ID: string;
        DISCORD_GUILD_ID: string;
      }
    }
  }

export {};
