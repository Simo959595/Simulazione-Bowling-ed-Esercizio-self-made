const bowling = {
    "players": [
        
    ],

    "setScores": function(){
            if(this.players[0].tiri.length < 10){
                this.players.forEach( ( giocatore ) => {
                    let hit = Math.floor(Math.random()* (10) + 1 )
                    giocatore.tiri.push( hit ) 
                    if(hit == 10){
                        let img = document.createElement("img")
                        img.src = "./media/gif-nelson.gif"
                        img.classList.add("strike")
                        document.body.appendChild(img)
                        setTimeout(() => {
                            img.remove()
                        }, 1500);
                    }
                    giocatore.punteggioFinale = giocatore.tiri.reduce( (acc, tiro)=> acc + tiro, 0)
                } )
            }
        },
        
        "addPlayer": function(nome){
            
            this.players.push(   { "name": nome, "tiri": [], "punteggioFinale": 0 
            } )
        },
        
        "changeColor": function(){
            this.players
        },


        "setWinner": function(){
            this.players.sort( (a, b) => b.punteggioFinale - a.punteggioFinale )
        },
        "resetScore": function () {
        this.players = []
        ;       
        this.createTable() 
        },
        "createTable": function (string){
        tableWrapper.innerHTML = ""
        this.players.forEach( (giocatore, i)=>{
            let tr = document.createElement("tr")
            tr.classList.add("bg-custom")
            tr.innerHTML = `
                        <th scope="row">${i+1}</th>
                        <td class=${string == "finale" && i == 0 ? "bg-danger" : ""} >${giocatore.name}</td>
                        <td>${giocatore.tiri[0] ? giocatore.tiri[0] : ""}</td>
                        <td>${giocatore.tiri[1] ? giocatore.tiri[1] : ""}</td>
                        <td>${giocatore.tiri[2] ? giocatore.tiri[2] : ""}</td>
                        <td>${giocatore.tiri[3] ? giocatore.tiri[3] : ""}</td>
                        <td>${giocatore.tiri[4] ? giocatore.tiri[4] : ""}</td>
                        <td>${giocatore.tiri[5] ? giocatore.tiri[5] : ""}</td>
                        <td>${giocatore.tiri[6] ? giocatore.tiri[6] : ""}</td>
                        <td>${giocatore.tiri[7] ? giocatore.tiri[7] : ""}</td>
                        <td>${giocatore.tiri[8] ? giocatore.tiri[8] : ""}</td>
                        <td>${giocatore.tiri[9] ? giocatore.tiri[9] : ""}</td>
                        <td>${giocatore.punteggioFinale}</td>
            `
            tableWrapper.appendChild(tr)
        } )
    }

}

// CREAZIONE TABELLA GIOCATORI
let tableWrapper = document.querySelector("#tableWrapper")
bowling.createTable()


//GIOCA TURNO
let btnPlay = document.querySelector("#btnPlay")

btnPlay.addEventListener( "click", ()=>{
    bowling.setScores()
    bowling.createTable()
    if(bowling.players[0].tiri.length == 10){
        btnPlay.classList.add("d-none")
        btnRanking.classList.remove("d-none")
    }
} )

let btnGreen = document.querySelector("#btnGreen")

//NUOVO GIOCATORE
let btnNewPlayer = document.querySelector("#btnNewPlayer")
let inputNewPlayer = document.querySelector("#inputNewPlayer")

let btnReset = document.querySelector("#btnReset")

btnNewPlayer.addEventListener( "click", ()=>{
    bowling.addPlayer(inputNewPlayer.value)
    bowling.createTable()
    inputNewPlayer.value = ""
} )


// INIZIA PARTITA
let btnStart = document.querySelector("#btnStart")

btnStart.addEventListener( "click", ()=>{
    btnNewPlayer.classList.add("d-none")
    btnPlay.classList.remove("d-none")
    btnStart.classList.add("d-none")
    btnGreen.classList.remove("d-none")
} )


// RANKING
let btnRanking = document.querySelector("#btnRanking")

btnRanking.addEventListener("click", ()=>{
    bowling.setWinner()
    bowling.createTable("finale")
    btnReset.classList.remove("d-none")
})





// funzione del bottone
btnReset.addEventListener("click", ()=>{
    bowling.resetScore()   

    btnRanking.classList.add("d-none")           
    btnPlay.classList.remove("d-none") 
    btnNewPlayer.classList.remove("d-none")
    
})



