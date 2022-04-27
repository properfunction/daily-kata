// first century spans from year 1 up to and including year 100, the second century - from year 101 up to and including year 200, etc.
// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year/100)
}