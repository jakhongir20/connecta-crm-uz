import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ReplaceCurreentPage() {
  return <Navigate replace to={"/setting/users"} />
}
