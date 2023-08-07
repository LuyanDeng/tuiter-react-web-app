import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API,tuit);
    return response.data;
}
export const findTuits = async () => {
    // send HTTP GET request to TUITS_API

    const response = await axios.get(TUITS_API);
    //extract JSON array from response from server
    const tuits = response.data;
    return tuits;
}
// asynchronous functions that will not block the browser's sole JavaScript thread
//asynchronous functions rely on the browser's multithreaded capabilities to send HTTP requests asynchronous
// and notify our functions when responses eventually resolve
export const deleteTuit =  async (tid) => {
    //append tuit's ID to URL
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data;

}
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}


