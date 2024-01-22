const username=document.getElementById("username");
const saveScoreBtn =document.getElementById("saveScoreBtn");
const finalscore=document.getElementById("finalscore");
const mostRecentScore=localStorage.getItem("mostRecentScore");

const highScores=JSON.parse(localStorage.getItem("highScores"))||[];

const MAX_HIGH_SCORES=5;

finalscore.innerText=mostRecentScore;
username.addEventListener("keyup",()=>{
	saveScoreBtn.disabled = !username.value;
});
saveHighScore=e=>{
	console.log("clicked the save button!");
	e.preventDefault();
const score={
	name:username.value
};

highScores.push(score);
highScores.splice(5);

localStorage.setItem("highScores",JSON.stringify(highScores));
window.location.assign("");

};