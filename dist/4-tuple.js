"use strict";
let webDriverLog;
webDriverLog = ["webdriver not found", 500];
/*
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.
*/
// webDriverLog = [500, "webdriver not found"];
webDriverLog[0]; // corresponding 'string' methods will be accessible
webDriverLog[1]; // corresponding 'number' methods will be accessible
