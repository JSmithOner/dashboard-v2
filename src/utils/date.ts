import moment from 'moment'

/*
 get the number of day ( "Monday", "Tuesday",...) inside a date range
 after or at a certain date
*/
export const numberOfDaysIn = (
  startDate: moment.Moment,
  endDate: moment.Moment,
  afterDate: moment.Moment,
  day: string
) => {
  let nbDays = 0
  for (let m = startDate.clone(); m.isBefore(endDate); m.add(1, 'day')) {
    if (m.isSameOrAfter(afterDate) && m.clone().format('dddd') === day) {
      nbDays++
    }
  }
  return nbDays
}