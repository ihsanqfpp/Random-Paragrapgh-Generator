const text = [
    'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie, sweet apple pie, tiramisu carrot cake. Marzipan marshmallow croissant, tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw, gummi bears, lollipop, cotton candy, gummi bears, chocolate bar, cake, and cookie. Cupcake muffin, danish muffin, cookie, gummies. Jelly beans tiramisu pudding. Toffee soufflé, chocolate cake, pastry brownie. Oat cake, halvah, sweet roll, cotton candy, croissant, lollipop. Macaroon tiramisu, chocolate bar, candy candy, carrot cake, jelly sweet. Gummies, croissant, macaroon dessert. Chocolate cake dragée pie.',
    
    'Next-level tbh everyday carry: blog, copper mug, forage kitsch, roof party, pickled hammock, kale chips, and tofu. Etsy Shoreditch 8-bit microdosing, XOXO viral butcher banh mi, humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin Venmo vape Four Loko. Hexagon kale chips, typewriter kitsch, 8-bit organic plaid, small batch keffiyeh, ethical banh mi, narwhal Echo Park cronut.',
    
    'Zombie ipsum reversus ab viral inferno, nam Rick Grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis, soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat, Max Brucks terribilem incessu zomby. The voodoo sacerdos, flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.',
    
    'Cat gets stuck in tree; firefighters try to get cat down. Firefighters get stuck in tree; cat eats firefighters’ slippers. Kitty power: ignore the squirrels, you’ll never catch them anyway. What a cat-astrophe! Purr as loud as possible, be the most annoying cat that you can, and knock everything off the table. Pretend you want to go out but then don’t. Bite off human’s toes, yet disappear for four days and return home with an expensive injury; bite the vet. Catch, eat, throw up; catch, eat, throw up; bad birds.',
    
    'This opera is as lousy as it is brilliant! Your lyrics lack subtlety. You can’t just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry’s worm-infested bowels as if you were actually wriggling through them. "I just told you! You’ve killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don’t regret this, but I both rue and lament it." Morbo can’t understand his teleprompter because he forgot how you say that letter that’s shaped like a man wearing a hat.',
    
    'Airedale, hard cheese, mozzarella. Pecorino, melted cheese, Port-Salut, Emmental, Babybel, cheese and wine, melted cheese, Manchego. Everyone loves Blue Castello; everyone loves fromage, cheese slices, Airedale, cheddar, cream cheese. Bavarian Bergkase, "Who moved my cheese?" Halloumi, Port-Salut, Gouda, Jarlsberg, ricotta, rubber cheese. Stinking Bishop, smelly cheese, brie.',
    
    'Salvia, glossier subway tile, leggings, mustache, YOLO, semiotics, chia. Pitchfork, tbh, af, blog, church-key, meggings, vaporware, PBR&B, master cleanse, post-ironic man bun, Pabst, mustache, letterpress, synth. Snackwave raw denim, Godard, 3 Wolf Moon, shaman, offal kitsch, unicorn, live-edge selvage, Schlitz, fashion axe, vaporware, drinking vinegar, prism. Shabby chic tacos, artisan chambray, chicharrones cardigan, leggings, typewriter af, pop-up Williamsburg, meditation, PBR&B viral. You probably haven’t heard of them: DIY jean shorts, subway tile, fashion axe, Bushwick kitsch, turmeric cloud bread, vaporware, freegan Franzen, pork belly, chicharrones, banh mi.',
    
    'Man braid, celiac synth freegan readymade. Pitchfork fam, salvia, waistcoat, lomo bitters, gentrify, Four Loko. Pitchfork semiotics, post-ironic vegan. Tofu meditation, microdosing, hashtag, semiotics, Venmo. Flexitarian vape tilde, taiyaki. Prism poutine farm-to-table, messenger bag, vegan taxidermy, tattooed sartorial squid, jean shorts, fixie selvage, trust fund vape.',
    
    'Rutters Plate Fleet, boom chandler, Brethren of the Coast, handsomely lookout, marooned brigantine knave. Buccaneer gangway, jack, rum, loot, spyglass, line, Jack Tar, fore gaff. Gaff topmast, scuttle, ballast, swab, draught, measured fer yer chains, dance the hempen jig. Chain shot, yardarm.'
];


function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const item = document.querySelector("#items");
const dataContainer = document.querySelector("#data");

const generate = () => {
    const num = parseInt(item.value);
    if (isNaN(num) || num <= 0 || num > 9) {
        dataContainer.innerHTML = `<p>Please enter a valid number between 1 and 9.</p>`;
        return;
    }

    const shuffledText = shuffle([...text]);
    const paragraphs = shuffledText.slice(0, num)
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");

    dataContainer.innerHTML = paragraphs;
};