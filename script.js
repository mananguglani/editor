// class ProcessIndexDB {
//     function () {
//         if('indexedDb' in window) {
//             prompt('Your browser does not support this feature!');
//             return;
//         }
//         let indexButton = document.querySelector(".indexdb");
//         indexButton.addEventListener("click", addData);
//     })();
// }

// class Model {
//     var fileData = {
//         'data': {
//             data: 'Event.target.iframe',
//             type: 'html'
//         },
//         'id': {
//             { autoIncrement: true }
//         }
//     }

//     function addData(id) {
//         data = Event.target.richTextField
//         return data;
//     }
// }

// class Controller {
//     function addData(id) {
//         data = this.Model.addData(id);
//     }
// }

function addData() {
    const dbName = "LocalStorage";
    const requestDB = window.indexedDB.open(dbName);
    requestDB.onupgradeneeded = () => {
        let db = requestDB.result;
        // let store = db.createObjectStore("data", { autoIncrement: true });
        // store.put(Event.target.iframe); // convert into key, value pairs then store
    }
    requestDB.onsuccess = () => {
        if(requestDB.readyState == "done") {
            prompt("Saved into indexedDb database");
        }
    }
}

// Print content
function printContent(el) {
    var backup = document.body.innerHTML;
    var divContent = document.getElementById(el).innerHTML;
    document.body.innerHTML = divContent;
    window.print(); // target the data entered
    document.body.innerHTML = backup;
}

// Toolbar features
// static helper functions
function enableEditMode() {
    richTextField.document.designMode = 'On'; // change to contentEditable
}

function execCmd(command) {
    richTextField.document.execCommand(command, false, null);
}

function execCmdWithArgs(command, arg) {
    richTextField.document.execCommand(command, false, arg);
}

function toggleSource() {
    var showingSourceCode = false;
    if(showingSourceCode) {
        richTextField.document.getElementsByTagName('body')[0].innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent;
        showingSourceCode = false;
    } else {
        richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
        showingSourceCode = true;
    }
}

function toggleEdit() {
    var isInEditMode = true;
    if(isInEditMode) {
        richTextField.document.designMode = 'Off';
        isInEditMode = false;
    } else {
        richTextField.document.designMode = 'On';
        isInEditMode = true;
    }
}
