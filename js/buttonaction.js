function showAlert(){
    alert('tombol bisa di klik')
}

var tombol = document.getElementById("btn-event").addEventListener("click", () =>{
    alert("berhasil");
})