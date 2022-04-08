import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                error: false
            }
        });

        //get API
        axios({
            method: "GET",
            url: "http://localhost:3000/kontaks",
            timeout: 120000
        })
        .then((response) => {
            //berhasi;
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    error: false
                }
            });
        })
        .catch((error) => {
            //gagal
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: true,
                    data: false,
                    error: error.message
                }
            });
        })

    }
}

export const addKontak = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                error: false
            }
        });

        //get API
        axios({
            method: "POST",
            url: "http://localhost:3000/kontaks",
            timeout: 120000,
            data: data
        })
        .then((response) => {
            //berhasi;
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    error: false
                }
            });
        })
        .catch((error) => {
            //gagal
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: true,
                    data: false,
                    error: error.message
                }
            });
        })

    }
}

export const deleteKontak = (id) => {
    return (dispatch) => {
        console.log("2. Masuk action");
        //loading
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                error: false
            }
        });

        //get API
        axios({
            method: "DELETE",
            url: "http://localhost:3000/kontaks/"+id,
            timeout: 120000
        })
        .then((response) => {
            console.log("3. Berhasil dapat data ", response.data);
            //berhasi;
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    error: false
                }
            });
        })
        .catch((error) => {
            console.log("3. Gagal dapat data ", error);
            //gagal
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: true,
                    data: false,
                    error: error.message
                }
            });
        })

    }
}

export const detailKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data,
            }
        });
    }
}

export const updateKontak = (data) => {
    console.log(data);
    return (dispatch) => {
        //loading
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                error: false
            }
        });

        //get API
        axios({
            method: "PUT",
            url: "http://localhost:3000/kontaks/"+data.id,
            timeout: 120000,
            data:data
        })
        .then((response) => {
            console.log("Masuk ke action");
            console.log(data.id);
            //berhasi;
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    error: false
                }
            });
        })
        .catch((error) => {
            //gagal
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: true,
                    data: false,
                    error: error.message
                }
            });
        })

    }
}

