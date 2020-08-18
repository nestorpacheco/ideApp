
function makeIdea(){
    var genre = ["house", "deep house", "techno", "tribal", "digital cumbia"];

    var key = ["Am", "A", "Cm", "C", "Gm", "G",];

    var mood = ["Abient/Textural Feels", "Anger/Agression", "Anthemic", "Bright/Optimistic", "Celebration", "Cheese/Kitsh", "Dark", "Hipnotic", "Magic/Mystical", "Nostalgic", "Romantic", "Sexy/Erotic"];

    var instrumentation = ["Accordion", "Acustic Guitar", "Brass", "Cello", "drums", "Electric guitar", "Percussión"];
    var production = ["Pumping dance groove with heavy kick drum, piano & atmospheric synths",
                    "Emotive deep house with hypnotic synths & pumping sunset groove",
                    "Catchy house floor-filler with ambient synths, funky bass line, piano & driving beat",
                    "Bass synth melody builds to a pumping 'hands-in-the-air' dance groove with anthemic synth stabs",
                    "90s house anthem with piano riff & cut up string samples over a pumping dance groove",
                    "Emotive & chilled EDM track with pulsing synths, piano & pounding drum groove",
                    "Driving house groove with tropical synths, piano & occasional breakbeat interludes",
                    "Bouncy house with quirky percussion, heavy distorted synths & mumbled high-energy vocals",
                    "Introspective acoustic guitar punctuated with atmospheric electric guitar, piano & percussion over soft synth textures",
                    "Warm & uplifting mood with rolling acoustic guitar arpeggios, palm-muted electric guitar hooks & hand claps",
                    "Hypnotic finger-picked acoustic guitar & light cinematic pads build to a euphoric climax with guitar swells & driving groove",
                    "Nostalgic, romantic saxophone over acoustic guitar & string orchestra",
                    "Laid back, Latin infused jazz hip hop with nylon guitar, funky bass & sax",
                    "Ethereal & building Afrobeat groove with hypnotic bass, fast percussion, horn section, buzzing synths & vocal chants"

                ];

    var rand1 = Math.floor(Math.random() * genre.length);
    var rand2 = Math.floor(Math.random() * key.length);
    var rand3 = Math.floor(Math.random() * mood.length);
    var rand4 = Math.floor(Math.random() * instrumentation.length);
    var rand5 = Math.floor(Math.random() * production.length);

    var idea = genre[rand1] + "-" + key[rand2] + "-" + mood[rand3] + "-" + instrumentation[rand4] + "-" + production[rand5];
    document.getElementById("genera").innerHTML = idea;
                 
}

window.onload = makeIdea();
