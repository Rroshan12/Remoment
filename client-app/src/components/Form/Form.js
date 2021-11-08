import React ,{useState,useEffect} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { createActivities } from '../../actions/activities';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-uuid';
import moment from 'moment';
import { updateActivities } from '../../actions/activities';

function Forms({currentId,setCurrentId}) {
  const [activity, setActivity] = useState({id: `${uuid()}`.toString , title: '', description: '', city: '', date:  moment().add(14, 'days').toISOString() ,category:'',venue:'' });
  const activityData = useSelector((state) => (currentId ? state.activities.find((message) => message.id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (activityData) setActivity(activityData);
  }, [activityData]);

  const clear = () => {
    setCurrentId(0);
    setActivity({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createActivities(activity));
      clear();
    } else {
      dispatch(updateActivities(currentId, activity ));
      clear();
    }
  };
  return (
    
    <Form unstackable onSubmit={handleSubmit}>
      <h2>Create Activities</h2>
        <Form.Input label='Title' placeholder='Title' value={activity.title} onChange={(e) => setActivity({ ...activity, title: e.target.value })} />
        <Form.Input label='Category' placeholder='category' value={activity.category}  onChange={(e) => setActivity({ ...activity, category: e.target.value })}  />
        <Form.Input label='Venue' placeholder='venue' value={activity.venue}   onChange={(e) => setActivity({ ...activity, venue: e.target.value })} />

  
    
        <Form.TextArea label='Description' placeholder='description' value={activity.description} onChange={(e) => setActivity({ ...activity, description: e.target.value })}  />
        <Form.Input label='city' placeholder='city' value={activity.city}  onChange={(e) => setActivity({ ...activity, city: e.target.value })}  />

     

      <Button floated='right' positive type='submit'>Submit</Button>
      <Button floated='right'  type='submit'>Cancel</Button>
    </Form>
  
  )
}

export default Forms
