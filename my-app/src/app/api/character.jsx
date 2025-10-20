import { useEffect, useState } from "react";

export default function Character({ url }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    console.log(url, data);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setLoading(false);
      });
  }, [url]);

  return (
    <div>
        {loading ? 
        <div className="text-2xl italic text-black">
          ⏳ Cargando...
        </div> 
        : <div>
            <div className="text-2xl text-amber-900 font-extrabold"> 
                {data.name}
            </div>
            <img className="h-56 w-56" src={"https://cdn.thesimpsonsapi.com/500" + data.portrait_path} alt="" />
        </div>}
    </div>
  )
}