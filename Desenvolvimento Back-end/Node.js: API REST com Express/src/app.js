const express = require('express');

const app = express();

app.use(express.json());

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];
  
  app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;
    const activity = activities.find((i) => i === Number(id));
    res.status(200).json(activity);
  });

  // app.get('/myActivities/:id', (req, res) => {
  //   const { id } = req.params;
  //   const { description, status } = req.body;
  //   let activity;
  
  //   for (let i = 0; i < activities.length; i += 1) {
  //     const act = activities[i];
  
  //     if (act.id === Number(id)) {
  //       act.description = description;
  //       act.status = status;
  //       activity = act;
  //     }
  //   }
  
  //   res.status(200).json({ activity });
  // });

  app.get('/myActivities', (req, res) => {
    res.status(200).json({ activities });
  });

  app.get('/filter/myActivities', (req, res) => {
    const { status } = res.query;
    let filteredActivities = activities;
    
    if (status) {
        filteredActivities = activities.filter((activity) => activity.status === status);
    }
    res.status(200).json({ activities: filteredActivities });
  });

  app.get('/search/myActivities', (req, res) => {
    const { q } = req.query;
    let filteredActivities = [];
    
    if (q) {
        filteredActivities = activities.filter((activity) => activity.description.includes(q));
    }
    res.status(200).json({ activities: filteredActivities });
  });

  module.exports = app;