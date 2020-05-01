const initState = {
  games: [
    {
      id: "1",
      session: "derek game",
      friends: [{ email: "test1@test.com" }, { email: "test2@test.com" }],
    },
    {
      id: "2",
      session: "sfgsdfgame",
      friends: [{ email: "test2@test.com" }, { email: "test2-0@test.com" }],
    },
    {
      id: "3",
      session: "turd game",
      friends: [{ email: "test3@test.com" }, { email: "test2-1@test.com" }],
    },
    {
      id: "4",
      session: "hike game",
      friends: [{ email: "test4@test.com" }, { email: "test2-3@test.com" }],
    },
  ],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_GAME":
      console.log("Created Game (Reducer)", action.game);
      return state;
    case "CREATE_GAME_ERROR":
      console.log("create game error", action.err);
      return state;

    default:
      return state;
  }
};

export default gameReducer;
