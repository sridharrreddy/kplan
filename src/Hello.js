import React, { useState, useEffect, useReducer } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ActionCard from './ActionCard';
import TotalReducer from './TotalReducer';

function Hello() {
  const defaultState = {
    total: 1,
    lastAction: '-',
    invocationHistory: {
      triple: [],
      half: [],
    },
  };
  const [state, dispatch] = useReducer(TotalReducer, defaultState);
  const [lastInvokedAt, setLastInvokedAt] = useState('-');

  useEffect(() => {
    if (state.lastAction !== '-') {
      setLastInvokedAt(new Date().toLocaleTimeString());
    }
  }, [state.lastAction]);

  return (
    <div className="App">
      <div className="main">
        <div className="summary">
          <List>
            <ListItem>
              <ListItemText primary="Total" secondary={state.total} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Last Invoked Action"
                secondary={state.lastAction}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Last Invoked Action At"
                secondary={lastInvokedAt}
              />
            </ListItem>
          </List>
        </div>
      </div>

      <div className="action-cards">
        <ActionCard
          actionText="Triple"
          invocationHistory={state.invocationHistory.triple}
          onAction={() => dispatch({ type: 'triple' })}
        />
        <ActionCard
          actionText="Half"
          invocationHistory={state.invocationHistory.half}
          onAction={() => dispatch({ type: 'half' })}
        />
      </div>
    </div>
  );
}
export default Hello;
