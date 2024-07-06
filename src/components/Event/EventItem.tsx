
interface EventItemProps {
    //eventId: number;
    heading: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    //description: string;
}

const EventItem: React.FC<EventItemProps> = (props: EventItemProps) => {
    const {
        //eventId,
        heading,
        date,
        startTime,
        endTime,
        location,
        //description,j
    } = props;

    return (
        <div className="flex flex-col items-center justify-center pt-5 pb-5 xs:pt-10 sm:pt-20 border-b">
            <div className="flex flex-col items-center w-full xs:w-3/4 sm:w-2/4"></div>

            <div className="flex flex-col items-start w-full xs:w-3/4 sm:w-2/4">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold leading-tight">
                    {heading}
                </h1>
                <div className="flex flex-row justify-center items-center space-x-2 xs:space-x-3 sm:space-x-4">
                   
                    <p className="text-lg xs:text-xl sm:text-2xl pt-1 xs:pt-2 sm:pt-4">
                        {date}
                    </p>
                    <p className="text-lg xs:text-xl sm:text-2xl pt-1 xs:pt-2 sm:pt-4">
                        {startTime}
                    </p>
                    <div className="text-lg xs:text-xl sm:text-2xl pt-1 xs:pt-2 sm:pt-4">
                        to
                    </div>
                    <p className="text-lg xs:text-xl sm:text-2xl pt-1 xs:pt-2 sm:pt-4">
                        {endTime}
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-2 xs:space-x-3 sm:space-x-4">
                    
                    <p className="text-lg xs:text-xl sm:text-2xl pt-1 xs:pt-2 sm:pt-4">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventItem;
