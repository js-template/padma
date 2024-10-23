/**
 * Date Formatter function
 * @param date props like  "2024-03-26T08:31:10.731Z"
 * @returns 29 Mar 2024
 */
export const dateFormatter = (date: string) => {
   if (date === "") {
      return ""
   }
   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
   const d = new Date(date)
   return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}
