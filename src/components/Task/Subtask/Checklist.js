import { Grid } from '@mui/material';
import React, { useState } from 'react'

const Checklist = ({ subTasks, toggleSubTask }) => {
    return (
        subTasks.map((subTask, index) => (
            <Grid item sm={12}>
                <Checkbox
                    label={subTask.title}
                    value={subTask.isCompleted}
                    onChange={() => toggleSubTask(index)}
                />
            </Grid>
        ))
    );
}

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input
                type="checkbox"
                checked={value}
                onChange={onChange} />
            {label}
        </label>
    );
};

export default Checklist;