import Link from "next/link"
import Nav from "../../components/nav"

export default function country() {
    return(
        <div>
            <Nav/>
            <div className="flex gap-10 flex-col items-center mt-20">
                <h1 className="bg-blue-100 text-2x1 py-2 px-10 font-bold">
                    Country List:
                </h1>
                <ul className="bg-blue-100 text-6x1 py-10 px-20 font-semibold">
                    <li className="ease duration-200 hover:text-purple-900"><Link href={"/country/pakistan"}>Pakistan</Link></li>
                    <li className="ease duration-200 hover:text-purple-900"><Link href={"/country/turkey"}>Turkey</Link></li>
                    <li className="ease duration-200 hover:text-purple-900"><Link href={"/country/germany"}>Germany</Link></li>
                    <li className="ease duration-200 hover:text-purple-900"><Link href={"/country/canada"}>Canada</Link></li>
                    <li className="ease duration-200 hover:text-purple-900"><Link href={"/country/malaysia"}>Malaysia</Link></li>
                </ul>
            </div>
        </div>
    )
}