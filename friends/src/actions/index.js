import axios from "axios";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const SAVING_FRIENDS = "SAVING_FRIENDS";
export const FRIENDS_SAVED = "FRIEND_SAVED";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      console.log(response);
      dispatch({ type: FRIENDS_FETCHED, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};
export const addFriends = (newFriend) => dispatch => {
  dispatch({ type: SAVING_FRIENDS });
  axios
    .post("http://localhost:5000/api/friends", newFriend)
    .then(response => {
      console.log(response);
      dispatch({ type: FRIENDS_SAVED, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    });
};
