import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Lloyd's Countries Visited",
    description: "Countries and some expanded details",
  }
  

type LocationSearchQuery = {
    sortBy: string;
    sortProperty?: keyof Location;
}

type Location = {
    country: string;
    cities: string[];
    year: number;
    month: number;
    date: number;  
    duration: number; 
    slug:string;
};


const locations: Location[] = [
    {country: "Switzerland",
        cities: ["Geneva", "Lausanne"],
        year: 2023,
        month: 8,
        date: 1,
        duration: 3,
        slug: "switzerland"
    }, 
    {country: "France",
        cities: ["Paris"],
        year: 2023,
        month: 7,
        date: 29,
        duration: 2,
        slug: "france"
    }, 
    {country: "Italy",
        cities: ["Milan", "Venice"],
        year: 2023,
        month: 8,
        date: 3,
        duration: 5,
        slug: "italy"
    }, 
    {country: "Germany",
        cities: ["Berlin", "Cologne"],
        year: 2023,
        month: 8,
        date: 10,
        duration: 6,
        slug: "germany"
    },
    {country: "Belgium",
        cities: ["Brussels"],
        year: 2023,
        month: 8,
        date: 16,
        duration: 1,
        slug: "belgium"
    }, 

  ];

  function generateComparator(sortProperty: keyof Location){
        return function compareLocations(a: Location, b: Location ) :number {
            if (a[sortProperty] < b[sortProperty]) {
                return -1;
            } else if (a[sortProperty] > b[sortProperty]) {
                return 1;
            } else {
                return 0;
            }
        };
}

export default function LocationPage({searchParams} : {searchParams:LocationSearchQuery}) {
    
    const sortProperty = searchParams.sortProperty || "country"; // Default to "country" if not provided

    const comparator = generateComparator(sortProperty);

    if (searchParams.sortBy==='asc'){
        locations.sort(comparator);
    } else if (searchParams.sortBy==='desc') {
        locations.sort(comparator).reverse();
    }

  return (
    <div>
        <h2>Travel Locations Visited</h2>

        <h3>Sort the Locations</h3>
        <ul>
            <li><Link href="/locations">Original Order</Link></li>
            <li><Link href="/locations?sortBy=asc">Country Name Ascending Order</Link></li>
            <li><Link href="/locations?sortBy=desc">Country Name Descending Order</Link></li>
            <li><Link href="/locations?sortBy=asc&sortProperty=duration">Duration Ascending Order</Link></li>
            <li><Link href="/locations?sortBy=desc&sortProperty=duration">Duration Descending Order</Link></li>
        </ul>
        <p>This pages shows all the different locations visited</p>

        <ul>
            {locations.map((location) => {
                return (

                    <>
                    <li key={location.slug}><h4><Link href={`/locations/${location.country}`}>{location.country}</Link></h4></li>
                        <ul>
                            <li><span className="font-bold">No. of days Visited:</span> {location.duration}</li>
                            <li><span className="font-bold">Cities Visited:</span> {location.cities.map((city)=>city+", ")}</li>
                        </ul>
                    </>
            )})}
        </ul>
    </div>
  )
}
