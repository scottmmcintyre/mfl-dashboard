export const loadState = () => {
    try {
        let serializedState = localStorage.getItem("mfl-dashboard-state");

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem("mfl-dashboard-state", serializedState);
    }
    catch (err) {
        //do nothing and let state be built as normal
    }
}

export const deleteState = () => {
    try {
        localStorage.removeItem("mfl-dashboard-state");
    }
    catch (err) {

    }
}