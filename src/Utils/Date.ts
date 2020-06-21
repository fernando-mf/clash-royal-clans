export const MS_IN_DAY = 86400000

// Converts 20200618T212858.000Z date format to Date object
export function ParseCRDate(dateStr: string) {
  const [date, time] = dateStr.split('.')[0].split('T')
  const year = +date.substr(0, 4)
  const month = +date.substr(4, 2)
  const day = +date.substr(6, 2)
  const hour = +time.substr(0, 2)
  const minute = +time.substr(2, 2)

  return new Date(year, month - 1, day, hour, minute)
}

export const DaysToMs = (days: number) => days * MS_IN_DAY
