type LocationPageParam = {
    location: string;
}

export default function LocationPage({params}: {params:LocationPageParam}) {
    console.log(params);
    return (
    <div>
                <h2>{params.location}</h2>
        <p>This is the Page all about the invidividual location</p>
    </div>
  )
}

