import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, Grid } from "@material-ui/core";
import { Title } from "react-admin";
import feathersClient from './feathersClient';
export default () => {
  const [totalAdmin, setTotalAdmin] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [totalExp, setTotalExp] = useState(0);
  const [totalEdu, setTotalEdu] = useState(0);
  const [totalPorto, setTotalPorto] = useState(0);
  const [totalPost, setTotalPost] = useState(0);
  useEffect(() => {
    const adminTask = feathersClient.service("users").find({
      query: {
        role: 'admin',
        $select: ['email']
      }
    });
    const userTask = feathersClient.service("users").find({
      query: {
        role: {$ne:'admin'},
        $select: ['email']
      }
    });
    const experienceTask = feathersClient.service("experience").find();
    const task = [adminTask, userTask, experienceTask];
    Promise.all(task).then(results => {
      const userAdminTotal = results[0].total;
      const userTotal = results[1].total;
      const expTotal = results[2].total;
      setTotalAdmin(userAdminTotal);
      setTotalUser(userTotal);
      setTotalExp(expTotal);
    }).catch(error => {
      console.error(error);
    });
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <Title title="Welcome to the administration" />
          <CardHeader title="Users Data" />
          <CardContent>
            <p>Total Admin: {totalAdmin}</p>
            <p>Total Normal User: {totalUser}</p>
            <p>Total Experiences Data: {totalExp}</p>
            <p>Total Education Data: {totalEdu}</p>
            <p>Total Portofolio Data: {totalPorto}</p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Title title="Welcome to the administration" />
          <CardHeader title="Blog Data" />
          <CardContent>
            <p>Total Post: {totalPost}</p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

  )
};
