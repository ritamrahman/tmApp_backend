const Users = require("../models/user");

// add new user
exports.addUser = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });
  console.log(user);
  if (user) {
    return;
  }
  const addUser = await Users.create(req.body);

  res.status(201).json({
    success: true,
    addUser,
  });
};

// // get all users
// exports.getAllUsers = async (req, res, next) => {
//   const query = {};

//   const allUsers = await Users.find(query);

//   res.status(201).json({
//     success: true,
//     allUsers,
//   });
// };
// // get all buyers
// exports.getAllBuyers = async (req, res, next) => {
//   const query = { role: "buyer" };

//   const allUsers = await Users.find(query);

//   // const count = allUsers?.length;

//   res.status(201).json({
//     success: true,

//     count: allUsers?.length,
//     allUsers,
//   });
// };
// // get all sellers
// exports.getAllSellers = async (req, res, next) => {
//   const query = { role: "sellers" };

//   const allUsers = await Users.find(query);

//   // const count = allUsers?.length;

//   res.status(201).json({
//     success: true,

//     count: allUsers?.length,
//     allUsers,
//   });
// };

// // getSingleUser
// exports.getSingleUser = async (req, res, next) => {
//   let user = await Users.findOne({ email: req.params.email });

//   if (!user) {
//     // return res.status(404).json({
//     //   success: false,
//     //   message: "user update successfully!",
//     // });
//     return "user not found", 404;
//   }

//   res.status(200).json({
//     success: true,
//     user,
//     count: user.length,
//   });
// };
// // update user
// exports.updateUser = async (req, res, next) => {
//   let user = await Users.findOne({ email: req.params.email });

//   // user update function
//   user = await Users.updateOne(user, req.body, {
//     new: true,
//   });

//   res.status(200).json({
//     success: true,
//     message: "user update successfully!",
//     user,
//   });
// };

// // delete user
// exports.deleteUser = async (req, res, next) => {
//   let user = await Users.findById(req.params.id);

//   if (!user) {
//     return "user not found", 404;
//   }

//   // user update function
//   user = await Users.findByIdAndDelete(req.params.id);

//   res.status(200).json({
//     success: true,
//     message: "user deleted successfully!",
//     user,
//   });
// };
