console.log("Script running...")

var i =2;
var c= i+5;
console.log(c);


document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        // document.querySelector('.hamburger').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        setTimeout(() =>{
            
            // document.querySelector('.cross').style.display = 'inline';
            // document.querySelector('.hamburger').style.display = 'none';
        }, 350);
        }
})
