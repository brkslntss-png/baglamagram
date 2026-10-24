const tumSorular = [
    // --- MUSIC QUESTIONS FOR KIDS ---
    {
        "soru": "Which instrument do we play by blowing?",
        "secenekler": ["Flute", "Guitar", "Drum", "Piano"],
        "dogru": "Flute"
    },
    {
        "soru": "What do we hold in our hands to play the drum?",
        "secenekler": ["Drumsticks (Baget)", "Spoon", "Pencil", "Comb"],
        "dogru": "Drumsticks (Baget)"
    },
    {
        "soru": "What colors are the piano keys?",
        "secenekler": ["Black and White", "Red and Blue", "Yellow and Green", "Purple and Pink"],
        "dogru": "Black and White"
    },
    {
        "soru": "What do we call a person who sings?",
        "secenekler": ["Singer", "Doctor", "Pilot", "Chef"],
        "dogru": "Singer"
    },
    {
        "soru": "What is the speed of music called?",
        "secenekler": ["Rhythm / Tempo", "Color", "Smell", "Taste"],
        "dogru": "Rhythm / Tempo"
    },
    {
        "soru": "Which animal sings beautifully and chirps?",
        "secenekler": ["Bird (Nightingale)", "Cat", "Fish", "Turtle"],
        "dogru": "Bird (Nightingale)"
    },
    {
        "soru": "Where do we touch the guitar to make sound?",
        "secenekler": ["Its strings", "Its foot", "Its handle", "Its back"],
        "dogru": "Its strings"
    },
    {
        "soru": "What do mothers sing to put babies to sleep?",
        "secenekler": ["Lullaby", "March", "Dance Music", "Rap"],
        "dogru": "Lullaby"
    },
    {
        "soru": "What is a microphone used for?",
        "secenekler": ["To amplify our voice", "To paint", "To drink water", "To sleep"],
        "dogru": "To amplify our voice"
    },
    {
        "soru": "Which instrument has strings?",
        "secenekler": ["Saz / Baglama", "Drum", "Whistle", "Cymbal"],
        "dogru": "Saz / Baglama"
    },
    {
        "soru": "What do we wear to listen to music?",
        "secenekler": ["Headphones", "Glasses", "Gloves", "Hat"],
        "dogru": "Headphones"
    },
    {
        "soru": "What do we do when very fast music plays?",
        "secenekler": ["Dance / Run", "Sleep", "Cry", "Eat"],
        "dogru": "Dance / Run"
    },
    {
        "soru": "What do we use to play the violin?",
        "secenekler": ["Bow", "Hammer", "Knife", "Spoon"],
        "dogru": "Bow"
    },
    {
        "soru": "What do we use to clap?",
        "secenekler": ["Our hands", "Our feet", "Our eyes", "Our nose"],
        "dogru": "Our hands"
    },
    {
        "soru": "Which instrument is huge and looks like a belly?",
        "secenekler": ["Drum (Davul)", "Flute", "Zurna", "Kaval"],
        "dogru": "Drum (Davul)"
    },
    {
        "soru": "What does a cymbal sound like?",
        "secenekler": ["Crash crash (Chin chin)", "Boom boom", "Buzz buzz", "Grrr"],
        "dogru": "Crash crash (Chin chin)"
    },
    {
        "soru": "How are marches sung?",
        "secenekler": ["Enthusiastic and loud", "Whispering", "Crying", "Sleeping"],
        "dogru": "Enthusiastic and loud"
    },
    {
        "soru": "Which instrument do we blow with our mouth?",
        "secenekler": ["Trumpet", "Piano", "Guitar", "Violin"],
        "dogru": "Trumpet"
    },
    {
        "soru": "What does the person conducting the orchestra hold?",
        "secenekler": ["Baton (Stick)", "Ball", "Flower", "Phone"],
        "dogru": "Baton (Stick)"
    },
    {
        "soru": "What is sung on a birthday?",
        "secenekler": ["Happy Birthday", "Lullaby", "Lament", "Nursery Rhyme"],
        "dogru": "Happy Birthday"
    },
    {
        "soru": "How would it sound if cats played the piano?",
        "secenekler": ["Random (Meow-y)", "Very smooth", "No sound", "They talk"],
        "dogru": "Random (Meow-y)"
    },
    {
        "soru": "Which instrument is placed on the knees and hit?",
        "secenekler": ["Darbuka", "Flute", "Violin", "Zurna"],
        "dogru": "Darbuka"
    },
    {
        "soru": "Where are music notes written?",
        "secenekler": ["On paper (Staff)", "On the wall", "On a tree", "On the carpet"],
        "dogru": "On paper (Staff)"
    },
    {
        "soru": "What do we call those who sing very beautifully?",
        "secenekler": ["Nightingale voiced", "Crow voiced", "Lion voiced", "Elephant voiced"],
        "dogru": "Nightingale voiced"
    },
    {
        "soru": "Which of the following is NOT a musical instrument?",
        "secenekler": ["Television", "Guitar", "Saz", "Piano"],
        "dogru": "Television"
    },
    {
        "soru": "What can we do with pots and pans?",
        "secenekler": ["Play them like drums", "Paint", "Read", "Wear them"],
        "dogru": "Play them like drums"
    },
    {
        "soru": "Which instrument is triangular?",
        "secenekler": ["Triangle", "Drum", "Guitar", "Saz"],
        "dogru": "Triangle"
    },
    {
        "soru": "Who writes the music?",
        "secenekler": ["Composer", "Painter", "Driver", "Barber"],
        "dogru": "Composer"
    },
    {
        "soru": "Which instrument's keys do we press?",
        "secenekler": ["Organ / Piano", "Drum", "Cymbal", "Kaval"],
        "dogru": "Organ / Piano"
    },
    {
        "soru": "What do birds do in the morning?",
        "secenekler": ["Chirp (Sing songs)", "Sleep", "Watch TV", "Go to school"],
        "dogru": "Chirp (Sing songs)"
    },
    {
        "soru": "Which sound is very deep/low?",
        "secenekler": ["Bear sound / Drum sound", "Bird sound", "Bell sound", "Cat sound"],
        "dogru": "Bear sound / Drum sound"
    },
    {
        "soru": "Which sound is very high/thin?",
        "secenekler": ["Bird sound / Whistle", "Lion roar", "Thunder", "Truck sound"],
        "dogru": "Bird sound / Whistle"
    },
    {
        "soru": "What do we do for the person singing on stage?",
        "secenekler": ["Applaud", "Sleep", "Turn our back", "Talk"],
        "dogru": "Applaud"
    },
    {
        "soru": "Which instrument is carried on the shoulder?",
        "secenekler": ["Violin", "Piano", "Drum set", "Organ"],
        "dogru": "Violin"
    },
    {
        "soru": "What do we learn in music class?",
        "secenekler": ["Singing", "Swimming", "Cooking", "Driving"],
        "dogru": "Singing"
    },
    {
        "soru": "Which instrument is made of wood?",
        "secenekler": ["Guitar / Saz", "Trumpet", "Cymbal", "Whistle (Plastic)"],
        "dogru": "Guitar / Saz"
    },
    {
        "soru": "What happens when you open a music box?",
        "secenekler": ["Music plays", "Water flows", "Light turns on", "Bird flies"],
        "dogru": "Music plays"
    },
    {
        "soru": "What do we listen to on the radio?",
        "secenekler": ["Music / News", "Picture", "Food", "Game"],
        "dogru": "Music / News"
    },
    {
        "soru": "Which instrument is shaped like a pear?",
        "secenekler": ["Oud", "Flute", "Drum", "Cymbal"],
        "dogru": "Oud"
    },
    {
        "soru": "What do we do when we go to a concert?",
        "secenekler": ["Listen quietly", "Shout and run", "Sleep", "Play ball"],
        "dogru": "Listen quietly"
    },
    {
        "soru": "Which instrument is made of metal and shines?",
        "secenekler": ["Saxophone / Trumpet", "Wooden spoon", "Drum skin", "Violin bow"],
        "dogru": "Saxophone / Trumpet"
    },
    {
        "soru": "What do whales do underwater?",
        "secenekler": ["Sing songs", "Paint", "Walk", "Fly"],
        "dogru": "Sing songs"
    },
    {
        "soru": "What does the sound of bees resemble?",
        "secenekler": ["Buzzz (Like music)", "Woof woof", "Meow", "Moo"],
        "dogru": "Buzzz (Like music)"
    },
    {
        "soru": "How do we feel in very slow music?",
        "secenekler": ["Calmness / Sleepy", "Urge to run", "Fear", "Hunger"],
        "dogru": "Calmness / Sleepy"
    },
    {
        "soru": "Which instrument looks like a huge box?",
        "secenekler": ["Piano", "Flute", "Cymbal", "Spoon"],
        "dogru": "Piano"
    },
    {
        "soru": "What do we do when we forget the lyrics of a song?",
        "secenekler": ["We hum (La la la)", "We cry", "We go home", "We get angry"],
        "dogru": "We hum (La la la)"
    },
    {
        "soru": "Which instrument is played most at weddings?",
        "secenekler": ["Davul - Zurna", "Piano", "Harp", "Triangle"],
        "dogru": "Davul - Zurna"
    },
    {
        "soru": "What do we do if the music is too loud?",
        "secenekler": ["Turn it down", "Turn it up more", "Shout", "Dance"],
        "dogru": "Turn it down"
    },
    {
        "soru": "Which instrument has 6 strings?",
        "secenekler": ["Guitar", "Drum", "Flute", "Cymbal"],
        "dogru": "Guitar"
    },
    {
        "soru": "How many people sing in a choir?",
        "secenekler": ["Many people", "Only 1 person", "No one", "Only the teacher"],
        "dogru": "Many people"
    },
    {
        "soru": "What are the names of the notes?",
        "secenekler": ["Do-Re-Mi-Fa-Sol-La-Si", "A-B-C-D-E", "1-2-3-4-5", "Red-Yellow-Blue"],
        "dogru": "Do-Re-Mi-Fa-Sol-La-Si"
    },
    {
        "soru": "Which instrument makes a 'Toot toot' sound?",
        "secenekler": ["Whistle / Flute", "Drum", "Guitar", "Piano"],
        "dogru": "Whistle / Flute"
    },
    {
        "soru": "Where do we put musical instruments to protect them?",
        "secenekler": ["In their case / Box", "In water", "In soil", "In the fridge"],
        "dogru": "In their case / Box"
    },
    {
        "soru": "Which instrument do we play by moving our fingers across?",
        "secenekler": ["Piano / Organ", "Drum", "Cymbal", "Triangle"],
        "dogru": "Piano / Organ"
    },
    {
        "soru": "What does the sound of rain resemble?",
        "secenekler": ["Tip tip tip (Rhythm)", "Boom boom", "Buzzz", "Screech"],
        "dogru": "Tip tip tip (Rhythm)"
    },
    {
        "soru": "Which instrument is hollow inside?",
        "secenekler": ["Guitar body", "Piano key", "Drum stick", "Violin bow"],
        "dogru": "Guitar body"
    },
    {
        "soru": "What do we keep with our foot while listening to music?",
        "secenekler": ["Tempo / Rhythm", "Ball", "Fish", "Pencil"],
        "dogru": "Tempo / Rhythm"
    },
    {
        "soru": "Which instrument makes a 'Boom Boom' sound?",
        "secenekler": ["Drum (Davul)", "Cymbal", "Flute", "Violin"],
        "dogru": "Drum (Davul)"
    },
    {
        "soru": "What do we use when singing?",
        "secenekler": ["Our voice", "Our feet", "Our hair", "Our ears"],
        "dogru": "Our voice"
    },
    {
        "soru": "Which instrument is very thin and played sideways?",
        "secenekler": ["Flute (Side blown)", "Drum", "Guitar", "Tuba"],
        "dogru": "Flute (Side blown)"
    },
    {
        "soru": "Which animal's sound resembles a trumpet?",
        "secenekler": ["Elephant", "Mouse", "Cat", "Rabbit"],
        "dogru": "Elephant"
    },
    {
        "soru": "What happens if we clap our hands together?",
        "secenekler": ["It makes sound (Clap clap)", "Silence", "Light turns on", "Water flows"],
        "dogru": "It makes sound (Clap clap)"
    },
    {
        "soru": "Which music makes us dance?",
        "secenekler": ["Upbeat music", "Lullaby", "Lament", "Silent music"],
        "dogru": "Upbeat music"
    },
    {
        "soru": "Who is called a pianist?",
        "secenekler": ["One who plays piano", "One who plays guitar", "One who plays drums", "One who sings"],
        "dogru": "One who plays piano"
    },
    {
        "soru": "What sound do trees make when the wind blows?",
        "secenekler": ["Humming / Rustling", "Meow", "Woof", "Toot"],
        "dogru": "Humming / Rustling"
    },
    {
        "soru": "Which instrument is made of wood and has strings?",
        "secenekler": ["Baglama", "Trumpet", "Cymbal", "Whistle"],
        "dogru": "Baglama"
    },
    {
        "soru": "What shape does a music note look like?",
        "secenekler": ["Round with a stem", "Square", "Triangle", "Star"],
        "dogru": "Round with a stem"
    },
    {
        "soru": "Which instrument is played with a bow?",
        "secenekler": ["Kemenche / Violin", "Guitar", "Drum", "Piano"],
        "dogru": "Kemenche / Violin"
    },
    {
        "soru": "What does a music band do?",
        "secenekler": ["Plays songs together", "Eats food", "Sleeps", "Plays ball"],
        "dogru": "Plays songs together"
    },
    {
        "soru": "Which instrument's sound is very noisy/loud?",
        "secenekler": ["Drum (Davul)", "Violin", "Flute", "Guitar"],
        "dogru": "Drum (Davul)"
    },
    {
        "soru": "Which instrument is small, round and makes noise when shaken?",
        "secenekler": ["Maracas / Tambourine", "Guitar", "Piano", "Zurna"],
        "dogru": "Maracas / Tambourine"
    },
    {
        "soru": "Do you like singing?",
        "secenekler": ["Yes", "No", "Maybe", "Sometimes"],
        "dogru": "Yes"
    },
    {
        "soru": "Which instrument goes 'Dymbir dymbir'?",
        "secenekler": ["Saz", "Drum", "Cymbal", "Whistle"],
        "dogru": "Saz"
    },
    {
        "soru": "Who is called a soloist?",
        "secenekler": ["The person singing the song", "Drummer", "Light operator", "Door opener"],
        "dogru": "The person singing the song"
    },
    {
        "soru": "Which instrument has pedals?",
        "secenekler": ["Piano", "Guitar", "Violin", "Flute"],
        "dogru": "Piano"
    },
    {
        "soru": "What do we feel when listening to music?",
        "secenekler": ["Happiness", "Hunger", "Thirst", "Cold"],
        "dogru": "Happiness"
    },
    {
        "soru": "Which instrument is most common in the military?",
        "secenekler": ["Trumpet / Bugle", "Piano", "Violin", "Guitar"],
        "dogru": "Trumpet / Bugle"
    },
    {
        "soru": "Bird sound resembles which instrument?",
        "secenekler": ["Flute", "Drum", "Guitar", "Tuba"],
        "dogru": "Flute"
    },
    {
        "soru": "What does thunder sound like?",
        "secenekler": ["Big drum", "Bird sound", "Bell sound", "Cat sound"],
        "dogru": "Big drum"
    },
    {
        "soru": "Which instrument is the longest?",
        "secenekler": ["Zurna / Kaval", "Tambourine", "Cymbal", "Maracas"],
        "dogru": "Zurna / Kaval"
    },
    {
        "soru": "What are the lines in a music notebook called?",
        "secenekler": ["Staff (Stave)", "Square", "Circle", "Triangle"],
        "dogru": "Staff (Stave)"
    },
    {
        "soru": "Which instrument looks like metal lids?",
        "secenekler": ["Cymbal", "Drum", "Guitar", "Violin"],
        "dogru": "Cymbal"
    },
    {
        "soru": "What do we do when the song ends?",
        "secenekler": ["Applaud", "Cry", "Sleep", "Get angry"],
        "dogru": "Applaud"
    },
    {
        "soru": "Which instrument hangs around our neck?",
        "secenekler": ["Guitar / Drum", "Piano", "Organ", "Tuba"],
        "dogru": "Guitar / Drum"
    },
    {
        "soru": "What does a music teacher teach?",
        "secenekler": ["Notes / Songs", "Math", "Swimming", "Running"],
        "dogru": "Notes / Songs"
    },
    {
        "soru": "Which instrument makes a 'Squeak squeak' sound?",
        "secenekler": ["Violin / Kemenche", "Drum", "Piano", "Flute"],
        "dogru": "Violin / Kemenche"
    },
    {
        "soru": "What color is music?",
        "secenekler": ["Can be any color (Rainbow)", "Only Black", "Only White", "Colorless"],
        "dogru": "Can be any color (Rainbow)"
    },
    {
        "soru": "Which instrument's sound is very high pitched?",
        "secenekler": ["Cura", "Drum", "Tuba", "Double Bass"],
        "dogru": "Cura"
    },
    {
        "soru": "Is singing fun?",
        "secenekler": ["Yes, very fun", "No, boring", "I don't know", "Maybe"],
        "dogru": "Yes, very fun"
    },

    // --- GENERAL MUSIC CULTURE & THEORY ---
    {
        "soru": "How many keys are on a standard piano?",
        "secenekler": ["88", "61", "76", "92"],
        "dogru": "88"
    },
    {
        "soru": "What are the signs indicating the pitch of sounds in music called?",
        "secenekler": ["Note", "Rest", "Rhythm", "Measure"],
        "dogru": "Note"
    },
    {
        "soru": "How many strings does a classical guitar typically have?",
        "secenekler": ["6", "4", "5", "12"],
        "dogru": "6"
    },
    {
        "soru": "Which is the lowest pitched instrument of the violin family?",
        "secenekler": ["Double Bass (Contrabass)", "Cello", "Viola", "Violin"],
        "dogru": "Double Bass (Contrabass)"
    },
    {
        "soru": "On which line of the staff is the 'Treble Clef' (Sol Anahtarı) drawn?",
        "secenekler": ["2nd line", "1st line", "3rd line", "4th line"],
        "dogru": "2nd line"
    },
    {
        "soru": "What is the term that determines the speed of beats in music?",
        "secenekler": ["Tempo", "Rhythm", "Melody", "Harmony"],
        "dogru": "Tempo"
    },
    {
        "soru": "Who is the artist known as the 'King of Pop'?",
        "secenekler": ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"],
        "dogru": "Michael Jackson"
    },
    {
        "soru": "Who is the composer of the world-famous 'The Four Seasons' concerto?",
        "secenekler": ["Antonio Vivaldi", "Bach", "Mozart", "Beethoven"],
        "dogru": "Antonio Vivaldi"
    },
    {
        "soru": "What is the closest term in Western music to the concept of 'Usul' in Turkish music?",
        "secenekler": ["Rhythm / Meter", "Mode", "Scale", "Chord"],
        "dogru": "Rhythm / Meter"
    },
    {
        "soru": "What is the person who conducts the orchestra and holds a baton called?",
        "secenekler": ["Conductor (Maestro)", "Soloist", "Concertmaster", "Composer"],
        "dogru": "Conductor (Maestro)"
    },
    {
        "soru": "What are the wooden sticks used to play drums called?",
        "secenekler": ["Drumsticks (Baget)", "Plectrum", "Bow", "Tezene"],
        "dogru": "Drumsticks (Baget)"
    },
    {
        "soru": "Which note comes after 'Do' (C) in music?",
        "secenekler": ["Re (D)", "Mi (E)", "Fa (F)", "Si (B)"],
        "dogru": "Re (D)"
    },
    {
        "soru": "Who is the poet of the Turkish National Anthem (İstiklal Marşı)?",
        "secenekler": ["Mehmet Akif Ersoy", "Osman Zeki Üngör", "Ziya Gökalp", "Namık Kemal"],
        "dogru": "Mehmet Akif Ersoy"
    },
    {
        "soru": "What are the signs indicating the duration of 'Silence' in music called?",
        "secenekler": ["Rest", "Note", "Sharp", "Flat"],
        "dogru": "Rest"
    },
    {
        "soru": "Which of the following is a percussion instrument?",
        "secenekler": ["Drum", "Violin", "Flute", "Guitar"],
        "dogru": "Drum"
    },
    {
        "soru": "Which of the following is a wind instrument?",
        "secenekler": ["Flute", "Piano", "Guitar", "Viola"],
        "dogru": "Flute"
    },
    {
        "soru": "Which country is Beethoven from?",
        "secenekler": ["Germany", "France", "Italy", "Russia"],
        "dogru": "Germany"
    },
    {
        "soru": "Who does the '9th Symphony' belong to?",
        "secenekler": ["Beethoven", "Mozart", "Bach", "Chopin"],
        "dogru": "Beethoven"
    },
    {
        "soru": "What is it called when a piece of music is adapted to be played by different instruments?",
        "secenekler": ["Arrangement", "Composition", "Lyrics", "Improvisation"],
        "dogru": "Arrangement"
    },
    {
        "soru": "What does the term 'Forte' (f) mean in music?",
        "secenekler": ["Loud / Strong", "Soft", "Fast", "Slow"],
        "dogru": "Loud / Strong"
    },
    {
        "soru": "What does the term 'Piano' (p) mean in music?",
        "secenekler": ["Soft / Gentle", "Loud", "Fast", "Hard"],
        "dogru": "Soft / Gentle"
    },
    {
        "soru": "Which of the following is NOT a string instrument?",
        "secenekler": ["Trumpet", "Baglama", "Guitar", "Violin"],
        "dogru": "Trumpet"
    },
    {
        "soru": "What is the shape consisting of 5 lines and 4 spaces used to write music called?",
        "secenekler": ["Staff (Porte)", "Tablature", "Chord", "Scale"],
        "dogru": "Staff (Porte)"
    },
    {
        "soru": "Which Turkish artist won the Eurovision Song Contest in 2003?",
        "secenekler": ["Sertab Erener", "Athena", "Şebnem Paker", "Hadise"],
        "dogru": "Sertab Erener"
    },
    {
        "soru": "What is the name of the song with which Sertab Erener won Eurovision?",
        "secenekler": ["Everyway That I Can", "Düm Tek Tek", "Dinle", "For Real"],
        "dogru": "Everyway That I Can"
    },
    {
        "soru": "Which of the following is a Turkish Classical Music makam (mode)?",
        "secenekler": ["Nihavend", "Minor", "Major", "Blues"],
        "dogru": "Nihavend"
    },
    {
        "soru": "Which voice group does 'Soprano' refer to?",
        "secenekler": ["Highest female voice", "Lowest male voice", "Middle female voice", "Child's voice"],
        "dogru": "Highest female voice"
    },
    {
        "soru": "Which voice group does 'Bass' refer to?",
        "secenekler": ["Lowest male voice", "Highest female voice", "Middle male voice", "Child's voice"],
        "dogru": "Lowest male voice"
    },
    {
        "soru": "In what groups are the black keys on a piano arranged?",
        "secenekler": ["Groups of 2 and 3", "Only groups of 2", "Only groups of 3", "Groups of 4 and 5"],
        "dogru": "Groups of 2 and 3"
    },
    {
        "soru": "What is the stick rubbed against the strings to produce sound in string instruments called?",
        "secenekler": ["Bow (Archet)", "Drumstick", "Plectrum", "Pick"],
        "dogru": "Bow (Archet)"
    },
    {
        "soru": "What is the series 'Do - Re - Mi - Fa - Sol - La - Si' called?",
        "secenekler": ["Scale", "Chord", "Rhythm", "Measure"],
        "dogru": "Scale"
    },
    {
        "soru": "What is it called when 3 or more sounds are played simultaneously in music?",
        "secenekler": ["Chord", "Melody", "Solo", "Scale"],
        "dogru": "Chord"
    },
    {
        "soru": "Which of the following is a brass wind instrument?",
        "secenekler": ["Trumpet", "Clarinet", "Ney", "Bassoon"],
        "dogru": "Trumpet"
    },
    {
        "soru": "Which city is known as the birthplace of Jazz music?",
        "secenekler": ["New Orleans", "New York", "London", "Paris"],
        "dogru": "New Orleans"
    },
    {
        "soru": "Who is the legendary artist known as the 'King of Rock and Roll'?",
        "secenekler": ["Elvis Presley", "John Lennon", "Freddie Mercury", "Mick Jagger"],
        "dogru": "Elvis Presley"
    },
    {
        "soru": "Which country is The Beatles from?",
        "secenekler": ["England (UK)", "USA", "Germany", "Australia"],
        "dogru": "England (UK)"
    },
    {
        "soru": "Who is the legendary lead singer of Queen?",
        "secenekler": ["Freddie Mercury", "Brian May", "Roger Taylor", "David Bowie"],
        "dogru": "Freddie Mercury"
    },
    {
        "soru": "What does 'A Cappella' mean in music?",
        "secenekler": ["Music made only with human voice, without instruments", "Very fast music", "Music made only with piano", "Choir music"],
        "dogru": "Music made only with human voice, without instruments"
    },
    {
        "soru": "Who is called a 'Virtuoso'?",
        "secenekler": ["A person who plays an instrument with great skill", "A person who sings", "A composer", "A concert attendee"],
        "dogru": "A person who plays an instrument with great skill"
    },
    {
        "soru": "How many people perform a 'Duet'?",
        "secenekler": ["2", "3", "4", "1"],
        "dogru": "2"
    },
    {
        "soru": "Which period does Mozart belong to?",
        "secenekler": ["Classical Period", "Baroque Period", "Romantic Period", "Modern Period"],
        "dogru": "Classical Period"
    },
    {
        "soru": "Which string instrument is considered the closest to the human voice?",
        "secenekler": ["Cello (Violoncello)", "Violin", "Guitar", "Harp"],
        "dogru": "Cello (Violoncello)"
    },
    {
        "soru": "Which key group is looked at to find the 'Do' (C) note on the piano?",
        "secenekler": ["The white key to the left of the group of two black keys", "Left of the three black keys", "Right of the two black keys", "Any white key"],
        "dogru": "The white key to the left of the group of two black keys"
    },
    {
        "soru": "Which instrument used in Turkish music resembles a guitar but is fretless?",
        "secenekler": ["Oud", "Tanbur", "Cumbus", "Mandolin"],
        "dogru": "Oud"
    },
    {
        "soru": "What emotion do 'Minor' tones usually evoke in people?",
        "secenekler": ["Sad / Melancholic", "Joyful", "Lively", "Hard"],
        "dogru": "Sad / Melancholic"
    },
    {
        "soru": "What emotion do 'Major' tones usually evoke in people?",
        "secenekler": ["Joyful / Happy", "Sad", "Dark", "Fear"],
        "dogru": "Joyful / Happy"
    },
    {
        "soru": "What is the booklet containing the text of an opera called?",
        "secenekler": ["Libretto", "Script", "Note", "Score"],
        "dogru": "Libretto"
    },
    {
        "soru": "What does 'Octave' mean in music?",
        "secenekler": ["The 8th note above or below a tone", "One beat", "Five note interval", "Rest sign"],
        "dogru": "The 8th note above or below a tone"
    },
    {
        "soru": "Which of the following is a Turkish Pop Music artist?",
        "secenekler": ["Tarkan", "Münir Nurettin Selçuk", "Neşet Ertaş", "Aşık Veysel"],
        "dogru": "Tarkan"
    },
    {
        "soru": "Who is the composer of the Turkish March (Rondo Alla Turca)?",
        "secenekler": ["Mozart", "Beethoven", "Bach", "Chopin"],
        "dogru": "Mozart"
    },
    {
        "soru": "Which percussion instrument is most used in Mehter marches?",
        "secenekler": ["Kös", "Snare drum", "Bongo", "Darbuka"],
        "dogru": "Kös"
    },
    {
        "soru": "Flamenco music belongs to the culture of which country?",
        "secenekler": ["Spain", "Italy", "Mexico", "Argentina"],
        "dogru": "Spain"
    },
    {
        "soru": "Who is the legendary name of Reggae music?",
        "secenekler": ["Bob Marley", "Jimi Hendrix", "Sting", "Bono"],
        "dogru": "Bob Marley"
    },
    {
        "soru": "What is the rhythmic speaking style that forms the basis of Rap music called?",
        "secenekler": ["Flow", "Melody", "Aria", "Solo"],
        "dogru": "Flow"
    },
    {
        "soru": "What is the device used to synthesize sound for electronic music called?",
        "secenekler": ["Synthesizer", "Amp", "Mixer", "Speaker"],
        "dogru": "Synthesizer"
    },
    {
        "soru": "What does the term 'Allegro' mean in music?",
        "secenekler": ["Fast and cheerful", "Slow", "Very slow", "Sad"],
        "dogru": "Fast and cheerful"
    },
    {
        "soru": "What does the term 'Adagio' mean in music?",
        "secenekler": ["Slow and leisurely", "Very fast", "Medium speed", "Staccato"],
        "dogru": "Slow and leisurely"
    },
    {
        "soru": "What are the words of a song called?",
        "secenekler": ["Lyrics", "Composition", "Mode", "Meter"],
        "dogru": "Lyrics"
    },
    {
        "soru": "What do we call the person who writes the music (melody) of a song?",
        "secenekler": ["Composer", "Lyricist", "Interpreter", "Arranger"],
        "dogru": "Composer"
    },
    {
        "soru": "Which of the following is NOT a wind instrument?",
        "secenekler": ["Viola", "Clarinet", "Oboe", "Saxophone"],
        "dogru": "Viola"
    },
    {
        "soru": "To which note are instruments tuned in an orchestra?",
        "secenekler": ["La (A)", "Do (C)", "Sol (G)", "Si (B)"],
        "dogru": "La (A)"
    },
    {
        "soru": "What is the function of pedals on a piano?",
        "secenekler": ["To sustain or soften the sound", "To mute the sound", "To keep rhythm", "To tune"],
        "dogru": "To sustain or soften the sound"
    },
    {
        "soru": "Which artist is identified with the 'Moonwalk' dance?",
        "secenekler": ["Michael Jackson", "Madonna", "Justin Timberlake", "Usher"],
        "dogru": "Michael Jackson"
    },
    {
        "soru": "Which band does the song 'Bohemian Rhapsody' belong to?",
        "secenekler": ["Queen", "Pink Floyd", "Led Zeppelin", "The Rolling Stones"],
        "dogru": "Queen"
    },
    {
        "soru": "What is the tool used on a guitar to raise the pitch by clamping the frets?",
        "secenekler": ["Capo", "Pick", "Peg", "Bridge"],
        "dogru": "Capo"
    },
    {
        "soru": "What is the largest drum played with the foot in a drum set?",
        "secenekler": ["Kick (Bass Drum)", "Snare", "Tom", "Cymbal"],
        "dogru": "Kick (Bass Drum)"
    },
    {
        "soru": "What is the metal-bodied Turkish instrument played on the knee?",
        "secenekler": ["Cumbus", "Oud", "Tanbur", "Lute"],
        "dogru": "Cumbus"
    },
    {
        "soru": "Which three-stringed bowed instrument is the symbol of the Black Sea region?",
        "secenekler": ["Kemenche", "Tulum", "Zurna", "Saz"],
        "dogru": "Kemenche"
    },
    {
        "soru": "Who is the most important composer of the Baroque period, owner of 'Toccata and Fugue'?",
        "secenekler": ["Johann Sebastian Bach", "Mozart", "Haydn", "Schubert"],
        "dogru": "Johann Sebastian Bach"
    },
    {
        "soru": "What does the term 'Crescendo' mean in music?",
        "secenekler": ["Gradually getting louder", "Gradually getting softer", "Ending the sound", "Speeding up"],
        "dogru": "Gradually getting louder"
    },
    {
        "soru": "What does the term 'Decrescendo' mean in music?",
        "secenekler": ["Gradually getting softer", "Gradually getting louder", "Speeding up", "Stopping"],
        "dogru": "Gradually getting softer"
    },
    {
        "soru": "Which ancient instrument is considered the ancestor of the violin?",
        "secenekler": ["Rebab", "Guitar", "Lyre", "Harp"],
        "dogru": "Rebab"
    },
    {
        "soru": "What is the device used to amplify sound in an electric guitar?",
        "secenekler": ["Amp (Amplifier)", "Equalizer", "Pedal", "Mixer"],
        "dogru": "Amp (Amplifier)"
    },
    {
        "soru": "Which country does 'Czardas' traditional dance music belong to?",
        "secenekler": ["Hungary", "Russia", "Poland", "Germany"],
        "dogru": "Hungary"
    },
    {
        "soru": "Which country does the Sirtaki dance belong to?",
        "secenekler": ["Greece", "Italy", "Spain", "Turkey"],
        "dogru": "Greece"
    },
    {
        "soru": "From which country's palaces did the Waltz spread to the world?",
        "secenekler": ["Austria (Vienna)", "France", "England", "Russia"],
        "dogru": "Austria (Vienna)"
    },
    {
        "soru": "What does the 'Sharp' (#) sign do in music?",
        "secenekler": ["Raises the pitch by a half step", "Lowers the pitch by a half step", "Lengthens the note", "Cuts the note"],
        "dogru": "Raises the pitch by a half step"
    },
    {
        "soru": "What does the 'Flat' (b) sign do in music?",
        "secenekler": ["Lowers the pitch by a half step", "Raises the pitch by a half step", "Lengthens the note", "Cuts the note"],
        "dogru": "Lowers the pitch by a half step"
    },
    {
        "soru": "What does the 'Natural' sign do in music?",
        "secenekler": ["Cancels previous accidentals (returns to natural pitch)", "Raises the pitch", "Lowers the pitch", "Ends the sound"],
        "dogru": "Cancels previous accidentals (returns to natural pitch)"
    },
    {
        "soru": "What is the chorus section of a song?",
        "secenekler": ["The most catchy and repeated part", "The intro", "The outro", "The slowest part"],
        "dogru": "The most catchy and repeated part"
    },
    {
        "soru": "What is the letter equivalent of the note 'Do' in Western music?",
        "secenekler": ["C", "D", "E", "F"],
        "dogru": "C"
    },
    {
        "soru": "What is the letter equivalent of the note 'La' in Western music?",
        "secenekler": ["A", "B", "C", "D"],
        "dogru": "A"
    },
    {
        "soru": "What is the letter equivalent of the note 'Sol' in Western music?",
        "secenekler": ["G", "F", "A", "E"],
        "dogru": "G"
    },
    {
        "soru": "Which giant string instrument provides the lowest sound in the orchestra?",
        "secenekler": ["Double Bass", "Cello", "Viola", "Tuba"],
        "dogru": "Double Bass"
    },
    {
        "soru": "In which music genre is the saxophone most used?",
        "secenekler": ["Jazz", "Classical", "Folk Music", "Electronic"],
        "dogru": "Jazz"
    },
    {
        "soru": "From which country did Tango music originate?",
        "secenekler": ["Argentina", "Brazil", "Spain", "Mexico"],
        "dogru": "Argentina"
    },
    {
        "soru": "Who is the composer of 'Swan Lake' ballet?",
        "secenekler": ["Tchaikovsky", "Stravinsky", "Bach", "Vivaldi"],
        "dogru": "Tchaikovsky"
    },
    {
        "soru": "How many white and black keys are there in an octave on the piano?",
        "secenekler": ["7 white, 5 black", "8 white, 4 black", "6 white, 6 black", "10 white, 2 black"],
        "dogru": "7 white, 5 black"
    },
    {
        "soru": "Which region is the 'Polka' dance specific to?",
        "secenekler": ["Central Europe (Czechia/Poland)", "South America", "Far East", "Africa"],
        "dogru": "Central Europe (Czechia/Poland)"
    },
    {
        "soru": "What is the hole in the guitar body called?",
        "secenekler": ["Sound Hole", "Resonance Box", "Top", "Neck"],
        "dogru": "Sound Hole"
    },
    {
        "soru": "What is the small wooden piece that transmits string vibration to the body in string instruments?",
        "secenekler": ["Bridge", "Fretboard", "Peg", "Scroll"],
        "dogru": "Bridge"
    },
    {
        "soru": "Which is the thinnest string on an acoustic guitar?",
        "secenekler": ["Mi (E) - 1st String", "La (A)", "Re (D)", "Sol (G)"],
        "dogru": "Mi (E) - 1st String"
    },
    {
        "soru": "Which is the thickest string on an acoustic guitar?",
        "secenekler": ["Mi (E) - 6th String", "La (A)", "Re (D)", "Do (C)"],
        "dogru": "Mi (E) - 6th String"
    },
    {
        "soru": "What does 'Solfège' mean in music?",
        "secenekler": ["Reading notes with their names and pitches", "Playing an instrument", "Writing lyrics", "Dancing"],
        "dogru": "Reading notes with their names and pitches"
    },
    {
        "soru": "What is the opening section of a song called?",
        "secenekler": ["Intro", "Outro", "Chorus", "Bridge"],
        "dogru": "Intro"
    },
    {
        "soru": "What is the ending section of a song called?",
        "secenekler": ["Outro (Final)", "Intro", "Solo", "Riff"],
        "dogru": "Outro (Final)"
    },
    {
        "soru": "Which band does 'Phantom of the Opera' belong to?",
        "secenekler": ["Queen", "Metallica", "AC/DC", "Nirvana"],
        "dogru": "Queen"
    },
    {
        "soru": "What is the piece called where we rest our chin while playing violin?",
        "secenekler": ["Chinrest", "Pillow", "Support", "Neck"],
        "dogru": "Chinrest"
    },
    {
        "soru": "What does 'Legato' mean in music?",
        "secenekler": ["Playing notes smoothly and connected", "Playing notes detached", "Playing fast", "Playing silently"],
        "dogru": "Playing notes smoothly and connected"
    },
    {
        "soru": "Who does 'Moonlight Sonata' belong to?",
        "secenekler": ["Beethoven", "Mozart", "Chopin", "Liszt"],
        "dogru": "Beethoven"
    },

    // --- TURKISH FOLK MUSIC AND CULTURE ---
    {"soru": "Who is the master known as 'Bozkırın Tezenesi' (Plectrum of the Steppe), owner of 'Gönül Dağı'?", "secenekler": ["Neşet Ertaş", "Mahzuni Şerif", "Muharrem Ertaş", "Hacı Taşan"], "dogru": "Neşet Ertaş"},
    {"soru": "Who is the Sivas bard known for 'Uzun İnce Bir Yoldayım'?", "secenekler": ["Aşık Veysel", "Aşık Daimi", "Pir Sultan Abdal", "Ali Ekber Çiçek"], "dogru": "Aşık Veysel"},
    {"soru": "Who wrote the lyrics (poem) for the folk song 'Mihriban'?", "secenekler": ["Abdurrahim Karakoç", "Musa Eroğlu", "Nazım Hikmet", "Cemal Süreya"], "dogru": "Abdurrahim Karakoç"},
    {"soru": "Who is the literary figure that discovered Aşık Veysel at a folk poets festival?", "secenekler": ["Ahmet Kutsi Tecer", "Yaşar Kemal", "Bedri Rahmi Eyüboğlu", "Orhan Veli"], "dogru": "Ahmet Kutsi Tecer"},
    {"soru": "Who is the artist known for protest songs like 'Adaletin Bu Mu Dünya'?", "secenekler": ["Selda Bağcan", "Gülden Karaböcek", "Belkıs Akkale", "Sabahat Akkiraz"], "dogru": "Selda Bağcan"},
    {"soru": "Which religious leader did Pir Sultan Abdal mostly feature in his works?", "secenekler": ["Hz. Ali", "Hacı Bektaş Veli", "Yunus Emre", "Mevlana"], "dogru": "Hz. Ali"},
    {"soru": "Who is the composer of 'Yine Bir Gülnihal' and the first to use waltz rhythm?", "secenekler": ["Hammamizade İsmail Dede Efendi", "Itri", "Hacı Arif Bey", "Sadettin Kaynak"], "dogru": "Hammamizade İsmail Dede Efendi"},
    {"soru": "Who is the composer of 'Nevakar' whose picture is on the 100 TL banknote?", "secenekler": ["Itri", "Dede Efendi", "Hacı Arif Bey", "Tamburi Cemil Bey"], "dogru": "Itri"},
    {"soru": "Who is Neşet Ertaş's father and considered the greatest master of the Bozlak tradition?", "secenekler": ["Muharrem Ertaş", "Çekiç Ali", "Hacı Taşan", "Şemsi Yastıman"], "dogru": "Muharrem Ertaş"},
    {"soru": "Who is the baglama master that composed 'Mihriban'?", "secenekler": ["Musa Eroğlu", "Arif Sağ", "Muhlis Akarsu", "Yavuz Top"], "dogru": "Musa Eroğlu"},
    {"soru": "What is the technical name given to the body part of the Baglama?", "secenekler": ["Tekne (Bowl)", "Sap", "Burgu", "Kapak"], "dogru": "Tekne (Bowl)"},
    {"soru": "What is the wind instrument made of kidskin common in the Eastern Black Sea?", "secenekler": ["Tulum", "Kemenche", "Zurna", "Mey"], "dogru": "Tulum"},
    {"soru": "Which tree is mostly preferred for the body of the Mey instrument?", "secenekler": ["Plum", "Pine", "Poplar", "Oak"], "dogru": "Plum"},
    {"soru": "What is the body of the bowed folk instrument 'Kabak Kemane' made of?", "secenekler": ["Gourd (Su Kabağı)", "Walnut Tree", "Metal", "Mulberry Tree"], "dogru": "Gourd (Su Kabağı)"},
    {"soru": "What is the smallest and highest-pitched member of the Baglama family?", "secenekler": ["Cura", "Tambura", "Divan Sazı", "Meydan Sazı"], "dogru": "Cura"},
    {"soru": "How many holes does the Sipsi instrument usually have in total?", "secenekler": ["6 or 7", "12 or 13", "3 or 4", "9 or 10"], "dogru": "6 or 7"},
    {"soru": "What are the metal latches used to change pitch on the Kanun called?", "secenekler": ["Mandal", "Burgu", "Perde", "Eşik"], "dogru": "Mandal"},
    {"soru": "What is the thick stick hit with the right hand while playing the drum called?", "secenekler": ["Tokmak", "Çubuk", "Baget", "Mızrap"], "dogru": "Tokmak"},
    {"soru": "What are the lines on the neck of the baglama that determine notes called?", "secenekler": ["Perde (Fret)", "Eşik", "Tel", "Burgu"], "dogru": "Perde (Fret)"},
    {"soru": "From which animal's bone is the 'Çığırtma' instrument traditionally made?", "secenekler": ["Eagle", "Sheep", "Chicken", "Horse"], "dogru": "Eagle"},
    {"soru": "Which Rumeli folk song was Mustafa Kemal Atatürk's favorite?", "secenekler": ["Vardar Ovası", "Çalın Davulları", "Yemen Türküsü", "Sarı Gelin"], "dogru": "Vardar Ovası"},
    {"soru": "What is Turkey's first music teacher school established by Atatürk's order?", "secenekler": ["Musiki Muallim Mektebi", "Köy Enstitüsü", "Darülelhan", "Mızıka-i Hümayun"], "dogru": "Musiki Muallim Mektebi"},
    {"soru": "Which Zeybek did Atatürk dance by hitting his knee on the ground at his last ball?", "secenekler": ["Sarı Zeybek", "Harmandalı", "Kerimoğlu", "Çökertme"], "dogru": "Sarı Zeybek"},
    {"soru": "Who is the founder of the 'Yurttan Sesler' choir and a great compiler?", "secenekler": ["Muzaffer Sarısözen", "Nida Tüfekçi", "Yücel Paşmakçı", "Neriman Altındağ"], "dogru": "Muzaffer Sarısözen"},
    {"soru": "Who is the composer of the first Turkish opera 'Özsoy Opera'?", "secenekler": ["Ahmet Adnan Saygun", "Cemal Reşit Rey", "Ulvi Cemal Erkin", "Hasan Ferit Alnar"], "dogru": "Ahmet Adnan Saygun"},
    {"soru": "Which military band school replaced the Janissary band in the Ottoman era?", "secenekler": ["Mızıka-i Hümayun", "Darülelhan", "Enderun", "Musiki Mektebi"], "dogru": "Mızıka-i Hümayun"},
    {"soru": "Who is the theorist who based the Turkish Classical Music sound system on science?", "secenekler": ["Hüseyin Sadettin Arel", "Rauf Yekta", "Suphi Ezgi", "Zekai Dede"], "dogru": "Hüseyin Sadettin Arel"},
    {"soru": "Who is the Hungarian composer invited by Atatürk to prepare a report on compilations?", "secenekler": ["Bela Bartok", "Paul Hindemith", "Kodaly", "Liszt"], "dogru": "Bela Bartok"},
    {"soru": "Which institution is considered the first official conservatory of the Ottoman Empire?", "secenekler": ["Darülelhan", "Darülbedayi", "Enderun", "Mızıka-i Hümayun"], "dogru": "Darülelhan"},
    {"soru": "What are rhythmic (measured) melodies called in Turkish Folk Music?", "secenekler": ["Kırık Hava", "Uzun Hava", "Bozlak", "Ağıt"], "dogru": "Kırık Hava"},
    {"soru": "What are melodies without a specific measure (free rhythm) called?", "secenekler": ["Uzun Hava", "Kırık Hava", "Oyun Havası", "Halay"], "dogru": "Uzun Hava"},
    {"soru": "What is the folk song form sung to put children to sleep?", "secenekler": ["Ninni (Lullaby)", "Ağıt", "Mani", "Güzelleme"], "dogru": "Ninni (Lullaby)"},
    {"soru": "What is the form that describes the pain felt after someone dies?", "secenekler": ["Ağıt (Lament)", "Bozlak", "Mersiye", "Koşma"], "dogru": "Ağıt (Lament)"},
    {"soru": "What is the smallest unit in Turkish music, equal to one-ninth of a whole tone?", "secenekler": ["Koma (Comma)", "Perde", "Oktav", "Gam"], "dogru": "Koma (Comma)"},
    {"soru": "What is the smallest poetic form of anonymous folk literature with 7 syllables?", "secenekler": ["Mani", "Koşma", "Semai", "Destan"], "dogru": "Mani"},
    {"soru": "Which long air (Uzun Hava) type is specific to Central Anatolia?", "secenekler": ["Bozlak", "Barak", "Maya", "Hoyrat"], "dogru": "Bozlak"},
    {"soru": "In Baglama short neck tuning (Re-Sol-La), to what note is the bottom string tuned?", "secenekler": ["Re", "Mi", "Sol", "La"], "dogru": "Re"},
    {"soru": "What is the rhythmic group formed by dividing a main beat into three equal parts?", "secenekler": ["Triplet (Triyole)", "Syncopation", "Rest", "Reprise"], "dogru": "Triplet (Triyole)"},
    {"soru": "What is the name of the 'La' pitch in Turkish Classical Music?", "secenekler": ["Dügah", "Rast", "Segah", "Neva"], "dogru": "Dügah"},
    {"soru": "Which city was the first to be included in UNESCO's 'Creative Cities Network' for music?", "secenekler": ["Kırşehir", "İstanbul", "Şanlıurfa", "Sivas"], "dogru": "Kırşehir"},
    {"soru": "Which fast dance comes to mind when the Black Sea is mentioned?", "secenekler": ["Horon", "Zeybek", "Bar", "Halay"], "dogru": "Horon"},
    {"soru": "Which heavy and dignified dance is the symbol of the Aegean Region?", "secenekler": ["Zeybek", "Horon", "Misket", "Çiftetelli"], "dogru": "Zeybek"},
    {"soru": "Which city is the 'Çayda Çıra' dance tradition specific to?", "secenekler": ["Elazığ", "Erzurum", "Diyarbakır", "Van"], "dogru": "Elazığ"},
    {"soru": "Which geography is the 'Sarı Gelin' folk song identified with?", "secenekler": ["Eastern Anatolia", "Aegean", "Mediterranean", "Thrace"], "dogru": "Eastern Anatolia"},
    {"soru": "What is the dance type played by two opposing groups in Thrace and Marmara?", "secenekler": ["Karşılama", "Bar", "Halay", "Zeybek"], "dogru": "Karşılama"},
    {"soru": "Which city does the folk song 'Silifke'nin Yoğurdu' belong to?", "secenekler": ["Mersin", "Adana", "Antalya", "Hatay"], "dogru": "Mersin"},
    {"soru": "Which long air type is specific to Gaziantep?", "secenekler": ["Barak Havası", "Bozlak", "Maya", "Hoyrat"], "dogru": "Barak Havası"},
    {"soru": "What is the ritual dance performed in Alevi-Bektashi cem ceremonies?", "secenekler": ["Semah", "Sema", "Zikir", "Devran"], "dogru": "Semah"},
    {"soru": "Who invented the 'Fretless Guitar'?", "secenekler": ["Erkan Oğur", "Bülent Ortaçgil", "Fikret Kızılok", "Doğan Canku"], "dogru": "Erkan Oğur"},
    {"soru": "Who is the Anatolian Rock artist known for 'Tamirci Çırağı'?", "secenekler": ["Cem Karaca", "Barış Manço", "Erkin Koray", "Edip Akbayram"], "dogru": "Cem Karaca"},
    {"soru": "Who is the virtuoso that brought the 'Şelpe' technique to an academic level?", "secenekler": ["Erdal Erzincan", "Arif Sağ", "Hasret Gültekin", "Çetin Akdeniz"], "dogru": "Erdal Erzincan"},
    {"soru": "Who is the legendary artist owner of 'Gülpembe' and 'Dönence'?", "secenekler": ["Barış Manço", "Cem Karaca", "Erkin Koray", "İlhan İrem"], "dogru": "Barış Manço"},
    {"soru": "Which university is the band 'Kardeş Türküler' from?", "secenekler": ["Boğaziçi", "METU (ODTÜ)", "ITU", "Hacettepe"], "dogru": "Kardeş Türküler"},
    {"soru": "Who is the inventor of the 'Electro Baglama'?", "secenekler": ["Erkin Koray", "Orhan Gencebay", "Arif Sağ", "Cengiz Kurt"], "dogru": "Erkin Koray"},
    {"soru": "Who is the Black Sea artist known for the song 'Dido'?", "secenekler": ["Kazım Koyuncu", "Volkan Konak", "Fuat Saka", "Resul Dindar"], "dogru": "Kazım Koyuncu"},
    {"soru": "Who is the artist nicknamed 'Türkü Baba', owner of 'Bu Adam Benim Babam'?", "secenekler": ["Fatih Kısaparmak", "İbrahim Tatlıses", "Mahsun Kırmızıgül", "Burhan Çaçan"], "dogru": "Fatih Kısaparmak"},
    {"soru": "Who is the composer of 'Leylim Ley' and 'Eşkıya'?", "secenekler": ["Zülfü Livaneli", "Ahmet Kaya", "Edip Akbayram", "Fikret Kızılok"], "dogru": "Zülfü Livaneli"},
    {"soru": "Who is considered the best baglama master in the world by many authorities?", "secenekler": ["Çetin Akdeniz", "İsmail Tunçbilek", "Ahmet Koç", "Motor Ali"], "dogru": "Çetin Akdeniz"},
    {"soru": "What is the symbol for the Bakiye Flat (4 commas) in Turkish music?", "secenekler": ["Backward hooked flat", "Reverse Sharp", "Double Flat", "Natural"], "dogru": "Backward hooked flat"},
    {"soru": "What is the 5-comma interval slightly smaller than a whole tone called?", "secenekler": ["Küçük Mücennep", "Bakiye", "Tanini", "Augmented Second"], "dogru": "Küçük Mücennep"},
    {"soru": "What is the name of the 'Do' pitch in Turkish music?", "secenekler": ["Rast", "Dügah", "Segah", "Neva"], "dogru": "Rast"},
    {"soru": "What is the name of the 'Re' pitch in Turkish music?", "secenekler": ["Neva", "Rast", "Hüseyni", "Acem"], "dogru": "Neva"},
    {"soru": "What is the name of the 'La' pitch in Turkish music?", "secenekler": ["Dügah", "Rast", "Buselik", "Gerdaniye"], "dogru": "Dügah"},
    {"soru": "What is the basic equivalent of the 'Si' pitch in Turkish music?", "secenekler": ["Segah", "Buselik", "Acem", "Hicaz"], "dogru": "Segah"},
    {"soru": "What is the main note where the melody ends called?", "secenekler": ["Karar (Tonic)", "Dominant", "Leading Tone", "Sub-tonic"], "dogru": "Karar (Tonic)"},
    {"soru": "What is the most important stop in the scale after the tonic called?", "secenekler": ["Güçlü (Dominant)", "High Tonic", "Leading Tone", "Start"], "dogru": "Güçlü (Dominant)"},
    {"soru": "What is the auxiliary note preceding the tonic called?", "secenekler": ["Yeden (Leading Tone)", "Dominant", "High", "Low"], "dogru": "Yeden (Leading Tone)"},
    {"soru": "What is the melodic direction (ascending, descending, etc.) called?", "secenekler": ["Seyir", "Makam", "Usul", "Tavır"], "dogru": "Seyir"},
    {"soru": "What is the general equivalent of the 'Hicaz' family in Turkish Folk Music?", "secenekler": ["Garip Ayağı", "Kerem Ayağı", "Misket Ayağı", "Bozlak Ayağı"], "dogru": "Garip Ayağı"},
    {"soru": "Which 'ayak' (mode) corresponds to 'Uşşak' makam in Turkish Folk Music?", "secenekler": ["Kerem Ayağı", "Garip Ayağı", "Müstezat Ayağı", "Kalenderi Ayağı"], "dogru": "Kerem Ayağı"},
    {"soru": "Which common THM mode has 'La' as tonic and takes 'Si flat 2'?", "secenekler": ["Hüseyni Ayağı", "Hicaz Ayağı", "Rast Ayağı", "Segah Ayağı"], "dogru": "Hüseyni Ayağı"},
    {"soru": "What is passing temporarily from one makam to another called?", "secenekler": ["Modulation (Geçki)", "Seyir", "Flavor", "Decision"], "dogru": "Modulation (Geçki)"},
    {"soru": "Which scale contains an 'Augmented Second' interval?", "secenekler": ["Hicaz", "Uşşak", "Rast", "Hüseyni"], "dogru": "Hicaz"},
    {"soru": "Between which two notes is the augmented second in 'Misket' mode?", "secenekler": ["Fa sharp and Sol", "Si and Do", "La and Si", "Re and Mi"], "dogru": "Fa sharp and Sol"},
    {"soru": "What is the simplest 2-beat usul in Turkish music?", "secenekler": ["Nim Sofyan", "Sofyan", "Semai", "Düyek"], "dogru": "Nim Sofyan"},
    {"soru": "What is the most common 4-beat basic usul in folk music?", "secenekler": ["Sofyan", "Aksak", "Curcuna", "Sengil"], "dogru": "Sofyan"},
    {"soru": "Which is the first of the 5-beat (2+3 or 3+2) aksak usuls?", "secenekler": ["Türk Aksağı", "Sofyan", "Semai", "Yürük Semai"], "dogru": "Türk Aksağı"},
    {"soru": "If beats are arranged as '2+2+2+3' in a 9/8 usul, what is it?", "secenekler": ["Karşılama", "Zeybek", "Aksak", "Oyun Havası"], "dogru": "Karşılama"},
    {"soru": "Which 10-beat usul is known by the phrase 'Duyduk duymadık demeyin'?", "secenekler": ["Aksak Semai", "Lenk Fahte", "Çeng", "Raks"], "dogru": "Aksak Semai"},
    {"soru": "What is the 7-beat usul called?", "secenekler": ["Devr-i Hindi", "Sofyan", "Düyek", "Müsemmen"], "dogru": "Devr-i Hindi"},
    {"soru": "What is the common name for the 10/16 usul in folk music?", "secenekler": ["Oyun Havası usulü", "Zeybek", "Halay", "Bar"], "dogru": "Oyun Havası usulü"},
    {"soru": "What is the bridge under the strings that transmits sound to the board called?", "secenekler": ["Eşik (Bridge)", "Burgu", "Plectrum", "Keyboard"], "dogru": "Eşik (Bridge)"},
    {"soru": "What is the part of 'Tulum' consisting of two pipes playing the melody called?", "secenekler": ["Nav", "Mouthpiece", "Tube", "Whistle"], "dogru": "Nav"},
    {"soru": "Which animal's hair is used in the bow of Kabak Kemane?", "secenekler": ["Horse", "Sheep", "Goat", "Silk"], "dogru": "Horse"},
    {"soru": "How many holes are on the front of the Sipsi body?", "secenekler": ["5", "7", "3", "9"], "dogru": "5"},
    {"soru": "What is the body where the 'Mey' reed is attached called?", "secenekler": ["Main Body", "Clamp", "Pipe", "Bowl"], "dogru": "Main Body"},
    {"soru": "What is the thin metal tube where the 'Zurna' reed is attached called?", "secenekler": ["Lüle", "Metelik", "Clamp", "Pipe"], "dogru": "Lüle"},
    {"soru": "What is the instrument played by hitting strings on a box with hammers?", "secenekler": ["Santur", "Kanun", "Violin", "Oud"], "dogru": "Santur"},
    {"soru": "What are the strings inside the Bendir that make a buzzing sound called?", "secenekler": ["Snare (Kiriş)", "Wire", "Bow", "Twine"], "dogru": "Snare (Kiriş)"},
    {"soru": "What is the technique of playing Baglama with fingers without a plectrum?", "secenekler": ["Şelpe", "Tezene", "Pençe", "Hitting"], "dogru": "Şelpe"},
    {"soru": "To which note is the middle string tuned in Baglama short neck tuning?", "secenekler": ["Sol", "Re", "La", "Mi"], "dogru": "Sol"},
    {"soru": "What is the heroic poem type starting with exclamations like 'Hey', 'Bre'?", "secenekler": ["Varsağı", "Koşma", "Semai", "Destan"], "dogru": "Varsağı"},
    {"soru": "What is the most common poem type written in 11-syllable meter?", "secenekler": ["Koşma", "Mani", "Semai", "Hymn"], "dogru": "Koşma"},
    {"soru": "What is the folk poem type praising the beloved's beauty?", "secenekler": ["Güzelleme", "Taşlama", "Koçaklama", "Ağıt"], "dogru": "Güzelleme"},
    {"soru": "What is the long poem form describing major events like war or famine?", "secenekler": ["Destan (Epic)", "Koşma", "Mani", "Semai"], "dogru": "Destan (Epic)"},
    {"soru": "Which Aşık poetry type is written with Aruz meter 'Mef'ûlü Mefâîlü...'?", "secenekler": ["Divan", "Kalenderi", "Selis", "Semai"], "dogru": "Divan"},
    {"soru": "What is the solemn and mournful long air type specific to Elazığ?", "secenekler": ["Maya", "Bozlak", "Hoyrat", "Barak"], "dogru": "Maya"},
    {"soru": "What are free-rhythm pastoral melodies sung by shepherds with kaval called?", "secenekler": ["Kayabaşı", "Gurbet Havası", "Argah", "Yol Havası"], "dogru": "Kayabaşı"},
    {"soru": "What is the main section of folk songs containing the lyrics called?", "secenekler": ["Bent", "Connection", "Chorus", "Refrain"], "dogru": "Bent"},
    {"soru": "For which leader's visit was 'Özsoy Opera' staged by Atatürk's order?", "secenekler": ["Shah of Iran Reza Pahlavi", "King of Greece", "King of England", "King of Jordan"], "dogru": "Shah of Iran Reza Pahlavi"},
    {"soru": "Who is the famous musician and composer of the '10th Year March'?", "secenekler": ["Cemal Reşit Rey", "Adnan Saygun", "Necil Kazım Akses", "Ulvi Cemal Erkin"], "dogru": "Cemal Reşit Rey"},
    {"soru": "Which Ottoman institution formed the basis of the Presidential Symphony Orchestra (CSO)?", "secenekler": ["Riyaset-i Cumhur Philharmonic", "Mızıka-i Hümayun", "Darülelhan", "Mehterhane"], "dogru": "Riyaset-i Cumhur Philharmonic"},
    {"soru": "Which Sultan abolished the Mehterhane and established Mızıka-i Hümayun?", "secenekler": ["II. Mahmut", "III. Selim", "Abdülmecid", "II. Abdülhamid"], "dogru": "II. Mahmut"},
    {"soru": "Who is the Italian musician appointed as head of Mızıka-i Hümayun?", "secenekler": ["Donizetti Pasha", "Guatelli Pasha", "Lizst", "Rossini"], "dogru": "Donizetti Pasha"},
    {"soru": "What is the unmeasured improvisation performed by an instrument to introduce the makam?", "secenekler": ["Taksim", "Peşrev", "Saz Semaisi", "Aranağme"], "dogru": "Taksim"},
    {"soru": "What is the large form played at the beginning of a Classical Turkish Music fasıl?", "secenekler": ["Peşrev", "Saz Semaisi", "Taksim", "Medhal"], "dogru": "Peşrev"},
    {"soru": "What is the section played after the fourth hane in Saz Semais?", "secenekler": ["Teslim", "Mülazime", "Serhane", "Zeyil"], "dogru": "Teslim"},
    {"soru": "What accidental does the 'Segah' pitch take in the key signature?", "secenekler": ["Si 1 comma flat", "Si bakiye flat", "Si comma sharp", "Si natural"], "dogru": "Si 1 comma flat"},
    {"soru": "What is the three-stringed Classical Turkish instrument played upright on the knee?", "secenekler": ["Classical Kemenche", "Cello", "Rebab", "Bowed Tanbur"], "dogru": "Classical Kemenche"},
    {"soru": "What are the ornamental caged holes on the chest of the Oud called?", "secenekler": ["Rose (Gül)", "Cage", "Sound Hole", "Hollow"], "dogru": "Rose (Gül)"},
    {"soru": "What is each section of the Mevlevi Ayin called?", "secenekler": ["Selam", "Hane", "Fasıl", "Bahir"], "dogru": "Selam"},
    {"soru": "How many commas of change does the 'Zengüle' (Bakiye Sharp) sign indicate?", "secenekler": ["4-5 commas", "1 comma", "9 commas", "2 commas"], "dogru": "5 commas"},
    {"soru": "Who is the scholar that laid the foundations of music theory with 'Kitab-ül Edvar'?", "secenekler": ["Safiyyüddin Urmevi", "Farabi", "Avicenna", "Abdülkadir Meragi"], "dogru": "Safiyyüddin Urmevi"},
    {"soru": "Who is the producer founder of 'Kalan Müzik' and unearthed lost archives?", "secenekler": ["Hasan Saltık", "Arif Sağ", "Ahmet Kaya", "Erkan Oğur"], "dogru": "Hasan Saltık"},
    {"soru": "Who is the artist that designed the 'Di-tar' combining baglama and classical guitar?", "secenekler": ["Ahmet Aslan", "Erkan Oğur", "Cengiz Özkan", "Mikail Aslan"], "dogru": "Ahmet Aslan"},
    {"soru": "Who is the trio that breathed new life into folk music with 'Muhabbet' albums in the 80s?", "secenekler": ["Arif Sağ, Musa Eroğlu, Muhlis Akarsu", "Neşet Ertaş, Mahzuni, Daimi", "Barış Manço, Cem Karaca, Erkin Koray", "Yavuz Top, Ali Ekber Çiçek, İzzet Altınmeşe"], "dogru": "Arif Sağ, Musa Eroğlu, Muhlis Akarsu"},
    {"soru": "What is the traditional instrument played to wake people up for suhur during Ramadan?", "secenekler": ["Drum (Davul)", "Zurna", "Ney", "Kaval"], "dogru": "Drum (Davul)"},
    {"soru": "What is the person leading the Halay dance called?", "secenekler": ["Halaybaşı", "Efe", "Barbaşı", "Sergeant"], "dogru": "Halaybaşı"},
    {"soru": "From which district of Kırşehir is Neşet Ertaş?", "secenekler": ["Çiçekdağı", "Kaman", "Mucur", "Akpınar"], "dogru": "Çiçekdağı"},
    {"soru": "What measure does the term 'Alla Breve' indicate in music?", "secenekler": ["2/2", "4/4", "2/4", "6/8"], "dogru": "2/2"},
    {"soru": "What does the 'Fermata' sign (bird's eye) mean on a note?", "secenekler": ["To sustain the note as long as desired", "To play staccato", "To speed up", "To be silent"], "dogru": "To sustain the note as long as desired"},
    {"soru": "What is the technique of playing notes detached and short?", "secenekler": ["Staccato", "Legato", "Pizzicato", "Vibrato"], "dogru": "Staccato"},
    {"soru": "What is the name of the 'Si' pitch (Natural) in Turkish Classical Music?", "secenekler": ["Buselik", "Segah", "Uşşak", "Hüseyni"], "dogru": "Buselik"},
    {"soru": "Which pitch is 'Gerdaniye' an octave higher than in Turkish music?", "secenekler": ["Rast (Sol)", "Dügah (La)", "Neva (Re)", "Çargah (Do)"], "dogru": "Rast (Sol)"},
    {"soru": "What is the 5-comma sharp sign called?", "secenekler": ["Küçük Mücennep Sharp", "Bakiye Sharp", "Comma Sharp", "Sixteenth"], "dogru": "Küçük Mücennep Sharp"},
    {"soru": "Which accidental does 'Fa' take in the key signature of 'Hüseyni' makam?", "secenekler": ["Fa bakiye sharp (F#3)", "Fa natural", "Fa comma sharp", "Fa five comma sharp"], "dogru": "Fa bakiye sharp (F#3)"},
    {"soru": "What are descending sound scales called?", "secenekler": ["Descending Scale", "Ascending Scale", "Tonic", "Static"], "dogru": "Descending Scale"},
    {"soru": "What is the largest and deepest-voiced member of the Baglama family?", "secenekler": ["Meydan Sazı", "Divan Sazı", "Tambura", "Cura"], "dogru": "Meydan Sazı"},
    {"soru": "What is the open note of the middle string in Baglama short neck tuning?", "secenekler": ["Sol", "Re", "La", "Mi"], "dogru": "Sol"},
    {"soru": "What are the small wooden hammers used to hit strings on a Santur called?", "secenekler": ["Zahme", "Plectrum", "Tezene", "Stick"], "dogru": "Zahme"},
    {"soru": "What are the strings vibrating inside the Bendir called?", "secenekler": ["Snare (Kiriş)", "Bow", "Resonance wire", "Peg"], "dogru": "Snare (Kiriş)"},
    {"soru": "From which plant is the Sipsi instrument traditionally made?", "secenekler": ["Reed (Kargı)", "Bamboo", "Walnut branch", "Oak"], "dogru": "Reed (Kargı)"},
    {"soru": "Which conservatory was established in 1936 by Atatürk's order?", "secenekler": ["Ankara State Conservatory", "ITU Conservatory", "Mimar Sinan", "Darülelhan"], "dogru": "Ankara State Conservatory"},
    {"soru": "Who is the head of the committee for scientific classification of Turkish music?", "secenekler": ["Rauf Yekta Bey", "Suphi Ezgi", "Arel", "Sarısözen"], "dogru": "Rauf Yekta Bey"},
    {"soru": "What is the cylinder recording device used in the first folk music compilation trips?", "secenekler": ["Phonograph", "Gramophone", "Tape", "Turntable"], "dogru": "Phonograph"},
    {"soru": "Who is the founding director of ITU Turkish Music State Conservatory (1975)?", "secenekler": ["Ercüment Berker", "Nevzat Atlığ", "Cinuçen Tanrıkorur", "Yalçın Tura"], "dogru": "Ercüment Berker"},
    {"soru": "What is the poem type written in 8-syllable meter in Ashik literature?", "secenekler": ["Semai", "Koşma", "Mani", "Destan"], "dogru": "Semai"},
    {"soru": "What is it called when a poet uses their pseudonym in the last stanza?", "secenekler": ["Tapşırma", "Atışma", "Güzelleme", "Ayak"], "dogru": "Tapşırma"},
    {"soru": "What are poems written to spread religious and mystical thoughts called?", "secenekler": ["Hymn (Nefes)", "Ghazal", "Qasida", "Song"], "dogru": "Hymn (Nefes)"},
    {"soru": "Which folk poetry type deals with bravery, war, and heroism?", "secenekler": ["Koçaklama", "Güzelleme", "Ağıt", "Taşlama"], "dogru": "Koçaklama"},
    {"soru": "What is the heavy-rhythm dance played by men in Erzurum?", "secenekler": ["Bar", "Halay", "Horon", "Zeybek"], "dogru": "Bar"},
    {"soru": "What is the mournful long air specific to Barak Turkmens in Gaziantep?", "secenekler": ["Barak Havası", "Bozlak", "Maya", "Hoyrat"], "dogru": "Barak Havası"},
    {"soru": "What is the faster and more lively type of Aegean zeybek dances called?", "secenekler": ["Kıvrak Zeybek", "Heavy Zeybek", "Spoon Zeybek", "Bengi"], "dogru": "Kıvrak Zeybek"},
    {"soru": "What is the enthusiastic section in Horon where shoulders are shaken called?", "secenekler": ["Aşağı Alma (Kimilti)", "Flat Horon", "Road Air", "Greeting"], "dogru": "Aşağı Alma (Kimilti)"},
    {"soru": "Which famous heavy zeybek tells a heroism story in Muğla?", "secenekler": ["Kerimoğlu Zeybek", "Harmandalı", "Çökertme", "Sepetçioğlu"], "dogru": "Kerimoğlu Zeybek"},
    {"soru": "What is the fast section played at the end of Sivas halays called?", "secenekler": ["Yeldirme", "Ağırlama", "Sıksara", "Steep Halay"], "dogru": "Yeldirme"},
    {"soru": "What are the sad tunes played when the bride leaves home in the East called?", "secenekler": ["Gelin Ağlatma Havaları", "Dance Air", "Henna Air", "Greeting"], "dogru": "Gelin Ağlatma Havaları"},
    {"soru": "Who gave Neşet Ertaş the nickname 'Bozkırın Tezenesi'?", "secenekler": ["Yaşar Kemal", "Orhan Kemal", "Nazım Hikmet", "Sabahattin Ali"], "dogru": "Yaşar Kemal"},
    {"soru": "What is the main philosophy of the 'Kardeş Türküler' band?", "secenekler": ["Interpreting cultures in their original languages", "Singing only in Turkish", "Making pop music", "Playing only instrumental"], "dogru": "Interpreting cultures in their original languages"},
    {"soru": "Who is the master artist that invented the electro baglama?", "secenekler": ["Erkin Koray", "Orhan Gencebay", "Arif Sağ", "Cem Karaca"], "dogru": "Erkin Koray"},
    {"soru": "Who introduced the 'Fretless Guitar' to world music?", "secenekler": ["Erkan Oğur", "Bülent Ortaçgil", "Fikret Kızılok", "Yavuz Çetin"], "dogru": "Erkan Oğur"},
    {"soru": "With which technique did Hasret Gültekin contribute to baglama?", "secenekler": ["Şelpe (Plectrumless) technique", "Electro baglama", "Bowed baglama", "Bass baglama"], "dogru": "Şelpe (Plectrumless) technique"},
    {"soru": "Which is Barış Manço's famous work in folk song form?", "secenekler": ["Gülpembe", "Arkadaşım Eşek", "Domates Biber Patlıcan", "Nane Limon"], "dogru": "Gülpembe"},
    {"soru": "Who is the artist known for 'Leylim Ley' and 'Adaletin Bu Mu Dünya'?", "secenekler": ["Selda Bağcan", "Gülden Karaböcek", "Neşe Karaböcek", "Kamuran Akkor"], "dogru": "Selda Bağcan"},
    {"soru": "Where is Aşık Mahzuni Şerif's hometown?", "secenekler": ["Kahramanmaraş (Afşin)", "Sivas", "Kırşehir", "Erzurum"], "dogru": "Kahramanmaraş (Afşin)"},
    {"soru": "Which modern band is popular globally by interpreting 70s Anatolian Rock?", "secenekler": ["Altın Gün", "Duman", "Yüzyüzeyken Konuşuruz", "Adamlar"], "dogru": "Altın Gün"},
    {"soru": "What is the structure of Zülfü Livaneli's 'Eşkıya'?", "secenekler": ["Modern arrangement in folk form", "Classical western music", "Rap", "Jazz"], "dogru": "Modern arrangement in folk form"},
    {"soru": "What are the fishing line knots tied to prevent frets from slipping on Baglama?", "secenekler": ["Fret tie", "Knot", "Lock", "Peg string"], "dogru": "Fret tie"},
    {"soru": "Why is Mey body made of hard trees like apricot or plum?", "secenekler": ["For hardness and sound brilliance", "Because it's cheap", "Because it's light", "For its color"], "dogru": "For hardness and sound brilliance"},
    {"soru": "How many sound holes are there in Ney (excluding headjoint)?", "secenekler": ["7 (6 front 1 back)", "10", "5", "12"], "dogru": "7 (6 front 1 back)"},
    {"soru": "What are the ropes used to tighten the drum skin called?", "secenekler": ["Brace (Gergi)", "Lace", "Snare", "Wire"], "dogru": "Brace (Gergi)"},
    {"soru": "What is the technique of making continuous sound without stopping breath on Zurna?", "secenekler": ["Circular breathing (Devir)", "Double blowing", "Short breath", "Diaphragm"], "dogru": "Circular breathing (Devir)"},
    {"soru": "What is the thin piece of Sipsi that makes the sound called?", "secenekler": ["Reed (Dil/Cukcuk)", "Mouthpiece", "Fret", "Body"], "dogru": "Reed (Dil/Cukcuk)"},
    {"soru": "What is the metal rod attached under Kabak Kemane called?", "secenekler": ["Spike (Direk)", "Foot", "Neck", "Support"], "dogru": "Spike (Direk)"},
    {"soru": "What is the name of the small hole in the Baglama bowl?", "secenekler": ["Sound hole", "Air hole", "Handle", "Ornament"], "dogru": "Sound hole"},
    {"soru": "What is the flat part where strings are pressed on Kemenche called?", "secenekler": ["Tie", "Keyboard (Neck)", "Handle", "Bridge"], "dogru": "Keyboard (Neck)"},
    {"soru": "What is the board where latches are located on Kanun called?", "secenekler": ["Latch Board", "Pegbox", "Keyboard", "Sound Box"], "dogru": "Latch Board"},
    {"soru": "Which instrument gives a sad sound in bride weeping tunes?", "secenekler": ["Kaval (or Mey)", "Zurna", "Drum", "Tambourine"], "dogru": "Kaval (or Mey)"},
    {"soru": "What is the purpose of folk songs sung during ram mating ceremonies?", "secenekler": ["To wish for fertility", "To make it rain", "Declaration of war", "Entertainment"], "dogru": "To wish for fertility"},
    {"soru": "What does Aşık Veysel call 'My Faithful Beloved'?", "secenekler": ["Black Earth (Kara Toprak)", "His wife", "His saz", "His village"], "dogru": "Black Earth (Kara Toprak)"},
    {"soru": "What does the expression 'Red Scarf' (Al Yazmalı) represent in folk songs?", "secenekler": ["Chastity of Anatolian woman", "Wealth", "Being urban", "Being a foreigner"], "dogru": "Chastity of Anatolian woman"},
    {"soru": "What material is 'Zilli Maşa' used in village plays made of?", "secenekler": ["Iron or Copper", "Wood", "Plastic", "Glass"], "dogru": "Iron or Copper"},
    {"soru": "What is the rhythm of the drum played at suhur called?", "secenekler": ["Velveleli beat", "Aksak rhythm", "Straight rhythm", "Halay rhythm"], "dogru": "Velveleli beat"},
    {"soru": "What is the beginning of 'drinking wine' (Bade içmek) in minstrelsy?", "secenekler": ["Becoming a lover of Truth", "Being rich", "Getting married", "Travel"], "dogru": "Becoming a lover of Truth"},
    {"soru": "What does 'Tavır' reflect in Baglama?", "secenekler": ["Regional playing style", "Size of saz", "Number of strings", "Tuning"], "dogru": "Regional playing style"},
    {"soru": "What instrument do shepherds use to manage their animals?", "secenekler": ["Kaval", "Zurna", "Saz", "Drum"], "dogru": "Kaval"},
    {"soru": "What does 'Ayak' in folk music correspond to in classical music?", "secenekler": ["Makam", "Usul", "Rhythm", "Form"], "dogru": "Makam"},
    {"soru": "What is the 'Aynalı Martin' in the 'Hekimoğlu' folk song?", "secenekler": ["Rifle brand", "Mirror", "Guitar", "Horse"], "dogru": "Rifle brand"},
    {"soru": "In which province does the 'Ormancı' folk song take place?", "secenekler": ["Muğla", "İzmir", "Aydın", "Antalya"], "dogru": "Muğla"},
    {"soru": "Which geography does 'Sarı Gelin' belong to?", "secenekler": ["Eastern Anatolia and Caucasus", "Aegean", "Thrace", "Black Sea"], "dogru": "Eastern Anatolia and Caucasus"},
    {"soru": "Which region does 'Zülüf Dökülmüş Yüze' belong to?", "secenekler": ["Kırşehir", "Erzurum", "Sivas", "Konya"], "dogru": "Kırşehir"},
    {"soru": "What does the phrase 'Çeşm-i Siyahım' mean?", "secenekler": ["My Black Eyed", "My Black Browed", "My Black Haired", "My Black Fate"], "dogru": "My Black Eyed"},
    {"soru": "Where is the story of 'Çökertme' zeybek from?", "secenekler": ["Bodrum", "Marmaris", "Kuşadası", "Fethiye"], "dogru": "Bodrum"},
    {"soru": "Which province does 'Gesi Bağları' belong to?", "secenekler": ["Kayseri", "Sivas", "Yozgat", "Niğde"], "dogru": "Kayseri"},
    {"soru": "What did Ruhi Su add to folk music?", "secenekler": ["Operatic and polyphonic interpretation", "Electro baglama", "Arabesque style", "Pop style"], "dogru": "Operatic and polyphonic interpretation"},
    {"soru": "For which front is 'Havada Bulut Yok' composed?", "secenekler": ["Yemen Front", "Gallipoli", "Caucasus", "Galicia"], "dogru": "Yemen Front"},
    {"soru": "Who composed 'Mihriban'?", "secenekler": ["Musa Eroğlu", "Mahzuni Şerif", "Neşet Ertaş", "Arif Sağ"], "dogru": "Musa Eroğlu"},
    {"soru": "What does 'Fine' mean on music sheet?", "secenekler": ["Where the piece ends", "Return to start", "Speed up", "Slow down"], "dogru": "Where the piece ends"},
    {"soru": "What is the rhythmic decoration made by hitting the chest on Baglama?", "secenekler": ["Zikir (Tap) beat", "Şelpe", "Strumming", "Impact"], "dogru": "Zikir (Tap) beat"},
    {"soru": "How many beats is a half note?", "secenekler": ["2 beats", "1 beat", "4 beats", "Half beat"], "dogru": "2 beats"},
    {"soru": "How much silence does a quarter rest require?", "secenekler": ["1 beat", "2 beats", "Half beat", "4 beats"], "dogru": "1 beat"},
    {"soru": "How does a Sharp sign change the sound?", "secenekler": ["Raises by half step", "Lowers by half step", "Does not change", "Resets"], "dogru": "Raises by half step"},
    {"soru": "How does a Flat sign change the sound?", "secenekler": ["Lowers by half step", "Raises by half step", "Does not change", "Lengthens"], "dogru": "Lowers by half step"},
    {"soru": "What is 'Rhythm' in music?", "secenekler": ["Regular flow of sounds in time", "Pitch of sound", "Color of sound", "Speed of sound"], "dogru": "Regular flow of sounds in time"},
    {"soru": "Which is one of the most durable trees used for Baglama bowl?", "secenekler": ["Mulberry", "Poplar", "Pine", "Willow"], "dogru": "Mulberry"},
    {"soru": "Who is the first compiler that comes to mind for 'Tavır' in folk music?", "secenekler": ["Muzaffer Sarısözen", "Zeki Müren", "Barış Manço", "Tarkan"], "dogru": "Muzaffer Sarısözen"},
    {"soru": "What is the instrumental section without lyrics in dance music called?", "secenekler": ["Ara Nağme", "Intro", "Final", "Chorus"], "dogru": "Ara Nağme"},
    {"soru": "Why is spruce preferred for the Baglama soundboard?", "secenekler": ["High sound transmission", "Beautiful color", "Cheap", "Easy to find"], "dogru": "High sound transmission"},
    {"soru": "What is the sound character of a Baglama bowl made of mulberry?", "secenekler": ["Deep and bass character", "High and metallic", "Very bright", "Weak"], "dogru": "Deep and bass character"},
    {"soru": "What is the ideal drying time for the gourd used in Kabak Kemane?", "secenekler": ["1-2 years", "3 months", "1 week", "10 years"], "dogru": "1-2 years"},
    {"soru": "Why is Mey body made of hard wood like plum or apricot?", "secenekler": ["To resist moisture and heat", "To be light", "To be red", "Because it smells good"], "dogru": "To resist moisture and heat"},
    {"soru": "What is the function of the wide bell of Zurna?", "secenekler": ["To transmit sound far and loud", "Aesthetic", "To take air", "Ease of holding"], "dogru": "To transmit sound far and loud"},
    {"soru": "What is applied to Baglama pegs to prevent slipping?", "secenekler": ["Chalk or Dry Soap", "Oil", "Water", "Wax"], "dogru": "Chalk or Dry Soap"},
    {"soru": "How many nodes does an ideal Ney instrument traditionally consist of?", "secenekler": ["9 nodes", "7 nodes", "12 nodes", "5 nodes"], "dogru": "9 nodes"},
    {"soru": "What is the stick inside the Classical Kemenche that transmits sound called?", "secenekler": ["Sound post (Can Direği)", "Sound Stick", "Bridge", "Support"], "dogru": "Sound post (Can Direği)"},
    {"soru": "What is the Baglama bowl made by gluing slices called?", "secenekler": ["Leaf Bowl (Yaprak Tekne)", "Carved Bowl", "Split Bowl", "Whole Bowl"], "dogru": "Leaf Bowl (Yaprak Tekne)"},
    {"soru": "What was historically used instead of a plectrum in Oud?", "secenekler": ["Eagle feather", "Plastic", "Metal", "Wood"], "dogru": "Eagle feather"},
    {"soru": "What is the most distinct difference of 'Müstezat' mode in Turkish Folk Music?", "secenekler": ["'Ziyade' sections added between melody", "Being very fast", "Being without lyrics", "Played only with kaval"], "dogru": "'Ziyade' sections added between melody"},
    {"soru": "Which Classical Turkish Music makam does 'Kerem Ayağı' resemble?", "secenekler": ["Uşşak", "Hicaz", "Rast", "Segah"], "dogru": "Uşşak"},
    {"soru": "How does the 'Garip Ayağı' scale usually proceed?", "secenekler": ["Descending or Descending-Ascending", "Only Ascending", "Straight", "Jumping"], "dogru": "Descending or Descending-Ascending"},
    {"soru": "What does the frequent use of 'Si-La' (Seventh Interval) in Bozlaks provide?", "secenekler": ["Feeling of cry and breadth", "Rhythmic structure", "Dancing", "Shortening lyrics"], "dogru": "Feeling of cry and breadth"},
    {"soru": "What is the last 3-beat called in Aksak usuls (2+2+2+3)?", "secenekler": ["Long time (Aksak beat)", "Short time", "Rest", "Strong time"], "dogru": "Long time (Aksak beat)"},
    {"soru": "How is 'Triplet' shown in notation?", "secenekler": ["By writing '3' over notes", "By coloring notes", "Writing backwards", "In parentheses"], "dogru": "By writing '3' over notes"},
    {"soru": "What is the main note where the melody ends in Turkish Folk Music?", "secenekler": ["Tonic (Karar Sesi)", "High Tonic", "Leading Tone", "Dominant"], "dogru": "Tonic (Karar Sesi)"},
    {"soru": "In which type of works is 9/4 usul usually seen?", "secenekler": ["Heavy Zeybeks", "Horon", "Halay", "Karşılama"], "dogru": "Heavy Zeybeks"},
    {"soru": "What does the 'D.C.' (Da Capo) sign mean?", "secenekler": ["Return to the beginning", "Finish", "Speed up", "Slow down"], "dogru": "Return to the beginning"},
    {"soru": "Which is usually the open note of the top string in Baglama (Bozuk Tuning)?", "secenekler": ["La", "Sol", "Re", "Do"], "dogru": "La"},
    {"soru": "What was the main purpose of the first Turkish Adhan trial in 1932?", "secenekler": ["To make the language of worship understood by people", "To change music", "To remove Adhan", "To create new makam"], "dogru": "To make the language of worship understood by people"},
    {"soru": "Why did Atatürk lift the ban on Alaturka Music between 1934-36?", "secenekler": ["Misunderstanding by people and to open space for synthesis", "Closing of radios", "Request of artists", "Foreign pressure"], "dogru": "Misunderstanding by people and to open space for synthesis"},
    {"soru": "For what purpose was Paul Hindemith invited to Turkey?", "secenekler": ["To modernize music education", "To give a concert", "To allow holiday", "To learn Turkish"], "dogru": "To modernize music education"},
    {"soru": "What are the talented students sent abroad in the early years of the Republic called?", "secenekler": ["Turkish Five (and others)", "Palace musicians", "Mehter band", "Ince Saz committee"], "dogru": "Turkish Five (and others)"},
    {"soru": "What is the founding purpose of 'Yurttan Sesler' group on radio?", "secenekler": ["To introduce folk music with a disciplined choir", "Just for fun", "To play western music", "To present news"], "dogru": "To introduce folk music with a disciplined choir"},
    {"soru": "What is the name of the first folk music book series published by Darülelhan?", "secenekler": ["Anatolian Folk Songs", "Turkish Music Corpus", "Song Magazine", "Folk Song Notebook"], "dogru": "Anatolian Folk Songs"},
    {"soru": "Why was Safiye Ayla appreciated by Atatürk?", "secenekler": ["Her smooth diction and performance ability", "Being very loud", "Singing only western music", "Reading fast"], "dogru": "Her smooth diction and performance ability"},
    {"soru": "What did playing Western Music on radios in the 1930s pave the way for?", "secenekler": ["Recognition of polyphonic music", "Forgetting folk music", "Closing of radios", "Development of theater"], "dogru": "Recognition of polyphonic music"},
    {"soru": "Piano, a palace instrument in Ottoman, became the symbol of what in the Republic?", "secenekler": ["Modern education and modernization", "Wealth", "Alienation", "Old order"], "dogru": "Modern education and modernization"},
    {"soru": "Who is the great conductor who established the disciplined structure of Istanbul Radio?", "secenekler": ["Mesut Cemil", "Zeki Müren", "Münir Nurettin", "Hacı Arif Bey"], "dogru": "Mesut Cemil"},
    {"soru": "What does 'Drinking Wine' (Bade içmek) in a dream mean in minstrel tradition?", "secenekler": ["Given minstrelsy ability spiritually", "Quenching thirst", "Recovering from illness", "Becoming rich"], "dogru": "Given minstrelsy ability spiritually"},
    {"soru": "What is the art of reciting poems without using letters (b, p, m) called?", "secenekler": ["Lebdeğmez", "Muamma", "Atışma", "Güzelleme"], "dogru": "Lebdeğmez"},
    {"soru": "What is the name of the imaginary lover Sümmani searched for?", "secenekler": ["Gülperi", "Aslı", "Şirin", "Zühre"], "dogru": "Gülperi"},
    {"soru": "What is the real name of Aşık Mahzuni Şerif?", "secenekler": ["Şerif Cırık", "Mehmet Şerif", "Ali Mahzuni", "Hasan Cırık"], "dogru": "Şerif Cırık"},
    {"soru": "What is the basic philosophy of 'Bozlak' in Kırşehir Abdal tradition?", "secenekler": ["To cry out human suffering", "To have fun", "To dance", "To describe war"], "dogru": "To cry out human suffering"},
    {"soru": "What is the main function of music in the 'Köroğlu' epic?", "secenekler": ["To keep the fighting spirit alive", "To sleep", "To cry", "To laugh"], "dogru": "To keep the fighting spirit alive"},
    {"soru": "What is the riddle hung in the shop by minstrels called?", "secenekler": ["Muamma (Hanging)", "Puzzle", "Rhyme", "Mani"], "dogru": "Muamma (Hanging)"},
    {"soru": "Which regional style is Neşet Ertaş's 'Zülüf Dökülmüş Yüze' in?", "secenekler": ["Kırşehir", "Aegean", "Thrace", "Black Sea"], "dogru": "Kırşehir"},
    {"soru": "What does the name 'Elif' represent in Karacaoğlan poems?", "secenekler": ["Beauty of Anatolian woman", "His own daughter", "A flower", "A city"], "dogru": "Beauty of Anatolian woman"},
    {"soru": "What does 'Shouldering the Saz' mean in minstrelsy?", "secenekler": ["Going abroad and starting minstrelsy", "Selling the saz", "Breaking the saz", "Returning home"], "dogru": "Going abroad and starting minstrelsy"},
    {"soru": "What is the origin of Harmandalı zeybek?", "secenekler": ["A story of bravery and heroism", "A wedding", "A harvest time", "A natural disaster"], "dogru": "A story of bravery and heroism"},
    {"soru": "What does the 'Handkerchief' used in Erzurum Bars symbolize?", "secenekler": ["Unity and order", "Cleanliness", "Separation", "Mourning"], "dogru": "Unity and order"},
    {"soru": "What is the clapping to keep tempo in Karşılama dances called?", "secenekler": ["Şakşak", "Applause", "Hitting", "Bell"], "dogru": "Şakşak"},
    {"soru": "Which animal is imitated in Burdur 'Teke Zortlatması' dance?", "secenekler": ["Billy Goat (Teke)", "Eagle", "Wolf", "Horse"], "dogru": "Billy Goat (Teke)"},
    {"soru": "What does the crouching of players in Horon symbolize?", "secenekler": ["Sea wave or fish movement", "Fatigue", "Mountains", "Soil"], "dogru": "Sea wave or fish movement"},
    {"soru": "Which wood gives the best sound in spoon dances?", "secenekler": ["Boxwood", "Poplar", "Pine", "Willow"], "dogru": "Boxwood"},
    {"soru": "What is the sound made to increase enthusiasm in Halay called?", "secenekler": ["Zılgıt (Ululation)", "Yell", "Whistle", "Shout"], "dogru": "Zılgıt (Ululation)"},
    {"soru": "What distinguishes Thracian zeybeks from Aegean zeybeks?", "secenekler": ["Being more agile and lively", "Being slower", "Being without lyrics", "Being without music"], "dogru": "Being more agile and lively"},
    {"soru": "What is the relationship between Bayburt 'Zortlatma' and Teke region?", "secenekler": ["Only name similarity", "Same dance", "Music is same", "Clothes are same"], "dogru": "Only name similarity"},
    {"soru": "What is the purpose of the 'Sallama' section in Halays?", "secenekler": ["Rest and transition", "Ending the game", "Speeding up", "Meal break"], "dogru": "Rest and transition"},
    {"soru": "How much flattening does 'Si flat 2' indicate in notation?", "secenekler": ["2-3 commas", "1 comma", "5 commas", "Half tone"], "dogru": "2-3 commas"},
    {"soru": "For which sounds is the F Clef used on the staff?", "secenekler": ["Low (Bass) sounds", "High sounds", "Middle sounds", "Only rhythm"], "dogru": "Low (Bass) sounds"},
    {"soru": "How many beats is a quarter note?", "secenekler": ["1 beat", "2 beats", "Half beat", "4 beats"], "dogru": "1 beat"},
    {"soru": "What is the most distinct feature of Aksak usuls?", "secenekler": ["Consisting of unequal (2 and 3) units", "Being very fast", "Being very slow", "Being without lyrics"], "dogru": "Consisting of unequal (2 and 3) units"},
    {"soru": "What is the difference between 'Scale' and 'Ayak' in Turkish Folk Music?", "secenekler": ["Ayak includes performance style", "Scale is more important", "Ayak is just rhythm", "No difference"], "dogru": "Ayak includes performance style"},
    {"soru": "What does playing a usul 'Velveleli' mean?", "secenekler": ["Adding decorative sub-beats", "Playing very fast", "Playing wrong", "Playing silently"], "dogru": "Adding decorative sub-beats"},
    {"soru": "Where are 'Piano' (p) and 'Forte' (f) signs written on the score?", "secenekler": ["Under the notes", "Over the notes", "End of page", "Title"], "dogru": "Under the notes"},
    {"soru": "What does 'Harmony' mean in music?", "secenekler": ["Polyphony (Sounds heard simultaneously)", "Monophony", "Rhythm", "Speed"], "dogru": "Polyphony (Sounds heard simultaneously)"},
    {"soru": "What is 'Zikir' beat in Baglama?", "secenekler": ["Rhythmic beat on chest with finger", "Beat with string", "Tempo with foot", "Squeezing neck"], "dogru": "Rhythmic beat on chest with finger"},
    {"soru": "Why is 'Key Signature' (Accidentals) necessary in Turkish folk music?", "secenekler": ["To understand the tonic and scale of melody", "For decoration", "To fill the page", "To make it hard"], "dogru": "To understand the tonic and scale of melody"},
    {"soru": "Who is the 'Görücü' in arranged marriage folk songs?", "secenekler": ["Family elder going to see the girl", "Groom", "Bride", "Village headman"], "dogru": "Family elder going to see the girl"},
    {"soru": "Why is it called 'burning a lament' (Ağıt yakmak) in folk culture?", "secenekler": ["Because pain comes from inside like fire", "Because fire is lit", "Because sung at night", "Because candle is lit"], "dogru": "Because pain comes from inside like fire"},
    {"soru": "Why is music played in ram mating ceremonies?", "secenekler": ["To wish for fertility", "To make it rain", "Declaration of war", "Because it's meal time"], "dogru": "To wish for fertility"},
    {"soru": "What are the manis sung by sellers in marketplaces called?", "secenekler": ["Esnaf Manileri", "Market Air", "Bazaar Song", "Sales Melody"], "dogru": "Esnaf Manileri"},
    {"soru": "Why are bride taking tunes sad?", "secenekler": ["Representing separation from father's home", "Because wedding ended", "Because it got dark", "Because road is long"], "dogru": "Representing separation from father's home"},
    {"soru": "What is the rhythm of 'Threshing Songs' based on?", "secenekler": ["Sound of feet of threshing animals", "Wind sound", "Water sound", "Bird sound"], "dogru": "Sound of feet of threshing animals"},
    {"soru": "What does the expression 'Red Scarf' represent in folk songs?", "secenekler": ["Chastity of Anatolian woman", "Wealth", "Being urban", "Being foreigner"], "dogru": "Chastity of Anatolian woman"},
    {"soru": "Who are the most famous narrators of folk tales?", "secenekler": ["Minstrels and Meddahs", "Teachers", "Headmen", "Soldiers"], "dogru": "Minstrels and Meddahs"},
    {"soru": "What is 'Zilli Maşa' used for in village plays?", "secenekler": ["For rhythm and fun", "To cook", "To warm up", "To fight"], "dogru": "For rhythm and fun"},
    {"soru": "Which village does 'Ormancı' folk song take place in?", "secenekler": ["Gevenne (Muğla)", "Çiçekdağı", "Akçaabat", "Keskin"], "dogru": "Gevenne (Muğla)"},
    {"soru": "What is 'Aynalı Martin' in 'Hekimoğlu' folk song?", "secenekler": ["A rifle", "A mirror", "A guitar", "A horse"], "dogru": "A rifle"},
    {"soru": "What does the word 'Nenney' mean in 'Sarı Gelin' folk song?", "secenekler": ["Lullabying / My dear", "Name", "Mountain name", "Flower name"], "dogru": "Lullabying / My dear"},
    {"soru": "What does Cem Karaca's 'Resimdeki Gözyaşları' describe?", "secenekler": ["Separation and longing", "Happiness", "School years", "Love of nature"], "dogru": "Separation and longing"},
    {"soru": "Who is 'Tatlı Dillim' in Neşet Ertaş's 'Neredesin Sen'?", "secenekler": ["His beloved / Wife / Mother", "His daughter", "His teacher", "His friend"], "dogru": "His beloved / Wife / Mother"},
    {"soru": "Who wrote the lyrics of Edip Akbayram's 'Aldırma Gönül'?", "secenekler": ["Sabahattin Ali", "Nazım Hikmet", "Ahmed Arif", "Can Yücel"], "dogru": "Sabahattin Ali"},
    {"soru": "What is the biggest innovation Musa Eroğlu brought to Baglama?", "secenekler": ["Orchestral arrangement and modern tone", "Making saz smaller", "Reducing strings", "Removing plectrum"], "dogru": "Orchestral arrangement and modern tone"},
    {"soru": "What does Aşık Veysel emphasize by saying 'My Faithful Beloved is Black Earth'?", "secenekler": ["Loyalty to nature and death", "Farming", "Wealth", "Loneliness"], "dogru": "Loyalty to nature and death"},
    {"soru": "Who is the famous artist raised from TRT Youth Choir?", "secenekler": ["Güler Duman", "Barış Manço", "Cem Karaca", "Zeki Müren"], "dogru": "Güler Duman"},
    {"soru": "Who is the minstrel using the pseudonym 'Dertli' in Baglama?", "secenekler": ["Aşık Dertli", "Aşık Veysel", "Karacaoğlan", "Pir Sultan"], "dogru": "Aşık Dertli"},
    {"soru": "What is one of the old names given to Baglama among people?", "secenekler": ["Çöğür", "Guitar", "Viola", "Kanun"], "dogru": "Çöğür"},
    {"soru": "What is the Black Sea Kemenche sometimes called in the region?", "secenekler": ["Cura", "Violin", "Saz", "Gıygı"], "dogru": "Cura"},
    {"soru": "What was the drum called in Thrace in old times?", "secenekler": ["Kos", "Snare", "Battery", "Dümbelek"], "dogru": "Kos"},
    {"soru": "Why is the tongued kaval called 'Düdük'?", "secenekler": ["Because sound mechanism at tip resembles a whistle", "Because it's small", "Because it's plastic", "Because it's a toy"], "dogru": "Because sound mechanism at tip resembles a whistle"},
    {"soru": "What does 'Surnay', the origin of 'Zurna', mean?", "secenekler": ["Wedding reed / Big whistle", "War trumpet", "Shepherd instrument", "Palace music"], "dogru": "Wedding reed / Big whistle"},
    {"soru": "What is the person playing def called in Anatolia?", "secenekler": ["Dairezen", "Zurnazen", "Neyzen", "Minstrel"], "dogru": "Dairezen"},
    {"soru": "What is the pitch called an octave (8 notes) higher than the tonic in Turkish Folk Music?", "secenekler": ["Tiz Durak", "Yeden", "Güçlü", "Gerdaniye"], "dogru": "Tiz Durak"},
    {"soru": "Which group became popular globally by interpreting 70s Anatolian Rock songs?", "secenekler": ["Altın Gün", "Duman", "Athena", "Mor ve Ötesi"], "dogru": "Altın Gün"},
    {"soru": "What are the fishing line knots tied to prevent frets from slipping on Baglama?", "secenekler": ["Fret tie", "Knot", "Lock", "Peg string"], "dogru": "Fret tie"},
    {"soru": "What is the technique of making continuous sound without stopping breath on Zurna?", "secenekler": ["Circular breathing (Devir)", "Double blowing", "Short breath", "Diaphragm"], "dogru": "Circular breathing (Devir)"},
    {"soru": "What is the thin piece attached to mouthpiece of Sipsi called?", "secenekler": ["Reed (Dil/Cukcuk)", "Reed", "Lüle", "Headjoint"], "dogru": "Reed (Dil/Cukcuk)"},
    {"soru": "What is the metal rod attached under Kabak Kemane called?", "secenekler": ["Spike (Direk)", "Foot", "Neck", "Support"], "dogru": "Spike (Direk)"},
    {"soru": "What is the function of the small hole in the Baglama bowl?", "secenekler": ["Balancing sound output (Sound hole)", "Decoration", "Taking air", "Holding neck"], "dogru": "Balancing sound output (Sound hole)"},
    {"soru": "What is the keyboard part where strings are pressed on Black Sea Kemenche called?", "secenekler": ["Kravat (Tie)", "Neck", "Bridge", "Bowl"], "dogru": "Kravat (Tie)"},
    {"soru": "What is the ramped board where latches are located on Kanun called?", "secenekler": ["Latch Board", "Pegbox", "Keyboard", "Sound Box"], "dogru": "Latch Board"},
    {"soru": "What is the metal tong used for rhythm in village plays called?", "secenekler": ["Zilli Maşa", "Spoon", "Cymbal", "Bell"], "dogru": "Zilli Maşa"},
    {"soru": "Which coastal town is 'Çökertme' zeybek identified with?", "secenekler": ["Bodrum", "Marmaris", "Kuşadası", "Fethiye"], "dogru": "Bodrum"},
    {"soru": "Which province is 'Gesi Bağları' identified with?", "secenekler": ["Kayseri", "Konya", "Ankara", "Nevşehir"], "dogru": "Kayseri"},
    {"soru": "Who is the master interpreting folk music with operatic technique and strong voice?", "secenekler": ["Ruhi Su", "Zeki Müren", "Timur Selçuk", "Cem Karaca"], "dogru": "Ruhi Su"},
    {"soru": "For which soldiers lost is 'Havada Bulut Yok' (Yemen Folk Song) burned?", "secenekler": ["Yemen Front", "Gallipoli", "Caucasus", "Galicia"], "dogru": "Yemen Front"},
    {"soru": "What term shows the piece ends on the score?", "secenekler": ["Fine", "Da Capo", "Coda", "Segno"], "dogru": "Fine"},
    {"soru": "What is the rhythmic beat made by index finger on Baglama chest?", "secenekler": ["Zikir (Tap) beat", "Şelpe", "Strumming", "Impact"], "dogru": "Zikir (Tap) beat"},
    {"soru": "What is the solo instrument section between lyrical parts in dance music called?", "secenekler": ["Ara Nağme", "Intro", "Taksim", "Final"], "dogru": "Ara Nağme"},
    {"soru": "What is the playing technique on Baglama hitting strings with all fingers without plectrum?", "secenekler": ["Şelpe", "Tezene", "Pençe", "Nail"], "dogru": "Şelpe"},
    {"soru": "From which animal is the skin on Kabak Kemane body usually obtained?", "secenekler": ["Heart membrane (Pericardium) or Fish skin", "Sheep", "Silk", "Plastic"], "dogru": "Heart membrane (Pericardium) or Fish skin"},
    {"soru": "What is the piece on Zurna reed preventing lip fatigue called?", "secenekler": ["Sipsi (Metelik)", "Lüle", "Mouthpiece", "Clamp"], "dogru": "Sipsi (Metelik)"},
    {"soru": "What is the largest size (approx 40-42 cm) of Mey instrument called?", "secenekler": ["Ana Mey", "Cura Mey", "Orta Mey", "Bass Mey"], "dogru": "Ana Mey"},
    {"soru": "What is sounding the open string without pressing frets on Baglama called?", "secenekler": ["Open string", "Closed string", "Dem", "Decision"], "dogru": "Open string"},
    {"soru": "What is the skin part storing air in Tulum called?", "secenekler": ["Post (Body)", "Nav", "Mouthpiece", "Tube"], "dogru": "Post (Body)"},
    {"soru": "In which region is Sipsi instrument usually common?", "secenekler": ["Teke Region (Burdur/Isparta)", "Black Sea", "Eastern Anatolia", "Thrace"], "dogru": "Teke Region (Burdur/Isparta)"},
    {"soru": "How is the 'Mallet' side of the drum compared to 'Stick' side?", "secenekler": ["Thicker and louder", "Thinner", "Same", "Smaller"], "dogru": "Thicker and louder"},
    {"soru": "What is the bone or plastic piece separating strings at the top of Baglama called?", "secenekler": ["Upper Nut (Üst Eşik)", "Lower Bridge", "Bridge", "Keyboard"], "dogru": "Upper Nut (Üst Eşik)"},
    {"soru": "What is the ornamentation technique made by shaking the bow on Kemenche?", "secenekler": ["Vibrato", "Glissando", "Legato", "Staccato"], "dogru": "Vibrato"},
    {"soru": "Who is 'Donizetti Pasha' came to train Ottoman palace band?", "secenekler": ["Giuseppe Donizetti", "Rossini", "Verdi", "Mozart"], "dogru": "Giuseppe Donizetti"},
    {"soru": "What is the first audio recording device used in folk music compilations in Turkey?", "secenekler": ["Phonograph", "Cassette player", "Gramophone", "MP3"], "dogru": "Phonograph"},
    {"soru": "Which school established by Atatürk's order is considered the core of conservatory?", "secenekler": ["Musiki Muallim Mektebi", "Darüşşafaka", "Village Institute", "Fine Arts"], "dogru": "Musiki Muallim Mektebi"},
    {"soru": "What was the purpose of 'Alaturka Music Ban' on radios in 1934?", "secenekler": ["To encourage western technique and polyphony", "To end music", "To close radios", "To offend artists"], "dogru": "To encourage western technique and polyphony"},
    {"soru": "What is the name of the first note series printed by Darülelhan in 1920s?", "secenekler": ["Anatolian Folk Songs", "Music Notebook", "Ottoman Melodies", "Folk Song Spring"], "dogru": "Anatolian Folk Songs"},
    {"soru": "Osman Zeki Üngör, composer of National Anthem, is the first conductor of which orchestra?", "secenekler": ["Riyaset-i Cumhur Philharmonic (CSO)", "Istanbul Radio", "Darülelhan", "Mehter"], "dogru": "Riyaset-i Cumhur Philharmonic (CSO)"},
    {"soru": "Who is the theorist creating Turkish music sound system (Arel-Ezgi)?", "secenekler": ["Hüseyin Sadettin Arel", "Dede Efendi", "Itri", "Zekai Dede"], "dogru": "Hüseyin Sadettin Arel"},
    {"soru": "Which art branch did Atatürk see as 'Measure in the change of a nation'?", "secenekler": ["Music", "Painting", "Sculpture", "Architecture"], "dogru": "Music"},
    {"soru": "Who is the Turkish Five member composer of 'Köçekçe' suite?", "secenekler": ["Ulvi Cemal Erkin", "Adnan Saygun", "Cemal Reşit Rey", "Ferit Alnar"], "dogru": "Ulvi Cemal Erkin"},
    {"soru": "Who is the great folk music expert who labored in establishment of TRT Music Department?", "secenekler": ["Nida Tüfekçi", "Neşet Ertaş", "Aşık Veysel", "Barış Manço"], "dogru": "Nida Tüfekçi"},
    {"soru": "What is the most common verse form written in 11-syllable meter in Ashik literature?", "secenekler": ["Koşma", "Semai", "Mani", "Destan"], "dogru": "Koşma"},
    {"soru": "What is the folk poem criticizing someone's faults with mocking language called?", "secenekler": ["Taşlama (Satire)", "Güzelleme", "Ağıt", "Praise"], "dogru": "Taşlama (Satire)"},
    {"soru": "What is the long air type based on manis in Kirkuk region?", "secenekler": ["Hoyrat", "Barak", "Bozlak", "Maya"], "dogru": "Hoyrat"},
    {"soru": "What are sad poems said after someone dies called?", "secenekler": ["Ağıt (Lament)", "Lullaby", "Folk Song", "Hymn"], "dogru": "Ağıt (Lament)"},
    {"soru": "What is the smallest folk poem form with 7 syllables and 4 lines?", "secenekler": ["Mani", "Koşma", "Semai", "Destan"], "dogru": "Mani"},
    {"soru": "What are ashik poems describing religious and mystical thoughts called?", "secenekler": ["Nefes (Deme)", "Folk Song", "Song", "Ghazal"], "dogru": "Nefes (Deme)"},
    {"soru": "What is called when poet uses his name (pseudonym) at the end of poem?", "secenekler": ["Tapşırma", "Signature", "Seal", "Final"], "dogru": "Tapşırma"},
    {"soru": "What is the general name of folk songs telling heroism of Efes in Aegean?", "secenekler": ["Zeybek Havaları", "Bar Havaları", "Halays", "Horons"], "dogru": "Zeybek Havaları"},
    {"soru": "What is the genre where fairy-tale events are told with music?", "secenekler": ["Folk Tale", "Novel", "Theater", "Joke"], "dogru": "Folk Tale"},
    {"soru": "What is the verse riddle asked by minstrels to test each other called?", "secenekler": ["Muamma", "Rhyme", "Puzzle", "Question"], "dogru": "Muamma"},
    {"soru": "What is the heavy rhythm dance played by men in Erzurum region?", "secenekler": ["Bar", "Halay", "Zeybek", "Horon"], "dogru": "Bar"},
    {"soru": "What is the section where shoulders are shaken in Black Sea horon called?", "secenekler": ["Aşağı Alma (Kimilti)", "Steep Horon", "Shaking", "Flat"], "dogru": "Aşağı Alma (Kimilti)"},
    {"soru": "What is the famous dance played with candles in hands in Elazığ?", "secenekler": ["Çayda Çıra", "Misket", "Harmandalı", "Atabarı"], "dogru": "Çayda Çıra"},
    {"soru": "What is the fast dance played with sipsi in Teke Region?", "secenekler": ["Teke Zortlatması", "Zeybek", "Spoon Air", "Halay"], "dogru": "Teke Zortlatması"},
    {"soru": "How many times is the rhythm pattern of 'Heavy Zeybeks' in Aegean?", "secenekler": ["9 times (9/4)", "4 times", "2 times", "7 times"], "dogru": "9 times (9/4)"},
    {"soru": "What are dances played with wooden spoons in Konya and Silifke called?", "secenekler": ["Spoon Dances", "Bar", "Horon", "Zeybek"], "dogru": "Spoon Dances"},
    {"soru": "What is the dance played by two opposing groups in Thrace?", "secenekler": ["Karşılama", "Halay", "Misket", "Sinsin"], "dogru": "Karşılama"},
    {"soru": "What is the person leading the Halay dance called?", "secenekler": ["Halaybaşı", "Sergeant", "Efe", "Barbaşı"], "dogru": "Halaybaşı"},
    {"soru": "What is the fast section played at the end of Sivas halays called?", "secenekler": ["Yeldirme", "Shaking", "Hosting", "Final"], "dogru": "Yeldirme"},
    {"soru": "What are sad tunes played when bride leaves home in East called?", "secenekler": ["Gelin Ağlatma Havaları", "Game Air", "Henna Air", "Greeting"], "dogru": "Gelin Ağlatma Havaları"},
    {"soru": "Where is Aşık Mahzuni Şerif's hometown?", "secenekler": ["Kahramanmaraş (Afşin)", "Sivas", "Kırşehir", "Erzurum"], "dogru": "Kahramanmaraş (Afşin)"},
    {"soru": "What is the rhythm of 'Threshing Songs' based on?", "secenekler": ["Sound of feet of threshing animals", "Wind sound", "Water sound", "Bird sound"], "dogru": "Sound of feet of threshing animals"},
    {"soru": "Who are the most famous narrators of folk tales?", "secenekler": ["Minstrels and Meddahs", "Teachers", "Headmen", "Soldiers"], "dogru": "Minstrels and Meddahs"},
    {"soru": "Which village does 'Ormancı' folk song take place in?", "secenekler": ["Gevenne (Muğla)", "Çiçekdağı", "Akçaabat", "Keskin"], "dogru": "Gevenne (Muğla)"},
    {"soru": "What does Cem Karaca's 'Resimdeki Gözyaşları' describe?", "secenekler": ["Separation and longing", "Happiness", "School years", "Love of nature"], "dogru": "Separation and longing"},
    {"soru": "Who is 'Tatlı Dillim' in Neşet Ertaş's 'Neredesin Sen'?", "secenekler": ["His beloved / Wife / Mother", "His daughter", "His teacher", "His friend"], "dogru": "His beloved / Wife / Mother"},
    {"soru": "Who wrote the lyrics of Edip Akbayram's 'Aldırma Gönül'?", "secenekler": ["Sabahattin Ali", "Nazım Hikmet", "Ahmed Arif", "Can Yücel"], "dogru": "Sabahattin Ali"},
    {"soru": "Who is the famous artist raised from TRT Youth Choir?", "secenekler": ["Güler Duman", "Barış Manço", "Cem Karaca", "Zeki Müren"], "dogru": "Güler Duman"},
    {"soru": "Who is the minstrel using the pseudonym 'Dertli' in Baglama?", "secenekler": ["Aşık Dertli", "Aşık Veysel", "Karacaoğlan", "Pir Sultan"], "dogru": "Aşık Dertli"},
    {"soru": "What is one of the old names given to Baglama among people?", "secenekler": ["Çöğür", "Guitar", "Viola", "Kanun"], "dogru": "Çöğür"},
    {"soru": "What was the drum called in Thrace in old times?", "secenekler": ["Kos", "Snare", "Battery", "Dümbelek"], "dogru": "Kos"},
    {"soru": "What does 'Surnay', the origin of 'Zurna', mean?", "secenekler": ["Wedding reed / Big whistle", "War trumpet", "Shepherd instrument", "Palace music"], "dogru": "Wedding reed / Big whistle"},
    {"soru": "What is the person playing def called in Anatolia?", "secenekler": ["Dairezen", "Zurnazen", "Neyzen", "Minstrel"], "dogru": "Dairezen"},
    {"soru": "What is the pitch called an octave (8 notes) higher than the tonic in Turkish Folk Music?", "secenekler": ["Tiz Durak", "Yeden", "Güçlü", "Gerdaniye"], "dogru": "Tiz Durak"},
    {"soru": "What is the place famous for Bald Ibises and carrying features of both Barak Culture and Urfa Music on Euphrates bank?", "secenekler": ["Birecik", "Kelkit", "Nizip", "Kahta"], "dogru": "Birecik"}
];
