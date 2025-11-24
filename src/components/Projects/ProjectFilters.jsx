import React from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FilterButton, FilterIcon, FilterTitle, FilterCount } from '../UI/StyledComponents';

const ProjectFilters = ({ filters, activeFilter, onFilterChange, projectCounts }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {filters.map((filter) => (
        <Grid item xs={12} sm={6} md={4} key={filter.key}>
          <FilterButton
            $active={activeFilter === filter.key} // Use $ prefix for transient prop
            onClick={() => onFilterChange(filter.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FilterIcon>{filter.icon}</FilterIcon>
            <FilterTitle>{filter.label}</FilterTitle>
            <FilterCount $active={activeFilter === filter.key}> {/* Use $ prefix */}
              {projectCounts[filter.key]} Project{projectCounts[filter.key] !== 1 ? 's' : ''}
            </FilterCount>
          </FilterButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectFilters;