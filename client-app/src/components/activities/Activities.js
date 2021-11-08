import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import Activity from './activity/Activity'
import Forms from '../Form/Form'
import './style.css'

function Activities({currentId, setCurrentId}) {
    const activities = useSelector((state) => state.activities);



    return (

        <Grid column={2} divided>
            <Grid.Column width='12' >
                <Segment className="segment">
                    {
                        activities.map((activity) => (
                            <Activity setCurrentId={setCurrentId}  key={activity.id} activity={activity} />
                        ))
                    }
                </Segment>
            </Grid.Column>


            <Grid.Column width='4'>
                <Segment>
                    <Forms currentId={currentId} setCurrentId={setCurrentId}  />
                </Segment>



            </Grid.Column>

        </Grid>

    )
}

export default Activities
