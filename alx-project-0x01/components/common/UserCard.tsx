import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company,})=>{
    return(
        <div className="max-w-xl mx-auto my-6 p6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mt-4 text-sm text-gray-500">
                <span>User:{id}</span>
            </div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            </div>
            <p className="text-gray-600">@{username}</p>

            <div className="text-gray-700">
                <p>
                    <span className="font-semibold">Email:</span>{email}
                </p>
                <p>
                    <span className="font-semibold">Phone:</span>{phone}
                </p>
                <p>
                    <span className="font-semibold">Website:</span>{website}
                </p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p>{address.suite}, {address.street}</p>
                <p>{address.city},{address.zipcode}</p>
                <p className="text-gray-500">Geo: {address.geo.lat}, {address.geo.lng}</p>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800"></h3>
                <p>{company.name}</p>
                <p className="text-gray-500 italic">{company.catchPhrase}</p>
                <p className="text-gray-400 text-sm">{company.bs}</p>
            </div>
        </div>
    )
}

export default UserCard