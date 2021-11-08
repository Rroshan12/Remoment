import React from 'react'
import { useDispatch } from 'react-redux';


import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { deleteActivities } from '../../../actions/activities';






function Activity({activity,setCurrentId}) {
 const dispatch = useDispatch();
 

  
    return (
     
      <Card style={{margin:'5px'}}  >
      <Image src={`asset/categoryImages/${activity.category}.jpg` } wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
         {activity.category},
          {activity.venue}
        </a>
      </Card.Content>
      <Card.Content extra>
        <Button content="Delete" onClick={() => dispatch(deleteActivities(activity.id))} />
        <Button content="Edit" onClick={()=>setCurrentId(activity.id)} />
      </Card.Content>
    </Card>
    
    )
}

export default Activity
