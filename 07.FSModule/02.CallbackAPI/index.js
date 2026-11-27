import * as fs from "fs";

fs.mkdir("d:\\nodejs", function (error) {
  if (error) throw error;
  console.log("Directory created ...");
});
