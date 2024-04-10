import { format } from "date-fns"

// Función para formatear la fecha de ISO 8601 a D/M/Y
export function formatDate(isoDate) {
  const date = new Date(isoDate)
  return format(date, "dd/MM/yyyy")
}
