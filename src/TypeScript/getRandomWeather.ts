function getRandomIndex(min: number, max: number): number {
  const randomIndex: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomIndex;
}

const weatherArray: { name: string; randomNumberOfCustomers: number }[] = [
  {
    name: "Pluie glaciale",
    randomNumberOfCustomers: getRandomIndex(5, 12),
  },
  {
    name: "Douceur printanière",
    randomNumberOfCustomers: getRandomIndex(25, 43),
  },
  {
    name: "Eté ensoleillé",
    randomNumberOfCustomers: getRandomIndex(36, 51),
  },
  {
    name: "Canicule",
    randomNumberOfCustomers: getRandomIndex(2, 8),
  },
];

function getRandomWeather(): number {
  const randomWeatherIndex = Math.floor(Math.random() * weatherArray.length);
  const randomWeather = weatherArray[randomWeatherIndex];
  return randomWeather.randomNumberOfCustomers;
}

export default getRandomWeather;
