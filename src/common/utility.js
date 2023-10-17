import moment from 'moment'
import React from 'react'


export const fullDateFormat = (date) => {

  const month = moment(date).format('MMMM').toString()
  const splitMonth = month.slice(0, 3)
  return (
    <>
      {splitMonth}{" "}{moment(date).format("DD, YYYY")}

      <br />
      {/* <small>{moment(date).format('h:mm a')}</small> */}
    </>
  )
}