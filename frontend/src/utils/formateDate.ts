export default function formateDate(dateString:string){
    const data = new Date(dateString);
    const options:Intl.DateTimeFormatOptions = {month:'long'}
    const month = data.toLocaleDateString('id-ID', options)
    const day = data.getDate();
    const years = data.getFullYear()
    const newDate = `${month} ${day}, ${years}`

    return newDate
}