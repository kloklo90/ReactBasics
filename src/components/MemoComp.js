import React from 'react'

function MemoComp({name}) {
  console.log('Rending memo component');
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
