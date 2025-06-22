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
        url: "https://www.crazygames.com/embed/mad-town-andreas-mafia-storie"
    },
    {
    id: "emojirng",
    name: "Emoji RNG",
    icon: "https://i.ibb.co/nsM1F4Dt/emojirng.png",
    description: "Can you roll the best emoji?",
    url: "https://spamsmilosakrfgd55.github.io/files/hravka/games/erng.html"
},
{
    id: "flappybird",
    name: "Flappy Bird",
    icon: "https://bitlifeonline.github.io/flappybird/logo.png",
    description: "Flappy Bird is a simple yet addictive game where you guide a bird through endless pipes by tapping to keep it flying.",
    url: "https://bitlifeonline.github.io/flappybird/"
},
{
    id: "geodashlite",
    name: "Geometry Dash Lite",
    icon: "https://geometrydash.it.com/files/images/geometrydash-lite.png",
    description: "Geometry Dash Lite is a fast-paced rhythm-based platformer where you jump and fly through dangerous obstacles to the beat of energetic music.",
    url: "https://geometrydashlitepc.io/game/geometry-dash-lite/"
},
{
    id: "gravityfruitmerge",
    name: "Gravity Fruit Merge",
    icon: "https://fruitmerge.me/games/gravity-fruit-merge/thumb_2.png",
    description: "Gravity Fruit Merge is a casual puzzle game where you shoot or float identical fruit slices upward (against gravity), merging them into larger fruits.",
    url: "https://fruitmerge.me/games/gravity-fruit-merge/"
},
{
    id: "1v1lol",
    name: "1v1.LOL",
    icon: "https://webglmath.github.io/1v1-lol/logo.png",
    description: "1v1.lol is a fast‑paced, browser‑based third‑person shooter and building game where you duel other players in 1v1 or squad battle‑royale modes, constructing walls, ramps, and platforms to outsmart and outshoot opponents until only one remains.",
    url: "https://1v1lol.org/games/1v1/"
},
{
    id: "bowling",
    name: "Bowling",
    icon: "https://unblockedgames6x.org/games/bowling/thumb_2.png",
    description: "Bowling is a classic sports game where you roll a ball down a lane to knock over as many pins as possible in ten frames.",
    url: "https://unblockedgames6x.org/games/bowling/"
},
{
    id: "masterchess",
    name: "Master Chess",
    icon: "https://rebemanae.github.io/master-chess/logo.png",
    description: "Master Chess is an online casual chess game.",
    url: "https://rebemanae.github.io/master-chess/"
},
{
    id: "basketrandom",
    name: "Basket Random",
    icon: "https://play-lh.googleusercontent.com/gP8T5Z1O-ngxIloiwcBZzrzyLPYDp0R_1BDNKUDZboIRPVImeyWI8-7aExvB9gAGNKc",
    description: "Basket Random is a chaotic, pixel‑art, two‑player arcade basketball game featuring unpredictable ragdoll physics and randomized courts.",
    url: "https://unblockedgames66.gitlab.io/basket-random/"
},
{
    id: "myperfecthotel",
    name: "My Perfect Hotel",
    icon: "https://nowifigames.org/files/images/my-perfect-hotel.png",
    description: "My Perfect Hotel is a fast-paced time‑management and tycoon simulation where you start as a bellhop, clean rooms, check-in guests, restock amenities, hire staff, upgrade facilities, and expand from a small lodge into a luxurious, multi-location hotel empire.",
    url: "https://www.yad.com/games/My-Perfect-Hotel/index.html?yad"
},
{
    id: "hillclimbracing",
    name: "Hill Climb Racing",
    icon: "https://nowifigames.org/files/images/icon-128.png",
    description: "Hill Climb Racing is a physics-based 2D racing game where you guide Bill Newton’s quirky vehicles up and down hilly terrains, collecting coins, performing stunts, and upgrading your ride—all while managing fuel and avoiding catastrophic flips.",
    url: "https://classroom-6x.org/games/hill-climb/"
},
{
    id: "slope",
    name: "Slope",
    icon: "https://unblockedgames.ee/files/images/icon-512.png",
    description: "Slope is a fast‑paced, endless 3D runner where you guide a neon ball down a gravity‑defying slope, dodging obstacles and avoiding falls to beat your high score.",
    url: "https://slopeonline.online/game/Slope-game-og-v1-1/"
},
{
    id: "uno",
    name: "UNO",
    icon: "https://www.gamingcypher.com/wp-content/uploads/2018/11/UNO-Icon-Gaming-Cypher.png",
    description: "UNO is a fast‑paced, family-friendly shedding card game where players match colors or numbers (or play action cards) to be the first to empty their hand—don’t forget to yell “UNO!” on your last card!",
    url: "https://unblockedgames66.gitlab.io/uno/"
},
{
    id: "cookieclicker",
    name: "Cookie Clicker",
    icon: "https://dordle.io/data/image/game/cookie-clicker.png",
    description: "Cookie Clicker is an addictive incremental (idle) game where you click a giant cookie to earn cookies and use them to buy buildings and upgrades that automate production and enable exponential growth with no defined end.",
    url: "https://ubg365.github.io/"
},
{
    id: "aquaparkio",
    name: "Aquapark.io",
    icon: "https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6",
    description: "Aquapark.io is a colorful, fast-paced water-slide racing game where you zoom downhill, bump opponents, perform aerial jumps and shortcuts, and race to splash into the pool first—though the competition is actually AI-controlled.",
    url: "https://unblockedgames66.gitlab.io/aquapark-io/"
},
{
    id: "fruitscut3d",
    name: "Fruit Cuts 3D",
    icon: "https://play-lh.googleusercontent.com/aR3EOhTi5huFXiKDd0vxREUAkV4YkAC2Fd22gFb9h5vEzGw-DoZih1tngEXECD97Eeg",
    description: "Fruits Cut 3D is a casual 3D fruit‑slicing game where you swipe across the screen to cut flying fruits—like oranges, coconuts, bananas, pineapples, and watermelons—while avoiding bombs, across classic, timed, pipeline, and one‑shot modes for combo‑filled scoring fun.",
    url: "https://ubg365.github.io/fruits-cut-3d/"
},
{
    id: "goingballs",
    name: "Going Balls",
    icon: "https://play-lh.googleusercontent.com/aR3EOhTi5huFXiKDd0vxREUAkV4YkAC2Fd22gFb9h5vEzGw-DoZih1tngEXECD97Eeg",
    description: "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/f1/49/96/f1499654-5a9c-4bb6-4d1c-30e382eb15ac/source/512x512bb.jpg",
    url: "https://ubg365.github.io/going-balls/play.html"
},


];
