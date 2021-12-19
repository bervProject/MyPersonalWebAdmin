import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, Grid } from '@material-ui/core';
import { Title } from 'react-admin';
import feathersClient from './feathersClient';
export default () => {
  const [count, setCount] = useState({
    totalAdmin: 0,
    totalUser: 0,
    totalExp: 0,
    totalEdu: 0,
    totalPorto: 0,
    totalPost: 0,
    totalDraft: 0
  });

  useEffect(() => {
    feathersClient.service("users").find({
      query: {
        role: 'admin',
        $limit: 0
      }
    }).then((result: any) => {
      setCount((count) => ({ ...count, totalAdmin: result.total }));
    });
  }, [count.totalAdmin]);

  useEffect(() => {
    feathersClient.service("users").find({
      query: {
        role: { $ne: 'admin' },
        $limit: 0
      }
    }).then((result: any) => {
      setCount((count) => ({ ...count, totalUser: result.total }));
    });
  }, [count.totalUser]);

  useEffect(() => {
    feathersClient.service("experience").find({
      query: {
        $limit: 0
      }
    }).then((result: any) => {
      setCount((count) => ({ ...count, totalExp: result.total }));
    });
  }, [count.totalExp]);

  useEffect(() => {
    feathersClient.service("education").find({
      query: {
        $limit: 0
      }
    }).then((result: any) => {
      setCount((count) => ({ ...count, totalEdu: result.total }));
    });
  }, [count.totalEdu]);

  useEffect(() => {
    feathersClient.service("portofolio").find({
      query: {
        $limit: 0
      }
    }).then((result: any) => {
      setCount((count) => ({ ...count, totalPorto: result.total }));
    });
  }, [count.totalPorto]);

  useEffect(() => {
    feathersClient.service("blog").find({
      query: {
        draft: false,
        $limit: 0
      }
    }).then((result: any) => {
      setCount((count) => ({ ...count, totalPost: result.total }));
    });
  }, [count.totalPost]);

  useEffect(() => {
    feathersClient.service("blog").find({
      query: {
        draft: true,
        $limit: 0
      }
    }).then((result: any) => {
      setCount((count) => ({ ...count, totalDraft: result.total }));
    });
  }, [count.totalDraft]);

  return (
    <Grid container spacing={2}>
      <Title title="Welcome to the administration" />
      <Grid item xs={6}>
        <Card>
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
          <CardHeader title="Blog Data" />
          <CardContent>
            <p>Total Post: {count.totalPost}</p>
            <p>Total Draft: {count.totalDraft}</p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};
