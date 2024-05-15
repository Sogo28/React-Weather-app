export default function Coordinates({
  setLatitudeValue,
  setLongitudeValue,
  latitude = "",
  longitude = "",
}) {
  return (
    <>
      <form className="">
        <div className="flex flex-col bg-white shadow-xl rounded-xl p-8 h-full gap-4">
          <div className="flex flex-col">
            <label htmlFor="latitude" className="text-lg font-medium">
              Latitude :
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-sky-500 bg-slate-100 focus:ring-2 border-gray-400 rounded-md p-2"
              placeholder="14.6937"
              value={latitude}
              onChange={(e) => setLatitudeValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="longitude" className="text-lg font-medium">
              Longitude :
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-sky-500 bg-slate-100 focus:ring-2 border-gray-400 rounded-md p-2"
              placeholder="14.5454"
              value={longitude}
              onChange={(e) => setLongitudeValue(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
}
