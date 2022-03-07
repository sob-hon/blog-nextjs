import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/sobhan.jpg" alt="An image showing Sobhan" width={300} height={300} />
      </div>
      <h1>{`Hi I'm Sobhan :)`}</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
