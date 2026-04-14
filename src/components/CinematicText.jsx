import { motion } from 'framer-motion';

function CinematicText({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  baseDuration = 0.45
}) {
  const words = text.split(' ');

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.055,
            delayChildren: delay
          }
        }
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={`mr-2 inline-block ${wordClassName}`}
          variants={{
            hidden: { opacity: 0, y: 22, filter: 'blur(7px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: baseDuration
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default CinematicText;
