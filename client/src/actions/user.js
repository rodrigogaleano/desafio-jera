

const url = process.dotenv.REACT_APP_SERVER_URL + '/user';

export const registrar = async (user, dispatch) => {
    dispatch({ type: 'START_LOADING' });

    //MANDAR PARA O SERVIDOR

    dispatch({ type: 'END_LOADING' });
}