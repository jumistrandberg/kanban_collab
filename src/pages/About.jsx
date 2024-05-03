import styles from "../styling/AboutPage.module.css"

const About = () => {
  return (
    <>  
        <div className={styles.container}>
            <div className={styles.topSection}>
                <img src="../src/assets/LiUm-logo.png" alt="LiUm Logo" className={styles.logo}/>
                <h1>KanBan App</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.middleSection}>
                    <h4>Our Mission</h4>
                    <p>At LiUm we help people with managing their day to day tasks from brainstorming to finaliziation. Our main mission is to introduce solutions for a flexible and reliable organized work- and lifestyle.</p>
                </div>
                <div></div>
                <div></div>
                <div className={styles.bottomSection}>
                    <h4>About Us</h4>
                    <p>LiUm is multimodal company comprised of two main groups which help costumers create fully functional programs from their ideas, even the smallest. All of our team members are fullstack developers who together deploy all different solutions and handle all types of related problems. </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About