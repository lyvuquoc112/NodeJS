function greet(username) {
  console.log("Hello", username);
}

//Tell other files that this function is available to use
module.exports = greet;