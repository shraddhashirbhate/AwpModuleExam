
function submitForm() {
    let Email = document.querySelector("#emailId").Value;
    let Username = document.querySelector("#username").Value;
    let Password = document.querySelector("#pass").Value;

    if (Email == "" && Username == "" && Password == "") {
        alert("fill up the given fields");

    }
    else {
        const newEle = document.querySelector("#colbox").cloneNode(true);
        newEle.removeAttribute("id");
        newEle.children[1].children[0].innerHTMl = Email;
        newEle.children[1].children[0].innerHTMl = Username;

        const parEle = document.querySelector("#DetailBox");
        parEle.appendChild(newEle);

        document.querySelector("#email-id").value = "";
        document.querySelector("#username").value = "";
        document.querySelector("#pass").value = "";

    }


}