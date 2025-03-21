import { createContext, useContext, useReducer, useCallback } from "react";
import { SvgList } from "@/utils/SvgList";

const initialState = {
  userLogo: null,
  thickness: 0,
  rotation: 0,
  color: "#787878",
  name: "Arosade",
  showModal: false,
  selectedSvg: null,
  showSidebar: false,
  showSvgGallery: false,
  showLoginModal: false,
  logoError: null,
  logoWarning: null,
};

function appReducer(state, action) {
  switch (action.type) {
    case "SET_USER_LOGO":
      return { ...state, userLogo: action.payload };
    case "SET_THICKNESS":
      return { ...state, thickness: action.payload };
    case "SET_ROTATION":
      return { ...state, rotation: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SELECTED_SVG":
      return {
        ...state,
        selectedSvg: action.payload,
        showSvgGallery: false,
        showModal: false,
      };
    case "TOGGLE_SIDEBAR":
      return { ...state, showSidebar: !state.showSidebar };
    case "TOGGLE_SVG_GALLERY":
      return { ...state, showSvgGallery: !state.showSvgGallery };
    case "TOGGLE_LOGIN_MODAL":
      return { ...state, showLoginModal: !state.showLoginModal };
    case "SET_LOGO_ERROR":
      return { ...state, logoError: action.payload };
    case "SET_LOGO_WARNING":
      return { ...state, logoWarning: action.payload };
    case "CLEAR_LOGO_ERROR":
      return { ...state, logoError: null };
    case "CLEAR_LOGO_WARNING":
      return { ...state, logoWarning: null };
    default:
      return state;
  }
}

const AppContext = createContext();

export const AppProvider = ({ children, initialSvg }) => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    selectedSvg: initialSvg || SvgList[0],
  });

  const toggleSidebar = useCallback(() => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  }, []);

  const toggleSvgGallery = useCallback(() => {
    dispatch({ type: "TOGGLE_SVG_GALLERY" });
  }, []);

  const toggleLoginModal = useCallback(() => {
    dispatch({ type: "TOGGLE_LOGIN_MODAL" });
  }, []);

  const handleNameChange = useCallback((event) => {
    dispatch({ type: "SET_NAME", payload: event.target.value });
  }, []);

  const handleColorChange = useCallback((event) => {
    dispatch({ type: "SET_COLOR", payload: event.target.value });
  }, []);

  const handleThicknessChange = useCallback((value) => {
    dispatch({ type: "SET_THICKNESS", payload: value });
  }, []);

  const handleRotationChange = useCallback((value) => {
    dispatch({ type: "SET_ROTATION", payload: value });
  }, []);

  const handleSvgSelect = useCallback((svg) => {
    dispatch({ type: "SET_SELECTED_SVG", payload: svg });
  }, []);

  const handleLogoChange = useCallback((logoDataUrl) => {
    dispatch({ type: "SET_USER_LOGO", payload: logoDataUrl });
  }, []);

  const handleLogoError = useCallback((error) => {
    dispatch({ type: "SET_LOGO_ERROR", payload: error });
  }, []);

  const handleLogoWarning = useCallback((warning) => {
    dispatch({ type: "SET_LOGO_WARNING", payload: warning });
  }, []);

  const value = {
    state,
    dispatch,
    toggleSidebar,
    toggleSvgGallery,
    toggleLoginModal,
    handleNameChange,
    handleColorChange,
    handleThicknessChange,
    handleRotationChange,
    handleSvgSelect,
    handleLogoChange,
    handleLogoError,
    handleLogoWarning,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
