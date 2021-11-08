import * as api from '../api'


export const getActivities = () => async (dispatch) =>
{

    try{
        const {data }= await api.fetchActivities();
        console.log(data);
       
    dispatch({type:'FETCH_ALL',payload:data});

    }
    catch(error)
    {
        console.log(error);
    }
    
}

export const deleteActivities = (id) => async (dispatch) => {
    try {
      await await api.deleteActivities(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  export const createActivities = (activity) => async (dispatch) => {
    try {
        console.log(activity);
  
        
      const { data } = await api.createActivities(activity);
     
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateActivities= (id, activity) => async (dispatch) => {
    try {
      const { data } = await api.updateActivities(id, activity);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };