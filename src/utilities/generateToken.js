// import jwt from "jsonwebtoken";

// const JWT_TOKEN_EXPIRED_IN_HOUR = 3;
// const JWT_SECRET = "very_secret";

// const generateToken = (user) => {
//   return jwt.sign({ ...user }, JWT_SECRET, {
//     expiresIn: `${JWT_TOKEN_EXPIRED_IN_HOUR} hrs`,
//   });
// };

// /**
//  * Get token expired date in miliseconds
//  * @returns int
//  */
// export const getExpiredTokenDate = () => {
//   let dt = new Date();
//   const added_hour = dt.getHours() + parseInt(JWT_TOKEN_EXPIRED_IN_HOUR);

//   dt.setHours(added_hour);
//   return dt.getTime();
// };

// export default generateToken;
