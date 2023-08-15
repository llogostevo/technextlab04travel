type LocationPageParam = {
    location: string;
}

export function generateMetadata({params}: {params:LocationPageParam}){
  return  {
    title: `${params.location.charAt(0).toUpperCase()+params.location.slice(1)}`,
    description: `Information about ${params.location.charAt(0).toUpperCase()+params.location.slice(1)}`,
    openGraph:{
      title: `${params.location.charAt(0).toUpperCase()+params.location.slice(1)}`, 
      description: `Check out this travel location: ${params.location.charAt(0).toUpperCase()+params.location.slice(1)}`, 
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fflyingmag.sfo3.digitaloceanspaces.com%2Fflyingma%2Fwp-content%2Fuploads%2F2022%2F06%2F23090933%2FAdobeStock_249454423-scaled.jpeg&tbnid=qPKpupgl1nlOFM&vet=12ahUKEwidyojc3N6AAxXcsCcCHXudBAoQMygCegQIARB4..i&imgrefurl=https%3A%2F%2Fwww.flyingmag.com%2Fguides%2Fhow-fast-do-commerical-planes-fly%2F&docid=sifGrnFoZ6pjSM&w=2560&h=1696&q=planes&ved=2ahUKEwidyojc3N6AAxXcsCcCHXudBAoQMygCegQIARB4"
    }
  }
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

