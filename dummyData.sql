-- Dummy Data
INSERT INTO "technologies"
	("name")
VALUES
	('Javascript'), ('Node.js'), ('SQL');
	
INSERT INTO "projects"
	("name", "duration", "description")
VALUES
	('MTG-EQUIP', '2 Week Sprint', 'An awesome app I created to assist players in the game Magic the Gathering!');
	
INSERT INTO "projects-tech-junction"
	("project_id", "technology_id")
VALUES
	(1, 1), (1, 2), (1, 3);