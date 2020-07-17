import React from 'react'
import { ElectionsContainer } from '../containers/ElectionsContainer'
// useParams hook to get params from react-router.

export const BallotPage = () => {
  return <ElectionsContainer display='ballot'/>
}