export function formatPhoneNumber(characteristic, phoneNumber) {
  if (!characteristic && !phoneNumber) {
    return "Phone number not provided"
  }

  const formattedCharacteristic = characteristic || ""
  const formattedPhoneNumber = phoneNumber || ""

  return `+549${formattedCharacteristic}${formattedPhoneNumber}`
}
