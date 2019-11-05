import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

function ActionCard({ actionText, invocationHistory = [], onAction }) {
  return (
    <div className="add-card">
      <Badge color="primary" badgeContent={invocationHistory.length}>
        <Button variant="outlined" color="primary" onClick={onAction}>
          {actionText}
        </Button>
      </Badge>
      <ListItemText
        primary="Invoked at"
        secondary={invocationHistory.join(',') || '-'}
      />
    </div>
  );
}

export default ActionCard;
