const listData = ()=>{
    var api = "https://jsonplaceholder.typicode.com/comments";
    fetch(api)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        let output = "";
        let html = data.map((item,index) => {
            return `<li>${item.name}</li>
                    <button onclick="handleUpdate(this,${item.id})">Sửa</button>
                    <button>Xóa</button>`;
        });
        output +=html.join("");
        document.querySelector(".list__comment").innerHTML = output;
    });
}
function handleUpdate(type,id) {
    // console.log(id);
    // document.querySelector("input[type='text']").focus();
    console.log(type.offsetTop);
    localStorage.setItem("id",id);
    localStorage.setItem("top",type.offsetTop);
}
function changeComment(){
    let valueComment = document.querySelector("input[type='text']").value;
    let dataUpdate = {
        id:id,
        name:valueComment
    }
    fetch('https://jsonplaceholder.typicode.com/comments',{
        method: 'PUT',
        headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: dataUpdate
        });
    console.log("valueComment: " + valueComment);

}
let learn = localStorage.getItem("id");
function render(id){
    var api = "https://jsonplaceholder.typicode.com/comments";
    fetch(api)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        let output = "";
        let html = data.map((item,index) => {
            if(item.id===+id){
                console.log("có nha");
            };
        });
    });
}

document.documentElement.scrollTop=localStorage.getItem("top");
render(learn);
listData();
const cars = [
    {type:"Volvo", year:2016},
    {type:"BMW", year:2010},
    {type:"Saab", year:2001},
];
console.log(cars.sort((a,b) => (a.type > b.type) ? 1 : -1));