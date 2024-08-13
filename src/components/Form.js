import React from "react";

export default function BookingForm(props) {
    const [date, setDate] = React.useState("")
    const [timeIntervals, setTimeIntervals] = React.useState("")
    const [guests, setGuests] = React.useState("")
    const [occasion, setOccasion] = React.useState("")



    function handleChange(e) {
        setDate(e)
       
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.dispatch(e)
    }

    return (  
     <header> 
      <section>
        <form onSubmit={handleSubmit}>
            <fieldset className="formField">
                <div>
                    <label htmlFor="date">Pick a Date:</label>
                    <input id="date" value={date} type="date" required onChange={(e) => handleChange(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="time">Choose Time Slot:</label>
                    {/* <select id="time">
                        <option value={timeIntervals} onChange={e=>setTimeIntervals(e.target.value)}>Choose Time Slot</option>
                        {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                    </select> */}
                    <select id="time" value={timeIntervals} onChange={(e) => setTimeIntervals(e.target.value)} required>
                        <option value="">Select a Time</option>
                         {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of Guests:</label>
                    <input id="guests" value={guests} required type="number" min="1" onChange={(e) => setGuests(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion:</label>
                    <select id="occasion" key={occasion} required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value="">Select an Option</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                
                <div className="btnSubmit">
                	<input aria-label="On Click" type={"submit"} value={"Confirm Order"}></input>
                </div>
                

            </fieldset>

        </form>
      </section>  
    </header>
    )
}