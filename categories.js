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
    'Artists': [
        'Taylor Swift', 'Ariana Grande', 'Billie Eilish', 'Ed Sheeran', 'Drake', 'Beyoncé', 'Kanye West', 'The Beatles', 'Michael Jackson',
        'Queen', 'Rihanna', 'Justin Bieber', 'Katy Perry', 'Adele', 'Post Malone', 'Imagine Dragons', 'Coldplay', 'Shawn Mendes',
        'Harry Styles', 'Bruno Mars', 'Miley Cyrus'
    ],
    'Jobs': [
        'Doctor', 'Nurse', 'Teacher', 'Pilot', 'Firefighter', 'Police Officer', 'Chef', 'Farmer', 'Scientist', 'Engineer',
        'Lawyer', 'Dentist', 'Artist', 'Musician', 'Actor', 'Writer', 'Athlete', 'Photographer', 'Mechanic', 'Construction Worker', 'Politician', 'Taxi Driver'
    ],
    'Objects': [
        'Chair', 'Table', 'Laptop', 'Smartphone', 'Book', 'Pen', 'Pencil', 'Glasses', 'Backpack', 'Shoes', 'Ball', 'Headphones',
        'Watch', 'Bottle', 'Plate', 'Fork', 'Spoon', 'Knife', 'Umbrella', 'Camera', 'Television', 'Keyboard', 'Mouse', 'Remote Control',
        'Bed', 'Sofa', 'Lamp', 'Microwave', 'Oven', 'Fridge', 'Vacuum Cleaner', 'Toaster', 'Blender', 'Shower', 'Bathtub', 'Sink',
        'Toilet', 'Fan', 'Heater', 'Mirror', 'Closet'
    ],
    'Places': [
        'New York', 'Paris', 'London', 'Tokyo', 'Sydney', 'Los Angeles', 'Rome', 'Disneyland', 'Eiffel Tower', 'Great Wall of China',
        'Pyramids of Giza', 'Colosseum', 'Mount Everest', 'Grand Canyon', 'Niagara Falls', 'Statue of Liberty', 'Times Square', 'Hollywood'
    ],
    'Superheroes': [
        'Spider-Man', 'Batman', 'Superman', 'Iron Man', 'Thor', 'Hulk', 'Wonder Woman', 'The Flash', 'Aquaman', 'Doctor Strange',
        'Captain America', 'Black Panther', 'Scarlet Witch', 'Loki', 'Gandalf', 'Frodo', 'Legolas', 'Aragorn', 'Dumbledore', 'Harry Potter', 'Voldemort'
    ],
    'Video Games': [
        'Minecraft', 'Fortnite', 'Call of Duty', 'Among Us', 'League of Legends', 'World of Warcraft', 'Overwatch', 'Valorant',
        'Pokémon', 'Super Mario', 'Zelda', 'Tetris', 'Sonic the Hedgehog', 'Street Fighter', 'Mortal Kombat', 'Grand Theft Auto', 'The Sims', 'Roblox'
    ],
    'Actions': [
        'Running', 'Jumping', 'Dancing', 'Singing', 'Cooking', 'Sleeping', 'Crying', 'Laughing', 'Reading', 'Writing', 'Drawing',
        'Painting', 'Cleaning', 'Driving', 'Flying', 'Swimming', 'Climbing', 'Shopping', 'Eating', 'Drinking', 'Hugging', 'Kissing'
    ],
    'Vehicles': [
        'Car', 'Bus', 'Train', 'Airplane', 'Bicycle', 'Motorcycle', 'Truck', 'Boat', 'Helicopter', 'Rocket', 'Scooter', 'Subway',
        'Tram', 'Ship', 'Hot Air Balloon', 'Taxi', 'Skateboard'
    ],
    'Myths & Legends': [
        'Cinderella', 'Snow White', 'Sleeping Beauty', 'Rapunzel', 'Little Red Riding Hood', 'Hansel and Gretel',
        'Beauty and the Beast', 'The Little Mermaid', 'Hercules', 'Zeus', 'Medusa', 'Pegasus', 'King Midas', 'Robin Hood', 'Peter Pan'
    ],
    'Celebrities': [
        'MrBeast', 'PewDiePie', 'Logan Paul', 'Jake Paul', 'Kim Kardashian', 'Kylie Jenner', 'Charli D’Amelio', 'Addison Rae',
        'Ninja', 'Pokimane', 'Markiplier', 'Jacksepticeye', 'Zendaya', 'Tom Holland', 'Emma Watson', 'Millie Bobby Brown',
        'Elon Musk', 'Taylor Swift', 'Beyoncé', 'Michael Jackson', 'Oprah Winfrey', 'Barack Obama', 'Donald Trump', 'LeBron James',
        'Cristiano Ronaldo', 'Lionel Messi', 'Bill Gates', 'Jeff Bezos', 'Selena Gomez', 'Rihanna', 'Dwayne Johnson', 'Tom Cruise',
        'Brad Pitt', 'Angelina Jolie', 'Keanu Reeves', 'Morgan Freeman', 'Will Smith', 'Adele', 'Lady Gaga', 'Justin Bieber', 'Shakira'
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
    'Disney': [
        'Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Goofy', 'Pluto', 'Snow White', 'Cinderella', 'Aurora', 'Ariel',
        'Belle', 'Jasmine', 'Aladdin', 'Simba', 'Mufasa', 'Scar', 'Timon', 'Pumbaa', 'Hercules', 'Tarzan', 'Mulan', 'Pocahontas',
        'Tinker Bell', 'Peter Pan'
    ],
    'Pixar': [
        'Woody', 'Buzz Lightyear', 'Jessie', 'Rex', 'Mr. Potato Head', 'Slinky Dog', 'Nemo', 'Dory', 'Marlin', 'Bruce',
        'Sulley', 'Mike Wazowski', 'Boo', 'Lightning McQueen', 'Mater', 'Remy', 'Carl Fredricksen', 'Russell', 'Dug', 'WALL-E',
        'EVE', 'Merida', 'Joy', 'Sadness', 'Anger'
    ],
    'Sports': [
        'Soccer', 'Basketball', 'Baseball', 'American Football', 'Ice Hockey', 'Rugby', 'Volleyball', 'Handball', 'Cricket',
        'Water Polo', 'Field Hockey', 'Lacrosse', 'Softball', 'Table Tennis', 'Tennis', 'Golf', 'Swimming', 'Track & Field',
        'Gymnastics', 'Boxing', 'Wrestling', 'Martial Arts', 'Cycling', 'Skiing', 'Snowboarding', 'Figure Skating', 'Diving',
        'Weightlifting', 'Archery', 'Fencing', 'Surfing', 'Skateboarding', 'Sailing', 'Badminton', 'Squash', 'Rock Climbing',
        'Horse Riding', 'Curling', 'Usain Bolt', 'Serena Williams', 'Roger Federer', 'Lionel Messi', 'Cristiano Ronaldo',
        'LeBron James', 'Michael Jordan', 'Tiger Woods', 'Tom Brady', 'Muhammad Ali', 'Simone Biles', 'Michael Phelps',
        'Megan Rapinoe', 'Naomi Osaka', 'Novak Djokovic', 'Conor McGregor', 'Katie Ledecky', 'Shaquille O’Neal', 'Venus Williams', 'Stephen Curry'
    ],
    'Food & Drinks': [
        'Pizza', 'Hamburger', 'Hot Dog', 'French Fries', 'Steak',
        'Fried Chicken', 'Spaghetti', 'Lasagna', 'Mac and Cheese',
        'Grilled Cheese', 'Pancakes', 'Waffles', 'Donuts', 'Croissant',
        'Ice Cream', 'Chocolate Cake', 'Apple Pie', 'Cheeseburger',
        'Tacos', 'Burrito', 'Nachos', 'Sandwich', 'Fish and Chips',
        'BBQ Ribs', 'Mashed Potatoes', 'Caesar Salad', 'Chicken Nuggets',
        'Chili', 'Corn on the Cob', 'Sushi', 'Ramen', 'Fried Rice',
        'Spring Rolls', 'Curry', 'Dumplings', 'Pad Thai',
        'Sweet and Sour Chicken', 'Teriyaki Chicken', 'Pho', 'Kimchi',
        'Coca Cola', 'Pepsi', 'Sprite', 'Fanta', 'Coffee', 'Tea',
        'Milkshake', 'Hot Chocolate', 'Smoothie', 'Lemonade',
        'Bubble Tea', 'Beer', 'Wine', 'Champagne', 'Whiskey', 'Cocktail',
        'Margarita', 'Mojito', 'Gin and Tonic', 'Espresso', 'Latte',
        'Cappuccino', 'Energy Drink', 'Water', 'Orange Juice',
        'Apple Juice', 'Milk', 'Pasta Salad', 'Garlic Bread', 'Omelette',
        'Bagel', 'Brownie', 'Cupcake', 'Popsicle', 'Churros',
        'Popcorn', 'Pretzel', 'Cheesecake', 'Pumpkin Pie',
        'Banana Split', 'Strawberry Shortcake', 'Red Velvet Cake',
        'Carrot Cake', 'Lemon Tart', 'Chocolate Mousse', 'Tiramisu',
        'Crepe', 'Gelato', 'Macaron', 'Truffle', 'Eclair',
        'Cinnamon Roll', 'Muffin', 'Sundae', 'Fudge', 'Candy Cane',
        'Marshmallow', 'Lollipop', 'Gingerbread', 'Jelly Beans',
        'Cotton Candy', 'Fruit Salad', 'Pudding', 'Baklava',
        'Big Mac', 'Whopper', 'KFC Bucket', 'Subway Sandwich',
        'Taco Bell Crunchwrap', 'Dominos Pizza', 'Pringles', 'Doritos',
        'Cheetos', 'Twinkie', 'Oreo', 'KitKat', 'Snickers',
        'M&M\'s', 'Skittles', 'Pop-Tart', 'Goldfish Crackers',
        'Nacho Cheese Dip', 'French Baguette',
        'Nutella', 'Milka Chocolate', 'Toblerone', 'Lindt Chocolate',
        'Ferrero Rocher', 'Kinder Surprise', 'Kinder Bueno',
        'Ritter Sport', 'Haribo Gummy Bears', 'Stroopwafel',
        'Speculoos', 'Digestive Biscuits', 'Shortbread',
        'Jaffa Cakes', 'Maltesers', 'Smarties', 'Bounty Bar',
        'Twix', 'Mars Bar', 'Lion Bar', 'Aero Chocolate',
        'After Eight', 'Galaxy Chocolate', 'Cadbury Dairy Milk',
        'Raffaello', 'Werther\'s Original', 'Chupa Chups',
        'Lay\'s Chips', 'Walkers Crisps', 'Paprika Chips',
        'Salt & Vinegar Crisps', 'Pocky', 'Tutti Frutti Candy',
        'Marzipan', 'Black Forest Cake', 'Sachertorte', 'Crème Brûlée',
        'Profiterole', 'Daim Bar', 'Kinder Maxi', 'Kinder Country',
        'Smarties Ice Cream Cone', 'Magnum Ice Cream', 'Cornetto',
        'Viennetta', 'Choco Prince Biscuits', 'Calzone', 'Panna Cotta'
],
    'Act It Out': [
        'Air Guitar', 'Airplane Takeoff', 'Applauding', 'Archer Shooting', 'Baking a Cake',
        'Balancing on One Foot', 'Biting an Apple', 'Blowing a Kiss', 'Blowing Balloons',
        'Blowing Bubbles', 'Boxing', 'Brushing Hair', 'Brushing Teeth', 'Building a Sandcastle',
        'Building a Snowman', 'Calling on the Phone', 'Carrying Something Heavy', 'Catching a Ball',
        'Catching a Butterfly', 'Catching Fish', 'Clapping', 'Climbing a Ladder', 'Climbing Stairs',
        'Coughing', 'Crawling', 'Crying', 'Cutting Paper with Scissors', 'Cutting Vegetables',
        'Dancing', 'Digging with a Shovel', 'Diving', 'Drinking Coffee', 'Drinking Water',
        'Driving a Car', 'Driving a Motorcycle', 'Eating Ice Cream', 'Eating Pizza',
        'Eating Popcorn', 'Eating Soup', 'Fainting', 'Falling Asleep', 'Fencing', 'Fishing',
        'Flying a Kite', 'Flying an Airplane', 'Football Kick', 'Gardening', 'Golf Swing',
        'Hair Brushing', 'Hammering', 'Hitchhiking', 'Holding a Baby', 'Horseback Riding',
        'Hugging', 'Hula Hooping', 'Ice Skating', 'Juggling', 'Jumping Jacks', 'Jumping Rope',
        'Karate Chop', 'Kicking a Ball', 'Knocking on a Door', 'Ladder Climbing', 'Laughing',
        'Licking an Ice Cream Cone', 'Lifting Weights', 'Listening to Music',
        'Making a Bed', 'Making a Heart with Hands', 'Making a Snow Angel',
        'Meditating', 'Miming a Box', 'Miming a Wall', 'Opening a Door',
        'Opening a Present', 'Painting a Fence', 'Painting a Picture', 'Peeling a Banana',
        'Petting a Cat', 'Petting a Dog', 'Picking Apples', 'Picking Flowers',
        'Planting a Tree', 'Playing Badminton', 'Playing Baseball', 'Playing Basketball',
        'Playing Cards', 'Playing Chess', 'Playing Drums', 'Playing Flute',
        'Playing Guitar', 'Playing Piano', 'Playing Soccer', 'Playing Table Tennis',
        'Playing Trombone', 'Playing Trumpet', 'Playing Violin', 'Playing Volleyball',
        'Playing with a Yo-Yo', 'Praying', 'Pulling a Rope', 'Push Ups',
        'Reading a Book', 'Reading a Newspaper', 'Riding a Bike', 'Riding a Camel',
        'Riding a Horse', 'Riding a Motorcycle', 'Riding an Elevator', 'Riding an Escalator',
        'Rollerblading', 'Rowing a Boat', 'Running', 'Saluting', 'Sawing Wood',
        'Scared and Hiding', 'Screaming', 'Sewing', 'Shaking Hands', 'Shaving',
        'Shopping', 'Shooting a Basketball', 'Shooting a Bow and Arrow', 'Shooting a Gun',
        'Showering', 'Singing', 'Sitting Down', 'Skateboarding', 'Skiing', 'Skipping',
        'Sleeping', 'Smelling Flowers', 'Sneezing', 'Snoring', 'Snowball Fight',
        'Surfing', 'Swimming', 'Sword Fighting', 'Taking a Photo', 'Taking a Selfie',
        'Talking on the Phone', 'Tasting Food', 'Throwing a Ball', 'Throwing a Frisbee',
        'Throwing Dice', 'Throwing Up', 'Tickling Someone', 'Tightrope Walking',
        'Typing on a Keyboard', 'Vacuuming', 'Waking Up', 'Walking a Dog',
        'Washing Clothes', 'Washing Dishes', 'Washing Hands', 'Watering Plants',
        'Weightlifting', 'Whistling', 'Waving', 'Winking', 'Writing a Letter',
        'Writing on a Blackboard', 'Yawning', 'Yoga Pose'
        ]

};
