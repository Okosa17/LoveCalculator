const displayText = document.getElementById("display");
const comment = document.getElementById("comment");
const inputText = document.querySelectorAll("#input-text")[0];
const inputText1 = document.querySelectorAll("#input-text")[1];
const calculator = document.getElementById("calculator");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    if(inputText.value === ''){
        alert("Kindly write your names");
    }
    else{
        var result = Math.floor((Math.random() * 100) + 1);
        let li = document.createElement("li");
        
        if(result >= 70){
            li.innerHTML = result + "%." +
             "Your might have just found your soulmate, hehe.";
            comment.appendChild(li);
            li.innerHTML = '';
            saveData();
        }
        else if(result >= 40 && result < 70){
            li.innerHTML = result + "%. Y'all can do better.";
            comment.appendChild(li);
            saveData();
        }
        else if(result < 40){
            li.innerHTML = result + "%. Well, Love is not for everyone.";
            comment.appendChild(li);
            saveData();
        }
        console.log(ul.classList);
    }
   
})



// function addComment() {
//     if(inputText.value === '' && inputText1.value === ''){
//         alert("Kindly write your names");
//     }
//     else{
//         var result = Math.floor((Math.random() * 100) + 1);
//         let li = document.createElement("li");
        
//         if(result >= 70){
//             li.innerHTML = result + "%." +
//              "Your might have just found your soulmate, hehe.";
//             comment.appendChild(li);
//         }
//         else if(result >= 40 && result < 70){
//             li.innerHTML = result + "%. Y'all can do better.";
//             comment.appendChild(li);
//         }
//         else if(result < 40){
//             li.innerHTML = result + "%. Well, Love is not for everyone.";
//             comment.appendChild(li);
//         }
        
//     }
    
// }


function removeComment() {
    document.querySelector("#comment").innerHTML = '';
    inputText.value = '';
    inputText1.value = '';
}

function dont(){
    alert("You can only choose once");
}
