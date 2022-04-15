import Header from "./Header";
import ContainerHeader from "./ContainerHeader";

function SectionHeader(props) {
  return(
    <section className="section section_header">
      <Header />
      <ContainerHeader step={props.step} 
                       dots={props.dots} 
                       dot={props.dot} 
                       pages={props.pages} 
                       handleClick={props.handleClick}/>
    </section>
  );
}

export default SectionHeader;