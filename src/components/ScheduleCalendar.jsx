import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function MyCustomCalendarPage() {
    const myLocalizer = dayjsLocalizer(dayjs);
    const [myTrainings, setMyTrainings] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const response = await fetch('https://traineeapp.azurewebsites.net/gettrainings');
                const data = await response.json();
                setMyTrainings(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMyData();
    }, []);

    const myEvents = myTrainings.map((item) => {
        try {
            const myStartDate = new Date(item.date);
            const myEndDate = dayjs(item.date).add(item.duration, 'm').toDate();

            return {
                id: item.id,
                title: `${item.activity} / ${item.customer?.firstname || ''} ${item.customer?.lastname || ''}`,
                start: myStartDate,
                end: myEndDate,
            };
        } catch (error) {
            console.error(`Error ${item.id}:`, error);
            return null;
        }
    });

    const myEventStyleGetter = (event) => {
        return {
            style: {
                color: event.textColor || '#fff',
                backgroundColor: event.backgroundColor || '#03DE44',
            },
        };
    };

    const MyCustomCalendar = () => (
        <div>
            <Calendar
                localizer={myLocalizer}
                events={myEvents.filter((event) => event !== null)}
                startAccessor="start"
                endAccessor="end"
                style={{
                    height: 800,
                    margin: '30px',
                    border: '2px solid #03DE44',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px #03DE44',
                }}
                eventStyleGetter={myEventStyleGetter}
            />
        </div>
    );

    return <MyCustomCalendar />;
}

export default MyCustomCalendarPage;
