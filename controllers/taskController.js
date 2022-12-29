const Tasks = require("../models/addTasks");
const Users = require("../models/user");

// add new tasks
exports.addTask = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });

  req.body.user = user?._id;

  console.log(req.body);
  const addTask = await Tasks.create(req.body);

  res.status(201).json({
    success: true,
    addTask,
  });
};

// // get my all Tasks by email
exports.getMyAllTasksByEmail = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });

  let tasks = await Tasks.find({ user: user?._id })
    .populate({ path: "user" })
    .exec();

  if (!tasks) {
    return "tasks not found", 404;
  }
  let count = tasks.length;

  res.status(200).json({
    success: true,
    count,
    tasks,
  });
};

// // get my all completed Tasks
exports.getMyAllCompletedTasks = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });

  let tasks = await Tasks.find({
    $and: [{ user: user?._id }, { isCompleted: true }],
  }).exec();

  if (!tasks) {
    return "tasks not found", 404;
  }
  let count = tasks.length;

  res.status(200).json({
    success: true,
    count,
    tasks,
  });
};

// // delete product
exports.deleteTask = async (req, res, next) => {
  let task = await Tasks.findById(req.params.id);

  if (!task) {
    return "task not found", 404;
  }

  // task update function
  task = await Tasks.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "task deleted successfully!",
    task,
  });
};

// // get product by id
exports.getTaskById = async (req, res, next) => {
  // let product = await Products.findById(req.params.id);

  // if (!product) {
  //   return "Product not found", 404;
  // }

  // product update function
  let task = await Tasks.find({ _id: req.params.id }).populate({
    path: "user",
  });

  res.status(200).json({
    success: true,
    task,
  });
};

// // update product single product
exports.updateTask = async (req, res, next) => {
  let task = await Tasks.findById(req.params.id);

  if (!task) {
    return "task not found", 404;
  }

  // task update function
  task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "task update successfully!",
    task,
  });
};

// // get all products
// exports.getAllTasks = async (req, res, next) => {
//   const query = {};

//   const allProducts = await Tasks.find(query)
//     .populate({ path: "category", select: "title" })
//     .populate({ path: "SellerName", select: ["name", "email"] })
//     .exec();

//   res.status(201).json({
//     success: true,
//     allProducts,
//   });
// };

// // get product by id
// // exports.getProductById = async (req, res, next) => {
// //   // let product = await Products.findById(req.params.id);

// //   // if (!product) {
// //   //   return "Product not found", 404;
// //   // }

// //   // product update function
// //   let product = await Products.find({ _id: req.params.id })
// //     .populate({ path: "SellerName" })
// //     .populate({ path: "category" });

// //   res.status(200).json({
// //     success: true,
// //     product,
// //   });
// // };

// // get all products by ctg
// exports.getFilterProducts = async (req, res, next) => {
//   let product = await Products.find({ category: req.params.id })
//     .populate({ path: "category" })
//     .populate({ path: "SellerName" })
//     .exec();

//   if (!product) {
//     return "Product not found", 404;
//   }
//   let count = product.length;

//   res.status(200).json({
//     success: true,
//     count,
//     product,
//   });
// };

// // get all Advertise products
// exports.getAllADProducts = async (req, res, next) => {
//   let product = await Products.find({ isAdvertise: true })
//     .populate({ path: "category", select: "title" })
//     .populate({ path: "SellerName", select: ["name", "email"] })
//     .exec();

//   if (!product) {
//     return "Product not found", 404;
//   }
//   let count = product.length;

//   res.status(200).json({
//     success: true,
//     count,
//     product,
//   });
// };

// // update product single product
// exports.updateProduct = async (req, res, next) => {
//   let product = await Products.findById(req.params.id);

//   if (!product) {
//     return "Product not found", 404;
//   }

//   // product update function
//   product = await Products.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.status(200).json({
//     success: true,
//     message: "Product update successfully!",
//     product,
//   });
// };

// // delete all products
// exports.deleteAllProducts = async (req, res, next) => {
//   await Products.deleteMany({});

//   res.status(200).json({
//     success: true,
//     message: "Product deleted successfully!",
//   });
// };
