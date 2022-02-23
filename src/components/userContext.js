import React from 'react'

// default value will only be used if the user does not have a matching provider to use
const UserContext = React.createContext('CodeEvolution'); 

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }
export default UserContext