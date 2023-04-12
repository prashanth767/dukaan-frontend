import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StoreTableRow = (props) => {
    const { id, name, category, street, city, state, postalCode, countryCode, phoneNumber, logoFileName, logoUrl } = props.obj;

    const deleteStore = () => {
        axios.delete("http://localhost:8080/store/" + id)
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
              alert("Store successfully deleted");
              window.location.reload();
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{street}</td>
        <td>{city}</td>
        <td>{state}</td>
        <td>{postalCode}</td>
        <td>{countryCode}</td>
        <td>{phoneNumber}</td>
        <td>{logoFileName}</td>
        <td>{logoUrl}</td>
        <td>
            <Link className="edit-link" to={"/edit-store/" + id}> Edit </Link>
            <Button onClick={deleteStore} size="sm" variant="danger"> Delete </Button>
        </td>
      </tr>
    );
};

export default StoreTableRow;
