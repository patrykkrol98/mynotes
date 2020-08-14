let listArr = JSON.parse(localStorage.getItem("listArr"));
const inputDOM = document.querySelector('#add-list');
const button = document.querySelector('#submit');
const lists = document.querySelector('#list');
let lis;
let text;
let arrPos;

button.addEventListener('click', function(e){
    if (listArr === null){
        listArr = []
    } else {
        listArr = JSON.parse(localStorage.getItem("listArr"));
    }
    e.preventDefault();
    listArr.push(inputDOM.value);
    localStorage.setItem("listArr", JSON.stringify(listArr));
    inputDOM.value = "";
    populateList();
})

// listen to li clicks
lists.addEventListener('click', checkClick);

function populateList() {
    lists.innerHTML = listArr.map(item => {
        return `<li>
				<div class="item">${item}</div><div class="delete">x</div>
			</li>`
    }).join('');
    lis = Array.from(document.querySelectorAll('ul#list li'));
}

function checkClick (e) {
    if(e.target.className === 'delete') {
        deleteItem(e);
        populateList();
    }
}

function deleteItem (e) {
    text = e.target.parentNode.childNodes[1].innerHTML;
    arrPos = listArr.indexOf(text);
    listArr.splice(arrPos,1);
    localStorage.setItem("listArr", JSON.stringify(listArr));
}

populateList();
