import React, { useContext, useState } from "react";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import fbLogo from "../../images/facebook.png";
import googleLogo from "../../images/google.png";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    container: {
        maxWidth: "455px",
        backgroundColor: "white",
        margin: "0 auto",
        marginTop: "20px",
        padding: "20px 30px 10px 20px",
        border: "1px solid lightgray",
        borderRadius: "5px",
    },

    submit: {
        backgroundColor: "#F9A51A",
        border: "none",
        padding: "9px 5px",
        color: "#fff"
    },
    small: {
        textAlign: "center",
    },
    dashContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "460px",
        margin: "10px auto",
    },
    dash: {
        height: "1px",
        border: ".1px solid lightgray",
        width: "15%",
        margin: "2px 3px",
    },
    logo: {
        height: "20px",
        justifySelf: "start",
        marginRight: "40px",
    },
    thirdPartyLoginBtn: {
        width: "460px",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        border: "1px solid lightgray",
        height: '55px',
    },
}));

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({});
    const [newUser, setNewUser] = useState(false);


    const classes = useStyles();

    return (
        <div >
            <div className="container">
                <div className={classes.container}>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        {newUser ? (
                            <h5>Create an account</h5>
                        ) : (
                                <h5> Sign in</h5>
                            )}

                        {newUser && (
                            <TextField
                                label="First Name"
                                required
                                name="firstName"
                            />
                        )}
                        <br />
                        {newUser && (
                            <TextField
                                label="Last Name"
                                required
                                name="lastName"
                            />
                        )}
                        <br />
                        <TextField
                            label="Username or Email"
                            required
                            name="email"
                            type="email"
                        />

                        <br />
                        <TextField
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            required
                            name="password"
                        />
                        <br />
                        {newUser && (
                            <TextField
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                required
                                name="confirmPassword"
                            />
                        )}
                        <br />

                        <input
                            className={classes.submit}
                            type="submit"
                            value={newUser ? "Create an account" : "Login"}
                        />

                        <small style={{ color: "red" }}>{user.error}</small>
                        <div className={classes.small}>
                            <small>
                                Already have an account?{" "}
                                <span
                                    className="toggle-field"
                                    onClick={() => setNewUser(!newUser)}
                                >
                                    {newUser ? "Login" : "Create an account"}
                                </span>
                            </small>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center my-3">
                        <div className={`${classes.dash} mt-3`}>

                        </div>
                        <div className="mt-1">
                            or
                    </div>
                        <div className={`${classes.dash} mt-3`}>

                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <button
                        className={`${classes.thirdPartyLoginBtn} col-md-6 col-sm-12 col-12 btn btn-light`}
                    >
                        <img src={fbLogo} alt="" className={classes.logo} />
                    Continue with Facebook
                    </button>
                    <br />
                    <button
                        className={`${classes.thirdPartyLoginBtn} col-md-6 col-sm-12 col-12 btn btn-light`}
                    >
                        <img src={googleLogo} alt="" className={classes.logo} />
                    Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
