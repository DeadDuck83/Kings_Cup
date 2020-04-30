export const createGame = (game) => {
  return (dispatch, getState) => {
    // make async call to database

    //Then carry on with the dispatch
    dispatch({ type: "CREATE_GAME", game });
  };
};
