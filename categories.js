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
  'Inception', 'The Matrix', 'Pulp Fiction', 'Forrest Gump', 'The Godfather', 'Titanic', 'Avatar', 'Jurassic Park',
  'Star Wars', 'Harry Potter', 'The Avengers', 'The Lion King', 'Frozen', 'Toy Story', 'Finding Nemo', 'Lord of the Rings',
  'Back to the Future', 'The Dark Knight', 'Shrek', 'Spider-Man'
 ],

 'TV Shows': [
  'Friends', 'The Office', 'Breaking Bad', 'Game of Thrones', 'Stranger Things', 'The Simpsons', 'Family Guy', 'South Park',
  'How I Met Your Mother', 'Seinfeld', 'The Big Bang Theory', 'Sherlock', 'Doctor Who', 'The Crown', 'Modern Family'
 ],

 'Cartoons': [
  'SpongeBob SquarePants', 'Adventure Time', 'Teen Titans', 'The Fairly OddParents', 'Danny Phantom', 'Kim Possible',
  'Phineas and Ferb', 'The Amazing World of Gumball', 'Regular Show', 'Avatar: The Last Airbender', 'The Legend of Korra',
  'Rick and Morty', 'BoJack Horseman', 'Archer', 'Steven Universe'
 ],

 'Famous People': [
  'Elon Musk', 'Taylor Swift', 'Beyoncé', 'Michael Jackson', 'Oprah Winfrey', 'Barack Obama', 'Donald Trump', 'LeBron James',
  'Cristiano Ronaldo', 'Lionel Messi', 'Bill Gates', 'Jeff Bezos', 'Selena Gomez', 'Rihanna', 'Dwayne Johnson', 'Tom Cruise',
  'Brad Pitt', 'Angelina Jolie', 'Keanu Reeves', 'Morgan Freeman', 'Will Smith', 'Adele', 'Lady Gaga', 'Justin Bieber', 'Shakira'
 ],

 'Songs/Music Artists': [
  'Taylor Swift', 'Ariana Grande', 'Billie Eilish', 'Ed Sheeran', 'Drake', 'Beyoncé', 'Kanye West', 'The Beatles', 'Michael Jackson',
  'Queen', 'Rihanna', 'Justin Bieber', 'Katy Perry', 'Adele', 'Post Malone', 'Imagine Dragons', 'Coldplay', 'Shawn Mendes',
  'Harry Styles', 'Bruno Mars', 'Miley Cyrus'
 ],

 'Sports & Athletes': [
  'Soccer', 'Basketball', 'Tennis', 'Golf', 'Baseball', 'Swimming', 'Usain Bolt', 'Serena Williams', 'Roger Federer',
  'Lionel Messi', 'Cristiano Ronaldo', 'LeBron James', 'Michael Jordan', 'Tiger Woods', 'Tom Brady', 'Muhammad Ali', 'Conor McGregor',
  'Simone Biles'
 ],

 'Professions/Jobs': [
  'Doctor', 'Nurse', 'Teacher', 'Pilot', 'Firefighter', 'Police Officer', 'Chef', 'Farmer', 'Scientist', 'Engineer',
  'Lawyer', 'Dentist', 'Artist', 'Musician', 'Actor', 'Writer', 'Athlete', 'Photographer', 'Mechanic', 'Construction Worker', 'Politician', 'Taxi Driver'
 ],

 'Objects': [
  'Chair', 'Table', 'Laptop', 'Smartphone', 'Book', 'Pen', 'Pencil', 'Glasses', 'Backpack', 'Shoes', 'Ball', 'Headphones',
  'Watch', 'Bottle', 'Plate', 'Fork', 'Spoon', 'Knife', 'Umbrella', 'Camera', 'Television', 'Keyboard', 'Mouse', 'Remote Control'
 ],

 'Places': [
  'New York', 'Paris', 'London', 'Tokyo', 'Sydney', 'Los Angeles', 'Rome', 'Disneyland', 'Eiffel Tower', 'Great Wall of China',
  'Pyramids of Giza', 'Colosseum', 'Mount Everest', 'Grand Canyon', 'Niagara Falls', 'Statue of Liberty', 'Times Square', 'Hollywood'
 ],

 'Fantasy & Superheroes': [
  'Spider-Man', 'Batman', 'Superman', 'Iron Man', 'Thor', 'Hulk', 'Wonder Woman', 'The Flash', 'Aquaman', 'Doctor Strange',
  'Captain America', 'Black Panther', 'Scarlet Witch', 'Loki', 'Gandalf', 'Frodo', 'Legolas', 'Aragorn', 'Dumbledore', 'Harry Potter', 'Voldemort'
 ],

 'Video Games': [
  'Minecraft', 'Fortnite', 'Call of Duty', 'Among Us', 'League of Legends', 'World of Warcraft', 'Overwatch', 'Valorant',
  'Pokémon', 'Super Mario', 'Zelda', 'Tetris', 'Sonic the Hedgehog', 'Street Fighter', 'Mortal Kombat', 'Grand Theft Auto', 'The Sims', 'Roblox'
 ],

 'Actions/Verbs': [
  'Running', 'Jumping', 'Dancing', 'Singing', 'Cooking', 'Sleeping', 'Crying', 'Laughing', 'Reading', 'Writing', 'Drawing',
  'Painting', 'Cleaning', 'Driving', 'Flying', 'Swimming', 'Climbing', 'Shopping', 'Eating', 'Drinking', 'Hugging', 'Kissing'
 ],

 'Vehicles/Transport': [
  'Car', 'Bus', 'Train', 'Airplane', 'Bicycle', 'Motorcycle', 'Truck', 'Boat', 'Helicopter', 'Rocket', 'Scooter', 'Subway',
  'Tram', 'Ship', 'Hot Air Balloon', 'Taxi', 'Skateboard'
 ],

 'Household Items': [
  'Bed', 'Sofa', 'Lamp', 'Television', 'Microwave', 'Oven', 'Fridge', 'Vacuum Cleaner', 'Toaster', 'Blender', 'Shower',
  'Bathtub', 'Sink', 'Toilet', 'Fan', 'Heater', 'Mirror', 'Closet'
 ],

 'Fairy Tales & Myths': [
  'Cinderella', 'Snow White', 'Sleeping Beauty', 'Rapunzel', 'Little Red Riding Hood', 'Hansel and Gretel',
  'Beauty and the Beast', 'The Little Mermaid', 'Hercules', 'Zeus', 'Medusa', 'Pegasus', 'King Midas', 'Robin Hood', 'Peter Pan'
 ],

 'Celebrities/Influencers': [
  'MrBeast', 'PewDiePie', 'Logan Paul', 'Jake Paul', 'Kim Kardashian', 'Kylie Jenner', 'Charli D’Amelio', 'Addison Rae',
  'Ninja', 'Pokimane', 'Markiplier', 'Jacksepticeye', 'Zendaya', 'Tom Holland', 'Emma Watson', 'Millie Bobby Brown'
 ],

 'Harry Potter': [
  'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore', 'Severus Snape', 'Lord Voldemort', 'Draco Malfoy',
  'Sirius Black', 'Hagrid', 'Minerva McGonagall', 'Luna Lovegood', 'Neville Longbottom', 'Ginny Weasley', 'Dobby', 'Kreacher',
  'Bellatrix Lestrange', 'Remus Lupin', 'Cedric Diggory', 'Cho Chang'
 ],

 'Star Wars': [
  'Luke Skywalker', 'Darth Vader', 'Han Solo', 'Princess Leia', 'Obi-Wan Kenobi', 'Yoda', 'Chewbacca', 'R2-D2', 'C-3PO',
  'Anakin Skywalker', 'Padmé Amidala', 'Mace Windu', 'Darth Maul', 'Emperor Palpatine', 'Kylo Ren', 'Rey', 'Finn', 'Poe Dameron', 'Grogu', 'Ahsoka Tano'
 ],

 'Marvel': [
  'Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Spider-Man', 'Black Panther', 'Doctor Strange',
  'Scarlet Witch', 'Vision', 'Ant-Man', 'Wasp', 'Loki', 'Falcon', 'Winter Soldier', 'Nick Fury', 'Star-Lord', 'Gamora', 'Drax', 'Rocket Raccoon', 'Groot'
 ],

 'DC': [
  'Batman', 'Superman', 'Wonder Woman', 'The Flash', 'Aquaman', 'Cyborg', 'Green Lantern', 'Joker', 'Harley Quinn', 'Catwoman',
  'Lex Luthor', 'Darkseid', 'Shazam', 'Martian Manhunter', 'Robin', 'Batgirl', 'Penguin', 'Riddler'
 ],

 'Lord of the Rings': [
  'Frodo Baggins', 'Samwise Gamgee', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir', 'Gollum', 'Bilbo Baggins',
  'Galadriel', 'Elrond', 'Saruman', 'Éowyn', 'Faramir', 'Arwen', 'Théoden'
 ],

 'Game of Thrones': [
  'Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister', 'Arya Stark', 'Sansa Stark',
  'Bran Stark', 'Ned Stark', 'Robb Stark', 'Joffrey Baratheon', 'Stannis Baratheon', 'Petyr Baelish', 'Varys', 'Samwell Tarly',
  'Brienne of Tarth', 'The Hound', 'The Mountain', 'Khal Drogo'
 ],

 'Stranger Things': [
  'Eleven', 'Mike Wheeler', 'Dustin Henderson', 'Lucas Sinclair', 'Will Byers', 'Max Mayfield', 'Jim Hopper', 'Joyce Byers',
  'Steve Harrington', 'Nancy Wheeler', 'Jonathan Byers', 'Robin Buckley', 'Billy Hargrove', 'Eddie Munson'
 ],

 'Pokémon': [
  'Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Jigglypuff', 'Meowth', 'Psyduck', 'Snorlax', 'Eevee', 'Mewtwo',
  'Gengar', 'Machamp', 'Magikarp', 'Lapras', 'Dragonite', 'Lucario', 'Greninja'
 ],

 'Disney Classics': [
  'Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Goofy', 'Pluto', 'Snow White', 'Cinderella', 'Aurora', 'Ariel',
  'Belle', 'Jasmine', 'Aladdin', 'Simba', 'Mufasa', 'Scar', 'Timon', 'Pumbaa', 'Hercules', 'Tarzan', 'Mulan', 'Pocahontas',
  'Tinker Bell', 'Peter Pan'
 ],

 'Pixar': [
  'Woody', 'Buzz Lightyear', 'Jessie', 'Rex', 'Mr. Potato Head', 'Slinky Dog', 'Nemo', 'Dory', 'Marlin', 'Bruce',
  'Sulley', 'Mike Wazowski', 'Boo', 'Lightning McQueen', 'Mater', 'Remy', 'Carl Fredricksen', 'Russell', 'Dug', 'WALL-E',
  'EVE', 'Merida', 'Joy', 'Sadness', 'Anger'
 ],

'Famous Athletes': [
  'Usain Bolt', 'Serena Williams', 'Roger Federer', 'Lionel Messi',
  'Cristiano Ronaldo', 'LeBron James', 'Michael Jordan', 'Tiger Woods',
  'Tom Brady', 'Muhammad Ali', 'Simone Biles', 'Michael Phelps',
  'Megan Rapinoe', 'Naomi Osaka', 'Novak Djokovic', 'Conor McGregor',
  'Katie Ledecky', 'Shaquille O’Neal', 'Venus Williams', 'Stephen Curry'
],

'Sports': [
  'Soccer', 'Basketball', 'Baseball', 'American Football', 'Ice Hockey',
  'Rugby', 'Volleyball', 'Handball', 'Cricket', 'Water Polo', 'Field Hockey',
  'Lacrosse', 'Softball', 'Table Tennis', 'Tennis', 'Golf', 'Swimming',
  'Track & Field', 'Gymnastics', 'Boxing', 'Wrestling', 'Martial Arts',
  'Cycling', 'Skiing', 'Snowboarding', 'Figure Skating', 'Diving',
  'Weightlifting', 'Archery', 'Fencing', 'Surfing', 'Skateboarding',
  'Sailing', 'Badminton', 'Squash', 'Rock Climbing', 'Horse Riding', 'Curling'
]

};

