const CONFIG = {
    TWITCH_CLIENT_ID: 'TWITCH_CLIENT_ID',
    TWITCH_OAUTH_TOKEN: 'TWITCH_ACCESS_TOKEN', // Scope: moderator:read:followers
    BROADCASTER_NAME: 'Jugachi',
    DISPLAY_TIME: 8000,
    ANIMATION_IN: 'left',
    ANIMATION_OUT: 'top',
    SOUND_FILE: 'assets/notification.opus', // Place your sound file in the assets folder
    SOUND_VOLUME: 1.0,

    SOCIAL_PLATFORMS: {
        twitch:    { handle: "Jugachi", enabled: true, icon: "fa-brands fa-twitch" },
        youtube:   { handle: "@Jugachi", enabled: true, icon: "fa-brands fa-youtube" },
        x:         { handle: "@Jugachi", enabled: true, icon: "fa-brands fa-x-twitter" },
        bluesky:   { handle: "jugachi.bsky.social", enabled: true, icon: "bluesky.png" }, 
        discord:   { handle: "discord.gg/jugachi", enabled: true, icon: "fa-brands fa-discord" },
        instagram: { handle: "@Jugachi", enabled: true, icon: "fa-brands fa-instagram" },
        tiktok:    { handle: "@Jugachi", enabled: true, icon: "fa-brands fa-tiktok" },
        kick:      { handle: "KickGachi", enabled: true, icon: "fa-solid fa-k" },
        facebook:  { handle: "JugachiStreams", enabled: false, icon: "fa-brands fa-facebook" }
    },

    TWITCH_STATS_ROTATION: {
        follower:   true,
        subscriber: true,
        resub:      true,
        raider:     true,
        giftsub:    true,
        cheer:      true
    }
};