import { CountryDetails } from "@/types/type";
import Link from "next/link";

function CountryName({ params }: { params: { country_name: string } }) {

  const CountryDetails : CountryDetails[] = [
   {
    name: "Pakistan",
    population: 240000000,
    capital: "Islamabad",
  },
   {
    name: "Turkey",
    population: 86000000,
    capital: "Ankara",
  },
   {
    name: "Germany",
    population: 83000000,
    capital: "Berlin",
  },
   {
    name: "Canada",
    population: 38000000,
    capital: "Ottawa",
  },
  {
    name: "Malaysia",
    population: 32000000,
    capital: "Kuala Lumpur",
  }
]

    const country = CountryDetails.find(
      (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );

  if (!country) {
    return (
      <div>
        <h1>
          {params.country_name} country not found
        </h1>
      </div>
    );
  }

  return (
    <div  className="flex gap-10 flex-col items-center mt-20 font-semibold">
      <div> Name : {country.name}</div>
      <div> Capital : {country.capital}</div>
      <div> Population : {country.population}</div>

      <button className="bg-purple-500 mt-10 px-4 py-1 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 ">
        <Link href={"/country"}> Back</Link>{" "}
      </button>
    </div>
  );
}

export default CountryName;