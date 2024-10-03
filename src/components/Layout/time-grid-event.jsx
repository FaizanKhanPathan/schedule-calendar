
import { CalendarEvent } from "@schedule-x/calendar"

export default function({CalendarEvent}){
    return <>
        <div>
            <span>{CalendarEvent.title}</span>
            {
                CalendarEvent.status == "todo" && <>
                   !!!!!!!!!
                </>
            }
            {
                CalendarEvent.status == "todo" && <>
                @@@@@
             </>
            }
        </div>
    </>
}