import React from 'react'
export default function Flavors(props) {
 
  const FLAVORS = props.flavors.map(flavor => (
  <p key={flavor.id}>{flavor.name}</p>
  ))

 
  return (
    <div>
      <h3>Flavors</h3>
      {FLAVORS}
    </div>
  )
}
