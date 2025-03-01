'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiCloud, FiCloudRain, FiCloudSnow, FiCloudDrizzle, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface WeatherData {
  current: {
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  };
  forecast: Array<{
    date: string;
    temp: number;
    condition: string;
  }>;
}

const weatherConditions: { [key: string]: string } = {
  'Clear': 'Açık',
  'Clouds': 'Bulutlu',
  'Rain': 'Yağmurlu',
  'Snow': 'Karlı',
  'Drizzle': 'Çisenti',
  'Thunderstorm': 'Fırtınalı',
  'Mist': 'Sisli',
  'Fog': 'Puslu'
};

const weekDays = ['Pzr', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        
        if (!apiKey || apiKey === 'your_api_key_here') {
          setError('OpenWeather API anahtarı eksik. Lütfen .env.local dosyasını güncelleyin.');
          setLoading(false);
          return;
        }

        // Çatalca coordinates
        const lat = 41.1433;
        const lon = 28.4597;
        
        // Current weather
        const currentRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=tr`
        );

        if (!currentRes.ok) {
          throw new Error(`Hava durumu verileri alınamadı: ${currentRes.statusText}`);
        }

        const currentData = await currentRes.json();

        // 5 day forecast
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=tr`
        );

        if (!forecastRes.ok) {
          throw new Error(`Hava durumu tahmini alınamadı: ${forecastRes.statusText}`);
        }

        const forecastData = await forecastRes.json();

        // Process forecast data to get daily values
        const dailyForecast = forecastData.list
          .filter((item: any) => item.dt_txt.includes('12:00:00'))
          .slice(0, 4)
          .map((item: any) => {
            const date = new Date(item.dt * 1000);
            return {
              date: weekDays[date.getDay()],
              temp: Math.round(item.main.temp),
              condition: item.weather[0].main
            };
          });

        setWeather({
          current: {
            temp: Math.round(currentData.main.temp),
            condition: currentData.weather[0].main,
            icon: currentData.weather[0].icon,
            humidity: currentData.main.humidity,
            windSpeed: Math.round(currentData.wind.speed * 3.6) // Convert m/s to km/h
          },
          forecast: dailyForecast
        });

        setError(null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error instanceof Error ? error.message : 'Hava durumu verileri alınamadı.');
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather data every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <FiSun className="w-6 h-6 text-yellow-500" />;
      case 'clouds':
        return <FiCloud className="w-6 h-6 text-gray-500" />;
      case 'rain':
      case 'thunderstorm':
        return <FiCloudRain className="w-6 h-6 text-blue-500" />;
      case 'snow':
        return <FiCloudSnow className="w-6 h-6 text-blue-300" />;
      case 'drizzle':
        return <FiCloudDrizzle className="w-6 h-6 text-blue-400" />;
      default:
        return <FiSun className="w-6 h-6 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hava Durumu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Yükleniyor...</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 animate-pulse">
            <div className="h-16 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-red-50 rounded-xl p-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hava Durumu</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-gray-600">
              OpenWeather API anahtarını ayarlamak için:
              <br />
              1. https://openweathermap.org/ adresine gidin
              <br />
              2. Ücretsiz bir hesap oluşturun
              <br />
              3. API anahtarınızı kopyalayın
              <br />
              4. .env.local dosyasını güncelleyin
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hava Durumu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Çatalca'yı ziyaret etmek için en uygun zamanı planlayın
          </p>
        </motion.div>

        {weather && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-md overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Current Weather */}
              <div className="p-6 md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <FiMapPin className="w-5 h-5 text-green-600" />
                  <h3 className="text-gray-600 font-medium">Çatalca, İstanbul</h3>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-1">{weather.current.temp}°C</div>
                    <p className="text-gray-600">{weatherConditions[weather.current.condition]}</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-lg">
                    {getWeatherIcon(weather.current.condition)}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Nem</p>
                    <p className="text-lg font-medium text-gray-900">{weather.current.humidity}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Rüzgar</p>
                    <p className="text-lg font-medium text-gray-900">{weather.current.windSpeed} km/s</p>
                  </div>
                </div>
              </div>

              {/* Forecast */}
              <div className="p-6 md:col-span-3">
                <h4 className="text-sm font-medium text-gray-600 mb-4">4 Günlük Tahmin</h4>
                <div className="grid grid-cols-4 gap-4">
                  {weather.forecast.map((day, index) => (
                    <div 
                      key={index} 
                      className="text-center p-3 rounded-lg bg-white/60 hover:bg-white/80 transition-colors"
                    >
                      <p className="text-sm font-medium text-gray-900 mb-2">{day.date}</p>
                      {getWeatherIcon(day.condition)}
                      <p className="text-sm font-medium text-gray-900 mt-2">{day.temp}°C</p>
                      <p className="text-xs text-gray-500">{weatherConditions[day.condition]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 