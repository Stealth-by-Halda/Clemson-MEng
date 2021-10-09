import { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
//import './App.css';
// import background from './images/MengBackgroundImage.png';
// import Right from './images/MengRightForYou.png';
// import Assess from './images/MengAssess.png';
// import Logo from './images/MengLogo.png';
// import halda from './images/halda.png';


export default function Modal() {
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const [q1, setq1] = useState(false)
  const [q2, setq2]  = useState(false)
  const [q3, setq3]  = useState(false)
  const [q4, setq4]  = useState(false)
  const [q5, setq5]  = useState(false)

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
      if(q1 && q2) setCurrentPage(currentPage + 1)
    else if(currentPage === 2) 
      if(q3 && q4 && q5) setCurrentPage(currentPage + 1)
    else if(currentPage === 3) 
      if(q3 && q4 && q5) setCurrentPage(currentPage + 1)
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
    let response2 = ""
    let header2 = ""
    let response4 = ""
    let header4 = ""
    let response5 = ""
    let header5 = ""
    
    if(watchAllFields['q2']) 
    {
      header2 = watchAllFields['q2']
      switch (watchAllFields['q2']) {
        case 'Just starting to explore options':
          response2 = "Since you're just starting to look into your options for graduate education, we encourage you to attend an upcoming Info Session, listed below. At our Info Sessions we give a detailed overview of the program as well as answer any general questions from attendees."
          break;
        case 'Fine tuning my list of target schools/programs':
          response2 = "We take a personalized approach and can answer any questions you may have about what it is like enrolled in our graduate programs, and how you can manage classes with your personal and professional responsibilities. We encourage you to set up some time to meet with us at the link below."
          break;
        case 'Ready to apply':
          response2 = "We are excited that you are ready to apply, and are available to answer any questions you may have about the graduate application process for the Master of Product Innovation program. We encourage you to set up some time to meet with us at the link below."
          break;
        case 'Already applied':
          response2 = "We're glad you're considering the da Vinci Center for your graduate studies. If you have questions about your next steps, please use the link below to schedule an appointment to speak with us."
          break;
        case 'Already admitted':
          response2 = "Congratulations on your acceptance! We're glad you're considering the da Vinci Center for your graduate studies. Please consider reaching out to us by setting up an appointment below to discuss your next steps and have your questions answered."
          break;
        case 'Other':
          response2 = "The da Vinci Center's graduate programs are built to work around the unique needs of adults and prepare our graduates for professional advancement in a wide range of industries. To learn more, schedule an appointment using the link below."
          break;
        default:
          response2 = "The da Vinci Center's graduate programs are built to work around the unique needs of adults and prepare our graduates for professional advancement in a wide range of industries. To learn more, schedule an appointment using the link below."
      }
    }
    if(watchAllFields['q4']) 
    {
      header4 = watchAllFields['q4']
      switch (watchAllFields['q4']) {
        case 'Career Change':
          response4 = "Earning a graduate degree or certificate can help open doors to a new careers or help you advance. Graduate programs at the da Vinci Center are open to prospective students with any bachelor's degree. Let's talk about the opportunities you'll have after pursuing your intended program at the da Vinci Center."
          break;
        case 'Opportunity for promotion':
          response4 = "Bachelor's degrees are great for entering many career fields, but a master's degree is often the key to promotional opportunities, including management and leadership positions. Many of our graduates tell us that their master's degree provided them a clear path to leadership roles and professional growth and advancement. Talk to us about how the Master of Product Innovation program will help your earning and promotional potential."
          break;
        case 'Personal Goal':
          response4 = "Benjamin Franklin said it best: “If a man empties his purse into his head, no man can take it away from him. An investment in knowledge always pays the best interest.” Whether you want to take only a few courses or earn a full master's degree, let's talk about how a graduate education at the da Vinci Center will be personally fulfilling for you."
          break;
        case 'Start my own venture':
          response4 = "We prepare students to transform their ideas into new products and ventures in teams. Whether they set up their own company or develop an innovative product or not, we want our students to walk away from our programs confident in their ability to be problem solvers, creators, and makers."
          break;
        case 'Looking for a cross-disciplinary grad program':
          response4 = "The academic and experiential offerings of the VCU da Vinci Center for Innovation aim to create T-shaped individuals who are anchored in a discipline and have the capacity and openness to span across disciplines. As a result, students are better prepared to engage in our increasingly global world because they have developed the skills and tools necessary to engage in difficult dialog, to disagree, to reframe failure, and make change."
          break;
        case 'Prepare for my chosen field':
          response4 = "Many positions prefer a graduate education as an entry-level requirement for jobs or licensure. The Master of Product Innovation program at the da Vinci Center is a great way to prepare for your future career. Talk with us to create your plan."
          break;
        case 'Other':
          response4 = "Regardless of your motivation for pursuing your graduate education, let's talk about how the da Vinci Center can get you there. "
          break;
        default:
          response4 = "Regardless of your motivation for pursuing your graduate education, let's talk about how the da Vinci Center can get you there. "
      }
    }
    if(watchAllFields['q5']) 
    {
      header5 = watchAllFields['q5']
      switch (watchAllFields['q5']) {
        case 'Work/Life/School Balance':
          response5 = "Pursuing a graduate education can often add to an otherwise crowded schedule for you. The Master of Product Innovation program can be completed part-time and classes take place in the evenings. Speak with us to find out exactly how the Master of Product Innovation program can be a good fit for your busy life, and what you can expect as a student."
          break;
        case 'Entrance Exam':
          response5 = "Graduate programs at the da Vinci Center do not require standardized master's-level tests for consideration."
          break;
        case 'Program Rigor':
          response5 = "Pursuing your graduate education can be daunting, particularly if you haven't been in school for some time. We take a personalized approach to understand your goals and abilities, and help you understand if pursuing your education with the da Vinci Center will work for you."
          break;
        case 'Paying For Grad School':
          response5 = "We understand your concern and the da Vinci Center offers scholarships and graduate assistantships. Let us know if you're interested or want to learn more about these opportunities."
          break;
        case 'Other':
          response5 = "We know the decision to go to grad school is big. We're always happy to talk through any questions or concerns you may have."
          break;
        default:
          response5 = "We know the decision to go to grad school is big. We're always happy to talk through any questions or concerns you may have."
      }    
    }

      return (
        <>
        <div className="text-center m-6" tabIndex="0">
        <p className="text-white">Thank you {watchAllFields['FirstName']},</p>
        <p className="text-white">We look forward to assiting you on your journey!</p>
        <p className="text-white text-base mt-spacing10 font-medium">{watchAllFields['q1']}</p>
        <p className="text-white text-sm">We have sent your information to one of our admissions representatives who will personally reach out to you with more information on what's next</p>
        <h2 className="question text-white mt-spacing16"><em>Where are you in your process?</em></h2>
        {response2 &&
        <div className="answerBox bg-white" id="answerbox2">
          <h3 className="questionBox text-white mt-2" style={{backgroundColor: "#E8B54A"}}>{header2}</h3>
          <p className="font-light border-2 rounded-none border-responseBoxColor">{response2}</p>
        </div>
        }
        <h2 className="question text-white mt-spacing16"><em>What is your biggest motivation for going to school?</em></h2>
        {response4 &&
        <div className="answerBox bg-white mt-2" id="answerbox2">
          <h3 className="questionBox text-white" style={{backgroundColor: "#E8B54A"}}>{header4}</h3>
          <p className="font-light border-2 rounded-none border-responseBoxColor">{response4}</p>
        </div>
        }
        <h2 className="question text-white mt-spacing16"><em>What is your biggest concern about going to school?</em></h2>
        {response5 &&
        <div className="answerBox bg-white mt-2" id="answerbox3">
          <h3 className="questionBox text-white" style={{backgroundColor: "#E8B54A"}}>{header5}</h3>
          <p className="font-light border-2 rounded-none border-responseBoxColor">{response5}</p>
        </div>
        }
        </div>
        <div className="text-center m-6"> <p className="font-light text-white">Ready to take the next step? Schedule a time through our website to meet with one of our admissions councelors today!</p></div>
       <div className="grid justify-center">
      <button
                    id="admissionsButton"
                    className="font-medium text-white text-center w-auto h-auto mt-spacing16 mb-border40 px-5 py-3"
                    onClick={() => window.location.href='www.halda.com'}
                    style={{ backgroundColor: '#E8B54A'}}
                >
                  Admissions
                  </button></div>

        </>
      )
  }

  if(currentPage !== 4 )
    return (
      
              <div className="h-appHeight525 w-appWidth340" >
                      <form className="p-border40 min-h-full max-" style={{backgroundColor: '#2B2B29'}} onSubmit={handleSubmit(onSubmit, onError)}>
                          {
                              currentPage === 1 && 
                              <>
                                  <h1 className="text-white text-2xl font-extrabold">PLANNING FOR YOUR EDUCATION BEGINS HERE</h1>
                                  <p className="text-white pt-1 font-light">Get your personalized plan in 30 seconds.</p>
                                  
                                  <label htmlFor="experience" className="block text-white text-sm pt-4 pb-1 font-light">
                                  What is your program of interest?
                                  </label>
                                      <select
                                        id="q1"
                                        autoComplete="q1"
                                        className="block mt-1 mb-spacing16 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"
                                        name="q1"  {...register("q1", { required: true })}
                                        onChange={() => setq1(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select interest</option>
                                        <option value="Master in Product Innovation">Master in Product Innovation</option>
                                        {/* <option value="3-5 years">3-5 years</option>
                                        <option value="6-9 years">6-9 years</option>
                                        <option value="10+ years">Over 10 years</option> */}
                                      </select>

                                  <label htmlFor="calc" className="block text-white text-sm pb-1 font-light">
                                  Where are you in your process?
                                  </label>
                                      <select
                                        id="q2"
                                        autoComplete="q2"
                                        className="block mt-1 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"                                      
                                        name="q2"  {...register("q2", { required: true })}
                                        onChange={() => setq2(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select option</option>
                                        <option value="Just starting to explore options">Just starting to explore options</option>
                                        <option value="Fine tuning my list of target schools/programs">Fine tuning my list of target schools/programs</option>
                                        <option value="Ready to apply">Ready to apply</option>
                                        <option value="Already applied">Already applied</option>
                                        <option value="Already admitted">Already admitted</option>
                                        <option value="Other">Other</option>
                                      </select>
                                      <div className="sm:flex sm:flex-row-reverse">
                                        <button
                                            id="btn"
                                            className="font-medium text-white text-center w-auto h-auto mt-spacing16 px-5 py-3"
                                            onClick={() => setNextPage()}
                                            style={{ backgroundColor: '#E8B54A'}}
                                        >
                                          Next
                                        </button>
                                      </div>                                
                              </>
                          }
                          {
                            currentPage === 2 && 
                            <>
                              <label htmlFor="q3" className="block text-white text-sm pt-4 pb-1 font-light">
                              I would like to start my program in...
                                  </label>
                                      <select
                                        id="q3"
                                        autoComplete="q3"
                                        className="block mt-1 mb-spacing16 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"
                                        name="q3"  {...register("q3", { required: true })}
                                        onChange={() => setq3(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select Semester</option>
                                        <option value="Summer 2022">Summer 2022</option>
                                        <option value="Fall 2022">Fall 2022</option>
                                        <option value="Summer 2023">Summer 2023</option>
                                        <option value="Fall 2023 or later">Fall 2023 or later</option>
                                      </select>

                                  <label htmlFor="q4" className="block text-white text-sm pb-1 font-light">
                                  What is your biggest motivation for going to school?
                                  </label>
                                      <select
                                        id="q4"
                                        autoComplete="q4"
                                        className="block mt-1 mb-spacing16 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"                                      
                                        name="q4"  {...register("q4", { required: true })}
                                        onChange={() => setq4(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select motivation</option>
                                        <option value="Career Change">Career Change</option>
                                        <option value="Opportunity for promotion">Opportunity for promotion</option>
                                        <option value="Personal Goal">Personal Goal</option>
                                        <option value="Start my own venture">Start my own venture</option>
                                        <option value="Looking for a cross-disciplinary grad program">Looking for a cross-disciplinary grad program</option>
                                        <option value="Prepare for my chosen field">Prepare for my chosen field</option>
                                        <option value="Other">Other</option>
                                      </select>

                                  <label htmlFor="q5" className="block text-white text-sm pb-1 font-light">
                                  What is your biggest concern about going to school?
                                  </label>
                                      <select
                                        id="q5"
                                        autoComplete="q5"
                                        className="block mt-1 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"                                      
                                        name="q5"  {...register("q5", { required: true })}
                                        onChange={() => setq5(true)}
                                        required
                                      >                                     
                                        <option value="" disabled selected>Select your program</option>
                                        <option value="Work/Life/School Balance">Work/Life/School Balance</option>
                                        <option value="Entrance Exam">Entrance Exam</option>
                                        <option value="Program Rigor">Program Rigor</option>
                                        <option value="Paying For Grad School">Paying For Grad School</option>
                                        <option value="Other">Other</option>
                                      </select>

                                    <div className="sm:flex sm:flex-row-reverse">
                                      
                                      <button
                                          id="btn"
                                          className="font-medium text-white text-center w-auto h-auto mt-spacing16 px-5 py-3"
                                          onClick={() => setNextPage()}
                                          style={{ backgroundColor: '#E8B54A'}}
                                      >
                                        Next
                                      </button>
                                      <button
                                          id="btn"
                                          className="font-medium text-white text-center w-auto h-auto mt-spacing16 mr-spacing10 px-5 py-3"
                                          onClick={() => setPrevPage()}
                                          style={{ backgroundColor: '#393939'}}
                                      >
                                        Back
                                      </button>
                                    </div>
                                
                            </>
                          }
                          {
                              currentPage === 3 && 
                              <>
                                    <input className="block mb-spacing10 pl-1 border-selectBorderColor rounded-none h-selectHeight32 w-full" id="input" type="text" placeholder="First name" {...register("FirstName", {required: true, maxLength: 80})} />
                                    <input className="block mb-spacing10 pl-1 border-selectBorderColor rounded-none h-selectHeight32 w-full" id="input" type="text" placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
                                    <input className="block mb-spacing10 pl-1 border-selectBorderColor rounded-none h-selectHeight32 w-full" id="input" type="text" placeholder="Email Address" {...register("EmailAddress", {required: true, pattern: /^\S+@\S+$/i})} />
                                    <input className="block mb-spacing10 pl-1 border-selectBorderColor rounded-none h-selectHeight32 w-full" id="input" type="tel" placeholder="Phone Number" {...register("PhoneNumber", {required: false, maxLength: 12})} />
                                    <p className="text-disclaimerGray text-disclaimer10 font-serif">
                                    This assessment provides personalized information based on your answers, but results should not be considered definitive or final. 
                                    One of our counselors will reach out to offer additional insights and assistance.
                                    </p>
                                    <div className="sm:flex sm:flex-row-reverse">
                                      
                                      <button
                                          id="btn"
                                          type="submit"
                                          className="font-medium text-white text-center w-auto h-auto mt-spacing16 px-5 py-3"
                                          //onClick={() => setNextPage()}
                                          style={{ backgroundColor: '#E8B54A'}}
                                      >
                                        Submit
                                      </button>
                                      <button
                                          id="btn"
                                          className="font-medium text-white text-center w-auto h-auto mt-spacing16 mr-spacing10 px-5 py-3"
                                          onClick={() => setPrevPage()}
                                          style={{ backgroundColor: '#393939'}}
                                      >
                                        Back
                                      </button>
                                    </div>
                                  </>
                          }
                        </form>
                      </div>
            
    )
    else
         return(
          <>
          <div className="overflow-y-auto h-appHeight525 w-appWidth340" style={{backgroundColor: '#2B2B29'}}>
            {programDecision()}         
          </div>                                                     
      </>
         )                                                  
}