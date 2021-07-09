import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, Grid } from "@material-ui/core";
import { Title } from "react-admin";
import feathersClient from './feathersClient';
export default () => {
  const [count, setCount] = useState({
    totalAdmin: 0,
    totalUser: 0,
    totalExp: 0,
    totalEdu: 0,
    totalPorto: 0,
    totalPost: 0
  });

  useEffect(() => {
    feathersClient.service("users").find({
      query: {
        role: 'admin',
        $select: ['email']
      }
    }).then(result => {
      setCount((count) => ({ ...count, totalAdmin: result.total }));
    });
  }, [count.totalAdmin]);

  useEffect(() => {
    feathersClient.service("users").find({
      query: {
        role: { $ne: 'admin' },
        $select: ['email']
      }
    }).then(result => {
      setCount((count) => ({ ...count, totalUser: result.total }));
    });
  }, [count.totalUser]);

  useEffect(() => {
    feathersClient.service("experience").find().then(result => {
      setCount((count) => ({ ...count, totalExp: result.total }));
    });
  }, [count.totalExp]);

  useEffect(() => {
    feathersClient.service("education").find().then(result => {
      setCount((count) => ({ ...count, totalEdu: result.total }));
    });
  }, [count.totalEdu]);

  useEffect(() => {
    feathersClient.service("portofolio").find().then(result => {
      setCount((count) => ({ ...count, totalPorto: result.total }));
    });
  }, [count.totalPorto]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <Title title="Welcome to the administration" />
          <CardHeader title="Users Data" />
          <CardContent>
            <p>Total Admin: {count.totalAdmin}</p>
            <p>Total Normal User: {count.totalUser}</p>
            <p>Total Experiences Data: {count.totalExp}</p>
            <p>Total Education Data: {count.totalEdu}</p>
            <p>Total Portofolio Data: {count.totalPorto}</p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Title title="Welcome to the administration" />
          <CardHeader title="Blog Data" />
          <CardContent>
            <p>Total Post: {count.totalPost}</p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};
