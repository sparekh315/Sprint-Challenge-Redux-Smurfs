import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS = 'FETCH_SMURFS';
export const GETTING_SMURFS = 'FETCHED_SMURFS';
export const ADD_SMURF = 'ADD_SMURF'
export const ADDING_SMURF = 'ADDED_SMURF'
export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({type: GETTING_SMURFS});

    smurfs
    .then(response => {
      dispatch({type: GET_SMURFS, payload: response.data});
    })
    .catch(err => { 
      dispatch({type: ERROR, payload: err});
    });
  };
};


export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`, smurf);
  return dispatch => {
    dispatch({type: ADDING_SMURF});

    newSmurf
    .then(response => {
      dispatch({type: ADD_SMURF, payload: response.data})
    })
    .catch (error => {
      dispatch({ type: ERROR, payload: error});
    });
  };
};



