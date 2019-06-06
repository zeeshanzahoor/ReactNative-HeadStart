

const userStore = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        case 'UNSET_USER':
            return null;
        default:
            return state
    }
}

export default userStore