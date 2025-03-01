'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiCloud, FiCloudRain, FiCloudSnow } from 'react-icons/fi';

interface WeatherData {
  current: {
    temp: number;
    condition: string;
    icon: string;
  };
  forecast: Array<{
    date: string;
    temp: number;
    condition: string;
  }>;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulated weather data (replace with actual API call)
  useEffect(() => {
    const mockWeather: WeatherData = {
      current: {
        temp: 22,
        condition: "Sunny",
        icon: "sun"
      },
      forecast: [
        { date: "Tomorrow", temp: 23, condition: "Sunny" },
        { date: "Wed", temp: 20, condition: "Cloudy" },
        { date: "Thu", temp: 19, condition: "Rain" },
        { date: "Fri", temp: 21, condition: "Cloudy" }
      ]
    };

    setTimeout(() => {
      setWeather(mockWeather);
      setLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <FiSun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <FiCloud className="w-8 h-8 text-gray-500" />;
      case 'rain':
        return <FiCloudRain className="w-8 h-8 text-green-500" />;
      case 'snow':
        return <FiCloudSnow className="w-8 h-8 text-green-300" />;
      default:
        return <FiSun className="w-8 h-8 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="h-20 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {weather && (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{weather.current.temp}°C</h3>
              <p className="text-gray-600">Çatalca, İstanbul</p>
            </div>
            {getWeatherIcon(weather.current.condition)}
          </div>
          
          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">5-Day Forecast</h4>
            <div className="grid grid-cols-4 gap-2">
              {weather.forecast.map((day, index) => (
                <div key={index} className="text-center">
                  <p className="text-xs text-gray-600 mb-1">{day.date}</p>
                  {getWeatherIcon(day.condition)}
                  <p className="text-sm font-medium mt-1">{day.temp}°C</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
} 