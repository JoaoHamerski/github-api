import { DateTime } from "luxon"

type DateTimeType = string | Date

export const formatDateTime = (value: DateTimeType) => {
  if (typeof value === 'string') {
    return DateTime.fromISO(value)
  }

  return DateTime.fromJSDate(value)
}
