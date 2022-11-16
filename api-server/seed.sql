INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Qatar','0','2022-11-20');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Ecuador','0','2022-11-20');

INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('England','0','2022-11-21');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Iran','0','2022-11-21');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Senegal','0','2022-11-21');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Netherlands','0','2022-11-21');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('USA','0','2022-11-21');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Whales','0','2022-11-21');


INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Argentina','0','2022-11-22');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Saudi Arabia','0','2022-11-22');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Denmark','0','2022-11-22');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Tunisia','0','2022-11-22');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Mexico','0','2022-11-22');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Poland','0','2022-11-22');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('France','0','2022-11-22');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Australia','0','2022-11-22');


INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Morocco','0','2022-11-23');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Croatia','0','2022-11-23');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Germany','0','2022-11-23');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Japan','0','2022-11-23');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Spain','0','2022-11-23');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Costa Rica','0','2022-11-23');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Belgium','0','2022-11-23');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Canada','0','2022-11-23');


INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Switzerland','0','2022-11-24');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Cameroon','0','2022-11-24');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Uruguay','0','2022-11-24');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('South Korea','0','2022-11-24');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Portugal','0','2022-11-24');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Ghana','0','2022-11-24');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Brazil','0','2022-11-24');
INSERT INTO teams (country,world_cups_won,firstMatch) VALUES ('Serbia','0','2022-11-24');

-- stadiums

INSERT INTO venues (name,capacity,firstMatch) VALUES ('Lusail','80000','2022-11-22');
INSERT INTO venues (name,capacity,firstMatch) VALUES ('Al Bayt Stadium','60000','2022-11-20');
INSERT INTO venues (name,capacity,firstMatch) VALUES ('Al Janoub Stadium','40000','2022-11-22');
INSERT INTO venues (name,capacity,firstMatch) VALUES ('Education City','40000','2022-11-22');
INSERT INTO venues (name,capacity,firstMatch) VALUES ('Khalifa International Stadium','40000','2022-11-21');
INSERT INTO venues (name,capacity,firstMatch) VALUES ('974 Stadium','40000','2022-11-22');
INSERT INTO venues (name,capacity,firstMatch) VALUES ('Ahmad Bin Ali Stadium','40000','2022-11-21');
INSERT INTO venues (name,capacity,firstMatch) VALUES ('Al Thumama','40000','2022-11-21');

--matches

INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('Al Bayt Stadium','Qatar','Ecuador','2022-11-20');
INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('Khalifa International Stadium','England','Iran','2022-11-21');
INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('Ahmad Bin Ali Stadium','USA','Wales','2022-11-21');
INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('Al Thumama','Senegal','Netherlands','2022-11-21');
INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('Lusail','Argentina','Saudi Arabia','2022-11-22');
INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('Al Janoub Stadium','France','Australia','2022-11-22');
INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('Education City','Denmark','Tunisia','2022-11-22');
INSERT INTO firstMatches (venue,homeTeam,awayTeam,date) VALUES ('974 Stadium','Mexico','Poland','2022-11-22');

--champions--

INSERT INTO predictions (name,team) VALUES ('Jou Correa','Argentina');