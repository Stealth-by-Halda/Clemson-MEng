import { Fragment, useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react'
import './App.css';
import background from './images/MengBackgroundImage.png';
import Right from './images/MengRightForYou.png';
import Assess from './images/MengAssess.png';
import Logo from './images/MengLogo.png';
import halda from './images/halda.png';


export default function Modal() {
  const [open, setOpen] = useState(true)
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const handleChange = (event) => {
    // updating an object instead of a Map
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
}

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);  


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

  const priorty = [
    { id: 1, name: 'Community Amongst Peers' },
    { id: 2, name: 'Real-World Application' },
    { id: 3, name: 'Work/Life Balance' },
    { id: 4, name: 'Small Class Size' },
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
            <div style={{backgroundColor: '#C3C3C3'}} className={currentPage === 3 ? "inline-block align-bottom px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:h-1 sm:w-full sm:p-0 overflow-auto" : "inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-1 sm:h-1 sm:w-full sm:p-0"}>
              <div style={{backgroundColor: '#C3C3C3'}} className={currentPage === 3 ? " grid h-100" : "grid grid-cols-2 h-100 "} id="modalGrid">
                {/* Billboard Left */}
                {
                currentPage < 3 ? 
                  <div className="relative">
                      {/* <h1 className="m-4 w-topBillboardText h-topBillboardText font-sans not-italic font-extrabold text-billboardHeader leading-billboardHeader text-crownRed">ARE YOU READY FOR A GRADUATE PROGRAM?</h1>
                      <h3 className="m-4 font-sans font-medium">Find out in 30 seconds!</h3> */}
                      <img src={background} className="h-459px absolute" id="backgroundimage" alt=""/>
                      <img src={Right} className="h-115px mt-20 ml-10 absolute" id="readyimage" alt=""/>
                      <img src={Assess} className="h-40px absolute left-10 bottom-48" id="assess" alt=""/>
                      <img src={Logo} className="absolute left-5 bottom-14" id="logo" alt=""/>
                     {/*}  <img src={halda} className="mt-24 ml-4 w-24 bottom-5 right-5 absolute" id="halda" alt=""/> */}

                  </div>
                :
                null
                }
                {/* Content Right */}
                <div id="content-right" style={{ margin: currentPage === 3 ? "0" : "0rem 2rem 2rem 2rem"}}>
                    <form style={{backgroundColor: '#C3C3C3'}} onSubmit={handleSubmit(onSubmit)}>
                        {
                            currentPage === 1 ? 
                            <>
                                <label htmlFor="experience" style={{color: "#3A4A58"}} className="block text-sm font-medium sm:mt-px sm:pt-2 mb-1.5">
                                Years of Work Experience? *
                                </label>
                                    <select
                                      id="experience"
                                      autoComplete="experience"
                                      className="border-solid border hh-dropdown max-w-lg block focus:ring-indigo-500  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                      name="experience"  {...register("Experience", { required: true })}
                                    >
                                      <option value="">Select</option>
                                      <option value="1-2 years">1-2 years</option>
                                      <option value="3-5 years">3-5 years</option>
                                      <option value="6-9 years">6-9 years</option>
                                      <option value="10+ years">Over 10 years</option>
                                    </select>

                                <label htmlFor="located"  style={{color: "#3A4A58"}}  className="block text-sm font-medium sm:mt-px sm:pt-2 mb-1.5">
                                Have You Taken 1 Year of Calculus & Stats? *
                                </label>
                                    <select
                                      id="located"
                                      autoComplete="located"
                                      className="border-solid border hh-dropdown max-w-lg block focus:ring-indigo-500  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                      name="located"  {...register("Calc_Stats", { required: true })}
                                    >
                                      <option value="">Select</option>
                                      <option value="Calc 1">Calc 1</option>
                                      <option value="Business">Business</option>
                                      <option value="Take/Pass them by next May">Take/Pass them by next May?</option>
                                    </select>
                                    <legend  style={{color: "#3A4A58"}} className="text-sm font-medium pt-4">Are you a U.S. or International Citizen? *</legend>
                                    {priorty.map((priorty, priortyIdx) => (
                                          <div key={priortyIdx} className="relative flex items-start py-1">
                                            <div className="min-w-0 flex-1 text-sm">
                                              <label htmlFor={`person-${priorty.id}`} style={{color: "#3A4A58"}}  className="font-medium select-none">
                                                {priorty.name}
                                              </label>
                                            </div>
                                            <div className="ml-3 flex items-center h-5">
                                              <input
                                                id={`person-${priorty.id}`}
                                                name={`person-${priorty.id}`}
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                checked={checkedItems[`person-${priorty.id}`]} 
                                                onChange={handleChange}
                                                {...register(`person-${priorty.id}`)}
                                              />
                                            </div>
                                          </div>
                                        ))}
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <div className="absolute bottom-0 right-0 h-16 w-3/6" style={{ display: 'contents'}}>

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
                                
                            </>
                            :
                            null
                        }
                        {
                            currentPage === 2 ? 
                            <>
                                <section id="input-content">
                                  <input className="block" id="input" type="text" placeholder="First name" {...register("FirstName", {required: true, maxLength: 80})} />
                                  <input className="block" id="input" type="text" placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
                                  <input className="block" id="input" type="text" placeholder="Email Address" {...register("EmailAddress", {required: true, pattern: /^\S+@\S+$/i})} />
                                  <input className="block" id="input" type="tel" placeholder="Phone Number" {...register("PhoneNumber", {required: false, maxLength: 12})} />
                                  <p id="small-text">
                                  This assessment provides personalized information based on your answers, but results should not be considered definitive or final. 
                                  One of our counselors will reach out to offer additional insights and assistance.
                                  </p>
                                </section>
                                    <div className="absolute bottom-0 right-0 h-16 w-3/6" style={{ display: 'contents'}}>
                                          <button
                                            id="btn"
                                            type="submit"
                                            style={{ backgroundColor: '#3A4A58'}}
                                            // CLASSNAME TO SUBMIT FORM (hh-pd-submit)
                                            className="font-medium text-white text-center text-xs w-40 h-10"
                                            //onClick={() => setNextPage()}
                                          >
                                          AM I A GOOD FIT?
                                          </button>
                                          <button
                                            type="button"
                                            style={{ backgroundColor: '#B8B8B8', color: "#3A4A58"}}
                                            className="font-medium text-white text-center w-40 h-10 mr-5"
                                            onClick={() => setPrevPage()}
                                            >
                                            Back
                                          </button>
                                    </div>
                                </>
                            : 
                            null
                        }
                          </form>
                        {
                            currentPage === 3 ? 
                            <>
                                <div className="h-28 mb-2 text-center pt-4" style={{ backgroundColor: '#3A4A58'}}>
                                  <p className="text-3xl font-semibold" style={{ color: "#F66733"}}>Thank you, {watchFirstName}!</p>
                                  <p className="text-base font-medium" style={{ color: "#F66733", margin: '20px'}}>From what you've told us...</p>
                                </div>
                                <div className="text-center mt-8 mb-8">
                                    <p className="mb-4">
                                      {programDecision()}
                                      </p>
                                      <p className="font-light">If a good fit provide option to meet a Program Coordinator for next step, if not provide options to make them a good fit or for another Engineering program.</p>
                                </div>
                                {/* <section id="confirmation-response" style={{ maxWidth: '425px', minWidth: 'auto', height: '162px', backgroundColor: 'white', margin: 'auto'}}>
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
                                </div> */}
                                {/* <InlineWidget url="https://calendly.com/mariahm_clemsonie" style={{ minWidth:"320px", height:"630px"}}/> */}
                                <div className="grid justify-center">
                                <button
                                              id="calendlybutton"
                                              className="font-medium text-white text-center w-40 h-10"
                                              onClick={() => window.location.href='https://calendly.com/mariahm_clemsonie'}
                                              style={{ backgroundColor: '#3A4A58'}}
                                           >
                                            Schedule
                                            </button></div>
</>
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