import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import MyCustomerList from './CustomersList';
import MyTrainingList from './TrainingsList';
import MyCalendarPage from './ScheduleCalendar';

function MyTabApp() {
    const [activeTab, setActiveTab] = useState('customers');

    const handleTabChange = (event, newTab) => {
        setActiveTab(newTab);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                    '& .MuiTab-root': {
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        padding: '12px',
                        color: '#03DE44',
                    },
                    '& .Mui-selected': {
                        borderBottom: '2px solid #03DE44',
                        backgroundColor: '#e0f7fa',
                        color: '#03DE44',
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#03DE44',
                    },
                    justifyContent: 'center',
                }}
            >
                <Tab value="customers" label="Customers" />
                <Tab value="trainings" label="Trainings" />
                <Tab value="calendar" label="Calendar" />
            </Tabs>
            <div style={{ marginTop: '20px' }}>
                {activeTab === 'customers' && <MyCustomerList />}
                {activeTab === 'trainings' && <MyTrainingList />}
                {activeTab === 'calendar' && <MyCalendarPage />}
            </div>
        </div>
    );
}

export default MyTabApp;
