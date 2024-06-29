export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQD89ySbacHOOFbe0LzKXCqdnAxXm0mxkHxpEMeRPqTw2R4vwScQAM8HuZVPHiZO7bwnyHfq5qxHWyEH9g5cCeZ_kvKXe9URwY3Qv9L0Qg2x0bT9Ujev0r_FC1btOD7PTB1Y4f9LbGORuAogoS3R8wFXQHCSkocEx1vystMLdz01heezLJ8Q5HtuV4mo8vgV3DlVukRXR7IAVIcQbMZD",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
