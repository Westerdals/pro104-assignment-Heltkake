var inputTask = document.getElementById("input-task");
var inputTeamMember = document.getElementById("input-member");
var buttonInsert = document.getElementById("button-insert");
var lsOutput = document.getElementById("ls-output");

buttonInsert.onclick = function(){
    var inputTaskValue = inputTask.value;
    var inputTeamMemberValue = inputTeamMember.value;
        
    if (inputTaskValue){
    localStorage.setItem("Gjøremål", inputTaskValue)
    }
    if (inputTeamMemberValue){
    localStorage.setItem("Team-medlem", inputTeamMemberValue);
    }
    location.reload();
    }


function showTasks(){
for (i=0; i < localStorage.length; i++){
    var inputTaskValue = localStorage.key(i);    
    lsOutput.innerHTML += localStorage.getItem(inputTaskValue);
}
}
