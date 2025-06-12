const games = [
    {
        id: "subway",
        name: "Subway Surfers",
        icon: "https://cdnb.artstation.com/p/assets/images/images/040/799/969/large/celine-j-icon-1024-ios.jpg?1629908125",
        description: "Run as fast as you can while dodging trains, collecting coins, and unlocking new characters! Subway Surfers is an endless runner that challenges your reflexes and skills.",
        url: "https://www.jopi.com/embed.php?game=subway-surfers"
    },
    // Další hry můžeš přidat sem ve stejném formátu
    {
        id: "btd4",
        name: "Bloons TD 4",
        icon: "https://learningworksforkids.com/wp-content/uploads/Bloons-Tower-Defense-4-Icon.png",
        description: "Tower Defense game by NINJA KIWI",
        url: "https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/bloonstowerdefense4/index.html"
    },
        {
        id: "minecraft",
        name: "Minecraft Java",
        icon: "https://i.gyazo.com/thumb/1000/a4abc5fdb965d1b97db38453012efc73-png.png",
        description: "Play Minecraft online",
        url: "https://eaglercraft.com/mc/1.8.8/"
    },
            {
        id: "gtasim",
        name: "GTA Simulator",
        icon: "https://www.onlinegames.io/media/posts/416/responsive/GTA-Simulator-lg.jpg",
        description: "Play GTA Simulator - A fun online sandbox game!",
        url: "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html"
    },
     {
        id: "keyquest",
        name: "Key Quest",
        icon: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/key-quest.png",
        description: "Enjoy the platformer adventure of Key Quest! ",
        url: "https://www.jopi.com/gam/key-quest/"
    },
         {
        id: "geometrydash",
        name: "Geometry Dash",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K5nTI4sWAOKdvgpDTo_Dmtcsf8EV3ye4xg&s",
        description: "A fun and challenging rhythm-based platformer!",
        url: "https://www.jopi.com/embed.php?game=geometry-dash"
    },
             {
        id: "flipbottle",
        name: "Flip Bottle",
        icon: "https://images-na.ssl-images-amazon.com/images/I/717CybpZA2L.png",
        description: "Can you do a bottle flip?",
        url: "https://www.crazygames.com/embed/flip-bottle"
    },
        {
        id: "neonbricks",
        name: "Neon Bricks",
        icon: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/neon-bricks.png",
        description: "A fun brick-breaking game where you control a paddle to bounce the ball and destroy the bricks.",
        url: "https://www.jopi.com/embed.php?game=neon-bricks"
    },
            {
        id: "waytohome",
        name: "Way To Home",
        icon: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/way-to-home.png",
        description: "Help the characters find their way home by drawing a path! Navigate through obstacles and guide them safely.",
        url: "https://www.jopi.com/embed.php?game=way-to-home"
    },
    {
        id: "bloxdio",
        name: "Bloxd.io",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DQO3iUKTOd2pqn0NwYMxi0AFS8y51ljONg&s",
        description: "A creative and fun building game where you can explore and create with friends!",
        url: "https://www.jopi.com/embed.php?game=bloxd-io"
    },
        {
        id: "craftnite",
        name: "Craftnite.io",
        icon: "https://cdn-1.webcatalog.io/catalog/craftnite-io/craftnite-io-icon-filled-256.png?v=1714779938123",
        description: "Combine crafting and battle royale elements in this exciting online game!",
        url: "https://www.jopi.com/embed.php?game=craftnite-io"
    },
    {
        id: "tombofthemask",
        name: "Tomb Of The Mask",
        icon: "https://play-lh.googleusercontent.com/ATGr-U4JBK2VjFzKGK9eMMkrDxJaazadOUoz_7Yl0U5NrWSFcFUzEtNurWXYzVWc8uOO",
        description: "Tomb of the Mask is an action-packed maze game. Navigate through the tomb while avoiding traps and collecting coins. Use your quick reflexes to master the levels and unlock hidden secrets. ",
        url: "https://htmlxm.github.io/h8/tomb-of-the-mask/"
    },
    {
        id: "squarebird",
        name: "Square Bird",
        icon: "https://play-lh.googleusercontent.com/SSHfkzIYw4uBMCxuVJy3uR1ve1M_8mKRTwWNhD-UFb5vrAg9IO54hCk4boGYvv363MrW",
        description: "Build a tower of blocks to help the bird cross over obstacles. Timing is everything in this addictive arcade ",
        url: "https://www.crazygames.com/embed/square-bird"
    },
        {
        id: "paperio",
        name: "Paper.io",
        icon: "http://www.webmasters-en-france.com/wp-content/uploads/logo-paper-io.png",
        description: "Just survive. That´s all",
        url: "https://www.crazygames.com/embed/paper-io-2"
    },
       {
        id: "mr2048",
        name: "Man Runner 2048",
        icon: "https://play-lh.googleusercontent.com/6psZeQPrKWBEl6wgaQH_SDYT8d2r0fcclLXgq2Fh5ZJe4hnzSHkEQZRVEk-V8tVQZio",
        description: "Get the number 2048!",
        url: "https://www.crazygames.com/embed/man-runner-2048"
    },
           {
        id: "colormatch",
        name: "Color Match",
        icon: "https://hyhygames.com/thumbs/color-match-crazygames_1.jpg",
        description: "Match the right color of an object!",
        url: "https://www.crazygames.com/embed/color-match-amg"
    },
        {
        id: "ttsobby",
        name: "Tung Tung Sahur Obby",
        icon: "https://cdn.playmix.cc/images/thumbs/320x320/tung-tung-sahur-obby-challenge.webp",
        description: "Can you complete it?",
        url: "https://www.crazygames.com/embed/tung-tung-sahur-obby-challenge"
    },
            {
        id: "racinglimits",
        name: "Racing Limits",
        icon: "https://freezenova-game.github.io/assert/icons/racing-limits-cover-m144x144.png",
        description: "Racing game",
        url: "https://www.crazygames.com/embed/racing-limits"
    },
                {
        id: "madtown",
        name: "Mad Town Andreas",
        icon: "https://www.play-games.com/files/img/mad-andreas-town-mafia-old-friends-2-1724146216.jpg",
        description: "Free online GTA copy",
        url: "https://www.crazygames.com/embed/mad-town-andreas-storie"
    },

];
