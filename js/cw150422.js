// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum 
// of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const arrayMadness = (a, b) => a.reduce((acc, c) => acc + c ** 2, 0) > b.reduce((acc, c) => acc + c ** 3, 0)

