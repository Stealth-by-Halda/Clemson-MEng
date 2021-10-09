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
                                  When do you want to begin your study abroad?
                                  </label>
                                      <select
                                        id="q1"
                                        autoComplete="q1"
                                        className="block mt-1 mb-spacing16 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"
                                        name="q1"  {...register("q1", { required: true })}
                                        onChange={() => setq1(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select your starting time</option>
                                        <option value="1-2 years">1-2 years</option>
                                        <option value="3-5 years">3-5 years</option>
                                        <option value="6-9 years">6-9 years</option>
                                        <option value="10+ years">Over 10 years</option>
                                      </select>

                                  <label htmlFor="calc" className="block text-white text-sm pb-1 font-light">
                                  What is your target program?
                                  </label>
                                      <select
                                        id="q2"
                                        autoComplete="q2"
                                        className="block mt-1 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"                                      
                                        name="q2"  {...register("q2", { required: true })}
                                        onChange={() => setq2(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select your program</option>
                                        <option value="Calc 1">Calc 1</option>
                                        <option value="Business">Business Calc + Statistics</option>
                                        <option value="Take/Pass them by next May">Take/Pass them by next May?</option>
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
                                  When do you want to begin your study abroad?
                                  </label>
                                      <select
                                        id="q3"
                                        autoComplete="q3"
                                        className="block mt-1 mb-spacing16 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"
                                        name="q3"  {...register("q3", { required: true })}
                                        onChange={() => setq3(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select your starting time</option>
                                        <option value="1-2 years">1-2 years</option>
                                        <option value="3-5 years">3-5 years</option>
                                        <option value="6-9 years">6-9 years</option>
                                        <option value="10+ years">Over 10 years</option>
                                      </select>

                                  <label htmlFor="q4" className="block text-white text-sm pb-1 font-light">
                                  What is your target program?
                                  </label>
                                      <select
                                        id="q4"
                                        autoComplete="q4"
                                        className="block mt-1 mb-spacing16 font-light border-selectBorderColor rounded-none h-selectHeight32 w-full"                                      
                                        name="q4"  {...register("q4", { required: true })}
                                        onChange={() => setq4(true)}
                                        required
                                      >
                                        <option value="" disabled selected>Select your program</option>
                                        <option value="Calc 1">Calc 1</option>
                                        <option value="Business">Business Calc + Statistics</option>
                                        <option value="Take/Pass them by next May">Take/Pass them by next May?</option>
                                      </select>

                                  <label htmlFor="q5" className="block text-white text-sm pb-1 font-light">
                                  What is your target program?
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
                                        <option value="Calc 1">Calc 1</option>
                                        <option value="Business">Business Calc + Statistics</option>
                                        <option value="Take/Pass them by next May">Take/Pass them by next May?</option>
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