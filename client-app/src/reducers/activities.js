export default (activities=[], action) =>{
        switch(action.type){
            case 'FETCH_ALL':
                return action.payload;
            case 'DELETE':
                return activities.filter((activity) => activity.id !== action.payload);
            case 'CREATE':
                return [...activities, action.payload];
            case 'UPDATE':
                return activities.map((activity) => (activity.id === action.payload.id ? action.payload : activity));
            default:
                return activities;

        }
}