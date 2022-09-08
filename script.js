const searchWrapper = document.querySelector(".searchIn");
const inputBox = searchWrapper.querySelector("input");
const sugg = searchWrapper.querySelector(".searchIn");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;//user entering data
    let emptyArray = [ ];
    if (userData) {
        emptyArray = listItems.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        })
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        viewSuggestion(emptyArray); 
         
        let allItems = sugg.querySelectorAll("li");

        for (let i = 0; i < allItems.length; i++) {
            allItems[i].setAttribute("onclick", "select(this)");
        }
    }
    else {
        searchWrapper.classList.remove("active");
    }

}
function select(element) {
    let selectUserdata = element.textcontent;
    inputBox.value = selectUserdata;
    searchWrapper.classList.remove("active");
}
function viewSuggestion(list) {
    let listData;
    sugg.innerHTML=listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }
    else {
        listData = list.join('');
    }
   
}