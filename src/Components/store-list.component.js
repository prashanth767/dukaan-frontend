import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StoreTableRow from "./StoreTableRow";

const StoreList = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8080/store")
        .then(({ data }) => {
            console.log(data);
            setStores(data._embedded.store);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const DataTable = () => {
        return stores.map((res, i) => {
          return <StoreTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Postal Code</th>
                <th>Country Code</th>
                <th>Phone Number</th>
                <th>Logo FileName</th>
                <th>Logo Url</th>
            </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
        </Table>
        </div>
    );
};

export default StoreList;
