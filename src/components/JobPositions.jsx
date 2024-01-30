import React, { useState } from "react";
import { Link } from "react-router-dom";
import Close from '../assets/Images/tabsimages/cross.png'

const JobPositions = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleViewDetails = (position) => {
    setShowDetails(true);
    setSelectedPosition(position);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedPosition(null);
  };

  const positions = [
    {
      title: "Ui/Ux Designer",
      description: "Are you a creative problem-solver with a passion for designing seamless user experiences? We're on the lookout for a talented UI/UX Designer to join our dynamic team!",
      jobtype: "Full-time (on-site)",
      jobtimings: "Night Shift (10:00 PM to 07:00 AM)",
      workingdays: "Monday to Friday",
      location: "Bukhari Commercial Dha Lahore Sub Office Phase 6",
      jobresponsibilities: [
        "Proven work experience as a UI/UX Designer or a similar role",
        "Strong portfolio of design projects demonstrating experience with usability and visual design for web and mobile applications",
        "Proficiency with design and prototyping tools including Adobe Creative Suite and Figma",
        "Experience with HTML, CSS, JavaScript, and front-end development frameworks such as React and Angular",
        "Excellent communication and collaboration skills, with the ability to clearly articulate design decisions to cross-functional teams",
        "An eye for detail and a passion for creating compelling and intuitive user experiences",
        "Ability to work in a fast-paced environment with a focus on delivering high-quality work on tight timelines",
      ],
      ourbenefits: [
        "Maintained Vehicle",
        "Medical Inssurance",
        "Utilities Allowances",
        "Pick n Drop",
        "Dinner / Lunch",
      ]
    },
    {
      title: "Web/CMS Developer",
      description: "We are looking for a proficient and experienced CMS Developer who has proven work experience in customization of Shopify and WordPress.",
      jobtype: "Full-time (on-site)",
      jobtimings: "Night Shift (10:00 PM to 07:00 AM)",
      workingdays: "Monday to Friday",
      location: "Bukhari Commercial Dha Lahore Sub Office Phase 6",
      jobresponsibilities: [
        "Total control of the CMS and build pages from scratch whenever needed.",
        "Able to configure forms and APIs into the website to maintain a fully functional website.",
        "Enthusiastic and passionate self-starter with an ability to work independently under time constraints to meet ongoing and overlapping deadlines, and work cross-functionally within a team-oriented environment",
        "Total control of the CMS and build pages from scratch whenever needed.",
        "Able to configure forms and APIs into the website to maintain a fully functional website.",
        "Enthusiastic and passionate self-starter with an ability to work independently under time...",
        
      ],
      ourbenefits: [
        "Medical Inssurance",
        "Utilities Allowances",
        "Pick n Drop",
        "Dinner / Lunch",
      ],

    },
    {
        title: "Sales Executive",
        description: "We are seeking for a dynamic Web Sales Cold Calling Specialist to drive revenue growth. Proven track record in prospecting, engaging leads, and closing deals.",
        jobtype: "Full-time (on-site)",
        jobtimings: "Night Shift (10:00 PM to 07:00 AM)",
        workingdays: "Monday to Friday",
        location: "Bukhari Commercial Dha Lahore Sub Office Phase 6",
        jobresponsibilities: [
          "Conduct research to identify potential customers and generate a list of qualified leads.",
          "Exceptional cold calling skills and address customer concerns.",
          "Maintain accurate records of sales activities in the CRM system.",
          "Achieve or exceed monthly and quarterly sales targets and KPIs.",
        ],
        ourbenefits: [
          "Maintained Vehicle",
          "Medical Inssurance",
          "Utilities Allowances",
          "Pick n Drop",
          "Dinner / Lunch",
        ]
      },
      {
        title: "Video/Animation",
        description: "Firm grasp of graphic design, and video editing. Our ideal candidate will have a unique blend of graphic design, storytelling, animation, video, and video editing skills.",
        jobtype: "Full-time (on-site)",
        jobtimings: "Night Shift (10:00 PM to 07:00 AM)",
        workingdays: "Monday to Friday",
        location: "Bukhari Commercial Dha Lahore Sub Office Phase 6",
        jobresponsibilities: [
          "Create graphics and videos for print, digital, and social media advertising collateral.",
          "Create supporting assets, including graphics, flyers, postcards, banners, and brochures for social media and website, etc.",
          "Effectively take inspiration and feedback to execute and deliver design ideas.",
          "Edit and Export videos in post-production using Adobe Premiere Pro and Adobe After Effects. (graphics, music, selection, narration, etc )",
        ],
        ourbenefits: [
          "Maintained Vehicle",
          "Medical Inssurance",
          "Utilities Allowances",
          "Pick n Drop",
          "Dinner / Lunch",
        ]
      },
      {
        title: "Senior Content Writer",
        description: "We are hiring an experienced Content Writer to help us keep growing. If you're dedicated and ambitious, Apex Tech World is an excellent place to grow your career. Don't hesitate to apply.",
        jobtype: "Full-time (on-site)",
        jobtimings: "Night Shift (10:00 PM to 07:00 AM)",
        workingdays: "Monday to Friday",
        location: "Bukhari Commercial Dha Lahore Sub Office Phase 6",
        jobresponsibilities: [
          "Produce well-researched content for publication online and in print.",
          "Organize writing schedules to complete drafts of content or finished projects within deadlines.",
          "Communicate and cooperate with a writing team, including a content manager, editors, and web publishers.",
          "Develop related content for multiple platforms, such as websites, email marketing, product descriptions, videos, and blogs.",
          "Monitor and analyze the performance of key performance indicators (KPIs) to offer suggestions for improvement.",
          "Use search engine optimization (SEO) strategies in writing to maximize the online visibility of a website in search results.",
        ],
        ourbenefits: [
          "Maintained Vehicle",
          "Medical Inssurance",
          "Utilities Allowances",
          "Pick n Drop",
          "Dinner / Lunch",
        ]
      },
      {
        title: "Project Manager",
        description: "We are seeking an experienced Project Manager. The ideal candidate will be responsible for overseeing project management using the Scrum framework.",
        jobtype: "Full-time (on-site)",
        jobtimings: "Night Shift (10:00 PM to 07:00 AM)",
        workingdays: "Monday to Friday",
        location: "Bukhari Commercial Dha Lahore Sub Office Phase 6",
        jobresponsibilities: [
          "Scrum methodology Implementation: Implement and maintain Scrum principles and practices within project teams. Guide and coach teams on Scrum values, practices, and rules to ensure effective delivery.",
          "Project planning and Execution: Lead the planning, execution, and delivery of projects using Agile methodologies. Collaborate with stakeholders to define project scope, goals, and deliverables. Develop project timelines, budgets, and resource allocation plans.",
          "Team Facilitation: Facilitate Scrum ceremonies including sprint planning, daily stand-ups, sprint reviews, and retrospectives. Foster collaboration and communication among team members to achieve project objectives",
          "Stakeholder Communication: Maintain transparent communication with stakeholders, providing regular project updates, and status reports, and ensuring alignment with business goals and priorities.",
          "Monitor and analyze the performance of key performance indicators (KPIs) to offer suggestions for improvement.",
          "Continuous Improvement: Drive continuous improvement initiatives within the team. Encourage a culture of learning, adaptability, and innovation to enhance team performance and delivery.",
        ],
        ourbenefits: [
          "Maintained Vehicle",
          "Medical Inssurance",
          "Utilities Allowances",
          "Pick n Drop",
          "Dinner / Lunch",
        ]
      },
  ];

  return (
    <>
      <section id="jobpositions" style={{ padding: "40px 0px", textAlign: "center" }}>
        <div className="container">
          <div className="row">
            <h1 style={{ paddingBottom: "20px" }}>
              We're <span>Hiring!</span>
            </h1>
            {positions.map((position, index) => (
              <div key={index} className="col-4 col"
              style={{margin: "20px 0px"}}
              >
                <div className="posting">
                  <h2>{position.title}</h2>
                  <p>{position.description}</p>
                  <button onClick={() => handleViewDetails(position)}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Popup */}
      {showDetails && selectedPosition && (
        <div className="details-popup">
          <div className="details-content">
            <h2 style={{padding: "20px 0px"}}>Job Title<br /><span style={{fontWeight: "100", borderBottom: "1px solid"}}>{selectedPosition.title}</span></h2>
           <div className="jobdetails">
            <h3>Job Details :</h3>
            <p>{selectedPosition.description}</p>
                <h6>Job Type: <span style={{fontWeight: "100"}}>{selectedPosition.jobtype}</span></h6>
                <h6>Job Timings: <span style={{fontWeight: "100"}}>{selectedPosition.jobtimings}</span></h6>
                <h6>Working Days: <span style={{fontWeight: "100"}}>{selectedPosition.workingdays}</span></h6>
                <h6>Location: <span style={{fontWeight: "100"}}>{selectedPosition.location}</span></h6>
                </div>
            <h3>Job Responsibilities :</h3>
            <ul>
              {selectedPosition.jobresponsibilities.map((jobresponsibilities, index) => (
                <li key={index}>{jobresponsibilities}</li>
              ))}
            </ul>
            <h3>Our Benefits :</h3>
            <ul>
              {selectedPosition.ourbenefits.map((ourbenefits, index) => (
                <li key={index}>{ourbenefits}</li>
              ))}
            </ul>
            <div className="applynow">
                <Link to="mailto:info@apextechworld.com"><button>Apply Now</button></Link>
            </div>
            <button onClick={handleCloseDetails} className="close">
              <img src={Close} alt="Close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default JobPositions;
