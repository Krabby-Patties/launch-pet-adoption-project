INSERT INTO pet_types (id, type, description, img_url_random_animal) 
VALUES(1, 'two-legged', 'These are all the two legged creatures ready to be adopted', 'https://randomurl.com');

INSERT INTO pet_types (id, type, description, img_url_random_animal) 
VALUES(2, 'four-legged', 'These are all the four legged creatures ready to be adopted', 'https://randomurl.com');

INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id)
VALUES ('Moodle', 'http://randomurl.com', 10, true, 'Adoption story goes here', 'Adopted', 1);

INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id)
VALUES ('DisneyPrincess', 'http://randomurl.com', 8, true, 'Loves to sing for us', 'Adopted', 1);

INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id)
VALUES ('Taco', 'http://randomurl.com', 4, true, 'Dan would prefer to eat this one', 'Adopted', 2);