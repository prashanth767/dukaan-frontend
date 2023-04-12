import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StoreTableRow from "./StoreTableRow";
import StoreTile from "./StoreTile";
import Photo from "./photo.component";

import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  img: {
    width: '100%'
  }
}));

const StoreTileView = () => {
    const [stores, setStores] = useState([]);

    const classes = useStyles();

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

    return (
        <div className="{classes.root}">
          <Grid container spacing={3}>

            {
              stores.map((store,i) => (
                <Grid item xs={12} sm={6} md={3} key={store.id}>
                    <Paper className={classes.paper}>
                      <Photo key={store.logoUrl} id={store.logoUrl} logoUrl={store.logoUrl} className={classes.img}/>
                    </Paper>
                </Grid>
            ))}
          </Grid>
        </div>
    );
};

export default StoreTileView;

