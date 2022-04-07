import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
    return (dispatch) => {
        console.log("2. Masuk action");
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
            console.log("3. Berhasil dapat data ", response.data);
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
            console.log("3. Gagal dapat data ", error);
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
