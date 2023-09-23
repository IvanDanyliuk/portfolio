import React from 'react'

const Project = ({ params }: { params: { id: string } }) => {
  return (
    <div>{params.id}</div>
  )
}

export default Project