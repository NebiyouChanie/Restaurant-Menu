import React, { useState } from 'react'

function item({menu}) {
  console.log(menu)

  {menu.map((item)=>{
    const [id,title,price,img,desc]=item
    return (
      <article key={id} className="menu-item">
        <img src={img} className="photo"  />
        <div className="item-info">
            <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
            </header>
            <p className="item-text">{desc}</p>
        </div>
    </article>
    )
  })}
  
}
export default item;

/**
 * import React, { useState } from 'react'

function item({menu}) {
  console.log(menu)

  {menu.map((item)=>{
    const [id,title,category,price,img,desc]=useState(item)
    return (
      <article className="menu-item">
        <img src={img} className="photo"  />
        <div className="item-info">
            <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
            </header>
            <p className="item-text">{desc}</p>
        </div>
    </article>
    )
  })}
  
}
export default item;
 */