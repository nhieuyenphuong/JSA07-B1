//b1: khai baó dữ liệu của mình
let data =[ 
    {
    id: 123,
    username:'yenphuong',
    password:'12345678'

    }

];
//b2: lấy dữ liệu mà ngta Input
let usernameInput= document.getElementById('username');
let passwordInput=document.getElementById('password');
let btnLogin=document.getElementById('btnLogin');
let error= document.getElementById('errorMessage');
console.log(usernameInput);
//b3: bắt sự kiện: 
btnLogin.addEventListener('click', function() {
    let username = usernameInput.value; 
    let password = passwordInput.value;
    //so sánh dữ liệu
    for( let user of data){
        if(user.username==username&& user.password==password){
            window.location.replace('./homepage.html ')
        } else{
            error.textContent='Error!';
            error.style.color='red';
            error.style.textAlign='center'
        }
    }

})
//let container = document.getElementById('container');

//container.insertAdjacentHTML('afterend', `<h1>${MOVIES[0].plot}</h1>`)