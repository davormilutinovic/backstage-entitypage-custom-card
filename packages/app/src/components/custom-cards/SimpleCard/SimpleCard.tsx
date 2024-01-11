// Importing necessary components and hooks from Backstage and Material-UI libraries
import React from 'react';
import { Card, CardContent, Typography, Link, Chip } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';

// SimpleCard functional component
export function SimpleCard() {
  // Hook to access the entity from the Backstage catalog
  const { entity } = useEntity();

  // Extracting name and description from the entity metadata
  const name = entity.metadata.name;
  const description = entity.metadata.description || 'No description provided';

  // Custom data for demonstration, here it's static but it can be dynamic
  const customData = {
    lastUpdated: '2024-01-11', // Date of last update
    status: 'Hyperactive' // Status of the entity
  };

  // JSX for rendering the component
  return (
    <Card>
      <CardContent>
        {/* Title for the card */}
        <Typography variant="h5">Simple Card</Typography>
        {/* Displaying the name and description */}
        <Typography color="textSecondary" gutterBottom>
          {name} - {description}
        </Typography>
        {/* Chip to display the status */}
        <Chip label={`Status: ${customData.status}`} color="primary" />
        <Typography variant="body2">
          Last Updated: {customData.lastUpdated}
        </Typography>
        <Link href="#" onClick={() => console.log('Link clicked!')}>
          Learn more
        </Link>
      </CardContent>
    </Card>
  );
}

