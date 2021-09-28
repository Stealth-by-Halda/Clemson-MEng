import { Fragment, useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react'
//import './App.css';
import background from './images/MengBackgroundImage.png';
import Right from './images/MengRightForYou.png';
import Assess from './images/MengAssess.png';
import Logo from './images/MengLogo.png';
import halda from './images/halda.png';


export default function Modal() {
  const [open, setOpen] = useState(true)
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const [q1, setq1] = useState(false)
  const [q2, setq2]  = useState(false)
  const [q3, setq3]  = useState(false)

  const handleChange = (event) => {
    // updating an object instead of a Map
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });

    document.getElementById("person-1").checked || document.getElementById("person-2").checked || document.getElementById("person-3").checked || document.getElementById("person-4").checked ? setq3(true) : setq3(false)

}

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);  


  let completeButtonRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)

  const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({ mode: "all", defaultValues: {},});
  const onError = (errors, e) => alert("Please Fill in all fields");

  const watchAllFields = watch();
  const watchFirstName = watch("FirstName");

  const onSubmit = () => {
    setCurrentPage(currentPage + 1)
  };

  const setNextPage = () => {
    if(currentPage === 1) 

      if(q1 && q2 && q3) setCurrentPage(currentPage + 1)
    // currentPage === 1 && setCurrentPage(2)
    // currentPage === 2 && setCurrentPage(3)
  }

  const setPrevPage = () => {
    //currentPage === 2 && setCurrentPage(1)
    setCurrentPage(currentPage - 1)
  }
  
  // const sendMail = () => {
  //   const mailto="mailto:admissions@clemson.edu";
  //   const subject="I just took your readiness assessment";
  //   const body="Hi Clemson School Admissions Team! I am interested in learning more about your programs";
  //   window.location.href = mailto + '?subject=' + subject + '&body=' + body;
  // }

  const programDecision = () => {
    console.log(watchAllFields)
    let response = ""
    let header = ""
    let response2 = ""
    let header2 = ""
    let response3 = ""
    let header3 = ""
    let response4 = ""
    let header4 = ""

    if(watchAllFields['person-1']) 
    {
      header = "Community Amongst Peers: "
      response = "Clemson University has one of the strongest alumni networks in the country. Our programs consistently attract some of the best talent, and we promote opportunities to get to know each other both socially as well as through your coursework."
    }
    if(watchAllFields['person-2']) 
    {
      header2 = "Real-World Application: "
      response2 = "Our program emphasizes real world experience enhancing your education. You will have opportunity to use what you're learning in your job in your coursework, and the capstone project focuses on working together with your supervisor to apply your skills to solve problems at your actual job."
    }
    if(watchAllFields['person-3']) 
    {
      header3 = "Work/Life Balance: "
      response3 = "Our programs were designed with the working professional in mind. At a pace of just 1 class/semester you will find that your schedule is not overwhelmed and that you have ample time to really apply what you're learning from class in your workplace."
    }
    if(watchAllFields['person-4']) 
    {
      header4 = "Small Class Size: "
      response4 = "Each year we accept a maximum of 50 students per cohort. We have found that this cohort size is perfect to facilitate meaningful networking, improved classroom experience from diverse points of view, and still maintaining small class sizes and personalized attention."
    }
    //console.log(watchAllFields['person-1'])

    if (watchAllFields.Experience === "1-2 years") {
      return (
        <>
        <div className="text-center m-6" tabIndex="0">
        <p className="mb-4">
        <span id="response-content" className="space-y-4">
        We recommend at least 3 years of work experience to ensure you know your field well enough to improve it, but that doesn't mean you shouldn't start the conversation with our team now! Schedule a time to speak to one of our admissions professionals below to create a personalized plan.
        </span>
        </p>
        <h2 className="question"><em>What do you prioritize in your education?</em></h2>
        {response &&
        <div className="answerBox" id="answerbox2">
          <h3 className="questionBox text-white mt-2" style={{backgroundColor: "#282c34"}}>{header}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response}</p>
        </div>
        }
        {response2 &&
        <div className="answerBox mt-2" id="answerbox2">
          <h3 className="questionBox text-white" style={{backgroundColor: "#282c34"}}>{header2}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response2}</p>
        </div>
        }
        {response3 &&
        <div className="answerBox mt-2" id="answerbox3">
          <h3 className="questionBox text-white" style={{backgroundColor: "#282c34"}}>{header3}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response3}</p>
        </div>
        }
        {response4 &&
        <div className="answerBox mt-2" id="answerbox4">
          <h3 className="questionBox text-white" style={{backgroundColor: "#282c34"}}>{header4}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response4}</p>
        </div>
        }
        </div>
        <div className="text-center m-6"> <p className="font-light">Our program coordinator is available to answer any questions you have and tell you more about the program</p></div>
       <div className="grid justify-center">
      <button
                    id="calendlybutton"
                    className="font-medium text-white text-center w-40 h-10 mb-10"
                    onClick={() => window.location.href='https://calendly.com/mariahm_clemsonie'}
                    style={{ backgroundColor: '#3A4A58'}}
                >
                  Schedule a Meeting
                  </button></div>

        </>
      )
    } else {
      if (watchAllFields.Calc_Stats === "Calc 1" || watchAllFields.Calc_Stats === "Business") {

        return (
        <>
        <div className="text-center m-6">
        <p className="mb-4">
        <span id="response-content" className="space-y-4">
        Having taken either Calc 1 or Business Calc with an extra class of statistics has set you up perfectly for our program!
        </span>
        </p>
        <h2 className="question"><em>What do you prioritize in your education?</em></h2>
        {response &&
        <div className="answerBox" id="answerbox2">
          <h3 className="questionBox text-white mt-2" style={{backgroundColor: "#282c34"}}>{header}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response}</p>
        </div>
        }
        {response2 &&
        <div className="answerBox mt-2" id="answerbox2">
          <h3 className="questionBox text-white" style={{backgroundColor: "#282c34"}}>{header2}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response2}</p>
        </div>
        }
        {response3 &&
        <div className="answerBox mt-2" id="answerbox3">
          <h3 className="questionBox text-white" style={{backgroundColor: "#282c34"}}>{header3}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response3}</p>
        </div>
        }
        {response4 &&
        <div className="answerBox mt-2" id="answerbox4">
          <h3 className="questionBox text-white" style={{backgroundColor: "#282c34"}}>{header4}</h3>
          <p className="font-light border-2 rounded-b-md border-gray-800">{response4}</p>
        </div>
        }      </div>

        <div className="text-center m-6"> <p className="font-light">Our program coordinator is available to answer any questions you have and tell you more about the program</p></div>
       <div className="grid justify-center">
      <button
                    id="calendlybutton"
                    className="font-medium text-white text-center w-40 h-10 mb-10"
                    onClick={() => window.location.href='https://calendly.com/mariahm_clemsonie'}
                    style={{ backgroundColor: '#3A4A58'}}
                >
                  Schedule a Meeting
                  </button></div>
        </>
        )
      }
        else
        {
      return (
        <>
        <div className="text-center m-6">
        <p className="mb-4">
        <span id="response-content" className="space-y-4">
        Please be in contact with the program coordinators to ensure that your math classes will finish before you are slated to start the Master of Engineering program.</span>
        </p>
        {response &&
        <p className="font-light">{response}</p>
        }
        {response2 &&
        <p className="font-light">{response2}</p>
        }
        {response3 &&
        <p className="font-light">{response3}</p>
        }
        {response4 &&
        <p className="font-light">{response4}</p>
        }

        </div>
        <div className="grid justify-center">
      <button
                    id="calendlybutton"
                    className="font-medium text-white text-center w-40 h-10 mb-10"
                    onClick={() => window.location.href='https://calendly.com/mariahm_clemsonie'}
                    style={{ backgroundColor: '#3A4A58'}}
                  >
                  Schedule a Meeting
                  </button></div>
        </>
      )
        }

    }
  }

  const priority = [
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
            <div className={currentPage === 3 ? "inline-block align-bottom bg-white px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg md:h-100-1 h-200-1 sm:w-full sm:p-0 overflow-y-auto" : "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-1 sm:h-1 sm:w-full sm:p-0"} id="modal">
              <div style={{backgroundColor: '#C3C3C3'}} className={currentPage === 3 ? " grid h-200 md:h-100" : "grid grid-cols-2 h-200 md:h-100 bg-scroll"} id="modalGrid">
                {/* Billboard Left */}
                {
                currentPage < 3 ? 
                <div className="col-start-1 mt-0 top-0" style={{backgroundColor: '#3A4A58'}} id="colstart1">
                  <div className="mt-0 md:mt-2">
                      {/* <h1 className="m-4 w-topBillboardText h-topBillboardText font-sans not-italic font-extrabold text-billboardHeader leading-billboardHeader text-crownRed">ARE YOU READY FOR A GRADUATE PROGRAM?</h1>
                      <h3 className="m-4 font-sans font-medium">Find out in 30 seconds!</h3> */}
                      {/* <img src={background} className="md:h-459px  h-0 md:absolute  sm:top-0 sm:left-0" id="backgroundimage" alt=""/> */}
                      {/* <img src={Right} className="h-115px md:mt-10 pt-5 ml-10 mb-5 md:absolute" id="readyimage" alt=""/> */}
                      <p className="pl-4 pt-8 md:text-3xl text-3xl font-normal ml-5 md:mb-10  mb-5 md:mt-8 mr-5" style={{color: "#EB6A22"}}>Wondering if our MEng program is right for you?</p>
                      <img src={Assess} className="h-40px md:absolute ml-10 mb-5 md:bottom-48" id="assess" alt="Take Our Program fit assessment"/>
                      <img src={Logo} className="md:absolute ml-10 pb-5 md:left-5 md:bottom-14" id="logo" alt="Clemson Logo"/>
                     {/*}  <img src={halda} className="mt-24 ml-4 w-24 bottom-5 right-5 absolute" id="halda" alt=""/> */}
</div>
                  </div>
                :
                null
                }
                {/* Content Right */}
                <div id="content-right" style={{ margin: currentPage === 3 ? "0" : "0rem 2rem 2rem 2rem"}}>
                    <form className={currentPage === 3 ? "bg-white hidden md:block" : "bg-white" } style={{backgroundColor: '#C3C3C3'}} onSubmit={handleSubmit(onSubmit, onError)}>
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
                                      onChange={() => setq1(true)}
                                    >
                                      <option value="" disabled selected>Select Experience</option>
                                      <option value="1-2 years">1-2 years</option>
                                      <option value="3-5 years">3-5 years</option>
                                      <option value="6-9 years">6-9 years</option>
                                      <option value="10+ years">Over 10 years</option>
                                    </select>

                                <label htmlFor="calc"  style={{color: "#3A4A58"}}  className="block text-sm font-medium sm:mt-px sm:pt-2 mb-1.5">
                                What math classes have you passed? *
                                </label>
                                    <select
                                      id="calc"
                                      autoComplete="calc"
                                      className="border-solid border hh-dropdown max-w-lg block focus:ring-indigo-500  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                      name="calc"  {...register("Calc_Stats", { required: true })}
                                      onChange={() => setq2(true)}
                                    >
                                      <option value="" disabled selected>Select Class</option>
                                      <option value="Calc 1">Calc 1</option>
                                      <option value="Business">Business Calc + Statistics</option>
                                      <option value="Take/Pass them by next May">Take/Pass them by next May?</option>
                                    </select>
                                    <legend  style={{color: "#3A4A58"}} className="text-sm font-medium pt-8" tabIndex="0">What do you prioritize in your education? *</legend>
                                    {priority.map((priority, priorityIdx) => (
                                          <div key={priorityIdx} className="relative flex items-start py-1">
                                            <div className="min-w-0 flex-1 text-sm">
                                              <label htmlFor={`person-${priority.id}`} style={{color: "#3A4A58"}}  className="font-medium select-none">
                                                {priority.name}
                                              </label>
                                            </div>
                                            <div className="ml-3 flex items-center h-5">
                                              <input
                                                id={`person-${priority.id}`}
                                                name={`person-${priority.id}`}
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                checked={checkedItems[`person-${priority.id}`]} 
                                                onClick={handleChange}
                                                {...register(`person-${priority.id}`)}
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
                                  <p id="small-text" className="sm:pb-4">
                                  This assessment provides personalized information based on your answers, but results should not be considered definitive or final. 
                                  One of our counselors will reach out to offer additional insights and assistance.
                                  </p>
                                </section>
                                <div className="absolute bottom-0 right-0 h-16 w-3/6" style={{ display: 'contents'}}>
                                <button
                                            type="button"
                                            style={{ backgroundColor: '#B8B8B8', color: "#3A4A58"}}
                                            className="font-medium text-white text-center w-32 h-10 mr-5"
                                            onClick={() => setPrevPage()}
                                            >
                                            Back
                                          </button>
                                          <button
                                            //id="btn"
                                            type="submit"
                                            style={{ backgroundColor: '#3A4A58'}}
                                            // CLASSNAME TO SUBMIT FORM (hh-pd-submit)
                                            className="font-medium text-white text-center text-xs w-32 h-10"
                                            //onClick={() => setNextPage()}
                                          >
                                          AM I A GOOD FIT?
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
                                  <p className="text-3xl font-semibold" style={{ color: "white"}} tabIndex="0">Thank you, {watchFirstName}!</p>
                                  <p className="text-base font-medium" style={{ color: "white", margin: '20px'}} tabIndex="0">From what you've told us...</p>
                                </div>
                                      {programDecision()}
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