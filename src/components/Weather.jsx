export default function Weather({ data }) {
  const background = data.main.temp < 30 ? "bg-sky-300" : "bg-red-300";
  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col justify-center items-center gap-8">
        <h2 className="text-3xl font-light tracking-wide">{data.name}</h2>
        <div
          className={
            "flex flex-row justify-center shadow-lg rounded-2xl items-center px-4 " +
            background
          }
        >
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="w-20 h-20"
          />
          <span className="text-4xl font-bold font-mono">
            {data.main.temp} °C
          </span>
        </div>
        <table className="border table-auto border-collapse rounded-2xl shadow-lg ">
          <tbody>
            <tr>
              <td className="p-4 text-lg">Main</td>
              <td className="p-4 italic font-medium">{data.weather[0].main}</td>
            </tr>
            <tr>
              <td className="p-4 text-lg">Description</td>
              <td className="p-4 italic font-medium">
                {data.weather[0].description}
              </td>
            </tr>
            <tr>
              <td className="p-4 text-lg">Sunset</td>
              <td className="p-4 italic font-medium">{data.sys.sunset}</td>
            </tr>
            <tr>
              <td className="p-4 text-lg">Sunrise</td>
              <td className="p-4 italic font-medium">{data.sys.sunrise}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
