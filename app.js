const express = require("express");
const cors = require("cors");

const {
  addTask,
  getMyAllTasksByEmail,
  deleteTask,
  getMyAllCompletedTasks,
  updateTask,
  getTaskById,
} = require("./controllers/taskController");
const { addUser } = require("./controllers/userControler");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.get("/", async (req, res) => {
  res.send("server running...");
});

// product route
app.post("/task/:email", addTask); //add product
app.get("/tasks/:email", getMyAllTasksByEmail); //my all tasks by email
app.get("/completetasks/:email", getMyAllCompletedTasks); //my all completed tasks
app.get("/gettask/:id", getTaskById); //update task
app.get("/updatetasks/:id", updateTask); //update task
app.delete("/task/:id", deleteTask); //my task delete

// // category route
// app.post("/category", addCategory); //add category
// app.get("/categories", getCategories); //get categories

// // booking route
// app.post("/booking/:id", addBooking); //add User
// app.get("/users/:email", getMyBookings); //get my all bookings
// app.get("/bookings", getBookings); //get my all bookings
// app.delete("/deleteallbookings", deleteAllBookings); //delete all product
// // app.put("/user/:id", updateUser); //update single User
// // app.delete("/user/:id", deleteUser); //delete single User

// // user route
app.post("/user/:email", addUser); //add User
// app.get("/user/:email", getSingleUser); //get getSingleUser by email
// app.get("/buyers", getAllBuyers); //get gall buyers
// app.get("/sellers", getAllSellers); //get gall sellers
// app.get("/users", getAllUsers); //get all User
// app.put("/user/:email", updateUser); //update single User
// app.delete("/user/:id", deleteUser); //delete single User

module.exports = app;
