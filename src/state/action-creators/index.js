export const updateCurrency = (currencyValue) => {
  return (dispatch) => {
    dispatch({
      type: "updateCurrency",
      payload: currencyValue.target.value,
    });
  };
};

export const filterSearch = (searchValue) => {
  return (dispatch) => {
    dispatch({
      type: "filter",
      payload: searchValue.target.value,
    });
  };
};

export const updateDaysAgo = (daysAgoVal) => {
  return (dispatch) => {
    dispatch({
      type: "updateDaysAgo",
      payload: daysAgoVal,
    });
  };
};

export const updateCrypto = (list, item) => {
  return (dispatch) => {
    dispatch({
      type: "updateCrypto",
      payload: { list, item },
    });
  };
};

export const removeCrypto = (list, item) => {
  return (dispatch) => {
    dispatch({
      type: "removeCrypto",
      payload: { list, item },
    });
  };
};

export const updateChartData1 = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateChartData1",
      payload: data,
    });
  };
};

export const updateChartData2 = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateChartData2",
      payload: data,
    });
  };
};

export const updateDarkMode = (modeVal) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_MODE",
      payload: modeVal,
    });
  };
};

