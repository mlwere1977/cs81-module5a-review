/*Name: Mukwaya Lwere
Class: CS 81 JavaScript
Module 5 Assignment 5A: Code Review
Date: 07/09/2025
*/
/*
  hobbyTracker.js
  ---------------------------
This file facilitates the weekly tracking of Mukwaya's and her friends' interests.
  It records the hobbies pursued daily, the amount of time spent, and the mood of each session.
  To analyze the data, the code makes use of higher-order functions like map, reduce, and filter.
  Simple, approachable language is used to explain every function and significant line.
*/

// An assortment of items indicating the hobby, duration, and mood of each daily activity.
const weeklyHobbyLog = [
  { day: "Monday", hobby: "sketching", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "cycling", minutes: 45, mood: "energized" },
  { day: "Thursday", hobby: "sketching", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function determines the weekly total time spent on all hobbies.
// It adds up the minutes from each session using a higher-order function called reduce.
function getTotalHobbyTime(log) {
  // We add the minutes from each session to the sum, which starts at 0.
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// This function lists all of Mukwaya's unusual pastimes from the previous week.
// It creates an array of only the hobby names using map, then eliminates duplicates using set.
function getUniqueHobbies(log) {
  // map pulls out the hobby from each entry
  const hobbyNames = log.map(entry => entry.hobby);
  // Set removes duplicates, and we turn it back into an array
  return [...new Set(hobbyNames)];
}

// This function locates every hobby session that lasted more than a predetermined amount of time.
// Only sessions longer than minMinutes are retained by using filter, a higher-order function.
function getLongHobbySessions(log, minMinutes) {
  // Only sessions with minutes greater than minMinutes are kept
  return log.filter(entry => entry.minutes > minMinutes);
}

// The number of sessions with a particular mood is counted by this function. 
// It counts the sessions after using a filter to keep only those that have the desired mood.
function countSessionsByMood(log, moodType) {
  // The length of the filtered array tells us how many sessions matched the mood
  return log.filter(entry => entry.mood === moodType).length;
}

// --- Output Section ---

// Show the total time spent on hobbies this week
console.log("Total time spent:", getTotalHobbyTime(weeklyHobbyLog), "minutes");

// List all the unique hobbies Mukwaya enjoyed this week
console.log("Unique hobbies:", getUniqueHobbies(weeklyHobbyLog));

// Show all sessions that lasted more than 30 minutes
console.log("Sessions longer than 30 min:", getLongHobbySessions(weeklyHobbyLog, 30));

// Count how many sessions were done in a relaxed mood
console.log("Number of relaxed sessions:", countSessionsByMood(weeklyHobbyLog, "relaxed"));

// --- New Test: Count how many sessions were done in a focused mood ---
console.log("Number of focused sessions:", countSessionsByMood(weeklyHobbyLog, "focused"));

/*
  Suggestion for Improvement:
  ---------------------------
  To clarify its purpose, the function getLongHobbySessions could be renamed filterHobbySessionsByDuration.
  A function that returns the most popular pastime or the average number of minutes spent on each session could be an additional feature.
*/
