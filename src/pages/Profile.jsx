import React from "react"
import { useAuth } from "../contexts/AuthContext"
import { formatCompleteName, formatDate, formatPhoneNumber } from "../utils"
import { Link } from "react-router-dom"

const Profile = () => {

  const { user } = useAuth()

  const registerData = user.created_at
  const characteristic = user.profile.characteristic || ""
  const phone = user.profile.phone || ""

  const formattedPhoneNumber = formatPhoneNumber(characteristic, phone)
  const phoneNumberLink =
    formattedPhoneNumber !== "Phone number not provided"
      ? `tel:${formattedPhoneNumber}`
      : "#"
  const emailLink = `mailto:${user.email}`

  return (
    <>
      <div className="text-6xl font-bold text-slate-600">Datos del cliente</div>
      <hr className="bg-slate-400 h-1 w-full my-4" />
      <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-gray-700">
        <h5 className="my-2 text-2xl font-bold tracking-tight uppercase">
          Bienvenido:
          <span className="ml-1">
            {formatCompleteName(user.first_name, user.last_name)}
          </span>
        </h5>
        <p className="font-normal text-gray-700">
          ID: {user.id}
        </p>
        <p className="font-normal text-gray-700">
          Correo Electronico:
          <Link className="hover:underline" to={emailLink}>
            {user.email}
          </Link>
        </p>
        <p className="font-normal text-gray-700">
          Fecha de alta: {formatDate(registerData)}
        </p>
        <p className="font-normal text-gray-700">
          Telefono:
          {formattedPhoneNumber !== "Phone number not provided" ? (
            <Link className="hover:underline" to={phoneNumberLink}>
              {formattedPhoneNumber}
            </Link>
          ) : (
            <span className="ml-1">{formattedPhoneNumber}</span>
          )}
        </p>
      </div>
    </>
  )
}

export default Profile;