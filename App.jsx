import {useState} from 'react';
import {CORE_CONCEPTS, EXAMPLES} from "./data.js"; 
import Header from "./Header.jsx"; 
import CoreConcepts from "./CoreConcepts.jsx"; 
import TabButton from "./TabButton.jsx"; 
import { jsx } from 'react/jsx-runtime';


// App Component
function App() {
  const [selectedTopic, setSelectedTopic] =useState(); 

  function handleSelect (selectedButton){
     setSelectedTopic(selectedButton); 
       
  }

  let tabContent = <p>Please select a topic.</p>; 
  if (selectedTopic){
    tabContent = (
     <div id= "tab-content">
    <h3> {EXAMPLES[selectedTopic.toLowerCase()].title} </h3>
    <p>{EXAMPLES[selectedTopic.toLowerCase()].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic.toLowerCase()].code}
      </code>
    </pre>
  </div>
    ); 
  }
  return (
    <div>
    <Header />
      <main> 
      <section id="core-concepts">
        <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptsItem)=> (<CoreConcepts key={conceptsItem.title} {...conceptsItem} />
        ))
        }
    
     
</ul>
</section>
<section id="examples"> 
  <h2>Examples</h2>

  <menu>
    <TabButton isSelected={selectedTopic=== 'components'} onSelect={()=> handleSelect('components')}>Components</TabButton>
     <TabButton isSelected={selectedTopic==='jsx'}        onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
      <TabButton isSelected={selectedTopic==='props'}     onSelect={()=> handleSelect('props')}>Props</TabButton>
       <TabButton isSelected={selectedTopic==='state'}    onSelect={()=> handleSelect('state')}>State</TabButton>

  </menu>
{tabContent}

 
 

</section>
 </main>
    </div>
  );
}

export default App;
