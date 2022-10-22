let btn1 = document.querySelectorAll(".command"),
    btn2 = document.querySelectorAll(".bron");
let modal = document.querySelector(".modal_wrapp")
    btn1 = Array.from(btn1);
    btn2 = Array.from(btn2);

    btns = btn1;
    for (let i = 0; i < btn2.length; i++){
        btns.push(btn2[i])
    }
    console.log(btns);
    
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", () => {
                modal.classList.remove("d-none");
            })
    }

    let closebtn = document.querySelector(".close");
        closebtn.addEventListener("click", () => {
            modal.classList.add("d-none");
        })