CREATE DATABASE SurveyDB;

USE SurveyDB;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    major VARCHAR(255),
    id_number VARCHAR(50),
    class VARCHAR(50),
    email VARCHAR(255)
);

CREATE TABLE Answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    question_no VARCHAR(50),
    answer TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);