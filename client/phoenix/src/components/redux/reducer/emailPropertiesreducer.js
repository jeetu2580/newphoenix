
import { 
    SET_EMAIL_PROPERTIES, SET_EMAIL_HTML, SET_INPUT_CHECK
} from "./../actions/actionTypes";

const initialState = {
    
    formValues: {
        methodEmail:'Template',
      emailName: '',
      subject:"",
      preheader:"",
      
      description:""
    },
    html:{},
    design:"",
    formStatus: false
   
  };
  
  const emailPropertiesreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EMAIL_PROPERTIES:
        return {
          ...state,
          formValues: action.payload
        };
        case SET_EMAIL_HTML:
        return {
          ...state,
          html: action.payloadh,
          design : action.payloadd
        };
        case SET_INPUT_CHECK:
          return {
            ...state,
            
            formStatus : action.payload
          };
        
      default:
        return state;
    }
  };
  
  export default emailPropertiesreducer;