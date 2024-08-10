"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = void 0;
var _app = _interopRequireDefault(require("firebase/app"));
require("firebase/database");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = _app.default.initializeApp(firebaseConfig);
const database = exports.database = app.database();