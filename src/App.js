
import './App.css';
import FullName from './profile/component';
import image from './profile/image.jpg';


const App = () => { 
  
  return ( 
  <div>

     <FullName image={image} esmi="Chairaat Mohamed" profession="Full stack  js developper"
      mybio="My name is Mohamed chairat  and 
      I am a full-stack javascript Developer and
       Software Developer, currently living in GUIBIZA,
       . I have a Bachelor of Science in Computer Science from 
        BOULBABA SCHOOL, and my primary focus and inspiration for 
        my studies is Web Development. In my free time, I study human computer 
        interface and the psychology of human computer interaction. I am both driven
         and self-motivated, and I am constantly experimenting with new technologies and techniques.
          I am very passionate about Web Development, and strive to better myself as a developer, and 
          the development community as a whole."
     
       />



</div>
  )
};
export default App;
