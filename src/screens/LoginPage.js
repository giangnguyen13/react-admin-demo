import React from "react";
import { Login } from "react-admin";
// import { withStyles } from "@material-ui/core/styles";

const LoginPage = () => {
  return (
    <Login
      // A random image that changes everyday
      // backgroundImage='https://mms.businesswire.com/media/20210609005920/en/884175/5/BMO_Financial_Group_logo.jpg?download=1'
      backgroundImage='https://upload.wikimedia.org/wikipedia/en/c/c6/BMO_Capital_Markets_logo.svg'
      // backgroundImage='https://source.unsplash.com/random/1600x900/daily'
    />
  );
};

export default LoginPage;

// const styles = {
//   main: { background: "#333" },
//   avatar: {
//     background:
//       "url(https://upload.wikimedia.org/wikipedia/en/c/c6/BMO_Capital_Markets_logo.svg)",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "contain",
//     height: 80,
//   },
//   icon: { display: "none" },
// };

// // const CustomLoginForm = withStyles({
// //   button: { background: "#F15922" },
// // })(LoginForm);

// const LoginPage = (props) => (
//   // <Login
//   //   // A random image that changes everyday
//   //   // backgroundImage='https://mms.businesswire.com/media/20210609005920/en/884175/5/BMO_Financial_Group_logo.jpg?download=1'
//   //   backgroundImage='https://upload.wikimedia.org/wikipedia/en/c/c6/BMO_Capital_Markets_logo.svg'
//   //   // backgroundImage='https://source.unsplash.com/random/1600x900/daily'
//   // />
//   <Login {...props} />
// );

// export default withStyles(styles)(LoginPage);
