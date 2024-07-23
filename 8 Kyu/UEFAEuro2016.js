function uefaEuro2016(teams, scores){
  // P Array of strings for team names and an array of integers for the score
  // R A string with the corresponding result
  // E uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
  //   uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
  //   uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
  // P Use conditional to evaluate which string template to return and use a template literal to insert team names and scores
  if(scores[0] > scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  } else if(scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}