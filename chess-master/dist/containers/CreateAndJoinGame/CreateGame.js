"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _react = require("react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _roomsSlice = require("../../store/slices/rooms/roomsSlice");
var _firebaseDb = require("../../services/firebaseDb");
var _Input = _interopRequireDefault(require("../../components/UI/Input"));
var _Button = _interopRequireDefault(require("../../components/UI/Button"));
var _Spinner = _interopRequireDefault(require("../../components/UI/Spinner"));
var _Error = _interopRequireDefault(require("../../components/UI/Error"));
var _Chess = _interopRequireDefault(require("../Board/Chess"));
var _useModal = _interopRequireDefault(require("../../hooks/useModal"));
var _ModalRoomId = _interopRequireDefault(require("../../components/UI/ModalsTexts/ModalRoomId"));
var _checkValidity = require("../../utils/createGameHelpers/checkValidity");
var _chessBackground = _interopRequireDefault(require("../../assets/background/chess-background.png"));
var _Shape = _interopRequireDefault(require("../../components/UI/Shape"));
var _store = require("../../store/store");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const CreateGame = () => {
  const dispatch = (0, _store.useAppDispatch)();
  const {
    status
  } = (0, _reactRedux.useSelector)(state => state.room);
  const {
    roomID
  } = (0, _reactRedux.useSelector)(state => state.room);
  const {
    isShowing,
    toggle
  } = (0, _useModal.default)();
  const [formError, setFormError] = (0, _react.useState)(false);
  const [inputForm, setInputForm] = (0, _react.useState)({
    name: {
      value: "",
      placeholder: "Enter your name",
      validation: {
        required: true,
        minLength: 2,
        maxLength: 20
      },
      message: "Name must have minimum 2 and maximum 20 characters.",
      valid: false
    }
  });
  (0, _react.useEffect)(() => {
    let statusRef = _firebaseDb.database.ref("rooms/" + roomID + "/status");
    if (status === "loading") {
      //statusRef = database.ref("rooms/" + roomID + "/status");
      statusRef.on("value", snapshot => {
        const data = snapshot.val();
        if (data === "started") {
          dispatch((0, _roomsSlice.startGame)());
        }
      });
    }
    return () => statusRef && statusRef.off();
  }, [status, roomID, dispatch]);
  const onInputChangeHandler = (e, inputIdentifier) => {
    const updatedInputForm = {
      ...inputForm
    };
    const updatedFormElement = {
      ...updatedInputForm[inputIdentifier]
    };
    updatedFormElement.value = e.currentTarget.value;
    updatedInputForm[inputIdentifier] = updatedFormElement;

    // validation
    updatedFormElement.valid = (0, _checkValidity.checkValidity)(updatedFormElement.value, updatedFormElement.validation);
    let formIsValid = true;
    Object.keys(updatedInputForm).forEach(el => {
      formIsValid = updatedInputForm[el].valid && formIsValid;
    });
    setInputForm(updatedInputForm);
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    if (Object.keys(inputForm).every(el => inputForm[el].valid === true)) {
      dispatch((0, _roomsSlice.createRoom)(inputForm.name.value));
      toggle();
    } else {
      setFormError(true);
    }
  };
  const formElementsArray = Object.keys(inputForm).map(el => {
    return {
      id: el,
      config: inputForm[el]
    };
  });
  let renderComponent = /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      zIndex: 1000
    }
  }, "Create game"), /*#__PURE__*/React.createElement(FormStyled, {
    autoComplete: "off",
    onSubmit: onSubmitHandler
  }, formElementsArray.map(el => /*#__PURE__*/React.createElement(_Input.default, {
    key: el.id,
    placeholder: el.config.placeholder,
    value: el.config.value,
    formError: formError,
    invalid: !el.config.valid,
    message: el.config.message,
    onInputChangeHandler: e => onInputChangeHandler(e, el.id)
  })), /*#__PURE__*/React.createElement(_Button.default, null, "Create")), /*#__PURE__*/React.createElement(ImgStyled, {
    src: _chessBackground.default,
    alt: "chess"
  }), /*#__PURE__*/React.createElement(_Shape.default, {
    width: 800,
    height: 400,
    remove: "true"
  }), /*#__PURE__*/React.createElement(_Shape.default, {
    width: 400,
    height: 800
  }));
  if (status === "loading") {
    renderComponent = /*#__PURE__*/React.createElement(_Spinner.default, {
      showModal: isShowing
    }, /*#__PURE__*/React.createElement(_ModalRoomId.default, {
      isShowing: isShowing,
      toggle: toggle,
      roomID: roomID
    }));
  } else if (status === "started") {
    renderComponent = /*#__PURE__*/React.createElement(_Chess.default, null);
  } else if (status === "error") {
    renderComponent = /*#__PURE__*/React.createElement(_Error.default, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderComponent);
};
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
const FormStyled = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  z-index: 1000;\n"])));
const ImgStyled = _styledComponents.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  max-width: 300px;\n  margin-top: 2rem;\n  z-index: 1000;\n"])));
var _default = exports.default = CreateGame;