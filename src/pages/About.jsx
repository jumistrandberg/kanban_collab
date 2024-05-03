import styles from "../styling/AboutPage.module.css"
import logo  from "../assets/LiUm-logo.png"
import preview from "../assets/preview-app.png"

const About = () => {
  return (
    <>  
        <div className={styles.container}>
            <div className={styles.topSection}>
                <img src={logo} alt="LiUm Logo" className={styles.logo}/>
                <h1>LiUm KanBan App</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.middleSection1}>
                    <h4>Our Mission</h4>
                    <p>At LiUm we help people with managing their day to day tasks from brainstorming to finaliziation. Our main mission is to introduce solutions for a flexible and reliable organized work- and lifestyle.</p>
                </div>
                <div className={styles.middleSection2}>
                    <h4>KanBan Board App</h4>
                    <p>The main theis for this app is to create and modify a kanban board with multiple users and diffetent organized columns containing tasks which are flexible for different modifications.</p>
                </div>
                
                <div className={styles.middleSection4}>
                    <h4>About Us</h4>
                    <p>LiUm is multimodal company comprised of two main groups which help costumers create fully functional programs from their ideas, even the smallest. All of our team members are fullstack developers who together deploy all different solutions and handle all types of related problems. </p>
                </div>
                <div className={styles.middleSection3}>
                    <img src={preview} alt="app-preview" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About