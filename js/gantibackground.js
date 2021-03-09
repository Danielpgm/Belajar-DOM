const bgcolor = document.getElementById("bg-color")
const textcolor = document.getElementById("text-color")

    bgcolor.addEventListener('change', (event) =>{
        console.log(event);
        document.body.style.backgroundColor= event.target.value;
    });

    textcolor.addEventListener('change', (event)=>{
        document.body.style.color= event.target.value
    });