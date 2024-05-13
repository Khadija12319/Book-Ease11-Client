import * as React from 'react';

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
    const [availability, setAvailability] = React.useState('');

    // Function to update availability
    const updateAvailability = (newAvailability) => {
        setAvailability(newAvailability);
    };

    return (
        <RoomContext.Provider value={{ availability, updateAvailability }}>
            {children}
        </RoomContext.Provider>
    );
};

export { RoomContext, RoomProvider };
