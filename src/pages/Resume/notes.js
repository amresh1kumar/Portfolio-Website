const notes = [
   {
      key: 1,
      title: "Education",
      content: (
         <div className="wrapper">
            <div className="school-college">
               <h4>Shree Ganesh High School</h4>
               <p className="flex-space-between">Bihar board<span>Bakhtiyarpur, Patna</span></p>
               <p className="flex-space-between">10th Science 1st DIV (69.4%)<span>2018-2019</span></p>
               <h4>RLSY College </h4>
               <p className="flex-space-between">Bihar board<span>Bakhtiyarpur, Patna</span></p>
               <p className="flex-space-between">11th & 12th to PCM 1st DIV (61.4%) <span>2019-2021</span></p>
               <h4>Disha College </h4>
               <p className="flex-space-between">Pt. Ravishankar University <span>Raipur, Chattisgarh</span></p>
               <p className="flex-space-between">Bachelor of computer application (76.57%)  <span>2021-2024</span></p>
               <h4>Raipur Institute of Technology</h4>
               <p className="flex-space-between">CG Swami Vivekanand Technical University<span>Raipur, Chattisgarh</span></p>
               <p className="flex-space-between">Master of computer application (Pursuing)  <span>2024-2026</span></p>
            </div>
         </div>
      )
   },

   {
      key: 2,
      title: "Skill Summary ",
      content: (
         <div className="wrapper">
            <div className="school-college">
               <p className="flex-space-between">Languages: <span>C, C++, java, visual basic, HTML, CSS, Javascripts </span></p>
               <p className="flex-space-between">Frameworks: <span> VB.net, Express.js, JQuery</span></p>
               <p className="flex-space-between">Platforms :<span> Visual Studio Code  </span></p>
            </div>
         </div>
      )
   },


   {
      key: 3,
      title: "Work Experince",
      content: (
         <div className="wrapper">
            <div className="school-college">
               <h4>Fresher</h4>
            </div>
         </div>
      )
   },
   {
      key: 4,
      title: "Projects ",
      content: (
         <div className="wrapper">
            <div className="school-college">
               <h4>Grocery Management System</h4>
               <p>Tech Used : visual basic (Frontend)</p>
               <p>MySQL(Backend) </p>
               <hr />
               <h4>Keeper App </h4>
               <p>Tech Used : react (Fronted) )</p>
               <p>NodeJs (Backend)</p>
               <hr />
               <h4>Portfolio</h4>
               <p>Tech Used : React (Frontend)</p>
               <hr />
               <h4>TIC TAC TOE GAME </h4>
               <p>Tech Used : visual basic (Frontend)</p>
            </div>
         </div>
      )
   },
   {
      key: 5,
      title: "MERN Developer", // Update the title to avoid duplication
      content: (
         <div className="wrapper">
            <div className="school-college">
               <div className="flex-space-between">
                  <div><h4>FRONTEND</h4></div>
                  <div><h4>BACKEND</h4></div>
                  <div><h4>DATABASE</h4></div>
               </div>
               <div className="flex-space-between">
                  <ul>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>Javascripts</li>
                     <li>React</li>
                     <li>Bootstrap</li>
                  </ul>

                  <ul>
                     <li>NodeJs</li>
                     <li>ExpressJS</li>
                  </ul>

                  <ul>
                     <li>MySQL</li>
                     <li>MongoDB</li>
                     <li>PostgresSQL</li>
                  </ul>
               </div>
            </div>
         </div>
      )
   },
   {
      key: 6,
      title: "BCA Course Subjects ", // Update the title to avoid duplication
      content: (
         <div className="wrapper">
            <div className="school-college">
               <h4>Subjects</h4>
               <p>Operating system</p>
               <p>Computer Networks</p>
               <p>Web technology (HTML,CSS,Javascripts)</p>
               <p>Computer system architecture</p>
               <p>Object Oriented Programming (C++, JAVA, Visual Basic)</p>
               <p>Database Management System</p>
               <p>PC Software & Multimedia (MS word, Excel, Powerpoint, Access, Animation & Graphics)</p>
            </div>
         </div>

      )
   },
   {
      key: 6,
      title: "Certificates", // Update the title to avoid duplication
      content: (
         <div className="wrapper">
            <div className="school-college">
               <h4>Online Course</h4>
               <p>Full Stack Web Developer by Udemy </p>
               <p>Workshop On Computer Networks</p>
            </div>
         </div>
      )
   },

   {
      key: 6,
      title: "Languages", // Update the title to avoid duplication
      content: (
         <div className="wrapper">
            <div className="school-college">
               <p>English</p>
               <p>Hindi</p>


            </div>
         </div>
      )
   }

]

export default notes;