import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = ( {onSendAppointment, lastId} ) => {
  const clearData  = {
    ownerName : "",
    petName : "",
    aptDate : "",
    aptTime : "",
    aptNotes : ""
  }
  let[toggelForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName : formData.ownerName,
      petName : formData.petName,
      aptDate : formData.aptDate + " " + formData.aptTime,
      aptNotes : formData.aptNotes
    }
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggelForm);
  }

  return (
    <div>
      <button
      className={
        `bg-blue text-white px-2 py-3 w-full text-left ${
        toggelForm ? "rounded-t-md" : "rounded-md" }`
      }
        onClick={
          () => setToggleForm(!toggelForm)
        }
      >
        <div><BiCalendarPlus className="inline-block align-text-top" />  Add Appointment</div>
      </button>
      {
        
        toggelForm &&
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue rounded-b-md pl-4 pr-4 pb-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray sm:mt-px sm:pt-2">
            Owner Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="ownerName" id="ownerName"
            onChange={(event)=> {setFormData({...formData, ownerName : event.target.value})}}
            value={formData.ownerName}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo focus:border-indigo sm:max-w-xs sm:text-sm border-gray rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="petName" className="block text-sm font-medium text-gray sm:mt-px sm:pt-2">
            Pet Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="petName" id="petName"
            onChange={(event)=> {setFormData({...formData, petName : event.target.value})}}
            value={formData.petName}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo focus:border-indigo sm:max-w-xs sm:text-sm border-gray rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="aptDate" className="block text-sm font-medium text-gray sm:mt-px sm:pt-2">
            Apt Date
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="date" name="aptDate" id="aptDate"
            onChange={(event)=> {setFormData({...formData, aptDate : event.target.value})}}
            value={formData.aptDate}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo focus:border-indigo sm:max-w-xs sm:text-sm border-gray rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="aptTime" className="block text-sm font-medium text-gray sm:mt-px sm:pt-2">
            Apt Time
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="time" name="aptTime" id="aptTime"
            onChange={(event)=> {setFormData({...formData, aptTime : event.target.value})}}
            value={formData.aptTime}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo focus:border-indigo sm:max-w-xs sm:text-sm border-gray rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="aptNotes" className="block text-sm font-medium text-gray sm:mt-px sm:pt-2">
            Appointment Notes
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="aptNotes" name="aptNotes" rows="3"
            onChange={(event)=> {setFormData({...formData, aptNotes : event.target.value})}}
            value={formData.aptNotes}
              className="shadow-sm focus:ring-indigo focus:border-indigo mt-1 block w-full sm:text-sm border-gray rounded-md" placeholder="Detailed comments about the condition"></textarea>
          </div>
        </div>


        <div className="pt-5">
          <div className="flex justify-end">
            <button
            onClick={formDataPublish}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default AddAppointment