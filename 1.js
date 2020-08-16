
cunter = 1;

let LikeHere = function (btnEle) {
    let Likes = btnEle.children[0].innerHTML;
    let likesCount = parseInt(Likes);
    likesCount = likesCount + 1;
    btnEle.children[0].innerHTML = likesCount;
}

let deleteComment = function (btnEleDelete) {
    btnEleDelete.parentElement.parentElement.remove();
    console.log(btnEleDelete);
}


let CommentHere = (btnElementComment) => {
    let commentBox =
        btnElementComment.parentElement.parentElement.parentElement
            .children[2];

    console.log(commentBox);
    let newElement = commentBox.children[0].cloneNode(true);

    const inputBox =
        btnElementComment.parentElement.parentElement.children[1].children[0];

    newElement.children[0].innerHTML = inputBox.value;

    inputBox.value = "";
    commentBox.insertBefore(newElement, commentBox.firstChild);
};