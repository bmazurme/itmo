import Header from "./Header";
import ConteinerHeader from "./ConteinerHeader";

function SectionHeader(props) {
  return(
    <section className="section-header">
      <Header />
      <ConteinerHeader step={props.step} 
                        dots={props.dots} 
                        dot={props.dot} 
                        pages={props.pages} 
                        handleClick={props.handleClick}/>
    </section>
  );
}

export default SectionHeader;