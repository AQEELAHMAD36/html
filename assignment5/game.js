class Game {
    info() {
      return "I love games and sports";
    }
  }
  
  class Cricket extends Game {
    info() {
      return "I love cricket";
    }
  }
  
  class Football extends Game {
    info() {
      return "I love football";
    }
  }
  
  const game = new Game();
  console.log(game.info());
  
  const cricket = new Cricket();
  console.log(cricket.info());
  
  const football = new Football();
  console.log(football.info());
  