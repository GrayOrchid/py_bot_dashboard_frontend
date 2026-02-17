const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const URLS = {
  BASE: BASE_URL,
  
  AUTH: {
    DISCORD: {
      LOGIN: `${BASE_URL}/api/auth/discord/login`,
      LINK: `${BASE_URL}/api/auth/discord/link`,
    },
    TELEGRAM: {
      LOGIN: `${BASE_URL}/api/auth/telegram/login`,
      LINK: `${BASE_URL}/api/auth/telegram/link`,
    }
  },

  USER: {
    ME: `${BASE_URL}/api/users/me`,
    SETTINGS: `${BASE_URL}/api/users/settings`,
  }
} as const;