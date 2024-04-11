"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});

  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
      console.log("forecast: ", res.data);
      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  const fetchDailyForecast = async () => {
    try {
      const res = await axios.get("api/fiveday");
      console.log("fiveday: ", res.data);
      setFiveDayForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  useEffect(() => {
    fetchForecast();
    fetchDailyForecast();
  }, []);

  console.log(fiveDayForecast);
  console.log(forecast);
  return (
    <GlobalContext.Provider value={{ forecast, fiveDayForecast }}>
      <GlobalContextUpdate.Provider value={{}}>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
