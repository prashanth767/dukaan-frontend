// EditStore Component for update store data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreForm from "./StoreForm";
import { useParams } from "react-router-dom";


// EditStudent Component
const EditStore = (props) => {
    const [formValues, setFormValues] = useState({
        id:"",
        name: "",
        category: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        countryCode: "",
        phoneNumber: "",
        logoFileName: "",
        logoUrl: ""
    });

    const { id } = useParams();

    //onSubmit handler
    const onSubmit = (storeObject) => {
        console.log(" on submit being invoked....");
        axios
        .put(
            "http://localhost:8080/store" + id,
            storeObject
        )
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
            alert("Store successfully updated");
            props.history.push("/store-list");
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };




    // Load data from server and reinitialize store form
    //  + props.match.params.id
    useEffect(() => {
        axios
        .get(
            "http://localhost:8080/store/" + id
        )
        .then((res) => {
            const { id, name, category, street, city, state, postalCode, countryCode, phoneNumber, logoFileName, logoUrl } = res.data;
            setFormValues({ id, name, category, street, city, state, postalCode, countryCode, phoneNumber, logoFileName, logoUrl});
        })
        .catch((err) => console.log(err));
    }, []);

    // Return student form
    return (
        <StoreForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
        Update Store
        </StoreForm>
    );
};

// Export EditStudent Component
export default EditStore;
