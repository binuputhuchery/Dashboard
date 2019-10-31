import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Sidebar() {
    return (
        <aside>
        <h2>Sidebar</h2>
            <Box color="text.primary" clone>
                <Button color="primary">
                    My Account
                </Button>
            </Box>
        </aside>
    )
}

export default Sidebar;