const initialState = {
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
      { id: 4, name: 'David' },
      { id: 5, name: 'John' },
      { id: 6, name: 'Nika' },
      { id: 7, name: 'Mark' },
      { id: 8, name: 'Stiv' },
      { id: 9, name: 'Peter' },
      { id: 10, name: 'Fil' },
      { id: 11, name: 'Chen' },
    ],
    filter: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;