import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addKontak, getListKontak, updateKontak } from '../../actions/kontakAction';

const AddKontak = () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        id:"",
        nama:"",
        nomor:""
    });

    const { addListKontakResult, detailListKontakResult, updateListKontakResult } = useSelector((state) => state.kontakReducer);

    const handleInput = (e) => {
        setFormInput({
            ...formInput, [e.target.name]:e.target.value
        });
        // console.log(formInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formInput.id){
            //update
            dispatch(updateKontak({
                id:formInput.id,
                nama:formInput.nama,
                nomor:formInput.nomor
            }));
            console.log(formInput);
        } else {
            //insert
            dispatch(addKontak(formInput));
        }
    }

    useEffect(() => {
        if(addListKontakResult){
            dispatch(getListKontak());
            setFormInput({
                id:"",
                nama:"",
                nomor:""
            })
        }
    },[addListKontakResult, dispatch]);

    useEffect(() => {
        if(detailListKontakResult){
            setFormInput({
                id:detailListKontakResult.id,
                nama:detailListKontakResult.nama,
                nomor:detailListKontakResult.nomor
            })
        }
    },[detailListKontakResult, dispatch]);

    useEffect(() => {
        if(updateListKontakResult){
            dispatch(getListKontak());
            setFormInput({
                id:"",
                nama:"",
                nomor:""
            })
        }
    },[updateListKontakResult, dispatch]);

    return (
        <div>
            <h2>
                {
                    formInput.id ? "EditKontak" : "AddKontak"
                }
                
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nama" onChange={handleInput} value={formInput.nama}/>
                <input type="text" name="nomor" onChange={handleInput} value={formInput.nomor}/>
                <button type="submit">Simpan</button>
            </form>
        </div>
    )
}

export default AddKontak;
