DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS venues CASCADE;
DROP TABLE IF EXISTS firstMatches CASCADE;
DROP TABLE IF EXISTS predictions CASCADE;

CREATE TABLE teams(
  id serial,
  country varchar,
  world_cups_won int,
  firstMatch date
);

CREATE TABLE venues(
  id serial,
  name varchar,
  capacity int,
  firstMatch date
);


CREATE TABLE firstMatches(
  id serial,
  venue varchar,
  homeTeam varchar,
  awayTeam varchar,
  date date
);

CREATE TABLE predictions(
  id serial,
  name varchar,
  team varchar
);


