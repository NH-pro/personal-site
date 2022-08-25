-- Delete Tables
DROP TABLE "projects-tech-junction";
DROP TABLE "technologies";
DROP TABLE "projects";

-- Database Setup
CREATE TABLE "technologies" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (255)
);

CREATE TABLE "projects" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (255),
	"duration" VARCHAR (255),
	"description" TEXT
);

CREATE TABLE "projects-tech-junction" (
	"id" SERIAL PRIMARY KEY,
	"project_id" INTEGER REFERENCES "projects",
	"technology_id" INTEGER REFERENCES "technologies"
);
