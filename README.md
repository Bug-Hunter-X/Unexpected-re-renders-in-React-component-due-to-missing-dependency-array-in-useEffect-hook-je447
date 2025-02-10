# Unexpected re-renders in React component due to missing dependency array in useEffect hook

This repository demonstrates a common React bug involving the `useEffect` hook and missing dependency arrays.  The bug leads to unexpected re-renders and can negatively impact performance.

## Bug Description

The `useEffect` hook in the `bug.js` file lacks a dependency array. This causes the effect to run after every render, potentially leading to infinite loops or other unexpected behavior.  The `console.log` statements highlight the excessive re-renders.

## Solution

The `bugSolution.js` file corrects the issue by providing the appropriate dependency array to the `useEffect` hook.  This ensures the effect runs only when necessary, improving performance and preventing unwanted behavior.

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the excessive console logs in the browser's developer console (bug.js).  Then, switch to bugSolution.js to see the correct behavior.  