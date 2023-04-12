import React from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const StoreForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        category: Yup.string(),
        street: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        postalCode: Yup.string(),
        countryCode: Yup.string(),
        phoneNumber: Yup.string(),
        logoFileName: Yup.string(),
        logoUrl: Yup.string()
    });

    console.log("props" + props);
    return (
        <div className="form-wrapper">
          <Formik {...props} validationSchema={validationSchema}>
            <Form>
              <FormGroup>
                <label>Name</label>
                <Field name="name" type="text" label="Name" className="form-control" />
              </FormGroup>

              <FormGroup>
                <label>Category</label>
                <Field name="category" type="text" className="form-control" />
              </FormGroup>

              <FormGroup>
                <label>Street</label>
                <Field name="street" type="text" className="form-control" />
              </FormGroup>

              <FormGroup>
                <label>City</label>
                <Field name="city" type="text" className="form-control" />
              </FormGroup>

                <FormGroup>
                  <label>State</label>
                  <Field name="state" type="text" className="form-control" />
                </FormGroup>

              <FormGroup>
                <label>Postal Code</label>
                <Field name="postalCode" type="text" className="form-control" />
              </FormGroup>

              <FormGroup>
                <label>Country</label>
                <Field name="countryCode" type="text" className="form-control" />
              </FormGroup>

              <FormGroup>
                <label>Phone</label>
                <Field name="phoneNumber" type="text" className="form-control" />
              </FormGroup>

              <FormGroup>
                  <label>Choose Store Logo</label>
                  <Field type="file" className="form-control" name="logoFileName"
                    onChange={props.handleFileInputChange}/>
              </FormGroup>

              <FormGroup>
                <label>Logo Url</label>
                <Field name="logoUrl" type="text" className="form-control" />
              </FormGroup>

              <Button variant="danger" size="lg" block="block" type="submit">
                {props.children}
              </Button>
            </Form>
          </Formik>
        </div>
    );
};

export default StoreForm;
