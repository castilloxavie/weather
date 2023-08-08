import { useState } from "react"

export const Weather = ({weatherInfo}) => {

    const [isCelcios, setIsCelcios] = useState(true)
    // console.log({weatherInfo});

    const kelvintocelcios = (tempKelvin) => {
        return  (tempKelvin - 273.15 ).toFixed(1)
    }

    const KelvinTofahrenheit = (tempKelvin) => {
        return (((tempKelvin - 273.15) * 9/5) + 32).toFixed(1)
    }

    const resultTempConversion = isCelcios ? kelvintocelcios(weatherInfo?.main.temp) : KelvinTofahrenheit(weatherInfo?.main.temp)

    const handleChangeTemp = () => {
        setIsCelcios(!isCelcios)
    }

  return (
    <section className="text-center items-center sm:text-4xl">
        <h1>{weatherInfo?.name}</h1>

        {/* upper section */}
        <section className="grid gap-4 sm:grid-cols-[auto_auto]">
                <section className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-2xl grid grid-cols-2 ">
                    <h4 className="col-span-2">{weatherInfo?.weather[0].description}</h4>
                    <span className="sm:text-5xl p-[5rem_2rem]">{resultTempConversion}°{isCelcios ? "C" : "F"}</span>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                </section>

                {/* lower section */ }
                <section className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
                    <article className="flex gap-2 items-center">
                        <div className="w-[20px]">
                            <img src={"/image/wind.png"} alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed}m/s</span>
                    </article>

                    <article className="flex gap-2 items-center">
                        <div className="w-[20px]">
                            <img src="/image/humidity.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity}%</span>
                    </article>

                    <article className="flex gap-2 items-center">
                        <div className="w-[20px]">
                            <img src="/image/pressure.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure}hPa</span>
                    </article>
                </section>
        </section>
       <button onClick={handleChangeTemp} className="mt-4 bg-gradient-to-r from-sky-400 to-blue-400 text-black p-5 rounded-3xl">Convert</button>
    </section>
  )
}

export default Weather

//weatherInfo?.main.humidity
//weatherInfo?.main.pressure bg-gradient-to-r from-sky-500 to-blue-500