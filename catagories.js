// HOW TO ADD NEW CATEGORIES:
// 1. Add a new entry to the 'categories' object below.
// 2. The key is the category name (e.g., 'New Category').
// 3. The value is an array of strings, with each string being a word or phrase.
// 4. Make sure to add a comma after the closing bracket ] of the previous category.
// Example:
//     'Pokémon': [ ... ],
//     'New Category': ['Word 1', 'Word 2', 'Word 3'],
// The app will automatically create a new button for your category!

const categories = {
    'Movies': [
        'Times Square', 'Las Vegas', 'Hollywood', 'The White House', 'Buckingham Palace', 'The Moon', 'Mars', 'The Beach',
        'The Jungle', 'The Desert', 'Niagara Falls', 'Stonehenge', 'Mount Fuji'
    ],
    'Fantasy & Superheroes': [
        'Spider-Man', 'Batman', 'Superman', 'Wonder Woman', 'Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow',
        'Doctor Strange', 'Wolverine', 'Deadpool', 'Gandalf', 'Frodo Baggins', 'Legolas', 'Harry Potter', 'Hermione Granger',
        'Ron Weasley', 'Darth Vader', 'Yoda', 'Luke Skywalker', 'Princess Leia', 'Obi-Wan Kenobi', 'Thanos', 'Loki',
        'Aquaman', 'Flash', 'Green Lantern'
    ],
    'Video Games': [
        'Minecraft', 'Fortnite', 'Pokémon', 'Call of Duty', 'Super Mario', 'The Legend of Zelda', 'Among Us',
        'League of Legends', 'World of Warcraft', 'Overwatch', 'Counter-Strike', 'Roblox', 'Angry Birds', 'Tetris',
        'Pac-Man', 'Donkey Kong', 'Street Fighter', 'Mortal Kombat', 'Halo', 'Final Fantasy', 'Sonic the Hedgehog',
        'Grand Theft Auto', 'Elden Ring', 'Dark Souls', 'Animal Crossing', 'Clash of Clans'
    ],
    'Disney / Pixar Characters': [
        'Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Goofy', 'Pluto', 'Simba', 'Nala', 'Scar', 'Mufasa', 'Aladdin',
        'Jasmine', 'Genie', 'Ariel', 'Ursula', 'Belle', 'Beast', 'Cinderella', 'Snow White', 'Elsa', 'Anna', 'Olaf',
        'Kristoff', 'Rapunzel', 'Flynn Rider', 'Woody', 'Buzz Lightyear', 'Jessie', 'Mr. Incredible', 'Sully', 'Mike Wazowski'
    ],
    'Actions / Verbs': [
        'Running', 'Jumping', 'Dancing', 'Singing', 'Cooking', 'Sleeping', 'Eating', 'Drinking', 'Climbing', 'Swimming',
        'Flying', 'Crying', 'Laughing', 'Walking', 'Talking', 'Painting', 'Writing', 'Reading', 'Driving', 'Shopping',
        'Typing', 'Cleaning', 'Baking', 'Fishing', 'Hunting', 'Drawing'
    ],
    'Vehicles / Transport': [
        'Car', 'Bus', 'Train', 'Airplane', 'Helicopter', 'Boat', 'Bicycle', 'Motorcycle', 'Submarine', 'Truck',
        'Scooter', 'Tram', 'Rocket', 'Spaceship', 'Hot Air Balloon', 'Skateboard', 'Rollerblades', 'Taxi', 'Ambulance',
        'Police Car', 'Fire Truck', 'Jet Ski', 'Bulldozer', 'Tank'
    ],
    'Household Items': [
        'Fridge', 'Microwave', 'Oven', 'Toaster', 'Blender', 'Washing Machine', 'Dryer', 'Vacuum Cleaner', 'Broom',
        'Sponge', 'Soap', 'Shampoo', 'Towel', 'Blanket', 'Pillow', 'Curtains', 'Rug', 'TV Remote', 'Light Switch',
        'Fan', 'Heater', 'Iron', 'Hair Dryer', 'Toilet Paper'
    ],
    'Fairy Tales & Myths': [
        'Cinderella', 'Snow White', 'Sleeping Beauty', 'Rapunzel', 'Little Red Riding Hood', 'Hansel and Gretel',
        'Rumpelstiltskin', 'Beauty and the Beast', 'The Little Mermaid', 'The Three Little Pigs', 'Hercules', 'Zeus',
        'Poseidon', 'Hades', 'Medusa', 'Achilles', 'King Arthur', 'Merlin', 'Robin Hood', 'Peter Pan', 'Tinker Bell',
        'Pinocchio', 'Jack and the Beanstalk'
    ],
    'Celebrities / Influencers': [
        'MrBeast', 'PewDiePie', 'Ninja', 'Charli D’Amelio', 'Addison Rae', 'James Charles', 'Emma Chamberlain',
        'Logan Paul', 'Jake Paul', 'Markiplier', 'Jacksepticeye', 'Pokimane', 'Shroud', 'Tfue', 'Dream', 'Corpse Husband',
        'Lilly Singh', 'Zoella', 'DanTDM', 'KSI', 'Shane Dawson', 'David Dobrik'
    ],
    'Harry Potter': [
        'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore', 'Severus Snape', 'Lord Voldemort',
        'Draco Malfoy', 'Sirius Black', 'Rubeus Hagrid', 'Minerva McGonagall', 'Neville Longbottom', 'Luna Lovegood',
        'Ginny Weasley', 'Fred Weasley', 'George Weasley', 'Bellatrix Lestrange', 'Dobby', 'Kreacher', 'Hogwarts',
        'Diagon Alley', 'Hogsmeade', 'Quidditch', 'Sorting Hat', 'Griffindor', 'Slytherin'
    ],
    'Star Wars': [
        'Luke Skywalker', 'Darth Vader', 'Princess Leia', 'Han Solo', 'Chewbacca', 'Yoda', 'Obi-Wan Kenobi',
        'R2-D2', 'C-3PO', 'Anakin Skywalker', 'Padmé Amidala', 'Rey', 'Finn', 'Poe Dameron', 'Kylo Ren', 'Palpatine',
        'Boba Fett', 'Jango Fett', 'Mace Windu', 'Lando Calrissian', 'Jabba the Hutt', 'Death Star', 'Millennium Falcon',
        'Tatooine', 'Endor', 'Hoth'
    ],
    'Marvel': [
        'Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Spider-Man', 'Doctor Strange',
        'Black Panther', 'Scarlet Witch', 'Vision', 'Ant-Man', 'Wasp', 'Captain Marvel', 'Falcon', 'Winter Soldier',
        'Star-Lord', 'Gamora', 'Groot', 'Rocket Raccoon', 'Drax', 'Thanos', 'Loki', 'Ultron', 'Nick Fury'
    ],
    'DC Superheroes': [
        'Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman', 'Cyborg', 'Green Lantern', 'Robin', 'Nightwing',
        'Batgirl', 'Catwoman', 'Joker', 'Harley Quinn', 'Lex Luthor', 'Penguin', 'Riddler', 'Two-Face', 'Poison Ivy',
        'Darkseid', 'Shazam', 'Black Adam', 'Supergirl', 'Martian Manhunter'
    ],
    'Lord of the Rings': [
        'Frodo Baggins', 'Samwise Gamgee', 'Merry Brandybuck', 'Pippin Took', 'Aragorn', 'Legolas', 'Gimli', 'Boromir',
        'Gandalf', 'Saruman', 'Sauron', 'Gollum', 'Elrond', 'Arwen', 'Galadriel', 'Éowyn', 'Faramir', 'The Shire',
        'Mordor', 'Mount Doom', 'Rivendell', 'Helm’s Deep', 'Minas Tirith'
    ],
    'Game of Thrones': [
        'Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister', 'Arya Stark',
        'Sansa Stark', 'Bran Stark', 'Eddard Stark', 'Khal Drogo', 'Jorah Mormont', 'Brienne of Tarth', 'The Hound',
        'The Mountain', 'Petyr Baelish', 'Varys', 'Samwell Tarly', 'Robb Stark', 'Stannis Baratheon', 'Melisandre',
        'Night King', 'White Walker', 'Winterfell', 'King’s Landing'
    ],
    'Stranger Things': [
        'Eleven', 'Mike Wheeler', 'Dustin Henderson', 'Lucas Sinclair', 'Will Byers', 'Max Mayfield', 'Jim Hopper',
        'Joyce Byers', 'Steve Harrington', 'Nancy Wheeler', 'Jonathan Byers', 'Billy Hargrove', 'Robin Buckley',
        'Demogorgon', 'Mind Flayer', 'Vecna', 'Hawkins', 'The Upside Down', 'Hawkins Lab'
    ],
    'Pokémon': [
        'Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Charmander', 'Jigglypuff', 'Meowth', 'Mewtwo', 'Eevee',
        'Snorlax', 'Gengar', 'Psyduck', 'Magikarp', 'Dragonite', 'Lapras', 'Lucario', 'Greninja', 'Ash Ketchum',
        'Misty', 'Brock', 'Team Rocket', 'Pokéball', 'Pokédex', 'Gym Badge'
    ]
};
