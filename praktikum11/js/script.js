document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice() onclick di js
    a.addEventListener("click",(element)=>{
        commputerChoice(element);
    })
})

function commputerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    //pilihan komputer secara otomatis
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW")
        setTimeout(()=> alert("DRAW"),300)
    }

    // jika pilihan komputer menang 
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        // alert("KOMPUTER WIN");
        setTimeout(()=> alert("YOU LOSE"),300)
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        // alert("KOMPUTER WINN");
        setTimeout(()=> alert("YOU LOSE"),300)
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        // alert("KOMPUTER WINNN");
        setTimeout(()=> alert("YOU LOSE"),300)
    }

    // jika pilihan user menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Paper"){
        // alert("USER WIN");
        setTimeout(()=> alert("USER WIN"),300)
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Rock"){
        // alert("USER WINN");
        setTimeout(()=> alert("USER WIN"),300)
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Scissors"){
        // alert("USER WINNN");
        setTimeout(()=> alert("USER WIN"),300)
    }

}