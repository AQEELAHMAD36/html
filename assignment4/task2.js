class Player{
    static allRuns = 0;
   static getAllRuns = _ => this.allRuns;
   constructor(playerid, playername, playerruns, playerdateofbirth,playershirtnumber)
   {
      this.playerid = playerid ; 
      this.playername = playername ;
      this.playerruns = playerruns ;
      this.playerdateofbirth = playerdateofbirth ; 
      this.playershirtnumber = playershirtnumber ;
      Player.allRuns += playerruns;
   }
   Displayinfo = _ => `playerid : ${this.playerid} \n playername : ${this.playername}\n playerruns : ${this.playerruns} \n playerdateofbirth ${this.playerdateofbirth} \n playershirtnumber ${this.playershirtnumber}`
   Getruns = _ => this.playerruns
   Addruns = runs => {
       this.playerruns += runs ;
       Player.allruns +=runs ;
   }
}
let player1 = new Player ( 1 , "AQEEL" , 100 , "12-4-2000" , 56 )
let player2 = new Player (2 , "AHMAD" , 200 , "25-06-2001" , 09 )

console.log(player1.Displayinfo());
console.log(player2.Displayinfo());
player1.Addruns(200);
console.log("Total runs of player1 by adding new runs :  " + Player.getAllRuns()); 
