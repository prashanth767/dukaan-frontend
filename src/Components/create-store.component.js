// CreateStore Component for add new store

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StoreForm from "./StoreForm";
import storage from "./firebase";
import {ref, uploadBytes} from "firebase/storage";

// CreateStudent Component
const CreateStore = () => {
    const [image , setImage] = useState('');
    const [formValues, setFormValues] =
        useState({ name: '', category: '', street: '', city: '',
         state: '', postalCode: '', countryCode: '', phoneNumber: '', logoFileName: '', logoUrl: '' })

    // onSubmit handler
    const onSubmit = storeObject => {
        axios.post('http://localhost:8080/store', storeObject)
        .then(res => {
            if (res.status === 200 || res.status === 201)
            alert('Student successfully created')
            else
            Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }

     const handleFileInputChange = (event) => {
            //console.log(event.target.files[0]);
            const formData = new FormData();
            formData.append('title', event.target.files[0].name);
            formData.append('image', event.target.files[0]);
            axios.post('http://localhost:8080/photos/upload', formData)
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                          //formValues.setLogoUrl(res.data);
                          setFormValues({ ...formValues, logoUrl: res.data });
                        }
                        else
                          Promise.reject()
                    })
                    .catch(err => alert(err))
        };

     const uploadToFirebase = (event) => {
        setImage(event.target.files[0]);

        const imageRef = ref(storage,  `images/${event.target.files[0].name}`);
        uploadBytes(imageRef, event.target.files[0]).then((snapshot) => {
          console.log('Upload successful!');
          setFormValues({ ...formValues, logoUrl: `images/${image.name}`  });
        });
     };

    // Return student form
    return(
        <StoreForm initialValues={formValues} onSubmit={onSubmit} handleFileInputChange={uploadToFirebase} enableReinitialize>
        Create Store
        </StoreForm>
    )
}

// Export CreateStudent Component
export default CreateStore
