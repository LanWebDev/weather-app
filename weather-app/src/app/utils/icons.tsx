import clearDay from "@/assets/icons/clear-day.svg";
import fewCloudsDay from "@/assets/icons/partly-cloudy-day.svg";
import scatteredClouds from "@/assets/icons/cloudy.svg";
import overcast from "@/assets/icons/overcast.svg";
import clearNight from "@/assets/icons/clear-night.svg";
import fewCloudsNight from "@/assets/icons/partly-cloudy-night.svg";
import drizzleNight from "@/assets/icons/partly-cloudy-night-drizzle.svg";
import snow from "@/assets/icons/snowflake.svg";
import heavySnow from "@/assets/icons/snow.svg";
import sleet from "@/assets/icons/sleet.svg";
import rain from "@/assets/icons/rain.svg";
import drizzle from "@/assets/icons/drizzle.svg";
import thunderstorm from "@/assets/icons/thunderstorms.svg";
import thunderstormRain from "@/assets/icons/thunderstorms-rain.svg";
import mist from "@/assets/icons/mist.svg";
import haze from "@/assets/icons/haze.svg";
import fog from "@/assets/icons/haze.svg";
import dust from "@/assets/icons/dust.svg";
import dustWind from "@/assets/icons/dust-wind.svg";
import tornado from "@/assets/icons/tornado.svg";
import smoke from "@/assets/icons/smoke.svg";
import ash from "@/assets/icons/smoke-particles.svg";
import wind from "@/assets/icons/wind.svg";

export const getIcon = (weather: string, icon: string) => {
  const dayStatus = icon.slice(2, 3); // "n" / "d"

  //day
  if (dayStatus === "d") {
    //thunderstorm
    switch (weather) {
      case "thunderstorm with light rain":
        return thunderstormRain;
      case "thunderstorm with rain":
        return thunderstormRain;
      case "thunderstorm with heavy rain":
        return thunderstormRain;
      case "light thunderstorm":
        return thunderstorm;
      case "thunderstorm":
        return thunderstorm;
      case "heavy thunderstorm":
        return thunderstorm;
      case "ragged thunderstorm":
        return thunderstorm;
      case "thunderstorm with light drizzle":
        return thunderstorm;
      case "thunderstorm with drizzle":
        return thunderstorm;
      case "thunderstorm with heavy drizzle":
        return thunderstorm;
      //drizzle
      case "light intensity drizzle":
        return drizzle;
      case "drizzle":
        return drizzle;
      case "heavy intensity drizzle":
        return drizzle;
      case "light intensity drizzle rain":
        return drizzle;
      case "drizzle rain":
        return drizzle;
      case "heavy intensity drizzle rain":
        return drizzle;
      case "shower rain and drizzle":
        return drizzle;
      case "heavy shower rain and drizzle":
        return drizzle;
      case "shower drizzle":
        return drizzle;
      //rain
      case "light rain":
        return rain;
      case "moderate rain":
        return rain;
      case "heavy intensity rain":
        return rain;
      case "very heavy rain":
        return rain;
      case "extreme rain":
        return rain;
      case "freezing rain":
        return sleet;
      case "light intensity shower rain":
        return rain;
      case "shower rain":
        return rain;
      case "heavy intensity shower rain":
        return rain;
      case "ragged shower rain":
        return rain;
      //snow
      case "light snow":
        return snow;
      case "snow":
        return snow;
      case "heavy snow":
        return heavySnow;
      case "sleet":
        return sleet;
      case "light shower sleet":
        return sleet;
      case "shower sleet":
        return sleet;
      case "light rain and snow":
        return sleet;
      case "rain and snow":
        return sleet;
      case "light shower snow":
        return snow;
      case "shower snow":
        return heavySnow;
      case "heavy shower snow":
        return heavySnow;
      //atmosphere
      case "mist":
        return mist;
      case "smoke":
        return smoke;
      case "haze":
        return haze;
      case "dust whirls":
        return dustWind;
      case "fog":
        return fog;
      case "sand":
        return dust;
      case "dust":
        return dust;
      case "volcanic ash":
        return ash;
      case "squalls":
        return wind;
      case "tornado":
        return tornado;
      //clear
      case "clear sky":
        return clearDay;
      //clouds
      case "few clouds":
        return fewCloudsDay;
      case "scattered clouds":
        return scatteredClouds;
      case "broken clouds":
        return overcast;
      case "overcast clouds":
        return overcast;
      default:
        return clearDay;
    }
  }
  if (dayStatus === "n") {
    switch (weather) {
      //thunderstorm
      case "thunderstorm with light rain":
        return thunderstormRain;
      case "thunderstorm with rain":
        return thunderstormRain;
      case "thunderstorm with heavy rain":
        return thunderstormRain;
      case "light thunderstorm":
        return thunderstorm;
      case "thunderstorm":
        return thunderstorm;
      case "heavy thunderstorm":
        return thunderstorm;
      case "ragged thunderstorm":
        return thunderstorm;
      case "thunderstorm with light drizzle":
        return thunderstorm;
      case "thunderstorm with drizzle":
        return thunderstorm;
      case "thunderstorm with heavy drizzle":
        return thunderstorm;
      //drizzle
      case "light intensity drizzle":
        return drizzleNight;
      case "drizzle":
        return drizzleNight;
      case "heavy intensity drizzle":
        return drizzleNight;
      case "light intensity drizzle rain":
        return drizzleNight;
      case "drizzle rain":
        return drizzleNight;
      case "heavy intensity drizzle rain":
        return drizzleNight;
      case "shower rain and drizzle":
        return drizzleNight;
      case "heavy shower rain and drizzle":
        return drizzleNight;
      case "shower drizzle":
        return drizzleNight;
      //rain
      case "light rain":
        return rain;
      case "moderate rain":
        return rain;
      case "heavy intensity rain":
        return rain;
      case "very heavy rain":
        return rain;
      case "extreme rain":
        return rain;
      case "freezing rain":
        return sleet;
      case "light intensity shower rain":
        return rain;
      case "shower rain":
        return rain;
      case "heavy intensity shower rain":
        return rain;
      case "ragged shower rain":
        return rain;
      //snow
      case "light snow":
        return snow;
      case "snow":
        return snow;
      case "heavy snow":
        return heavySnow;
      case "sleet":
        return sleet;
      case "light shower sleet":
        return sleet;
      case "shower sleet":
        return sleet;
      case "light rain and snow":
        return sleet;
      case "rain and snow":
        return sleet;
      case "light shower snow":
        return snow;
      case "shower snow":
        return heavySnow;
      case "heavy shower snow":
        return heavySnow;
      //atmosphere
      case "mist":
        return mist;
      case "smoke":
        return smoke;
      case "haze":
        return haze;
      case "dust whirls":
        return dustWind;
      case "fog":
        return fog;
      case "sand":
        return dust;
      case "dust":
        return dust;
      case "volcanic ash":
        return ash;
      case "squalls":
        return wind;
      case "tornado":
        return tornado;
      //clear
      case "clear sky":
        return clearNight;
      //clouds
      case "few clouds":
        return fewCloudsNight;
      case "scattered clouds":
        return scatteredClouds;
      case "broken clouds":
        return overcast;
      case "overcast clouds":
        return overcast;
      default:
        return clearNight;
    }
  }
};
