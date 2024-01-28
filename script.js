
let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const generateCompChoice = () => {
    let options= ["rock","paper","scissor"];
    compChoice=Math.floor(Math.random()*3);
    return options[compChoice]
    
}


const showWinner = (userWin) => {
    if (userWin===true){
        userScore++;
        console.log("YOU WIN");
        msg.innerText="you win!"
        msg.style.backgroundColor="green";
        user.innerText=userScore;
    }else{
        compScore++;
        console.log("COMPUTER WIN");
        msg.innerText="you lose!";
        msg.style.backgroundColor="red";
        comp.innerText=compScore;
    }
}

const playGame = (choiceId) => {
    let x=choiceId;
    console.log("User Choice :",choiceId);
    const compChoice=generateCompChoice();
    console.log("Computer Choice :",compChoice);

    if (x===compChoice){
        console.log("match draw");
        msg.innerText="Match draw";
        msg.style.backgroundColor="pink";
    }
    else{
        userWin=true;
        if (x==="rock"){
            //computer ke pass nhi to paper rhega nhi to scissor
            userWin=compChoice==="paper"? false :true;
        }
        else if(x==="paper"){
            //computer ke pass nhi to rock rhega nhi to scissor 
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            //computer ke pass nhi to rock rhega nhi to paper
            userWin=compChoice==="rock"?false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    });
});