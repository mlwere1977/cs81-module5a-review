# RESULTS

Project: Hobby Tracker  
Author: Mukwaya Lwere  
Class: CS 81 JavaScript  
Assignment: Module 6  
Date: 07/09/2025

Mukwaya Lwere's hobbies are tracked throughout the week by this project, which uses JavaScript higher-order functions to analyze the data. The application finds sessions longer than 30 minutes, counts the frequency of specific moods, lists unique hobbies, and computes the total amount of time spent on hobbies.

Sample output from running the program:

- Total time spent: 155 minutes  
- Unique hobbies: [ 'sketching', 'reading', 'cycling' ]  
- Sessions longer than 30 min: [ { day: 'Wednesday', hobby: 'cycling', minutes: 45, mood: 'energized' }, { day: 'Friday', hobby: 'reading', minutes: 35, mood: 'calm' } ]  
- Number of relaxed sessions: 1  
- Number of focused sessions: 1

- Demonstrated features include using `map` and `Set` to identify unusual hobbies, `filter` to choose lengthy sessions, `reduce` to add up minutes, and another `filter` to count moods. Focused sessions were counted using a new test.

- Rename `getLongHobbySessions` to `filterHobbySessionsByDuration` for clarity, include a function to determine the most popular hobby or average session length, and enable users to add new sessions interactively.

Reflection:  
- I discovered how writing concise comments makes code easier to read and how JavaScript's higher-order functions streamline data analysis. 
- Commenting on each line made it easier to understand how to use `Set` and the spread operator to extract unique values from an array, which was the most confusing part.
