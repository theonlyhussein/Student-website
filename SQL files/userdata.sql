CREATE DATABASE user_profiles;

USE user_profiles;

CREATE TABLE user_profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    courses TEXT,
    sunday_from TIME,
    sunday_to TIME,
    monday_from TIME,
    monday_to TIME,
    tuesday_from TIME,
    tuesday_to TIME,
    wednesday_from TIME,
    wednesday_to TIME,
    thursday_from TIME,
    thursday_to TIME,
    friday_from TIME,
    friday_to TIME,
    saturday_from TIME,
    saturday_to TIME
);