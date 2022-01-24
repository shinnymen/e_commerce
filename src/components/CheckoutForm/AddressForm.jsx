import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import { commerce } from "../../lib/commerce";

import FormInput from "./Checkout/CustomTextField";

const AddressForm = () => {
  const [shipphingCountries, setShipphingCountries] = useState([]);
  const [shipphingCountry, setShipphingCountry] = useState("");
  const [shipphingSubdivisions, setShipphingSubdivisions] = useState([]);
  const [shipphingSubdivision, setShipphingSubdivision] = useState("");
  const [shipphingOptions, setShipphingOptions] = useState([]);
  const [shipphingOption, setShipphingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShipphingCountries(countries);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            {/* <Grid item xs={12} xm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={} fullWidth onChange={}>
                        <MenuItem key={} value={}>
                            Select Me
                        </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} xm={6}>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={} fullWidth onChange={}>
                        <MenuItem key={} value={}>
                            Select Me
                        </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} xm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value={} fullWidth onChange={}>
                        <MenuItem key={} value={}>
                            Select Me
                        </MenuItem>
                </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
