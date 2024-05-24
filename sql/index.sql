CREATE DATABASE IF NOT EXISTS human_friends;

USE human_friends;

CREATE TABLE type_animals (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  name VARCHAR(30)
);

CREATE TABLE dogs (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type_animals (id) ON DELETE CASCADE
);

CREATE TABLE cats (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type_animals (id) ON DELETE CASCADE
);

CREATE TABLE hamsters (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type_animals (id) ON DELETE CASCADE
);

CREATE TABLE horses (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type_animals (id) ON DELETE CASCADE
);

CREATE TABLE camels (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type_animals (id) ON DELETE CASCADE
);

CREATE TABLE donkeys (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (type_id) REFERENCES type_animals (id) ON DELETE CASCADE
);

INSERT INTO
  human_friends.type_animals (name)
VALUES
  ("pet"),
  ("pack");

INSERT INTO
  human_friends.dogs (name, commands, birthday, type_id)
VALUES
  ('Max', 'Sit, Stay, Fetch', '2019-02-10', 1),
  (
    'Daisy',
    'Roll over, Shake hands',
    '2018-06-15',
    1
  ),
  ('Rocky', 'Play dead, Jump', '2020-01-05', 1),
  ('Molly', 'Speak, Catch', '2017-09-20', 1),
  ('Cooper', 'Bark, Spin', '2016-12-08', 1);

INSERT INTO
  human_friends.cats (name, commands, birthday, type_id)
VALUES
  ('Whiskers', 'Purr, Pounce', '2018-04-25', 1),
  ('Luna', 'Groom, Sleep', '2019-07-10', 1),
  ('Simba', 'Climb, Hunt', '2020-03-17', 1),
  ('Bella', 'Stretch, Chase', '2017-11-30', 1),
  ('Oliver', 'Meow, Play', '2016-09-12', 1);

INSERT INTO
  human_friends.hamsters (name, commands, birthday, type_id)
VALUES
  ('Peanut', 'Run on the wheel', '2021-01-03', 1),
  ('Snowball', 'Hide food, Burrow', '2022-02-14', 1),
  ('Ginger', 'Climb tubes', '2020-11-20', 1),
  ('Nibbles', 'Cheek pouches, Dig', '2019-10-05', 1),
  ('Squeaky', 'Gnaw, Explore', '2023-04-01', 1);

INSERT INTO
  human_friends.horses (name, commands, birthday, type_id)
VALUES
  ('Thunder', 'Gallop, Jump', '2015-08-20', 2),
  ('Starlight', 'Trot, Lunge', '2016-06-10', 2),
  ('Willow', 'Dressage, Canter', '2017-03-15', 2),
  (
    'Blaze',
    'Trail riding, Vaulting',
    '2018-11-25',
    2
  ),
  (
    'Dakota',
    'Western riding, Reining',
    '2019-09-05',
    2
  );

INSERT INTO
  human_friends.camels (name, commands, birthday, type_id)
VALUES
  (
    'Sahara',
    'Carry loads, Long trek',
    '2014-12-01',
    2
  ),
  (
    'Ali',
    'Desert navigation, Endurance',
    '2015-10-18',
    2
  ),
  (
    'Jasmine',
    'Pack saddle, Camel race',
    '2016-07-24',
    2
  ),
  (
    'Casper',
    'Camel ride, Milk production',
    '2017-04-09',
    2
  ),
  (
    'Zara',
    'Hump storage, Adaptation',
    '2018-02-15',
    2
  );

INSERT INTO
  human_friends.donkeys (name, commands, birthday, type_id)
VALUES
  ('Donkey', 'Carry load, Braying', '2019-08-12', 2),
  ('Eeyore', 'Grazing, Guarding', '2020-05-05', 2),
  ('Dora', 'Plowing, Companion', '2021-02-20', 2),
  ('Bruno', 'Stubbornness, Towing', '2022-09-10', 2),
  (
    'Rusty',
    'commands training, Therapy',
    '2023-06-05',
    2
  );

DROP TABLE human_friends.camels;

CREATE TABLE horses_and_donkeys (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  species VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO
  horses_and_donkeys (name, commands, birthday, type_id, species)
SELECT
  name,
  commands,
  birthday,
  type_id,
  'Horse' AS species
FROM
  horses;

INSERT INTO
  horses_and_donkeys (name, commands, birthday, type_id, species)
SELECT
  name,
  commands,
  birthday,
  type_id,
  'Donkey' AS species
FROM
  donkeys;

CREATE TABLE young_animals (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  species VARCHAR(20) NOT NULL,
  age_months INT NOT NULL
);

INSERT INTO
  young_animals (name, species, age_months)
SELECT
  name,
  'Dog' AS species,
  TIMESTAMPDIFF(MONTH, birthday, CURDATE()) AS age_months
FROM
  dogs
WHERE
  birthday <= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
  AND birthday >= DATE_SUB(CURDATE(), INTERVAL 3 YEAR);

INSERT INTO
  young_animals (name, species, age_months)
SELECT
  name,
  'Cat' AS species,
  TIMESTAMPDIFF(MONTH, birthday, CURDATE()) AS age_months
FROM
  cats
WHERE
  birthday <= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
  AND birthday >= DATE_SUB(CURDATE(), INTERVAL 3 YEAR);

INSERT INTO
  young_animals (name, species, age_months)
SELECT
  name,
  'Donkey' AS species,
  TIMESTAMPDIFF(MONTH, birthday, CURDATE()) AS age_months
FROM
  donkeys
WHERE
  birthday <= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
  AND birthday >= DATE_SUB(CURDATE(), INTERVAL 3 YEAR);

INSERT INTO
  young_animals (name, species, age_months)
SELECT
  name,
  'Hamster' AS species,
  TIMESTAMPDIFF(MONTH, birthday, CURDATE()) AS age_months
FROM
  hamsters
WHERE
  birthday <= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
  AND birthday >= DATE_SUB(CURDATE(), INTERVAL 3 YEAR);

INSERT INTO
  young_animals (name, species, age_months)
SELECT
  name,
  'Horse' AS species,
  TIMESTAMPDIFF(MONTH, birthday, CURDATE()) AS age_months
FROM
  horses
WHERE
  birthday <= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
  AND birthday >= DATE_SUB(CURDATE(), INTERVAL 3 YEAR);

CREATE TABLE all_animals (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
  name VARCHAR(50) NOT NULL,
  commands VARCHAR(100) NOT NULL,
  birthday DATE NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  source_table VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO
  all_animals (
    name,
    commands,
    birthday,
    type_id,
    source_table
  )
SELECT
  name,
  commands,
  birthday,
  type_id,
  'dogs' AS source_table
FROM
  dogs;

INSERT INTO
  all_animals (
    name,
    commands,
    birthday,
    type_id,
    source_table
  )
SELECT
  name,
  commands,
  birthday,
  type_id,
  'cats' AS source_table
FROM
  cats;

INSERT INTO
  all_animals (
    name,
    commands,
    birthday,
    type_id,
    source_table
  )
SELECT
  name,
  commands,
  birthday,
  type_id,
  'donkeys' AS source_table
FROM
  donkeys;

INSERT INTO
  all_animals (
    name,
    commands,
    birthday,
    type_id,
    source_table
  )
SELECT
  name,
  commands,
  birthday,
  type_id,
  'hamsters' AS source_table
FROM
  hamsters;

INSERT INTO
  all_animals (
    name,
    commands,
    birthday,
    type_id,
    source_table
  )
SELECT
  name,
  commands,
  birthday,
  type_id,
  'horses' AS source_table
FROM
  horses;