import React from 'react';
import "./Property.css";

const Property = () => {
  return (
    <>
     <div className="property">
      {/**table */}
       <div className="propertyTable">
         <select className="tableInput">
           <option value="bathrooms">any property type</option>
            <option value="bathrooms">apartmant</option>
            <option value="bathrooms">beach house</option>
             <option value="bathrooms">condo</option>
              <option value="bathrooms">family house</option>
               <option value="bathrooms">villa</option>
                </select>
                
                 <select className="tableInput">
                    <option value="property"> any property location </option>
                    <option value="rent">Awdal</option>
                     <option value="sale">Bakol</option>
                     <option value="sale">Banadir</option>
                     <option value="sale">Bari</option>
                     <option value="sale">Bay</option>
                     <option value="sale">Galguduud</option>
                     <option value="sale">Gedo</option>
                     <option value="sale">Hiraan</option>
                     <option value="sale">Jubadda Dhexe</option>
                     <option value="sale">Jubadda Hoose</option>
                     <option value="sale">Mudug</option>
                     <option value="sale">Nugaal</option>
                     <option value="sale">Sanaag</option>
                     <option value="sale">Shabeellaha Dhexe</option>
                     <option value="sale">Shabeellaha Hoose</option>
                     <option value="sale">Sool</option>
                     <option value="sale">Togdheer</option>
                     <option value="sale">Waqooyi Galbeed</option>
                     </select>
                     <button className="btnGo">go</button>
                     </div>
      
    </div>
    </>
  )
}

export default Property
