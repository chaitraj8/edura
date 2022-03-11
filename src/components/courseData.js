import time from "./upcoming_courses/months";
const courseData = [
  {
    courseName: "CSM - Certified ScrumMaster",
    description: "CSM - Certified ScrumMaster",
    about_this_course:
      "A foundational course for the Certified SAFe Scrum Master certificate",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>After successfully completing the course, participants will have an  understanding of team roles, events and artifacts. They will be eligible to take CSM test, and  upon passing the test, will be asked to accept the CSM License Agreement and complete their  Scrum Alliance profile. </p> <p>Unlike any other training program, we offer the following bonuses:</p> <li>The highest passing rates: The CSM certification exam is rigorous, but you will be  prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the  unlikely event that you would need to retake the exam, a second trial is free and  additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year. </li> <li>25% discount on future course fees. Save on courses as you sail through the certification  process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24  hours a day. Study at any day and time you want. Once you are ready, simply sign up to  take the certification exam! </li> <p>Prerequisites: Highly recommended that participants have 5+ years of experience working in  software development, business analysis, testing, project management, or product management  fields. Experience working in a Scrum environment is also highly desirable. </p>",
    price: 1000,
    time: "9:14 PM",
    month: "september",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "9/10/22",
    end_date: "9/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Certified Agile Leadership (CAL1)",
    description: "Certified Agile Leadership (CAL1)",
    about_this_course:
      "A foundational course for managers to prepare for the Agile Leadership 1 certificate",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>This foundational two-day course provides attendees the background required to achieve the Certified Agile Leadership 1 certification from the Scrum Alliance. The training is oriented towards information technology (IT) product managers, supervisors, directors, leaders, coaches, or anyone in a managerial position who is interested in learning to apply Agile principles to their leadership.</p> <p>The applicability of Agile management techniques extends throughout the IT industry and beyond. This course will demonstrate many of those techniques that prove useful for common organizational and management challenges, such as, effective leadership of distributed and diverse teams, delivering value, and promoting the Scrum values of courage, focus, commitment, respect and openness. From their experience in both the Agile and non-Agile worlds, Apexs instructors will show you how to value: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan.</p> <p>A Certified Agile Leadership 1 certificate holder will be expected to have an understanding of management practices, particularly those found in IT organizations. From the perspective of an experienced IT manager, the course prepares the student to apply Agile techniques to attain advanced leadership and management responsibilities in a enterprise environment. Course instructors draw from their own real-life experience to immerse the student in actual business scenarios. From there, instructors provide guidance in the application of Agile techniques.</p> <p>After completing the course, participants will be able to demonstrate their knowledge of the theory and practice needed for Agile leadership. All students who successfully complete the course will be prepared to take the Certified Agile Leadership 1 exam.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The Certified Agile Leadership 1 (CAL1) certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> <p>Prerequisites: Previous experience as a manager in an IT organization highly desired, whether from actual industry experience or theory.</p>",
    price: 1000,
    time: "9:14 PM",
    month: "september",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "9/10/22",
    end_date: "9/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Professional Scrum Master Training",
    description: "Professional Scrum Master Training",
    about_this_course:
      "Professional Scrum Master training prepares you for Scrum Master Levels 1-3 certification.",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Apexs Professional Scrum Master training is your pathway to Scrum Certification!</p> <p>Apexs Professional Scrum Master training courses prepare you for Scrum.orgs Professional Scrum Master levels 1, 2, and 3 examinations. You will learn from the best: our training is given by industry experts who have decades of experience applying Agile Scrum at leading companies like IBM, edX, PricewaterhouseCoopers, and Boston Consulting Group. In addition, Apexs founder, Raj Heda, is currently on the faculty at Boston University and Brandeis University.</p> <b>Training Overview</b> <ul> <li>Scrum Master Level 1 certification requires a thorough understanding of Scrum fundamentals</li> <li>Scrum Master Level 2 certification requires an advanced mastery of both Scrum fundamentals and Scrum practice</li> <li>Scrum Master Level 3 certification requires a detailed mastery of Scrum practices.</li> </ul> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The PSM certification exams are rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.</p>",
    price: 1000,
    time: "2:20 PM",
    month: "september",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "9/10/22",
    end_date: "9/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "Great course; I learned everything I needed and more! I am excited to implement these skills into my role in my organization.,Fantastic experience! Highly recommended! I am looking forward to sharing what Ive learned with my enterprise.,Raj is an excellent instructor, always willing to help and great at explaining concepts.,This course equipped me with the skills I needed to grow and advance in my career. Many thanks!",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Certified SAFe Agilist",
    description: "Certified SAFe Agilist",
    about_this_course:
      "A foundational course for the Certified SAFe Agilist certificate",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>The goal of this two-day course is to equip you with the knowledge that is needed in order to be at the forefront of a Lean-Agile enterprise. Leading a Lean-Agile enterprise is a demanding task, and this course will provide you with a deep understanding of the Scaled Agile Framework (SAFe), so that you can take that framework and apply it to an enterprise.</p> <b>Training Overview</b> <p>During the course, attendees will learn about how to become masters of business agility so that they can use that expertise to rise to the top in the market. Discussions will be centered around how to develop agility within teams and in the technical space, and how to use that agility to reorient how value flows in the organization. Additional discussions and sessions will provide attendees with training on how to embrace a mindset centered around the customer, as well as how to implement design thinking, as they deliver products within an agile methodology. Attendees will also be instructed on how to orchestrate and use PI Planning events, as well as how to manage and direct different Agile Release Trains (ARTs) that run concurrently. Finally, attendees will learn how to execute a Lean Portfolio Management function within their enterprises.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The Certified SAFe Agilist certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your courses are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.</p>",
    price: 1000,
    time: "2:59 PM",
    month: "october",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "10/10/22",
    end_date: "10/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "Great course; I learned everything I needed and more! I am excited to implement these skills into my role in my organization.,Fantastic experience! Highly recommended! I am looking forward to sharing what Ive learned with my enterprise.,Raj is an excellent instructor, always willing to help and great at explaining concepts.,This course equipped me with the skills I needed to grow and advance in my career. Many thanks",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Certified SAFe Scrum Master",
    description: "Certified SAFe Scrum Master",
    about_this_course:
      "A foundational course for the Certified SAFe Scrum Master certificate",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>During this course, you will learn about the Scrum Master role within an enterprise operating in the SAFe environment. This course will delve into the specifics of what a Scrum Master role looks like at an enterprise level, not just in the context of a Scrum team. You will step away from this course enabled to plan and implement the Program Increment (PI), which is essential to align every level of an organization operating in a SAFe environment. Because this course is focused on how a Scrum Master fits into an organization at an enterprise level, you will learn how to apply Scrum in every part of your organization, as well as how to use iterative planning in your organization.</p> <p>In addition to learning about the role of Scrum Master at an enterprise level, you will also discover how acting as a coach and using servant leadership methods will enable you to create successful Agile teams. Trainers will also demonstrate how the formation of these Agile teams can help your organization reach goals and thrive as they seek to met business goals.</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> The highest passing rates: The Certified SAFe Scrum Master certification exams are rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted. <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.</p>",
    price: 1000,
    time: "5:45 AM",
    month: "october",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "10/10/22",
    end_date: "10/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Certified SAFe Product Owner / Product Manager",
    description: "Certified SAFe Product Owner / Product Manager",
    about_this_course:
      "A foundational course for the Certified SAFe Product Owner / Product Manager certificate",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>If you are seeking to learn how to become a successful Product Owner or Product Manager within a Lean enterprise, this course is designed for you. In this two day course, you will learn the skills necessary to be able to lead a team to deliver high value as you seek to deliver successful products in your organization.</p> <p>Trainers will equip you with the knowledge and understanding you need in order to be an effective Product Owner/Product Manager within the Agile Release Train (ART). You will discover how you can utilize Lean thinking within the Agile process as you break down Epics first into Features, and then into Stories. In addition, you will learn about the refinement process and how to best refine and manage features, stories, and product backlogs within Iterations and any Program Increments set forth by your enterprise. Finally, you will learn about Continuous Delivery and DevOps, and how these two entities add to the ongoing improvement that takes place within the Agile Release Train (ART).</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> The highest passing rates: The Certified SAFe Scrum Master certification exams are rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted. <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Highly recommended that participants attend a course on Leading SAFe, have work experience in SAFe environment, and have experience in Lean, Agile, or other similar certifications.</p>",
    price: 1000,
    time: "9:55 AM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Professional Scrum Master Training",
    description: "Professional Scrum Master Training",
    about_this_course:
      "<p>If you are seeking to learn how to become a successful Product Owner or Product Manager within a Lean enterprise, this course is designed for you. In this two day course, you will learn the skills necessary to be able to lead a team to deliver high value as you seek to deliver successful products in your organization.</p> <p>Trainers will equip you with the knowledge and understanding you need in order to be an effective Product Owner/Product Manager within the Agile Release Train (ART). You will discover how you can utilize Lean thinking within the Agile process as you break down Epics first into Features, and then into Stories. In addition, you will learn about the refinement process and how to best refine and manage features, stories, and product backlogs within Iterations and any Program Increments set forth by your enterprise. Finally, you will learn about Continuous Delivery and DevOps, and how these two entities add to the ongoing improvement that takes place within the Agile Release Train (ART).</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> The highest passing rates: The Certified SAFe Scrum Master certification exams are rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted. <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Highly recommended that participants attend a course on Leading SAFe, have work experience in SAFe environment, and have experience in Lean, Agile, or other similar certifications.</p>",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Apexs Professional Scrum Master training is your pathway to Scrum Certification!</p> <p>Apexs Professional Scrum Master training courses prepare you for Scrum.orgs Professional Scrum Master levels 1, 2, and 3 examinations. You will learn from the best: our training is given by industry experts who have decades of experience applying Agile Scrum at leading companies like IBM, edX, PricewaterhouseCoopers, and Boston Consulting Group. In addition, Apexs founder, Raj Heda, is currently on the faculty at Boston University and Brandeis University.</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <b>Training Overview</b> <ul> <li>Scrum Master Level 1 certification requires a thorough understanding of Scrum fundamentals</li> <li>Scrum Master Level 2 certification requires an advanced mastery of both Scrum fundamentals and Scrum practice</li> <li>Scrum Master Level 3 certification requires a detailed mastery of Scrum practices.</li> </ul> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The PSM certification exams are rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.</p>",
    price: 1000,
    time: "4:23 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Professional Scrum Product Owner",
    description: "Professional Scrum Product Owner",
    about_this_course:
      "A course to prepare for Professional Scrum Product Owner Certification",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Apexs Professional Scrum Product Owner training is your pathway to Scrum Certification!</p> <p>Apexs Professional Scrum Product Owner training prepares you for Scrum.orgs Professional Scrum Product Owner (PSPO) certification examination. You will learn from the best: our training is given by industry experts who have decades of experience applying Agile Scrum at leading companies like IBM, edX, PricewaterhouseCoopers, and Boston Consulting Group. In addition, Apexs founder, Raj Heda, is currently on the faculty at Boston University and Brandeis University.</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <b>Training Overview</b> <p>This two-day course is intended for those with a background in the software industry, whether or not you have previous experience as a product owner. From the product owners perspective we examine the key concepts behind iterative software development in an Agile Scrum environment. Our instructors provide real examples from industry that demonstrate the product owners roles and responsibilities. From creating user stories to managing product backlogs, to demonstrating value and incremental and iterative delivery, the product owners role is clearly explained Our instructors also cover the daily responsibilities of Agile team members and their use of Scrum, Kanban, and Extreme Programming.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The PSPO certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Some experience with Agile software development principles and practices will be helpful, whether from actual industry experience or reading.</p>",
    price: 1000,
    time: "12:51 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Professional Scrum Developer",
    description: "Professional Scrum Developer",
    about_this_course:
      "Preparation for Scrum.orgs certification as a Professional Scrum Developer",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Apexs Professional Scrum Developer training is your pathway to Scrum Certification!</p> <p>Apexs Professional Scrum Developer training course prepares you for Scrum.orgs Professional Scrum Developer examination. You will learn from the best: our training is given by industry experts who have decades of experience applying Agile Scrum at leading companies like IBM, edX, PricewaterhouseCoopers, and Boston Consulting Group. In addition, Apexs founder, Raj Heda, is currently on the faculty at Boston University and Brandeis University.</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <b>Training Overview</b> <p>The Professional Scrum Developer training provides an in-depth understanding of the most important Scrum lessons, drawing from classic texts like the Agile Manifesto and the Scrum Guide, by Ken Schwaber and Jeff Sutherland. The course is hands-on, with activities drawn from real-world situations. You will be a member of an Agile team, face real-world challenges, and participate in an actual iterative development effort. All the while, our expert trainers will be there to demonstrate proper technique and to guide you to prepare for the certification exam.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The PSD certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable.</p>",
    price: 1500,
    time: "3:23 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 3,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "CSPO  Certified Scrum Product Owner",
    description: "CSPO  Certified Scrum Product Owner",
    about_this_course:
      "An advanced course for experienced product owners to prepare for the  Scrum Product Owner certificate.",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>A Scrum Product Owner generally comes from the business side of the organization. In the agile  world, the product owner not only manages the vision and backlog, they also help focus the team  on providing the outcomes that will delight the customers. </p> <p>After successfully completing the course, product owners will have experience as the conduit  between the business and the rest of the scrum team. Theyll learn the skill set that will help  them direct the backlog and impart their vision to the team. They will be asked to accept the  CSPO License Agreement and complete their Scrum Alliance profile.</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The CSPO certification exam is rigorous, but you will be  prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the  unlikely event that you would need to retake the exam, a second trial is free and  additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Highly recommended that participants have 5+ years of experience working in  software development, business analysis, testing, project management, or product management  fields. Experience working in a Scrum environment is also highly desirable.</p>",
    price: 1000,
    time: "6:47 AM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "CSD  Certified Scrum Developer ",
    description: "CSD  Certified Scrum Developer ",
    about_this_course:
      "A foundational course for developers to prepare for the Scrum Developer Scrumalliance.org certificate.",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Designed for developers, this course will hone your agile skills. Through both formal training and an assessment of your technical skills, youll obtain a working knowledge of Scrum and Agile principles. In addition, youll learn the engineering skills used by Agile developers. The course instructs developers in the tools and techniques for delivering code in an iterative process, key to Agile software development</p> <p>Upon completing this course, you will have mastered the skill set required to engage in an Agile development environment. Youll become proficient with the tools and techniques used to contribute to an agile team. Certification as a Certified Scrum Developer demonstrates your commitment to the Agile principles.</p> <p>When you complete this course and gain the Certified SAFe Scrum Master certificate, this certification will demonstrate to companies that you are equipped and ready to lead Agile teams in a SAFe environment, and that your servant leadership and coaching skills will bring tremendous growth and value to their organizations.</p> <p>Unlike any other training program, we offer the following bonuses:</p> <ul> <li>The highest passing rates: The Certified Scrum Developer (CSD) certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year.</li> <li>25% discount on future course fees. Save on courses as you sail through the certification process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!</li> </ul> <p>Prerequisites: Previous experience as a software developer in an IT organization highly desired, whether from actual industry experience or theory.</p>",
    price: 3000,
    time: "2:20 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 5,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Value Stream Corporate Workshop",
    description: "Value Stream Corporate Workshop",
    about_this_course:
      "A foundational workshop to introduce the concept of Value Streams.",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Value Streams are all about implementing practices and optimizing an organization so that it can provide a continuous flow of value to its customers. We find that todays businesses are too often focused on delivering products and specific product features without taking into consideration their ultimate value to the customer. Value streams start with and focus specifically on business value provided to the customer.</p> <p>Understanding value streams becomes increasingly important as the complexity of your organization grows. Drawing upon parallels from the Scaled Agile Framework (SAFe), many of the techniques that help with coordination and interconnection between Agile processes will also be shown effective at coordinating and delivering value at scale.</p> <p>In this workshop you will partner and collaborate with other students representing a broad swath of your corporate know-how. Under the expert guidance of experienced facilitators, you will have the opportunity to immerse yourself in several actual business challenges and then learn how value stream coordination can help you manage the many competing requirements that may interfere with delivering value. You will have the opportunity to experience, practice, and apply new ways of thinking about delivering customer value. In demonstrations of complex organizations, you will see how these practices scale to meet your challenges.</p> <p>Prerequisites: Experience in management is highly desired, whether from IT or from other departments.</p>",
    price: 1000,
    time: "2:59 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "SAFe Portfolio Management",
    description: "SAFe Portfolio Management",
    about_this_course:
      "A foundational Lean-Agile and Portfolio operations course for SAFe portfolio managers.",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>The SAFe Portfolio Management corporate training fits hand in glove with Apexs SAFe Lean Portfolio Manager certificate training. Similar to the certificate training, the course prepares the student to demonstrate their expertise in managing an enterprise-wide portfolio of Agile projects. Instructors draw from their own real-life industry experience to show students key SAFe techniques for establishing a portfolio vision, for performing Lean portfolio budgeting, port and for using portfolio tools like Portfolio Kanban. Students are given an opportunity to practice and apply these same skills with scenarios drawn from actual industry problems. Whereas the certificate training is a foundational level course, the corporate training is far more detailed and specifically targeted for the users business challenges.</p> <p>In this workshop you will partner and collaborate with other students representing a broad swath of your corporate know-how. Under the expert guidance of experienced facilitators, you will have the opportunity to immerse yourself in several actual business challenges and then learn how SAFE portfolio management techniques can help you manage the many competing requirements that may interfere with delivering value. Alongside a deep dive into the complexities of your organization, you will have the opportunity to see and experience how organizations like yours apply SAFe practices to meet their business challenges.</p> <p>Prerequisites: Experience in management is highly desired; experience in SAFe or Agile techniques will be beneficial.</p>",
    price: 1000,
    time: "5:45 AM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Program Increment Workshop (customized offering)",
    description: "Program Increment Workshop (customized offering)",
    about_this_course: "An interactive course for all Agile practitioners",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>In an Agile development environment, a program increment (PI) is a timebox during which the  Agile Release Train incrementally delivers value through deploying new systems and  software. It is the summation of a set of sprints, and usually lasts 8-12 weeks. The PI is the final  artifact of the scrum framework, and represents a usable solution</p> <p>This workshop guides participants through the process of defining the program increment,  guiding its development cycle, and realizing its functionality through deployment. Practicing  Scrum without a program increment is merely wasted effort and a lost opportunity. This  customized workshop shows your team how to successfully define and deliver the PI.</p> <p>Everyone in the Agile team will benefit from this workshop. Youll learn how to set realistic  goals for the program increment, how to ensure sprints will deliver the PI, and how to utilize  program increments to continuously improve the outcomes of your agile development process. </p> <p>Unlike any other training program, we offer the following bonuses: </p> <ul> <li>Free follow-up access to your course materials for one year. </li> <li>25% discount on future course fees. Save on courses as you sail through the certification  process. </li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24  hours a day. Study at any day and time you want. Once you are ready, simply sign up to  take the certification exam! </li></ul> </p>Prerequisites: Previous experience in an IT organization highly desired, whether from actual  industry experience or theory. </p>",
    price: 1500,
    time: "9:55 AM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 3,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Inspect & Adapt (customized offering)",
    description: "Inspect & Adapt (customized offering)",
    about_this_course:
      "A foundational course suitable for all Agile team members",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>At the core of the Agile principles is the concept of regular reflection and tuning. Inspect & Adapt takes place at the end of each Program Increment. All of the stakeholders participate in the event, identifying backlog items for improvement and bolstering the culture of continuous learning.</p> <p>The Inspect & Adapt workshop will demonstrate how this Agile principle can be implemented in your environment. From the workshop, you will gain the skills needed to be introspective about your successes and areas needing more focus.</p> <p>The Inspect & Adapt workshop allows you to release the potential of compounding your triumphs using Agile. Youll see how to demonstrate the program increment, how to measure its benefits both qualitatively and quantitatively, and how to master the complicated process of reflection and continuous improvement.</p> <p>Unlike any other training program, we offer the following bonuses: </p> <ul> <li>Free follow-up access to your course materials for one year. </li> <li>25% discount on future course fees. Save on courses as you sail through the certification  process. </li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24  hours a day. Study at any day and time you want. Once you are ready, simply sign up to  take the certification exam! </li></ul>",
    price: 1500,
    time: "4:23 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 3,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Product Management Workshop (customized offering)",
    description: "Product Management Workshop (customized offering)",
    about_this_course:
      "A workshop for experience product managers interested in working in an Agile environment",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Product Management has been around as long as there have been products, but it has been redefined in the Agile world. In an Agile framework, product management is redefined to allow for building and deploying products in a new way. The ability to work with an iterative development cycle and a fast-moving and self-organized team requires a different approach.</p> <p>This workshop highlights the ways that product management in an Agile environment can maintain high standards while taking advantage of the flexibility and quick delivery of value to customers. Product managers learn how to set a clear vision for the team, guide the backlog, and maintain alignment with the business goals. Using skills from this workshop, project managers and other stakeholders will get first-hand experience in how to identify and prioritize features, manage the backlog, and see that the goals of each program increment are realized.</p> <p>Unlike any other training program, we offer the following bonuses: </p> <ul> <li>Free follow-up access to your course materials for one year. </li> <li>25% discount on future course fees. Save on courses as you sail through the certification  process. </li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24  hours a day. Study at any day and time you want. Once you are ready, simply sign up to  take the certification exam! </li></ul> </p>Prerequisites: Previous experience as a manager in an IT organization highly desired, whether from actual industry experience or theory.</p>",
    price: 1500,
    time: "12:51 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 3,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Team Building Workshop",
    description: "Team Building Workshop",
    about_this_course:
      "A workshop designed to help teams connect and increase their effectiveness",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Are your teams suffering from lack of cohesion and connectedness? Are you and they feeling disconnected and frustrated because they just cant seem to work well together? If these questions describe your teams, then this team building workshop is the perfect fit for you.</p> <p>Our professional team building trainers have years of experience helping teams connect and form bonds, which enable them to be happier, more effective, and increase their performance. During this one day workshop, your team will participate in multiple team-building activities, from games to interactive discussions with one another, all of which will help them discover how to better connect and work with one another</p> <p>Our trainers design these activities based on your teams individual needs, so you can rest assured that this workshop will be tailor made for your team. Through these activities and reflective discussions, every member of your team will learn how to appreciate the unique contributions brought to the table by each member, and how they can all work together to maximize their effectiveness by recognizing their individual strengths and contributions. By the end of this workshop, we guarantee that your team members will have formed bonds, identified how to continue and strengthen their ties to each other, and be ready and excited to work together.</p> <p>Unlike any other training program, we offer the following bonuses: </p> <ul> <li>Free follow-up access to your course materials for one year. </li> <li>25% discount on future course fees. Save on courses as you sail through the certification  process. </li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24  hours a day. Study at any day and time you want. Once you are ready, simply sign up to  take the certification exam! </li></ul>",
    price: 1000,
    time: "3:23 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    courseName: "Customized Scrum/Kanban Workshop",
    description: "Customized Scrum/Kanban Workshop",
    about_this_course:
      "A workshop designed to help teams be equipped to use Scrum and Kanban principles in their working environments.",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>Is your team wanting to learn more about Scrum and Kanban principles in order to enhance your team and working environment? If so, these two workshops have been designed with you in mind. Choose one or both, depending on your teams needs.</p> <p>In our Kanban team workshops, your team will learn about what Kanban actually is and the best practices associated with using it. You will learn about how and when to use it in your team environment, and how you can best incorporate it in your team with other Agile practices you are currently using, or hope to use in future. Our trainers will also demonstrate how to create a Kanban board, and will show you many examples of how different teams use Kanban boards. By the end of this workshop, your team will be ready, able, and empowered to incorporate and use Kanban in your organization to maximize their success and delivery of products.</p> <p>If Scrum training is what your team needs, then look no further. Our Scrum workshops are designed to equip your team with a deep understanding of the Scrum framework and be able to then apply Scrum principles in a working environment. During this one day course, your team will learn about Agile principles and the foundational values and roles that form the basis of Scrum. Trainers will provide instruction on Scrum theory, the Scrum framework, and the role of the Scrum Master within the Scrum environment. Your team will participate in workshops during the course, where they will practice applying the knowledge about Scrum into real world situations and work environments. At the end of the course, your team will understand the Scrum framework, be able to apply this knowledge through application, Scrum events, and Scrum roles.</p> <p>Unlike any other training program, we offer the following bonuses: </p> <ul> <li>Free follow-up access to your course materials for one year. </li> <li>25% discount on future course fees. Save on courses as you sail through the certification  process. </li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24  hours a day. Study at any day and time you want. Once you are ready, simply sign up to  take the certification exam! </li></ul> </p>Prerequisites: None, but recommended that participants have some knowledge or understanding of general Agile principles.</p>",
    price: 500,
    time: "6:47 AM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 1,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "6/10/22",
    end_date: "6/12/2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    type: "course",

    review_images:
      "/images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,/images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    review_text:
      "This class gave me the exposure to agile and the scrum process that I needed. Thanks!,I started with very little knowledge about how agile actually works, but the class provided more than enough to start implementing the techniques at my company.,When I began my training I thought that a scrum master was just a project manager. The class showed me how the roles are different and how to get a team to work toward a common goal.,My instructor was great. They kept the energy level high, and everyone in the class passed the CSM certification on their first try. Highly recommended.",
    header_background_image:
      "/images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "/images/course_details_images/EDA-75_attachments/CSM.png",
  },
];

export default courseData;