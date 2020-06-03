document.body.addEventListener('click', function () {
    var myParent = document.getElementsByTagName("h1")[0];
    var myImage = document.createElement("img");
    myImage.src = 'https://picsum.photos/id/1/200';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "160px";
});
