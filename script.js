var inputTask = document.getElementById("input-task");
var inputTeamMember = document.getElementById("input-member");
var buttonInsert = document.getElementById("button-insert");
var lsOutput = document.getElementById("ls-output");
var obj = {};
obj.task = new Array();
obj.teamMember = new Array();

buttonInsert.onclick = function(){
    var inputTaskValue = inputTask.value;
    var inputTeamMemberValue = inputTeamMember.value;
    var taskSerialized = JSON.stringify(inputTaskValue);
    var taskPush = obj.task.push(taskSerialized);
    
    if (inputTaskValue){
    localStorage.setItem("Gjøremål", taskPush)
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
