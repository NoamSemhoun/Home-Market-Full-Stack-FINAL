import contextProvider from './Context';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callServer } from './util';

export function useLoginOut(url){

    const {loggedUser, setLoggedUser} = useContext(contextProvider);
    const navigate = useNavigate();

    const login = async (user) =>{
        const {data} = await callServer(url,'post',user,'user');
        // console.log(data)

        if (!user.error){
            setLoggedUser(data);
            navigate('/');
            return true;
        }
        return false;
    }

    const logout = () =>{
        setLoggedUser(null);
    }

    return {login,logout,loggedUser};
}


export function useForm(){
    const [formFilesData,setFormFilesData] = useState(new FormData());
    const [formData,setFormData] = useState({})


    // Handler for handling form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    // Handler for handling file input changes
    const handleFileChange = (event) => {
        const { name, files } = event.target;

        // For file fields, you need to loop through files and append them to the form data
        for (let i = 0; i < files.length; i++) {
            formFilesData.append(name, files[i]);
        }
        setFormFilesData(formData);

    };

    return {handleInputChange,handleFileChange,formData,formFilesData}
}


export function useLocalStorage(key){
    let initialValue = localStorage.getItem(key);
    initialValue = initialValue ? JSON.parse(initialValue) : '';
    
    const [data,setData] = useState(initialValue);
    // Save user data to localStorage

    const setValue = (value)=>{
        localStorage.setItem(key, JSON.stringify(value));
        setData(value)
    }

    return [data,setValue];
}