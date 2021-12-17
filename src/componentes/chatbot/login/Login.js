import React, { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  login: {
    width: "100%",
    height: "365px",
    objectFit: "cover",
    marginTop: 100,
  },
  contenidoLogin: {
    paddingBottom: 250,
    justify: "space-between",
    alignItems: "center",
    direction: "column",
    justifyContent: "center",
  },
  logo: {
    width: "300px",
    marginLeft: 50,
  },
  img: {
    minHeight: "100vh",
    paddingLeft: 20,
  },
  containerImg: {
    justify: "center",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paperStyle: {
    padding: 0,
    height: "70vh",
    width: 1050,
    margin: "115px auto",
  },
  loading: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  labelLogin: {
    fontSize: 18,
    margin: "auto",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },
  labelMessage: {
    color: "red",
    fontSize: 17,
    fontWeight: 100,
    textAlign: "center",
  },
}));

export const LoginScreen = ({ history }) => {
  const classes = useStyles();
  const { setUser } = useContext(UserContext);
  const [formValues, handleInputChange] = useForm({
    cedula: "",
    nombre: "",
    email: "",
  });

  const { cedula, nombre, email } = formValues;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (cedula && nombre && email) {
      await setUser({ cedula, nombre, email });
      history.replace("/chatbot");
    } else {
      alert("error en campos");
    }
  };

  return (
    <Paper elevation={10} className={classes.paperStyle}>
      <Grid container className={classes.img}>
        <Grid item xs={6} sm={6}>
          <img
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-acceder-al-perfil-movil_114360-83.jpg?size=338&ext=jpg"
            className={classes.login}
            alt="imagenEmpresa"
          />
        </Grid>
        <Grid container item xs={12} sm={6} className={classes.contenidoLogin}>
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "400",
              minWidth: "300",
            }}
          >
            <form onSubmit={handleLogin} style={{paddingRight: 100}}>
              <TextField
                label="Su Cedula"
                margin="normal"
                name="cedula"
                fullWidth
                value={cedula}
                onChange={handleInputChange}
              />
              <TextField
                label="Su Nombre"
                margin="normal"
                name="nombre"
                fullWidth
                value={nombre}
                onChange={handleInputChange}
              />
              <TextField
                label="Su Email"
                margin="normal"
                name="email"
                fullWidth
                value={email}
                onChange={handleInputChange}
              />
              <div style={{ height: 20 }} />
              <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
              >
                Iniciar
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
