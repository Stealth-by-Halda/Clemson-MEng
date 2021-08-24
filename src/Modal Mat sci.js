import { Fragment, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react'
import './App.css';
import qualified from './images/qualified.png';
import saveTime from './images/save-time.png';
import mask from './images/mask.png';
import ms from './images/ms.png';
import halda from './images/halda.png';
import { InlineWidget } from "react-calendly";



export default function Modal() {
  const [open, setOpen] = useState(true)
  let completeButtonRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)

  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({ mode: "all", defaultValues: {},});

  const watchAllFields = watch();
  const watchFirstName = watch("FirstName");

  const onSubmit = () => {
    setNextPage()
  };

  const setNextPage = () => {
    // currentPage === 1 && setCurrentPage(2)
    // currentPage === 2 && setCurrentPage(3)
    setCurrentPage(currentPage + 1)
  }

  const setPrevPage = () => {
    //currentPage === 2 && setCurrentPage(1)
    setCurrentPage(currentPage - 1)
  }
  
  const sendMail = () => {
    const mailto="mailto:admissions@crownschool.uchicago.edu";
    const subject="I just took your readiness assessment";
    const body="Hi Crown School Admissions Team! I am interested in learning more about your programs";
    window.location.href = mailto + '?subject=' + subject + '&body=' + body;
  }

  const programDecision = () => {
    console.log(watchAllFields)
    if (watchAllFields.GPA === "4.0-3.75" || watchAllFields.GPA === "3.74-3.5" || watchAllFields.GPA === "3.49-3.0") {
      return (
        <span id="response-content" className="space-y-4">
          Congratulations! You qualify to enter the Non-thesis MS in MSE. Moreover, you qualify for our GRE waiver. You're all set to take the next step towards your application.
        </span>
      )
    } else {
      return (
        <span id="response-content" className="space-y-4">
Congratulations. You qualify to apply for the Non-thesis MS in MSE. Get in touch with one of our counselors to figure out your next step.
      </span>
      )
    }
  }

  const Citizenship = [
    { id: 1, name: 'US Citizen' },
    { id: 2, name: 'International Student' },
  ]

  return (
    <Transition.Root show={open} as={Fragment} data-backdrop="static" data-keyboard="false">
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto animated fadeIn faster" open={open} initialFocus={completeButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={currentPage === 4 ? "inline-block align-bottom bg-white px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:h-1 sm:w-full sm:p-0 overflow-auto" : "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-1 sm:h-1 sm:w-full sm:p-0"} id="modal">
              <div className={currentPage === 4 ? " grid h-100" : "grid grid-cols-2 h-100 "} id="modalGrid">
                {/* Billboard Left */}
                {
                currentPage < 4 ? 
                <div className="col-start-1" style={{backgroundColor: '#3A4A58'}} id="colstart1">
                  <div className="mt-2 ">
                      {/* <h1 className="m-4 w-topBillboardText h-topBillboardText font-sans not-italic font-extrabold text-billboardHeader leading-billboardHeader text-crownRed">ARE YOU READY FOR A GRADUATE PROGRAM?</h1>
                      <h3 className="m-4 font-sans font-medium">Find out in 30 seconds!</h3> */}
                      <img src={qualified} className="pl-4 pt-8 w-64" id="middleImg" alt=""/>
                      <img src={saveTime} className="pt-16 pl-4 w-64" id="bottomImg" alt=""/>
                      <img src={mask} className="w-64 z-0 absolute right-80 bottom-0" id="mask" alt=""/>
                      <img src={ms} className="mt-24 ml-4 w-64" id="ms" alt=""/>
                      <img src={halda} className="mt-24 ml-4 w-24 bottom-5 right-5 absolute" id="halda" alt=""/>

                  </div>
                </div>
                :
                null
                }
                {/* Content Right */}
                <div id="content-right" className="bg-white" style={{ margin: currentPage === 4 ? "0" : "0rem 2rem 2rem 2rem"}}>
                    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
                        {
                            currentPage === 1 ? 
                            <>
                                <div className="m:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2" id="dropdown-field">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1.5">
                                    What is your major? *
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2 block">
                                    <select
                                      id="program"
                                      autoComplete="country"
                                      className="border-solid border hh-dropdown max-w-lg block focus:ring-indigo-500  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                      name="Program of Interest"  {...register("ProgramOfInterest", { required: true })}
                                    >
                                      <option value="">Select</option>
                                      <option value="Engineering">Engineering</option>
                                      <option value="Chemistry">Chemistry</option>
                                      <option value="Physics">Physics</option>
                                      <option value="Biology">Biology</option>
                                      <option value="Math">Math</option>
                                      <option value="Computer Science">Computer Science</option>
                                    </select>
                                </div>
                                </div>

                                <div className="m:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2" id="dropdown-field">
                                <label htmlFor="gpa" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1.5">
                                  What is your undergraduate GPA? *
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2 block">
                                    <select
                                      id="gpa"
                                      autoComplete="gpa"
                                      className="border-solid border hh-dropdown max-w-lg block focus:ring-indigo-500  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                      name="gpa"  {...register("GPA", { required: true })}
                                    >
                                      <option value="">Select</option>
                                      <option value="4.0-3.75">4.0-3.75</option>
                                      <option value="3.74-3.5">3.74-3.5</option>
                                      <option value="3.49-3.0">3.49-3.0</option>
                                      <option value="2.99-2.75">2.99-2.75</option>
                                      <option value="2.74-2.5">2.74-2.5</option>
                                      <option value="Below 2.50">Below 2.50</option>
                                    </select>
                                </div>
                                </div>

                                <div className="m:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2" id="dropdown-field">
                                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1.5">
                                Years of work experience? *
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2 block">
                                    <select
                                      id="experience"
                                      autoComplete="experience"
                                      className="border-solid border hh-dropdown max-w-lg block focus:ring-indigo-500  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                      name="experience"  {...register("Experience", { required: true })}
                                    >
                                      <option value="">Select</option>
                                      <option value="0-1 years">0-1 years</option>
                                      <option value="2-4 years">2-4 years</option>
                                      <option value="5-7 years">5-7 years</option>
                                      <option value="8-10 years">8-10 years</option>
                                      <option value="Over 10 years">Over 10 years</option>
                                    </select>
                                </div>
                                </div>

                                <div className="m:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2" id="dropdown-field">
                                <label htmlFor="located" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1.5">
                                Where are you currently located? *
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2 block">
                                    <select
                                      id="located"
                                      autoComplete="located"
                                      className="border-solid border hh-dropdown max-w-lg block focus:ring-indigo-500  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                      name="located"  {...register("Located", { required: true })}
                                    >
                                      <option value="">Select</option>
                                      <option value="Upstate South Carolina">Upstate South Carolina</option>
                                      <option value="Lowcountry South Carolina">Lowcountry South Carolina</option>
                                      <option value="Midlands South Carolina">Midlands South Carolina</option>
                                      <option value="U.S.A., other than South Carolina">U.S.A., other than South Carolina</option>
                                      <option value="International">International</option>
                                    </select>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                      <div className="pt-8 pr-16 pb-8">

                                            <button
                                              id="btn"
                                              className="font-medium text-white text-center w-40 h-10"
                                              onClick={() => setNextPage()}
                                              style={{ backgroundColor: '#3A4A58'}}
                                           >
                                            Next
                                            </button>
                                      </div>
                                    </div>
                                </div>
                                </div>
                            </>
                            :
                            null
                        }
                        {
                            currentPage === 2 ? 
                            <>
                                <fieldset>
                                      <legend className="text-lg font-medium text-gray-900 pt-8 pb-2">Are you a U.S. or International Citizen? *</legend>
                                      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                                        {Citizenship.map((Citizenship, personIdx) => (
                                          <div key={personIdx} className="relative flex items-start py-4">
                                            <div className="min-w-0 flex-1 text-sm">
                                              <label htmlFor={`person-${Citizenship.id}`} className="font-medium text-gray-700 select-none">
                                                {Citizenship.name}
                                              </label>
                                            </div>
                                            <div className="ml-3 flex items-center h-5">
                                              <input
                                                id={`person-${Citizenship.id}`}
                                                name={`person-${Citizenship.id}`}
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                              />
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </fieldset>
                                    <div className="pt-4">
      <label htmlFor="semester" className="block text-sm font-medium text-lg text-gray-700 font-medium">
      When are you intending to start?*
      </label>
      <select
        id="semester"
        name="semester"
        className="border-solid border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500  sm:text-sm rounded-md"
      >
        <option value="Fall 2021">Fall 2021</option>
        <option value="Spring 2022">Spring 2022</option>
        <option value="Fall 2022">Fall 2022</option>
        <option value="Spring 2023">Spring 2023</option>
        <option value="Fall 2023">Fall 2023</option>
        <option value="I haven't decided yet. ">I haven't decided yet. </option>
      </select>
    </div>
    
                                <div className="mt-1 sm:mt-0 sm:col-span-2 block">
                                    
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                      <div className="pt-4 pr-16 pb-8 pr-32">

                                      <button
                                            id="btn"
                                            // CLASSNAME TO SUBMIT FORM (hh-pd-submit)
                                            style={{ backgroundColor: '#3A4A58'}}
                                            className="font-medium text-white text-center w-40 h-10"
                                            onClick={() => setNextPage()}
                                          >
                                          Next
                                          </button>
                                          <button
                                            type="button"
                                            style={{ backgroundColor: '#B8B8B8'}}
                                            className="font-medium text-white text-center w-40 h-10"
                                            onClick={() => setPrevPage()}
                                            >
                                            Back
                                          </button>
                                      </div>
                                    </div>
                                </div>
                            </>
                            :
                            null
                        }
                        {
                            currentPage === 3 ? 
                            <div id="input-field-container">
                                <section id="input-content">
                                  <input className="shadow-sm focus:ring-indigo-500 border block w-full sm:text-sm border-gray-300 rounded-md" id="input" type="text" placeholder="First name" {...register("FirstName", {required: true, maxLength: 80})} />
                                  <input className="shadow-sm focus:ring-indigo-500 border block w-full sm:text-sm border-gray-300 rounded-md" id="input" type="text" placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
                                  <input className="shadow-sm focus:ring-indigo-500 border block w-full sm:text-sm border-gray-300 rounded-md" id="input" type="text" placeholder="Email Address" {...register("EmailAddress", {required: true, pattern: /^\S+@\S+$/i})} />
                                  <input className="shadow-sm focus:ring-indigo-500 border block w-full sm:text-sm border-gray-300 rounded-md" id="input" type="tel" placeholder="Phone Number" {...register("PhoneNumber", {required: false, maxLength: 12})} />
                                  <p id="small-text">
                                  This assessment provides personalized information based on your answers, but results should not be considered definitive or final. 
                                  One of our counselors will reach out to offer additional insights and assistance.
                                  </p>
                                </section>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <div className="absolute bottom-0 right-0 h-16 w-3/6" style={{ display: 'contents'}}>
                                          <button
                                            id="btn"
                                            type="submit"
                                            style={{ backgroundColor: '#3A4A58'}}
                                            // CLASSNAME TO SUBMIT FORM (hh-pd-submit)
                                            className="font-medium text-white text-center w-40 h-10"
                                            //onClick={() => setNextPage()}
                                          >
                                          DO I QUALIFY
                                          </button>
                                          <button
                                            type="button"
                                            style={{ color: '#B8B8B8'}}
                                            className="font-medium text-white text-center w-40 h-10"
                                            onClick={() => setPrevPage()}
                                            >
                                            Back
                                          </button>
                                    </div>
                                </div>
                            </div>
                            : 
                            null
                        }
                          </form>
                        {
                            currentPage === 4 ? 
                            <div id="confirmation-wrapper" style={{ backgroundColor: 'white', width: '100%', height: '100%', textAlign: 'center' }}>
                                <header id="confirmation-header" className="h-28 mb-2" style={{ backgroundColor: '#3A4A58'}}>
                                {/* <img style={{ marginTop: '10px' }} src={UChicagoConfirmation} alt="The University of Chicago logo"/> */}
                                <h4 className="text-3xl font-semibold" style={{ color: "#F66733", margin: '10px'}}>Thank you, {watchFirstName}!</h4>
                                <p className="text-base font-medium" style={{ color: "#F66733", margin: '20px'}}>From what you've told us...</p>
                                </header>
                                <section id="confirmation-response" style={{ maxWidth: '425px', minWidth: 'auto', height: '162px', backgroundColor: 'white', margin: 'auto'}}>
                                    <p id="response-content" className="mt-32">
                                    {programDecision()}
                                    </p>
                                </section>
                                <div id="button-container'">
                                    <p id="next-steps-text" className="font-normal mt-10 mb-10">
                                    Ready to take the next step? Get in touch  or schedule an appointment with an admissions counselor!
                                    </p>
                                    <p>
                                    Schedule a meeting below!
                                    </p>
                                </div>
                                <InlineWidget url="https://calendly.com/mariahm_clemsonie" />
                            </div>
                            :
                            null
                        }
                    </div>
                    </div>
                </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}