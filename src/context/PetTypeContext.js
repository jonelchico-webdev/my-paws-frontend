import createDataContext from "./createDataContext";
import myPawsAPI from "../api/mypaws";

const authReducer = (state, action) => {
    switch (action.type) {
        case "get_pet_type":
            return { ...state, isLoading: true };

        default:
            return state;
    }
};

const getPetTypes = (dispatch) = async () => {

}

export const { Provider, Context } = createDataContext(
    authReducer,
    { getPetTypes },
    { type: null, breeds: null, isLoading: false }
);
