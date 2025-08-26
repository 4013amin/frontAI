// utils.ts
import moment from "moment-jalaali"

interface ShamsiDateTime {
  date: string // تاریخ شمسی به فرمت YYYY/MM/DD
  time: string // ساعت به فرمت HH:mm:ss
}

export function convertToShamsi(isoDate: string): ShamsiDateTime {
  const m = moment(isoDate)
  return {
    date: m.format("jYYYY/jMM/jDD"),
    time: m.format("HH:mm:ss")
  }
}


// خروجی:
// { date: '1404/05/03', time: '13:17:38' }