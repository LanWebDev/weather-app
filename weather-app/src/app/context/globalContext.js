"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

import { debounce } from "lodash";
import { useGeolocated } from "react-geolocated";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();
const CelsiusContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});
  const [geoCodedList, setGeoCodedList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

  const [activeCityCoords, setActiveCityCoords] = useState([
    52.520008, 13.404954,
  ]);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  console.log(activeCityCoords);
  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);

      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  //geocoded list
  const fetchGeocodedList = async (search) => {
    try {
      const res = await axios.get(`api/geocoded?search=${search}`);

      setGeoCodedList(res.data);
    } catch (error) {
      console.log("Error fetching geocoded list: ", error.message);
    }
  };

  const fetchDailyForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`);

      setFiveDayForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);

    if (e.target.value === "") {
      setGeoCodedList([]);
    }
  };

  useEffect(() => {
    const debounceFetch = debounce((search) => {
      fetchGeocodedList(search);
    }, 500);

    if (inputValue) {
      debounceFetch(inputValue);
    }

    // cleanup
    return () => debounceFetch.cancel();
  }, [inputValue]);

  useEffect(() => {
    fetchForecast(activeCityCoords[0], activeCityCoords[1]);
    fetchDailyForecast(activeCityCoords[0], activeCityCoords[1]);
  }, [activeCityCoords]);

  return (
    <GlobalContext.Provider
      value={{
        forecast,
        fiveDayForecast,
        geoCodedList,
        handleInput,
        coords,
        isGeolocationAvailable,
        isGeolocationEnabled,
      }}
    >
      <GlobalContextUpdate.Provider value={{ setActiveCityCoords }}>
        <CelsiusContext.Provider value={{ isCelsius, setIsCelsius }}>
          {children}
        </CelsiusContext.Provider>
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
export const useCelsiusContext = () => useContext(CelsiusContext);
