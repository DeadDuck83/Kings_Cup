export const createGame = (game) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database

    // firstore
    const firestore = getFirestore();
    firestore
      .collection("games")
      .add({
        // this is what we are passing to Firebase
        ...game,
        authorFirstName: "James",
        authorLastName: "Bond",
        authorId: 1234,
        createdAt: new Date(),
      })
      .then(() => {
        //Then carry on with the dispatch
        dispatch({ type: "CREATE_GAME", game });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_GAME_ERROR", err });
      });
  };
};
